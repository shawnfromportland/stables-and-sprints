import { Controller, Get, Post, Body, Patch, Param, Delete,ParseIntPipe } from '@nestjs/common';
import { HorseService } from './horse.service';
import { CreateHorseDto } from './dto/create-horse.dto';
import { UpdateHorseDto } from './dto/update-horse.dto';

@Controller('horse')
export class HorseController {
  constructor(private readonly horseService: HorseService) {}

  @Post()
  create(@Body() createHorseDto: CreateHorseDto) {
    return this.horseService.create(createHorseDto);
  }

  @Get()
  findAll() {
    return this.horseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.horseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHorseDto: UpdateHorseDto) {
    return this.horseService.update(+id, updateHorseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.horseService.remove(+id);
  }

  @Post(':horseId/enter-race/:raceId')
  async enterRace(
    @Param('horseId', ParseIntPipe) horseId: number,
    @Param('raceId', ParseIntPipe) raceId: number,
  ) {
    return this.horseService.addHorseToRace(horseId, raceId);
  }
}
