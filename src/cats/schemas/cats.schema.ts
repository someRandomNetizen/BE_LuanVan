import { Prop, Schema, SchemaFactory, } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { IsLatitude } from 'class-validator';

export type CatDocument = Cat & Document;

@Schema({ collection: 'user' })
export class Cat {
  @Prop()
  user_name: string;

  @Prop()
  password: string;

  @Prop()
  full_name: string;

  @Prop()
  phone_number: string;

  @Prop()
  birth: Date;

  @Prop()
  gender: string;

  @Prop()
  nick_name: string;

  @Prop()
  avatar: string;

  @Prop()
  wallet_money: number;

  @Prop()
  role: string;

  @Prop()
  login_type: number;

  @Prop()
  login_id: string;

  @Prop()
  search_history: Cat18[];
  
  @Prop()
  voucher: Cat22[];
  
  @Prop()
  user_id: number;

}

export const CatSchema = SchemaFactory.createForClass(Cat);

export type CatDocument2 = Cat2 & Document;

@Schema({ collection: 'driver' })
export class Cat2 {
  @Prop()
  user_name: string;

  @Prop()
  password: string;

  @Prop()
  full_name: string;

  @Prop()
  phone_number: string;

  @Prop()
  rating: string;

  @Prop()
  model: string;

  @Prop()
  truck_type: string;

  @Prop()
  favor: number;

  @Prop()
  truck_plate: string;
  //
  @Prop()
  oderDone: number;
  
  @Prop()
  rejectShipment: number[];

  @Prop()
  occupy: number

  @Prop()
  done: number[];

  @Prop()
  gender: string;

  @Prop()
  birth: string;

  @Prop()
  birthPlace: string;

  @Prop()
  currentPlace: string;

  @Prop()
  citizenID: string;

  @Prop()
  IDDate: string;

  @Prop()
  IDPlace: string;

  @Prop()
  licenseID: string;

  @Prop()
  licenseType: string;

  @Prop()
  licenseDate: string;

  @Prop()
  licensePlace: string;

  @Prop()
  taxID: string;

  @Prop()
  bankID: string;

  @Prop()
  bankName: string;

  @Prop()
  driver_id: number;
  
}

export const CatSchema2 = SchemaFactory.createForClass(Cat2);

export type CatDocument3 = Cat3 & Document;

@Schema({ collection: 'customer' })
export class Cat3 {

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

export const CatSchema3 = SchemaFactory.createForClass(Cat3);

export type CatDocument4 = Cat4 & Document;

@Schema({ collection: 'pickup_time' })
export class Cat4 {

  @Prop()
  time: [string];

  @Prop()
  date: string;

  // @Prop()
  // time2: Array<>;
}

export const CatSchema4 = SchemaFactory.createForClass(Cat4);

export type CatDocument5 = Cat5 & Document;

@Schema({ collection: 'package_types' })
export class Cat5 {

  @Prop()
  types: string;

  @Prop()
  image: string;
  
}

export const CatSchema5 = SchemaFactory.createForClass(Cat5);

export type CatDocument55 = Cat55 & Document;



@Schema({ collection: 'manual' })
export class Cat55 {

  @Prop()
  manual: string;

  @Prop()
  image: string;
  
}

export const CatSchema55 = SchemaFactory.createForClass(Cat55);

export type CatDocument6 = Cat6 & Document;

@Schema({ collection: 'package_weight' })
export class Cat6 {

  @Prop()
  weight: number;

  @Prop()
  length: number;

  @Prop()
  width: number;

  @Prop()
  height: number;

}

export const CatSchema6 = SchemaFactory.createForClass(Cat6);

export type CatDocument7 = Cat7 & Document;

@Schema({ collection: 'truck_types' })
export class Cat7 {

  @Prop()
  truck_types: string;

  @Prop()
  weight: number;

  @Prop()
  length: number;

  @Prop()
  width: number;

  @Prop()
  height: number;

  @Prop()
  volume: number;

  @Prop()
  image: string;

  @Prop()
  description: string;

  @Prop()
  weight2: string;
  
  @Prop()
  truck_types_id: number;
}

export const CatSchema7 = SchemaFactory.createForClass(Cat7);

export type CatDocument9 = Cat9 & Document;

@Schema({ collection: 'trucksell' })
export class Cat9 {

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

export const CatSchema9 = SchemaFactory.createForClass(Cat9);
// export type CatDocument8 = Cat8 & Document;

// @Schema({ collection: 'pickup_time' })
// export class Cat8 {

//   @Prop()
//   time: string;

//   @Prop()
//   date: string;

// }

// export const CatSchema8 = SchemaFactory.createForClass(Cat8);
// // export const CatSchema2 = new mongoose.Schema({
// //     name: String,
// //     age: Number,
// //     breed: String,
// //   });

// import * as mongoose from 'mongoose';

// export const CatSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
//   breed: String,
// });

export type CatDocument10 = Cat10 & Document;

@Schema({ collection: 'pickup_time2' })
export class Cat10 {

