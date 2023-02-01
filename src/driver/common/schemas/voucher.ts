import { Prop, Schema, SchemaFactory, } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type voucherDocument = voucher & Document;

@Schema({ collection: 'voucher' })


export class voucher{

    @Prop()
    content: string;
  
    @Prop()
    image: string;
    
    @Prop()
    id: string;

}

export const voucherSchema = SchemaFactory.createForClass(voucher);


