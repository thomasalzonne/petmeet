import { HttpModule, Module } from '@nestjs/common';
import { PetsController } from './pets.controller';
import { PetsService } from './pets.service';

@Module({
    imports : [HttpModule],
    controllers : [PetsController],
    providers : [PetsService],
})
export class PetsModule {}
