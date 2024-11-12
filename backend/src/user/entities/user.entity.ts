// user.entity.ts

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Horse } from '../../horse/entities/horse.entity';
import { Race } from '../../race/entities/race.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ default: false })
  isAdmin: boolean;

  @Column({ default: false })
  isSuspended: boolean;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  signupDate: Date;

  @OneToMany(() => Horse, (horse) => horse.owner)
  horses: Horse[];

  @OneToMany(() => Race, (race) => race.scheduledBy)
  scheduledRaces: Race[];
}
