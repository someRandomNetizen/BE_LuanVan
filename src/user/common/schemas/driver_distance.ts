import { Prop, Schema, SchemaFactory, } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type driverDistanceDocument = driverDistance & Document;

@Schema({ collection: 'driver_distance' })


export class driverDistance{

    @Prop()
    address: string;
  
    @Prop()
    distance: [number];
  
    @Prop()
    truck_types: [string];

}

export const driverDistanceSchema = SchemaFactory.createForClass(driverDistance);


