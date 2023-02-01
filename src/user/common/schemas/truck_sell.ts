import { Prop, Schema, SchemaFactory, } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type trucksellDocument = trucksell & Document;

@Schema({ collection: 'trucksell' })


export class trucksell{

    @Prop()
    truck_state: string;

    @Prop()
    truck_state_id: string;

    @Prop()
    truck_brand: string;

    @Prop()
    truck_name: string;
    
    @Prop()
    price: string;
    
    @Prop()
    distance: string;
    
    @Prop()
    picture: string;

    @Prop()
    truck_id: number;

}

export const trucksellSchema = SchemaFactory.createForClass(trucksell);


