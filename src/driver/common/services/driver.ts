import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { driver, driverDocument } from '../schemas/driver';
import { shipment, shipmentDocument } from '../schemas/shipment';

@Injectable()

export class DriverService {
  constructor(
    @InjectModel(driver.name) private readonly driverModel: Model<driverDocument>,
    @InjectModel(shipment.name) private readonly shipmentModel: Model<shipmentDocument>){}
    
    async create2(user_name: string, password: string, full_name: string, phone_number: string, rating: string,
      model: string, truck_type: string, favor: number, truck_plate: string,
      gender: string, birth: string, birthPlace: number, currentPlace: string, citizenID: string,
      IDDate: string, IDPlace: string, licenseID: number, licenseType: string, licenseDate: string,
      licensePlace: string, taxID: string, bankID: number, bankName: string){
        let rejectShipment = [];
        const k = await this.driverModel.countDocuments({});
        const salt = await bcrypt.genSalt(10);
        const hashed_pass = await bcrypt.hash(password, salt);
        console.log(k);
        var user_id = k + 1;
        const OderDone = 0;
        var t = await this.driverModel.findOne({phone_number: phone_number});
        if (t != null){
          return 'Phone number already Taken';
        }
        console.log(hashed_pass);
        password = hashed_pass;
        user_name = phone_number;
        const newCat = new this.driverModel({
          user_name,
          password,
          full_name,
          phone_number,
          rating,
          model,
          truck_type,
          favor,
          truck_plate,
          OderDone,
          rejectShipment,
          gender,
          birth,
          birthPlace,
          currentPlace,
          citizenID,
          IDDate,
          IDPlace,
          licenseID,
          licenseType,
          licenseDate,
          licensePlace,
          taxID, 
          bankID,
          bankName,
          user_id,
        });
        const result = await newCat.save();
        console.log(result);
        return 'A New document have been created';
      }
    
      async findOne2(user_namePostMan: string): Promise<driver> {
        return this.driverModel.findOne({ phone_number: user_namePostMan }).exec();
      }
    
      async userExists2 (user_namePostMan: string) {
        const userExists = await this.driverModel.exists({ user_name: user_namePostMan });
        if (userExists) return 1;
      }
    
      async findAll2(): Promise<driver[]> {
        return this.driverModel.find().exec();
      }
    
      // async modifyDriver(distanceNew: number[], typeTruckNew: string[]){
        
      //   for(var i = 1; i <19; i++){
      //     var y = i -1;
      //     let newcat4 = await this.driverModel.findOneAndUpdate({ user_id: i }, { distance: distanceNew[y] } );
      //     const result = await newcat4.save();
      //     console.log(distanceNew[y]);

      //   }
        
    
      //   for(var i = 1; i <19; i++){
      //     var y = i -1;
      //     let newcat4 = await this.driverModel.findOneAndUpdate({ user_id: i }, { distance: distanceNew[y] } );
      //     const result = await newcat4.save();
      //     console.log(distanceNew[y]);

      //   }
    
      //   var min = 999;
      //   var min2 = 999;
    
      //   for(var i = 1; i <19; i++){
      //     var y = i -1;

      //     if((await this.driverModel.findOne({ user_id: i }).exec()).distance < min
      //         && (await this.driverModel.findOne({ user_id: i }).exec()).truck_type == typeTruckNew[0]){
      //       min = (await this.driverModel.findOne({ user_id: i }).exec()).distance;
      //     }
      //   }
    
      //   for(var i = 1; i <19; i++){
      //     var y = i -1;

      //     if((await this.driverModel.findOne({ user_id: i }).exec()).distance < 50
      //         && (await this.driverModel.findOne({ user_id: i }).exec()).truck_type == typeTruckNew[0]
      //         && (await this.driverModel.findOne({ user_id: i }).exec()).favor == 1){
      //       min = (await this.driverModel.findOne({ user_id: i }).exec()).distance;
      //     }
      //   }
      //   console.log(min);

      //   if(typeTruckNew[1] == null)
      //   {
      //     console.log('wrong');
      //     return this.driverModel.findOne({distance: min});
      //   }
    
