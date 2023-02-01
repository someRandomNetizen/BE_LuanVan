import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { coord, coordDocument } from '../schemas/coord';
@Injectable()

export class CoordService {
  constructor(
    @InjectModel(coord.name) private readonly coordModel: Model<coordDocument>){}
    
  async createCord(latitude: number, longtitude: number){
    // var k = await this.catModel16.countDocuments({})
    // console.log(k);
    // id = k + 1;
    const newCat = new this.coordModel({
      latitude,
      longtitude,
    });
    const result = await newCat.save();
    console.log(result);
    return 'A New document have been created';
  }

  async findOneCord(id: number): Promise<coord> {
    return this.coordModel.findOne({ latitude: id }).exec();
  }

  async findAllCord(): Promise<coord[]> {
    return this.coordModel.find().exec();
  }

  async deleteCord(id: number){
    let newcat4 = await this.coordModel.findOneAndRemove({ id: id });
  }

}