import { Module } from '@nestjs/common';
import { HorseService } from './horse.service';
import { HorseController } from './horse.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Horse } from './entities/horse.entity';
import { Race } from '../race/entities/race.entity';
import { User } from '../user/entities/user.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Horse, Race,User])],
  controllers: [HorseController],
  providers: [HorseService],
})
export class HorseModule {}
