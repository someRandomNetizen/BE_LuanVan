import { Prop, Schema, SchemaFactory, } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {address, addressSchema } from './address'
import {packageWeight, packageWeightSchema } from './package_weight'
import {truckTypes, truckTypesSchema } from './truck_types'

export type shipmentDocument = shipment & Document;

@Schema({ collection: 'shipment' })


export class shipment{
  @Prop()
  senderName: string;

  @Prop()
  senderPhone: string;

  @Prop({type: [addressSchema]})
  recAddress: address[];

  @Prop({type: [addressSchema]})
  senderAddress: address[];

  @Prop({type: [addressSchema]})
  driver: address[];

  @Prop({type: Date})
  time: Date;
  
  @Prop()
  typeOfShipment: string;

  @Prop()
  manual: string;

  @Prop({type: packageWeightSchema})
  size: packageWeight;

  @Prop({type: [truckTypesSchema]})
  trucks: truckTypes[];

  @Prop()
  payment: string;

  @Prop()
  fee: string;

  @Prop()
  voucher: number;

  @Prop()
  user_id: number;

  @Prop()
  shipment_id: number;

}

export const shipmentSchema = SchemaFactory.createForClass(shipment);


