import { Module } from '@nestjs/common';
import { PokemonModule } from 'src/pokemon/pokemon.module';
import { SeedController } from './seed.controller';
import { SeedService } from './seed.service';
import { CommonModule } from 'src/common/common.module';


@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [
    PokemonModule,
    CommonModule
  ]
})
export class SeedModule {}