  @Prop()
  time: [string];

  @Prop()
  date: string;
  

  // @Prop()
  // time2: Array<>;
}

export const CatSchema10 = SchemaFactory.createForClass(Cat10);

export type CatDocument11 = Cat11 & Document;

@Schema({ collection: 'test_time' })
export class Cat11 {

  @Prop()
  time: [string];

  @Prop()
  date: string;
  
  @Prop()
  number: number;
  // @Prop()
  // time2: Array<>;
}

export const CatSchema11 = SchemaFactory.createForClass(Cat11);

export type CatDocument12 = Cat12 & Document;

@Schema({ collection: 'images' })
export class Cat12 {

  @Prop()
  name: string;

  @Prop()
  image: string;

}

export const CatSchema12 = SchemaFactory.createForClass(Cat12);

export type CatDocument13 = Cat13 & Document;

@Schema({ collection: 'images2' })
export class Cat13 {

  @Prop()
  name: string;

  @Prop()
  image: string;

}

export const CatSchema13 = SchemaFactory.createForClass(Cat13);

export type CatDocument14 = Cat14 & Document;

@Schema({ collection: 'driver_distance' })
export class Cat14 {

  @Prop()
  address: string;

  @Prop()
  distance: [number];

  @Prop()
  truck_types: [string];

}

export const CatSchema14 = SchemaFactory.createForClass(Cat14);

export type CatDocument16 = Cat16 & Document;

@Schema({ collection: 'coord' })
export class Cat16 {

  @Prop()
  latitude: number;

  @Prop()
  longtitude: number;

  @Prop()
  favorable: number;

  @Prop()
  driver_id: number;
  
}

export const CatSchema16 = SchemaFactory.createForClass(Cat16);

export type CatDocument15 = Cat15 & Document;

@Schema({ collection: 'Address' })
export class Cat15 extends Cat16{

  @Prop({type: CatSchema16})
  coord: Cat16;

  @Prop()
  shortAddress: string;

  @Prop()
  detailAddress: string;

  @Prop()
  apartmentFloor: string;

  @Prop()
  noteAddress: string;

  @Prop()
  name: string;

  @Prop()
  phone: string;

  @Prop()
  noteForDriver: string;

  @Prop()
  role: string

  @Prop()
  shipmentID: number

  @Prop()
  id: number;

}

export const CatSchema15 = SchemaFactory.createForClass(Cat15);

export type CatDocument17 = Cat17 & Document;

@Schema({ collection: 'shipment_driver' })
export class Cat17 {

  @Prop()
  full_name: string;

  @Prop()
  truck_plate: string;

  @Prop()
  phone_number: string;

  @Prop()
  rating: string;

  @Prop()
  user_id: number;

  @Prop()
  shipment_id: number;

  @Prop()
  shipmentDriverId: number;

  @Prop()
  shipmentRating: number;

  @Prop()
  userOpinion: string;

  @Prop()
  packagePicture: string[];

  @Prop()
  packageQr: number[];

  @Prop()
  state: number;

}

export const CatSchema17 = SchemaFactory.createForClass(Cat17);

export type CatDocument8 = Cat8 & Document;

@Schema({ collection: 'shipment' })
export class Cat8{
  @Prop()
  senderName: string;

  @Prop()
  senderPhone: string;

  @Prop({type: [CatSchema15]})
  recAddress: Cat15[];

  @Prop({type: [CatSchema15]})
  senderAddress: Cat15[];

  @Prop({type: [CatSchema17]})
  driver: Cat17[];

  @Prop({type: Date})
  time: Date;
  
  @Prop()
  typeOfShipment: string;

  @Prop()
  manual: string;

  @Prop({type: CatSchema6})
  size: Cat6;

  @Prop({type: [CatSchema7]})
  trucks: Cat7[];

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

export const CatSchema8 = SchemaFactory.createForClass(Cat8);

export type CatDocument99 = Cat99 & Document;

@Schema({ collection: 'testschema' })
export class Cat99 {
@Prop({type: [CatSchema15]})
  
  recAddress: Cat15[];

  @Prop({type: CatSchema5})
  senderAddress: Cat5;

  @Prop()
  weight: number;

  // @Prop()
  // kewk: number[];

  @Prop()
  dateTest: Date;

  @Prop()
  dateString: string;

