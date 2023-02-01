import { Prop, Schema, SchemaFactory, } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type pickupTimeDocument = pickupTime & Document;

@Schema({ collection: 'pickup_time' })


export class pickupTime{

    @Prop()
    time: [string];
  
    @Prop()
    date: string;

}

export const pickupTimeSchema = SchemaFactory.createForClass(pickupTime);


