import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { PersonsService } from './persons.service';
import { Person } from './interfaces/person.interface';

@Controller('persons')
export class PersonsController {
  constructor(private personsService: PersonsService) {}

  @Post()
  async create(@Body() createPersonDto: CreatePersonDto) {
    this.personsService.create(createPersonDto);
  }

  @Get()
  async findAll(): Promise<Person[]> {
    return this.personsService.findAll();
  }
}