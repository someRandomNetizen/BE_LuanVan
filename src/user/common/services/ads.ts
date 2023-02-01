import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { ads, adsDocument } from '../schemas/ads';
@Injectable()

export class AdsService {
  constructor(
    @InjectModel(ads.name) private readonly adsModel: Model<adsDocument>){}
    
  async create19(content: string, image: string){
    const newCat = new this.adsModel({
      content,
      image,
    });
    const result = await newCat.save();
    console.log(result);
  }

  async findOne19(content: string): Promise<ads> {
    return this.adsModel.findOne({ content: content }).exec();
  }

  async findAll19(): Promise<ads[]> {
    return this.adsModel.find().exec();
  }

  async delete19(content: string){
    let newcat4 = await this.adsModel.findOneAndRemove({ content: content });
  }

    
}