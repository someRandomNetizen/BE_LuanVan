import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { packageTypes, packageTypesDocument } from '../schemas/package_types';
@Injectable()

export class PackageTypesService {
  constructor(
    @InjectModel(packageTypes.name) private readonly packageTypesModel: Model<packageTypesDocument>){}
    
  async create5(types: string, image: string){
    const newCat = new this.packageTypesModel({
      types,
      image,
    });
    const result = await newCat.save();
    console.log(result);
    return 'A New document have been created';
  }
  //here how to fix
  async findOne5(user_namePostMan: string): Promise<packageTypes> {
    let k = this.packageTypesModel.findOne({ types: user_namePostMan }).exec();
    console.log((await k).types)
    return this.packageTypesModel.findOne({ types: user_namePostMan }).exec();
  }

  async findAll5(): Promise<packageTypes[]> {
    return this.packageTypesModel.find().exec();
  }

  async delete5(user_namePostMan: string){
    let newcat4 = await this.packageTypesModel.findOneAndRemove({ types: user_namePostMan });
  }

}