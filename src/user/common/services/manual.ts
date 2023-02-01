import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { manual, manualDocument } from '../schemas/manual';
@Injectable()

export class manualService {
constructor(
@InjectModel(manual.name) private readonly manualModel: Model<manualDocument>){}

  async createManual(manual: string, image:string){
    const newCat = new this.manualModel({
      manual,
      image,
    });
    const result = await newCat.save();
    console.log(result);
    return 'A New document have been created';
  }

  async findOneManual(user_namePostMan: string): Promise<manual> {
    return this.manualModel.findOne({ manual: user_namePostMan }).exec();
  }

  async findAllManual(): Promise<manual[]> {
    return this.manualModel.find().exec();
  }

  async deleteManual(user_namePostMan: string){
    let newcat4 = await this.manualModel.findOneAndRemove({ manual: user_namePostMan });
  }
}