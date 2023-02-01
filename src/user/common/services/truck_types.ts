import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { truckTypes, truckTypesDocument } from '../schemas/truck_types';
@Injectable()

export class TruckTypesService {
  constructor(
    @InjectModel(truckTypes.name) private readonly truckTypesModel: Model<truckTypesDocument>){}
    
  async create7(truck_types: string, quantity: number, image: string){
    const newCat = new this.truckTypesModel({
      truck_types,
      quantity,
      image,
    });
    const result = await newCat.save();
    console.log(result);
    return 'A New document have been created';
  }

  async findOne7(user_namePostMan: string): Promise<truckTypes> {
    return this.truckTypesModel.findOne({ truck_types: user_namePostMan }).exec();
  }

  async findAll7(): Promise<truckTypes[]> {
    return this.truckTypesModel.find().exec();
  }

  async delete7(user_namePostMan: string){
    let newcat4 = await this.truckTypesModel.findOneAndRemove({ truck_types: user_namePostMan });
  }

  async maxTruck(){
    var k = [];
    k = await this.truckTypesModel.find().exec();
    var k2 = [];
    k2 = await this.truckTypesModel.find().exec();
    var sortArray = k2.sort((a, b) => parseFloat(a.volume) - parseFloat(b.volume));

    var result = [];
    var i = 0;
    var y = 0;



    var highest_truck_volume = Math.max.apply(Math,k.map(function(o){return o.volume;}));
    var highest_truck_weight = Math.max.apply(Math,k.map(function(o){return o.weight;}));

    result[0] = highest_truck_weight;
    result[1] = highest_truck_volume;

    return result;
  } 

}