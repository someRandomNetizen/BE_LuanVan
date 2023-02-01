import { Prop, Schema, SchemaFactory, } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type packageWeightDocument = packageWeight & Document;

@Schema({ collection: 'package_weight' })

export class packageWeight{

    @Prop()
    weight: number;
  
    @Prop()
    length: number;
  
    @Prop()
    width: number;
  
    @Prop()
    height: number;

}

export const packageWeightSchema = SchemaFactory.createForClass(packageWeight);


