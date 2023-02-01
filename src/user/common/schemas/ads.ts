import { Prop, Schema, SchemaFactory, } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type adsDocument = ads & Document;

@Schema({ collection: 'ads' })


export class ads{

    @Prop()
    content: string;
  
    @Prop()
    image: string;

}

export const adsSchema = SchemaFactory.createForClass(ads);


