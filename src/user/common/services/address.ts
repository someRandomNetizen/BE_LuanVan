import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { address, addressDocument } from '../schemas/address';
import { coord } from '../schemas/coord';

@Injectable()

export class AddressService {
  constructor(
    @InjectModel(address.name) private readonly addressModel: Model<addressDocument>){}
    
    async create323(coord: coord, shortAddress: string, detailAddress: string, apartmentFloor: string, noteAddress: string, name: string, phone: string, noteForDriver: string, role: string, shipmentID: number, id: number){
        var k = await this.addressModel.countDocuments({})
        console.log(k);
        id = k + 1;
        const newCat = new this.addressModel({
          coord,
          shortAddress,
          detailAddress,
          apartmentFloor,
          noteAddress,
          name,
          phone,
          noteForDriver,
          role,
          shipmentID,
          id,
        });
        const result = await newCat.save();
        console.log(result);
        return 'A New document have been created';
      }
    
      async findOne332(id: number): Promise<address> {
        return this.addressModel.findOne({ id: id }).exec();
      }
    
      async findAll122332(): Promise<address[]> {
        return this.addressModel.find().exec();
      }
    
      async delete532(id: number){
        let newcat4 = await this.addressModel.findOneAndRemove({ id: id });
      }
      
}