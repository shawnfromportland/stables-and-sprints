// dto/create-horse.dto.ts

import { IsString, IsInt, IsOptional } from 'class-validator';

export class CreateHorseDto {
  @IsString()
  name: string;

  @IsInt()
  speedRating: number;

  @IsOptional()
  @IsString()
  color?: string;

  @IsInt()
  ownerId: number;
}
