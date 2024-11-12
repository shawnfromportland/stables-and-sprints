import { Injectable,NotFoundException } from '@nestjs/common';
import { CreateHorseDto } from './dto/create-horse.dto';
import { UpdateHorseDto } from './dto/update-horse.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Horse } from './entities/horse.entity';
import { Race } from '../race/entities/race.entity';
import { User } from '../user/entities/user.entity';

@Injectable()
export class HorseService {

  constructor(
    @InjectRepository(Horse)
    private readonly horseRepository: Repository<Horse>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    
    @InjectRepository(Race)
    private readonly raceRepository: Repository<Race>
  ) {}

  // Create a new horse
  async create(createHorseDto: CreateHorseDto): Promise<Horse> {
    const { ownerId, ...horseData } = createHorseDto;

    const horse = this.horseRepository.create(horseData);

    if (ownerId) {
      const owner = await this.userRepository.findOne({ where: { id: ownerId } });
      if (owner) horse.owner = owner;
    }

    return this.horseRepository.save(horse);
  }

  // Get a list of all horses
  async findAll(): Promise<Horse[]> {
    return this.horseRepository.find();
  }

  // Get a specific horse by ID
  async findOne(id: number): Promise<Horse> {
    const horse = await this.horseRepository.findOne({ where: { id } });
    if (!horse) {
      throw new NotFoundException(`Horse with ID ${id} not found`);
    }
    return horse;
  }

  // Update a specific horse by ID
  async update(id: number, updateHorseDto: UpdateHorseDto): Promise<Horse> {
    await this.horseRepository.update(id, updateHorseDto);
    const updatedHorse = await this.horseRepository.findOne({ where: { id } });
    if (!updatedHorse) {
      throw new NotFoundException(`Horse with ID ${id} not found`);
    }
    return updatedHorse;
  }

  // Delete a specific horse by ID
  async remove(id: number): Promise<void> {
    const deleteResult = await this.horseRepository.delete(id);
    if (deleteResult.affected === 0) {
      throw new NotFoundException(`Horse with ID ${id} not found`);
    }
  }

  async addHorseToRace(horseId: number, raceId: number): Promise<Race> {
    const horse = await this.horseRepository.findOne({ where: { id: horseId } });
    const race = await this.raceRepository.findOne({ where: { id: raceId }, relations: ['horses'] });
  
    if (!horse || !race) {
      throw new Error('Horse or Race not found');
    }
  
    // Check if the horse is already added to the race
    if (race.horses.some(existingHorse => existingHorse.id === horseId)) {
      throw new Error('Horse is already entered in this race');
    }
  
    // Add the horse to the race's horses array
    race.horses.push(horse);
  
    // Save the updated race with the new horse entry
    return this.raceRepository.save(race);
  }
}
