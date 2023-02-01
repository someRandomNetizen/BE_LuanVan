import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { driverDistance, driverDistanceDocument } from '../schemas/driver_distance';
@Injectable()

export class DriverDistanceService {
  constructor(
    @InjectModel(driverDistance.name) private readonly driverDistanceModel: Model<driverDistanceDocument>){}
    
  async create14(address: String, distance: number[], truck_types: string[]){
    console.log('asdkjfahslkdjf');
    const newCat = new this.driverDistanceModel({
      address,
      distance,
      truck_types,
    });
    const result = await newCat.save();
    console.log(address);
    console.log(distance);
    console.log(truck_types);
    console.log(result);
    return 'A New document have been created';
  }

  async findOne14(address: String): Promise<driverDistance> {
    return this.driverDistanceModel.findOne({ address: address }).exec();
  }

  async findAll14(): Promise<driverDistance[]> {
    return this.driverDistanceModel.find().exec();
  }

}