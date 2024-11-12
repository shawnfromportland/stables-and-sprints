// horse.entity.ts

import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Race } from '../../race/entities/race.entity';

@Entity()
export class Horse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: 0 })
  race_count: number;

  @Column()
  speedRating: number;

  @Column()
  color: string;

  @Column({ default: false })
  retired: boolean;

  @ManyToOne(() => User, (user) => user.horses, { onDelete: 'CASCADE' })
  owner: User;

  @ManyToOne(() => Race, (race) => race.horses)
  currentRace: Race;

  @ManyToMany(() => Race, (race) => race.horses)
  races: Race[];
}
