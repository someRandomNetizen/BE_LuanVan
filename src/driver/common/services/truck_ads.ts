import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { truckAds, truckAdsDocument } from '../schemas/truck_ads';
@Injectable()

export class TruckAdsService {
  constructor(
    @InjectModel(truckAds.name) private readonly truckAdsModel: Model<truckAdsDocument>){}
    
  async create20(content: string, image: string){
    const newCat = new this.truckAdsModel({
      content,
      image,
    });
    const result = await newCat.save();
    console.log(result);
  }

  async findOne20(content: string): Promise<truckAds> {
    return this.truckAdsModel.findOne({ content: content }).exec();
  }

  async findAll20(): Promise<truckAds[]> {
    return this.truckAdsModel.find().exec();
  }

  async delete20(content: string){
    let newcat4 = await this.truckAdsModel.findOneAndRemove({ content: content });
  }

}