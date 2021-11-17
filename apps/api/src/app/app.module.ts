import { Module } from '@nestjs/common';
import { PetsModule } from '../pets/pets.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [PetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
