import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { PetsService } from './pets.service';
import {PetModel} from '../../../../libs/pet/src/index'

@Controller('pets')
export class PetsController {

    constructor(private petsService: PetsService){}

    @Get(':id')
    getById(@Param('id') id: number){
        return this.petsService.getById(id)
    }

    @Get()
    async findAll(){
        return (await this.petsService.findAll().toPromise()).data
    }

    @Post()
    create(@Body() pet: PetModel){
        return this.petsService.create(pet)
    }
}
