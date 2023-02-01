import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { pickupTime, pickupTimeDocument } from '../schemas/pickup_time';
@Injectable()

export class PickupTimeService {
  constructor(
    @InjectModel(pickupTime.name) private readonly pickupTimeModel: Model<pickupTimeDocument>){}
    
  async create4(date: string, time: string){
    const newCat = new this.pickupTimeModel({
      date,
      time,
    });
    const result = await newCat.save();
    console.log(result);
    return 'A New document have been created';
  }

  async findOne4(user_namePostMan: string): Promise<pickupTime> {
    return this.pickupTimeModel.findOne({ phone_number: user_namePostMan }).exec();
  }

  async findAll4(): Promise<pickupTime[]> {
    return this.pickupTimeModel.find().exec();
  }

  async Push4(user_namePostMan: string, abc: string){
    var newCat2 = new this.pickupTimeModel({})
    newCat2.update(
      { $push: { time: user_namePostMan } },
    );
    const result = await newCat2.save();
    return 'A New push is done';
  }

}