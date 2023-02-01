import { Prop, Schema, SchemaFactory, } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type coordDocument = coord & Document;

@Schema({ collection: 'coord' })
export class coord {

  @Prop()
  latitude: number;

  @Prop()
  longtitude: number;

}

export const coordSchema = SchemaFactory.createForClass(coord);