      //   for(var i = 1; i <19; i++){
      //     var y = i -1;

      //     if((await this.driverModel.findOne({ user_id: i }).exec()).distance < min2
      //         && (await this.driverModel.findOne({ user_id: i }).exec()).truck_type == typeTruckNew[1]){
      //       min2 = (await this.driverModel.findOne({ user_id: i }).exec()).distance;
      //     }
      //   }
    
      //   for(var i = 1; i <19; i++){
      //     var y = i -1;
      //     if((await this.driverModel.findOne({ user_id: i }).exec()).distance < 50
      //         && (await this.driverModel.findOne({ user_id: i }).exec()).truck_type == typeTruckNew[1]
      //         && (await this.driverModel.findOne({ user_id: i }).exec()).favor == 1){
      //       min2 = (await this.driverModel.findOne({ user_id: i }).exec()).distance;
      //     }
      //   }

      //   console.log('min2');
      //   console.log(min);
      //   console.log(min2);
      //   var pop = min2;
      //   var kk2 = await this.driverModel.find({"$or": [{ "distance": pop}, { "distance": min}]}).exec();
      //   return kk2;
      // }
    
      // async modifyDriver3(latPick: number, longPick: number, typeTruckNew: string[], latDriver: number[], longDriver: number[]){
        
      //   var distanceNew = [];
      //   const haversine = require('haversine')
      //   const pick = { latitude: latPick, longitude: longPick }
      //   for(var i = 1; i <19; i++){
      //     var y = i -1;
      //     const driver = { latitude: latDriver[i], longitude: longDriver[i] }
      //     distanceNew[y] = (haversine(pick, driver));
      //     console.log(distanceNew[y]) 
      //   }
      
    
      //   for(var i = 1; i <19; i++){
      //     var y = i -1;
      //     let newcat4 = await this.driverModel.findOneAndUpdate({ user_id: i }, { distance: distanceNew[y] });
      //     const result = await newcat4.save();
      //     console.log(distanceNew[y]);
      //   }
        
    
      //   for(var i = 1; i <19; i++){
      //     var y = i -1;
      //     let newcat4 = await this.driverModel.findOneAndUpdate({ user_id: i }, { distance: distanceNew[y] } );
      //     const result = await newcat4.save();
      //     console.log(distanceNew[y]);
      //   }
    
      //   var min = 999;
      //   var min2 = 999;
    
      //   for(var i = 1; i <19; i++){
      //     var y = i -1;
      //     if((await this.driverModel.findOne({ user_id: i }).exec()).distance < min
      //         && (await this.driverModel.findOne({ user_id: i }).exec()).truck_type == typeTruckNew[0]){
      //       min = (await this.driverModel.findOne({ user_id: i }).exec()).distance;
      //     }
      //   }
    
      //   for(var i = 1; i <19; i++){
      //     var y = i -1;
      //     if((await this.driverModel.findOne({ user_id: i }).exec()).distance < 50
      //         && (await this.driverModel.findOne({ user_id: i }).exec()).truck_type == typeTruckNew[0]
      //         && (await this.driverModel.findOne({ user_id: i }).exec()).favor == 1){
      //       min = (await this.driverModel.findOne({ user_id: i }).exec()).distance;
      //     }
      //   }
      //   console.log(min);

      //   if(typeTruckNew[1] == null)
      //   {
      //     console.log('wrong');
      //     return this.driverModel.findOne({distance: min});
      //   }
    
      //   for(var i = 1; i <19; i++){
      //     var y = i -1;

      //     if((await this.driverModel.findOne({ user_id: i }).exec()).distance < min2
      //         && (await this.driverModel.findOne({ user_id: i }).exec()).truck_type == typeTruckNew[1]){
      //       min2 = (await this.driverModel.findOne({ user_id: i }).exec()).distance;
      //     }
      //   }
    
      //   for(var i = 1; i <19; i++){
      //     var y = i -1;

