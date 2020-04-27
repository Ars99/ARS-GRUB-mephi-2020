import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { PersonsService } from './persons.service';
import { Person } from './entities/persons.entity'

@Controller('persons')
export class PersonsController {
  constructor(private personsService: PersonsService) {}

  @Post('create')
  async create(@Body() personData: Person): Promise<any> {
    this.personsService.create(personData);
  }

  @Put(':id/update')
  async update(@Param('id') id, @Body() personData: Person): Promise<any> {
      personData.id = String(id);
      console.log('Update #' + personData.id)
      return this.personsService.update(personData);
  }

  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.personsService.remove(id);
  }  

  @Get()
  async findAll(): Promise<Person[]> {
    return this.personsService.findAll();
  }
}