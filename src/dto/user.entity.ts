import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  name: string;

  @Column()
  age: number;

  @Column()
  sex: string;
  @Column()
  dob: string;

  @Column()
  address: string;
}
