// race.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Race } from './entities/race.entity';
import { CreateRaceDto } from './dto/create-race.dto';
import { UpdateRaceDto } from './dto/update-race.dto';
import { Horse } from '../horse/entities/horse.entity';

@Injectable()
export class RaceService {
  constructor(
    @InjectRepository(Race)
    private readonly raceRepository: Repository<Race>,
  ) {}

  async create(createRaceDto: CreateRaceDto): Promise<Race> {
    const race = this.raceRepository.create(createRaceDto);
    return this.raceRepository.save(race);
  }

  async findAll(): Promise<Race[]> {
    return this.raceRepository.find({ relations: ['horses', 'scheduledBy'] });
  }

  async findOne(id: number): Promise<Race> {
    const race = await this.raceRepository.findOne({ where: { id }, relations: ['horses', 'scheduledBy'] });
    if (!race) {
      throw new NotFoundException(`Race with ID ${id} not found`);
    }
    return race;
  }

  async update(id: number, updateRaceDto: UpdateRaceDto): Promise<Race> {
    const race = await this.findOne(id);
    Object.assign(race, updateRaceDto);
    return this.raceRepository.save(race);
  }

  async remove(id: number): Promise<void> {
    const race = await this.findOne(id);
    await this.raceRepository.remove(race);
  }

  async scheduleRace(horseIds: number[]): Promise<Race> {
    const race = new Race();
    race.horses = horseIds.map((id) => ({ id } as Horse));
    return this.raceRepository.save(race);
  }
  async startRace(raceId: number): Promise<{
    horseId: number;
    totalTime: number;
    splits: number[];
}[]> {
    const race = await this.raceRepository.findOne({
      where: { id: raceId },
      relations: ['horses'], // Load the horses related to the race
    });

    if (!race || race.horses.length === 0) {
      throw new Error('Race not found or no horses entered');
    }
  
    const horseTimes: Record<number, number[]> = {};
    
    // Generate times for each horse at 5 checkpoints
    for (const horse of race.horses) {
      horseTimes[horse.id] = Array.from({ length: 5 }, () => 
        parseFloat((Math.random() * 2 + 6).toFixed(1)) // Random time between 6 and 8 seconds
      );
    }
  
    
    // Calculate total times and determine the winner
    const totalTimes = Object.entries(horseTimes).map(([horseId, times]) => {
      const total = times.reduce((acc, time) => acc + time, 0);
      return { horseId: Number(horseId), totalTime: total };
    });
  
    // Sort by total time to determine the finishing order
    const sortedResults = totalTimes.sort((a, b) => a.totalTime - b.totalTime);
    
    
  // Build the result object
  const result = Object.entries(horseTimes).map(([horseId, splits]) => {
    const totalTime = splits.reduce((acc, time) => acc + time, 0);
    return { horseId: Number(horseId), totalTime, splits };
  });

  // Sort by total time to determine the finishing order
  result.sort((a, b) => a.totalTime - b.totalTime);
  // Log winner and finishing order
  console.log('Race Results:', result);
  return result;
    
  }

  // Helper function to generate a random time between min and max (inclusive)
  private getRandomCheckpointTime(min: number, max: number): number {
    return parseFloat((Math.random() * (max - min) + min).toFixed(1));
  }
}