      //     if((await this.driverModel.findOne({ user_id: i }).exec()).distance < 50
      //         && (await this.driverModel.findOne({ user_id: i }).exec()).truck_type == typeTruckNew[1]
      //         && (await this.driverModel.findOne({ user_id: i }).exec()).favor == 1){
      //       min2 = (await this.driverModel.findOne({ user_id: i }).exec()).distance;
      //     }
      //   }

      //   console.log('min2');
      //   console.log(min);
      //   console.log(min2);
      //   var pop = min2;
      //   var kk2 = await this.driverModel.find({"$or": [{ "distance": pop}, { "distance": min}]}).exec();
      //   return kk2;
      // }
    
      async shipmentRejection(shipment_id: number, user_id: number){
        let getDriver = await this.driverModel.findOne({ user_id: user_id });
        let array = [];
        array = await getDriver.rejectShipment;
        let i = 0;
        while(array[i]){
          i++;
        }
        array[i] = shipment_id;
        let newcat4 = await this.driverModel.findOneAndUpdate({ user_id: user_id }, {rejectShipment: array});
      }
    
    //   async findDriver(shipment_id: number, latPick: number, longPick: number, typeTruckNew: string[], latDriver: number[], longDriver: number[]): Promise<driver[]>{
    //     //Get Distance through lat, long
    //     let shipment = await this.shipmentModel.findOne({ shipment_id: shipment_id }).exec();
        
    
    //     const k = await this.driverModel.countDocuments({});
    //     var final = [];
    //     //(latPick: number, longPick: number, typeTruckNew: string[], latDriver: number[], longDriver: number[]){
    //     var distanceNew = [];
    //     const haversine = require('haversine')
    //     const pick = {latitude: latPick, longitude: longPick }
    //     for(var i = 1; i <= k; i++){
    //       var y = i - 1;
    //       const driver = {latitude: latDriver[i], longitude: longDriver[i] };
    //       distanceNew[y] = (haversine(pick, driver));
    //       console.log(distanceNew[y]); 
    //     }
    //     //Apply distances
    //     for(var i = 1; i <= k; i++){
    //       var y = i -1;
    //       let newcat4 = await this.driverModel.findOneAndUpdate({ user_id: i }, {distance: distanceNew[y]});
    //       const result = await newcat4.save();
    //       console.log(distanceNew[y]);
    //       //console.log(distanceNew[i]);
    //     }
    //     //Rejection exception
    //     for(var i = 1; i <= k; i++){
    //       var y = i -1;
    //       let newcat5 = await this.driverModel.findOne({ user_id: i });
    //       if((await newcat5).occupy = 1){
    //         newcat5.distance = 9999;
    //       }
    //       let zz = []; 
    //       let ii = 0;
    //       zz = await newcat5.rejectShipment;
    //       while(zz[ii]){
    //         if(zz[ii] == shipment_id){
    //           newcat5.distance = 9999;
    //         }
    //         ii++;
    //       }
    //     }
    //     //Find trucks
    //     let f = 0;
    //     while(typeTruckNew)
    //     {
    //       var a = this.driverModel.find({truck_type: typeTruckNew[f]});
    //       var priority = a.findOne({favor: 1}).sort('distance').exec();
    //       if((await priority).distance < 50){
    //         final[i] = priority;
    //       }
    //       final[i] = a.findOne({favor: 0}).sort('distance').exec();
    //       f++;
    //     }
    //     return final;
    // }
    
    //   async testMin(){
    //    return this.driverModel.findOne({favor: 1}).sort('distance').exec();
    //   }
    
    //   async pathFinder(lat: number[], long: number[]){
    //     let distance = [];
    //     let haversine = require('haversine');
    //     let i = 0 ;
    //     while(lat[i]){
    //       let y = 0;
    //       const pick = {latitude: lat[i], longitude: long[i]};
    //       distance[i] = [];
    //       while(long[y]){
    //         const other = {latitude: lat[y], longitude: long[y]};
    //         distance[i][y] = (haversine(pick, other));
    //         y++;
    //       }
    //       i++;
    //     }
    //     var solver = require('node-tspsolver')
    //     var costMatrix = distance;
    //     var final;
    //     console.log(costMatrix);
    //     let theLast = solver.solveTsp(costMatrix, true, {})
    //     theLast.then(function (result){
    //       console.log(result);
    //     })
    //     return theLast;
    //   }

