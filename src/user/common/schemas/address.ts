import { Prop, Schema, SchemaFactory, } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { coord, coordSchema } from './coord'

export type addressDocument = address & Document;

@Schema({ collection: 'Address' })


export class address extends coord{

    @Prop({type: coordSchema})
    coord: coord;
  
    @Prop()
    shortAddress: string;
  
    @Prop()
    detailAddress: string;
  
    @Prop()
    apartmentFloor: string;
  
    @Prop()
    noteAddress: string;
  
    @Prop()
    name: string;
  
    @Prop()
    phone: string;
  
    @Prop()
    noteForDriver: string;
  
    @Prop()
    role: string
  
    @Prop()
    shipmentID: number
  
    @Prop()
    id: number;

}

export const addressSchema = SchemaFactory.createForClass(address);


