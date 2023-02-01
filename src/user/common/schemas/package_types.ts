import { Prop, Schema, SchemaFactory, } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type packageTypesDocument = packageTypes & Document;

@Schema({ collection: 'package_types' })


export class packageTypes{

    @Prop()
    types: string;
  
    @Prop()
    image: string;

}

export const packageTypesSchema = SchemaFactory.createForClass(packageTypes);