      // async pathFinderHandmade(lat: number[], long: number[]){
      //   let z = 0;
      //   let zz = 0;
      //   while(lat[z]){
      //     z++;
      //   }
      //   z--;  
      //   console.log(z);
      //   let question = [];
      //   while(z >= 0){
      //     question[z-1] = z;
      //     z--;
      //   }
      //   console.log(question);
      //   console.log("\n////////////////\n");
        
      //   var perm = require('array-permutation');
      //   var k = [];
      //   let f = 0;
        
      //   let ii = 0;
      //   var iter = perm(question);
      //   for (var p of iter) {
      //     k[f] = p;
      //     z = 0;
      //     f++;
      //   }
      //   f = 0;
      //   z = 0;
      //   while(k[0][ii]){
      //     ii++;
      //   }
      //   zz = ii;
      //   while(k[f]){
      //     while(ii>0){
      //       k[f][ii] = k[f][ii-1];
      //       ii--;
      //     }
      //     ii = zz;
      //     k[f][0] = 0;
      //     f++;
      //   }
      //   console.log(k);
      //   const haversine = require('haversine');
      //   let i = 0;
      //   let y = 0;
      //   console.log("\n////////////////\n");
      //   console.log("\n////////////////\n");
      //   let from;
      //   let to; 
      //   let results;
      //   let yy;
      //   let final = [];
      //   let plus = 0;
      //   let finalest = 0;
      //   let finalestArray = [];
      //   while(k[i]){
      //     yy = 1;
      //     while(k[i][yy] != null){
      //       yy++;
      //       from = {latitude: lat[k[i][y]], longitude: long[k[i][y]]};
      //       to = {latitude: lat[k[i][y+1]], longitude: long[k[i][y+1]]};
      //       results = haversine(from, to);
      //       plus = plus + results;
      //       final[i] = plus;
      //       y++;
      //     }
      //     console.log("",k[i]);
      //     console.log("\n",final[i]);
      //     console.log("\n////////////////\n\n");
      //     plus = 0;
      //     y = 0;
          
      //     i++;
      //   }
      //   i = 0;
      //   zz = 0;
      //   finalest = final[i]
      //   while(final[i]){
      //     if(final[i] < finalest){
      //       finalest = final[i];
      //       z = i;
      //     }
      //     i++;
      //   }
      //   console.log("\nShortest Path: ", finalest);
      //   console.log("\n");
      //   console.log(k[z]);
      //   console.log();
      //   return k[z];
      // }
    
      // async pathFinderFinal(lat: number[], long: number[]){
      //   let k = 0;
      //   let count = 0;
      //   while(lat[k]){
      //     k++;
      //   }
      //   if(k > 8){
      //     return this.pathFinder(lat,long);
      //   }
      //   return this.pathFinderHandmade(lat,long);
      // }
    
      //Call this if driver finish shipment
      async finishShipment(shipment_id: shipment, user_id: driver){
        //here how it really done
        // await this.catModel2.findOneAndUpdate(
        //   {
        //     id: user_id
        //   },
        //   {$push: {"done": shipment_id } },
        //   { 
        //     new: true
        //   }
        // )
        await this.driverModel.findOneAndUpdate({ user_id: user_id }, { occupy: 0 } );
      }

      async delete2(user_id: number) {
        let pp = this.driverModel.findOneAndRemove({ user_id: user_id }).exec();
        var k = await this.driverModel.countDocuments({});
        var k2 = await this.driverModel.countDocuments({});
        var i: number;

        i = user_id;
        // typeof (i - 0);
        // let one = 1;
        i = +i + 1;
        //let i 
        console.log(i);
        while(i < k + 1){
          console.log(i);
          let newcat = await this.driverModel.findOneAndUpdate({ user_id: i }, { user_id: i - 1 } );
          i++
        }
      }

}