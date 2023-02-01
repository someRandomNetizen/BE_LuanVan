import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { trucksell, trucksellDocument } from '../schemas/truck_sell';
@Injectable()

export class TruckSellService {
  constructor(
    @InjectModel(trucksell.name) private readonly trucksellModel: Model<trucksellDocument>){}
    
  async create9(truck_state: string, truck_state_id: string, truck_brand: string, truck_name: string, price: string, distance: string, picture: string, truck_id: number){
    var k = await this.trucksellModel.countDocuments({})
    console.log(k);
    truck_id = k + 1;
    const newCat = new this.trucksellModel({
      truck_state,
      truck_state_id,
      truck_brand,
      truck_name,
      price,
      distance,
      picture,
      truck_id,
    });
    const result = await newCat.save();
    console.log(result);
    return 'A New document have been created for you';
  }

  async filter(truck_state_how: string): Promise<trucksell[]> {
    if(truck_state_how == "0"){
      return this.trucksellModel.find().exec();
    }
    return this.trucksellModel.find({truck_state_id: truck_state_how}).exec();
  }

  async findAll9(): Promise<trucksell[]> {
    return this.trucksellModel.find().exec();
  }

  async paginate(truck_state_how: string, pagination: number){
    var a = pagination - 1;
    if(truck_state_how == "0"){
      const love = this.trucksellModel.find().sort({ _id: 1 }).skip(a).limit(10);
    return love;
    }
    const love = this.trucksellModel.find({truck_state_id: truck_state_how}).sort({ _id: 1 }).skip(a).limit(10);
    return love;
  }

}