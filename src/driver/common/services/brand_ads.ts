import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { brandAds, brandAdsDocument } from '../schemas/brand_ads';
@Injectable()

export class BrandAdsService {
  constructor(
    @InjectModel(brandAds.name) private readonly brandAdsModel: Model<brandAdsDocument>){}
    
  async create21(brand: string, image: string){
    const newCat = new this.brandAdsModel({
      brand,
      image,
    });
    const result = await newCat.save();
    console.log(result);
  }

  async findOne21(brand: string): Promise<brandAds> {
    return this.brandAdsModel.findOne({ brand: brand }).exec();
  }

  async findAll21(): Promise<brandAds[]> {
    return this.brandAdsModel.find().exec();
  }

  async delete21(brand: string){
    let newcat4 = await this.brandAdsModel.findOneAndRemove({ brand: brand });
  }

}