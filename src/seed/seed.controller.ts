import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeedService } from './seed.service';


@Controller('seed')
export class SeedController {
  
  constructor(private readonly seedService: SeedService) {} // Escuchar solicitudes y regresar respuestas



  @Get()
  executeSeed() {
    return this.seedService.executeSeed();
  }

}