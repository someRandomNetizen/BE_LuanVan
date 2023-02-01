import { Prop, Schema, SchemaFactory, } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type customerDocument = customer & Document;

@Schema({ collection: 'customer' })


export class customer{

    @Prop()
    full_name: string;
  
    @Prop()
    phone_number: string;
  
    @Prop()
    types: string;
  
    @Prop()
    location: string;
  
    @Prop()
    notes: string;
  
    @Prop()
    user_id: number;

}

export const customerSchema = SchemaFactory.createForClass(customer);


