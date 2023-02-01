import { Prop, Schema, SchemaFactory, } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type brandAdsDocument = brandAds & Document;

@Schema({ collection: 'brand_ads' })


export class brandAds{

    @Prop()
    brand: string;
  
    @Prop()
    image: string;

}

export const brandAdsSchema = SchemaFactory.createForClass(brandAds);


