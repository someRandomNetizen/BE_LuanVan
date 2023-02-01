import { Prop, Schema, SchemaFactory, } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type shipmentDriverDocument = shipmentDriver & Document;

@Schema({ collection: 'shipment_driver' })


export class shipmentDriver{

  @Prop()
  full_name: string;

  @Prop()
  truck_plate: string;

  @Prop()
  phone_number: string;

  @Prop()
  rating: string;

  @Prop()
  user_id: number;

  @Prop()
  shipment_id: number;

  @Prop()
  shipmentDriverId: number;

  @Prop()
  shipmentRating: number;

  @Prop()
  userOpinion: string;

  @Prop()
  packagePicture: string[];

  @Prop()
  packageQr: number[];

  @Prop()
  state: number;

}

export const shipmentDriverSchema = SchemaFactory.createForClass(shipmentDriver);


