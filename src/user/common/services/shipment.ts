import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { shipment, shipmentDocument } from '../schemas/shipment';
import { address, addressDocument } from '../schemas/address';
import { shipmentDriver, shipmentDriverDocument } from '../schemas/shipment_driver';
import { packageWeight, packageWeightDocument } from '../schemas/package_weight';
import { truckTypes, truckTypesDocument } from '../schemas/truck_types';
@Injectable()

export class ShipmentService {
  constructor(
    @InjectModel(shipment.name) private readonly shipmentModel: Model<shipmentDocument>,
    @InjectModel(address.name) private readonly addressModel: Model<addressDocument>,
    @InjectModel(packageWeight.name) private readonly packageWeightModel: Model<packageWeightDocument>,
    @InjectModel(truckTypes.name) private readonly truckTypesModel: Model<truckTypesDocument>){}
    
    async create8(senderName: string, senderPhone: string, recAddress: address[], senderAddress: address[], driver: shipmentDriver[], time: Date, typeOfShipment: string, manual: string, size: packageWeight, trucks: truckTypes[], payment: string, fee: string, voucher: number, user_id: number){
        var k = await this.shipmentModel.countDocuments({})
        let shipment_id;
        console.log(k);
        shipment_id = k + 1;
        const newCat = new this.shipmentModel({
          senderName,
          senderPhone,
          recAddress,
          senderAddress,
          driver,
          time,
          typeOfShipment,
          manual,
          size,
          trucks,
          payment,
          fee,
          voucher,
          user_id,
          shipment_id,
        });
        const result = await newCat.save();

        let i = 0;
        while(recAddress[i]){
          recAddress[i].shipmentID = shipment_id;
          const newCat2 = new this.addressModel(recAddress[i]);
          const result2 = await newCat2.save();
          i++;
        }

        i = 0;
        while(senderAddress[i]){
          senderAddress[i].shipmentID = shipment_id;
          const newCat3 = new this.addressModel(senderAddress);
          const result3 = await newCat3.save();
          i++;
        }
        
        console.log(result);
        return 'A New document have been created';
      }
    
      async findOne8(id: number): Promise<shipment> {
        return this.shipmentModel.findOne({ shipment_id: id }).exec();
      }
    
      async findAll8(): Promise<shipment[]> {
        return this.shipmentModel.find().exec();
      }
    
      async create89(recAddress: address[]){
        var k = await this.shipmentModel.countDocuments({})

        console.log(k);
    
        const newCat = new this.shipmentModel({
          recAddress,
          
        });
        const result = await newCat.save();
    
      }
    
      async findOne89(id: number){
        return this.shipmentModel.findOne({ shipment_id: id }).exec();
      }
    
      async findAll98(){
        return this.shipmentModel.find().exec();
      }

      async delete8(shipment_id: number) {
        let pp = this.shipmentModel.findOneAndRemove({ shipment_id: shipment_id }).exec();
        var k = await this.shipmentModel.countDocuments({});
        var k2 = await this.shipmentModel.countDocuments({});
        var i: number;

        i = shipment_id;
        // typeof (i - 0);
        // let one = 1;
        i = +i + 1;
        //let i 
        console.log(i);
        while(i < k + 1){
          console.log(i);
          let newcat = await this.shipmentModel.findOneAndUpdate({ shipment_id: i }, { shipment_id: i - 1 } );
          i++
        }  
      }
    
}