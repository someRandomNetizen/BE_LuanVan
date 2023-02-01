import { Prop, Schema, SchemaFactory, } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type truckTypesDocument = truckTypes & Document;

@Schema({ collection: 'truck_types' })


export class truckTypes{

    @Prop()
    truck_types: string;
  
    @Prop()
    weight: number;
  
    @Prop()
    length: number;
  
    @Prop()
    width: number;
  
    @Prop()
    height: number;
  
    @Prop()
    volume: number;
  
    @Prop()
    image: string;

}

export const truckTypesSchema = SchemaFactory.createForClass(truckTypes);


