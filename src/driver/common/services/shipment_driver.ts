import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { shipmentDriver, shipmentDriverDocument } from '../schemas/shipment_driver';
import { driver, driverDocument } from '../schemas/driver';
import { shipment, shipmentDocument } from '../schemas/shipment';
@Injectable()

export class ShipmentDriverService {
  constructor(
    @InjectModel(shipmentDriver.name) private readonly shipmentDriverModel: Model<shipmentDriverDocument>,
    @InjectModel(driver.name) private readonly driverModel: Model<driverDocument>,
    @InjectModel(shipment.name) private readonly shipmentModel: Model<shipmentDocument>
    ){}
    async show17(){
        let k = await this.shipmentDriverModel.find();
        return k;
      }
      //Call this for each driver that accept shipment
      async create17(shipment_id: number, user_id: number){
      
        var driver = await this.driverModel.findOne({ user_id: user_id }).exec();
        let k = await this.shipmentDriverModel.countDocuments({});
        
        let full_name = driver.full_name;
        let truck_plate =  driver.truck_plate;
        let phone_number =  driver.phone_number;
        let rating =  driver.rating;
        console.log(full_name);
        console.log(k);
        var shipmentDriverId = k + 1;
        let state = 0;
        const newCat = new this.shipmentDriverModel({
          full_name,
          truck_plate,
          phone_number,
          rating,
          user_id,
          shipment_id,
          shipmentDriverId,
          state,
        });
        const result = await newCat.save();
    
        let allRightDriver = await this.shipmentDriverModel.find({ shipment_id: shipment_id }).exec();
        console.log(allRightDriver);
        let ff = await this.shipmentModel.findOneAndUpdate({ shipment_id: shipment_id }, { driver: allRightDriver } );
        await this.driverModel.findOneAndUpdate({ user_id: user_id }, { occupy: 1 } );
      }
      //update rating 
      async update17(shipment_id: number, user_id: number, rating: number){
        let love = rating;
        console.log(love);
        let k = await this.shipmentModel.findOne({ shipment_id: shipment_id, driver: {$in: [user_id]} });
        return k;
        
      }
      //update state for realtime
      async update170(shipment_id: number, user_id: number, new_state: number){

        let k = await this.shipmentDriverModel.findOneAndUpdate({ shipment_id: shipment_id, user_id: user_id}, {state: new_state});
    
        let allRightDriver = await this.shipmentDriverModel.find({ shipment_id: shipment_id }).exec();
        // console.log(allRightDriver);
        let ff = await this.shipmentModel.findOneAndUpdate({ shipment_id: shipment_id }, { driver: allRightDriver } );
      }
    
      //call this after the order finish delivery and user is giving feedback for each user
    
      async findOne17(shipmentDriverId: number): Promise<shipmentDriver> {
        return this.shipmentDriverModel.findOne({ shipmentDriverId: shipmentDriverId }).exec();
      }
    
      async findAll17(): Promise<shipmentDriver[]> {
        return this.shipmentDriverModel.find().exec();
      }
    
      async delete17(shipmentDriverId: number){
        let newcat4 = await this.shipmentDriverModel.findOneAndRemove({ shipmentDriverId: shipmentDriverId });
      }
    
      async updateQr(shipmentDriverId: number){
        let i = 0;
        let k = await this.shipmentDriverModel.findOne({ shipmentDriverId: shipmentDriverId });
        let kk = []
        kk = (await k).packageQr;
        while(kk[i]){
          i++;
        }
        kk[i] = i;
        await this.shipmentDriverModel.findOneAndUpdate({ shipmentDriverId: shipmentDriverId }, { packageQr: kk } );
      }
    
}