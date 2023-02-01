import { Prop, Schema, SchemaFactory, } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type manualDocument = manual & Document;

@Schema({ collection: 'manual' })
export class manual {

  @Prop()
  manual: string;

  @Prop()
  image: string;
  
}

export const manualSchema = SchemaFactory.createForClass(manual);