  @Prop()
  id: number;
  
}

export const CatSchema99 = SchemaFactory.createForClass(Cat99);

export type CatDocument100 = Cat100 & Document;

@Schema({ collection: 'test2' })
export class Cat100{

  @Prop({type: CatSchema16})
  recAddress: Cat15[];

  // @Prop({type: CatSchema16})
  // senderAddress: Cat15;

  // @Prop({type: CatSchema2})
  // driver: Cat2[];

  // @Prop({type: CatSchema4})
  // time: Cat4;
  
  // @Prop({type: CatSchema5})
  // typeOfShipment: Cat5;

  // @Prop({type: CatSchema55})
  // manual: Cat55;

  // @Prop({type: CatSchema6})
  // size: Cat6;

  // @Prop({type: CatSchema7})
  // trucks: Cat7[];

  // @Prop()
  // payment: string;

  // @Prop()
  // fee: string;

  // @Prop()
  // shipment_id: number;
}

export const CatSchema100 = SchemaFactory.createForClass(Cat100);

export type CatDocument18 = Cat18 & Document;

@Schema({ collection: 'search_history' })
export class Cat18 {

  @Prop()
  content: string;

  @Prop()
  length: number;

  @Prop()
  detail: string;

  @Prop()
  user_id: number;

}

export const CatSchema18 = SchemaFactory.createForClass(Cat18);

export type CatDocument19 = Cat19 & Document;

@Schema({ collection: 'ads' })
export class Cat19 {

  @Prop()
  content: string;

  @Prop()
  image: string;

}

export const CatSchema19 = SchemaFactory.createForClass(Cat19);

export type CatDocument20 = Cat20 & Document;

@Schema({ collection: 'truck_ads' })
export class Cat20 {

  @Prop()
  content: string;

  @Prop()
  image: string;

}

export const CatSchema20 = SchemaFactory.createForClass(Cat20);

export type CatDocument21 = Cat21 & Document;

@Schema({ collection: 'brand_ads' })
export class Cat21 {

  @Prop()
  brand: string;

  @Prop()
  image: string;

}

export const CatSchema21 = SchemaFactory.createForClass(Cat21);

export type CatDocument22 = Cat22 & Document;

@Schema({ collection: 'voucher' })
export class Cat22 {

  @Prop()
  content: string;

  @Prop()
  image: string;
  
  @Prop()
  id: string;

}

export const CatSchema22 = SchemaFactory.createForClass(Cat22);

export type CatDocument23 = Cat23 & Document;

@Schema({ collection: 'message' })
export class Cat23 {

  @Prop()
  message: string;

  @Prop()
  sender: string;
  
  @Prop()
  recipient: string;

}

export const CatSchema23 = SchemaFactory.createForClass(Cat23);

export type CatDocument24 = Cat24 & Document;

@Schema({ collection: 'driver_finish' })
export class Cat24 {

  @Prop()
  full_name: string;

  @Prop()
  truck_plate: string;

  @Prop()
  phone_number: string;

  @Prop()
  rating: string;

  @Prop()
  date: string;

  @Prop()
  user_id: number;

  @Prop()
  shipment_id: number;

  @Prop()
  driverFinish_id: number;

  @Prop()
  shipmentRating: number;
  
}

export const CatSchema24 = SchemaFactory.createForClass(Cat24);

export type CatDocument25 = Cat25 & Document;

@Schema({ collection: 'realtime_coordinate' })
export class Cat25 {

  @Prop()
  driver_id: number;

  @Prop()
  latitude: number;

  @Prop()
  longtitude: number;

  @Prop()
  id_realCoor: number;
}

export const CatSchema25 = SchemaFactory.createForClass(Cat25);

export type CatDocument26 = Cat26 & Document;

@Schema({ collection: 'status' })
export class Cat26 {

  @Prop()
  status: number;

  @Prop()
  content: string;

  @Prop()
  detail: string;

}

export const CatSchema26 = SchemaFactory.createForClass(Cat26);

export type CatDocument27 = Cat26 & Document;

@Schema({ collection: 'selectDriver' })
export class Cat27 {

  @Prop()
  detail: any[];

  @Prop()
  latPick: number;

  @Prop()
  longPick: number;

  @Prop()
  shipment_id: number;

}

export const CatSchema27 = SchemaFactory.createForClass(Cat27);

export type CatDocument28 = Cat28 & Document;

@Schema({ collection: 'admin2' })
export class Cat28 {
  @Prop()
  user_name: string;

  @Prop()
  password: string;

  @Prop()
  full_name: string;

  @Prop()
  phone_number: string;

  @Prop()
  gender: string;

  @Prop()
  birth: string;

  @Prop()
  admin_id: number;
  
}

export const CatSchema28 = SchemaFactory.createForClass(Cat28);