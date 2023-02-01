import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { customer, customerDocument } from '../schemas/customer';
@Injectable()

export class CustomerService {
  constructor(
    @InjectModel(customer.name) private readonly customerModel: Model<customerDocument>){}
    
  async create3(full_name: string, phone_number: string, location: string, types: string, notes: string, user_id: number){
    var k = await this.customerModel.countDocuments({})
    console.log(k);
    user_id = k + 1;
    const newCat = new this.customerModel({
      full_name,
      phone_number,
      location,
      types,
      notes,
      user_id,
    });
    const result = await newCat.save();
    console.log(result);
    return 'A New document have been created';
  }

  async findOne3(user_namePostMan: string): Promise<customer> {
    return this.customerModel.findOne({ phone_number: user_namePostMan }).exec();
  }

}