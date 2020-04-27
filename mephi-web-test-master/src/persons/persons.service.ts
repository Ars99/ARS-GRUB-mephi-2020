import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from './entities/persons.entity';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';

@Injectable()
export class PersonsService {
  constructor(
    @InjectRepository(Person)
    private personsRepository: Repository<Person>
  ) {}

  async findAll(): Promise<Person[]>{
    return await this.personsRepository.find();
  }

  findOne(id: string): Promise<Person> {
    return this.personsRepository.findOne(id);
  }

  async create(person: Person): Promise<Person>{
    return await this.personsRepository.save(person);
  }

  async update(person: Person): Promise<UpdateResult>{
    return await this.personsRepository.update(person.id, person);
  }

  async remove(id: string): Promise<DeleteResult> {
    return await this.personsRepository.delete(id);
  }

}
