import { Injectable } from '@nestjs/common';
import { Person } from './interfaces/person.interface';

@Injectable()
export class PersonsService {
  private readonly persons: Person[] = [];

  create(person: Person) {
    this.persons.push(person);
  }


  findAll(): Person[] {
    return this.persons;
  }


}
