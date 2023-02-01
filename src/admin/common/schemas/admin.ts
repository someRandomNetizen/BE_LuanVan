import { Prop, Schema, SchemaFactory, } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type adminDocument = admin & Document;

@Schema({ collection: 'admin' })
export class admin {
  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  admin_id: number;

}
export const adminSchema = SchemaFactory.createForClass(admin);


