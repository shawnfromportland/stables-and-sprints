// race.entity.ts

import { Entity, Column, ManyToMany, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinTable } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Horse } from '../../horse/entities/horse.entity';

@Entity()
export class Race {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'datetime' })
  startTime: Date;

  @ManyToOne(() => User, (user) => user.scheduledRaces)
  scheduledBy: User;


  @ManyToMany(() => Horse, (horse) => horse.races, { cascade: true })
  @JoinTable() // This will create a join table automatically
  horses: Horse[];

}
