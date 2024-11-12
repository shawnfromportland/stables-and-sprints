// dto/create-race.dto.ts

import { IsDateString, IsArray, IsOptional, IsInt } from 'class-validator';

export class CreateRaceDto {
  @IsDateString()
  startTime: Date;

  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  horseIds?: number[];
}
