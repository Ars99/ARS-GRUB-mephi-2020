import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'person',
})
export class Person {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  surname: string;

  @Column({
    type: 'varchar',
    length: 10,
  })
  password: string;
}