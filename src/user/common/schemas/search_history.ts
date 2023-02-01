import { Prop, Schema, SchemaFactory, } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type searchHistoryDocument = searchHistory & Document;

@Schema({ collection: 'search_history' })


export class searchHistory{

    @Prop()
    content: string;
  
    @Prop()
    length: number;
  
    @Prop()
    detail: string;
  
    @Prop()
    user_id: number;

}

export const searchHistorySchema = SchemaFactory.createForClass(searchHistory);


