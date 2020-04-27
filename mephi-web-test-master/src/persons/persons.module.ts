import { Module } from '@nestjs/common';
import { PersonsController } from './persons.controller';
import { PersonsService } from './persons.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './entities/persons.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Person])],
    controllers: [PersonsController],
    providers: [PersonsService],
    exports: [PersonsService],
})
export class PersonsModule{}
