import { Document} from "mongoose";// Este agrega todas la funcionalidades respetibas
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';



@Schema()
export class Pokemon extends Document { // extends Document es para que sea conciderado como un documeto den mongo
    
    @Prop({
        unique: true, // Esto es para que name sea unico
        index: true // El índice sabe dónde específicamente está el elemento que se está buscando.

    })
    name:string;

    @Prop({
        unique:true,
        index: true
    })
    no:string;
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon) // Este es que ma decir cuando la base de datos se inicie estos son las definiciones que quiero que uses
