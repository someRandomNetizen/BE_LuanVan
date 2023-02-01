import { Prop, Schema, SchemaFactory, } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type truckAdsDocument = truckAds & Document;

@Schema({ collection: 'truck_ads' })


export class truckAds{

    @Prop()
    content: string;
  
    @Prop()
    image: string;

}

export const truckAdsSchema = SchemaFactory.createForClass(truckAds);


