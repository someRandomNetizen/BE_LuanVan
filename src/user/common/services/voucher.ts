import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { voucher, voucherDocument } from '../schemas/voucher';
import { user, userDocument } from '../schemas/user';
@Injectable()

export class VoucherService {
  constructor(
    @InjectModel(voucher.name) private readonly voucherModel: Model<voucherDocument>,
    @InjectModel(user.name) private readonly userModel: Model<userDocument>){}
    
  async create22(content: string, image: string,){
    var k = await this.voucherModel.countDocuments({})
    const newCat = new this.voucherModel({
      content,
      image,
      k,
    });
    const result = await newCat.save();
    console.log(result);
  }

  async pushVoucher(voucher_id: number, user_id: number,){
    let k;
    k = await this.voucherModel.findOne({id: voucher_id})
    await this.userModel.findOneAndUpdate(
      {
        id: user_id
      },
      {$push: {"voucher": k } },
      { 
        new: true
      }
    )
  }

  async findOne22(content: string): Promise<voucher> {
    return this.voucherModel.findOne({ content: content }).exec();
  }

  async findAll22(): Promise<voucher[]> {
    return this.voucherModel.find().exec();
  }

  async delete22(content: string){
    let newcat4 = await this.voucherModel.findOneAndRemove({ content: content });
  }

}