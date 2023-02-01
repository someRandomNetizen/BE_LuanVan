import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { packageWeight, packageWeightDocument } from '../schemas/package_weight';
@Injectable()

export class PackageWeightService {
  constructor(
    @InjectModel(packageWeight.name) private readonly packageWeightModel: Model<packageWeightDocument>){}
    
  async create6(weight: number, length: number, width: number, height: number){
    const newCat = new this.packageWeightModel({
      weight,
      length,
      width,
      height,
    });
    const result = await newCat.save();
    console.log(result);
    return 'A New document have been created';
  }

  async findOne6(user_namePostMan: number): Promise<packageWeight> {
    return this.packageWeightModel.findOne({ weight: user_namePostMan }).exec();
  }

  async findAll6(): Promise<packageWeight[]> {
    return this.packageWeightModel.find().exec();
  }

}