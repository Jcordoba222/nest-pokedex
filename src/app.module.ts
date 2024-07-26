import { join } from 'path';// Paquete propio de node
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SeedModule } from './seed/seed.module';
import { ConfigModule } from '@nestjs/config';
import { envConfiguration } from './config/env.config';
import { JoiValidationSchema } from './config/joi.validation';





@Module({
  imports: [
    ConfigModule.forRoot({
      load: [envConfiguration],//Esto hace converciones y mapeos
      validationSchema:JoiValidationSchema
    }),

      ServeStaticModule.forRoot({
        rootPath: join(__dirname,'..','public'),
      }),
      // MongooseModule.forRoot('mongodb://localhost:27017/nest-pokemon'),
      MongooseModule.forRoot(process.env.MONGODB),

      PokemonModule,

      SeedModule,




  ],
})
export class AppModule {

  // constructor(){
  //   console.log(process.env)
  // }
}

