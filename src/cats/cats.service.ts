// import { Model } from 'mongoose';
// import { Injectable, Inject } from '@nestjs/common';
// import { Cat } from './interfaces/cat.interface';
// import { CreateCatDto } from './dto/create-cat.dto';

// @Injectable()
// export class CatsService {
//   constructor(
//     @Inject('CAT_MODEL')
//     private catModel: Model<Cat>,
//   ) {}

//   async create(createCatDto: CreateCatDto): Promise<Cat> {
//     const createdCat = new this.catModcatmodel5el(createCatDto);
//     return createdCat.save();
//   }

//   async findAll(): Promise<Cat[]> {
//     return this.catModel.find().exec();
//   }
// }

import { ConsoleLogger, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { exec } from 'child_process';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { promisify } from 'util';
import { CreateCatDto } from './dto/create-cat.dto';
//import { defaultApp } from './firebaseAdmin';

import { validateRule } from './dto/validate.dto';
import { Cat, CatDocument } from './schemas/cats.schema';
import { Cat2, CatDocument2 } from './schemas/cats.schema';
import { Cat3, CatDocument3 } from './schemas/cats.schema';
import { Cat4, CatDocument4 } from './schemas/cats.schema';
import { Cat5, CatDocument5 } from './schemas/cats.schema';
import { Cat55, CatDocument55 } from './schemas/cats.schema';
import { Cat6, CatDocument6 } from './schemas/cats.schema';
import { Cat7, CatDocument7 } from './schemas/cats.schema';
import { Cat8, CatDocument8 } from './schemas/cats.schema';
import { Cat9, CatDocument9 } from './schemas/cats.schema';
import { Cat10, CatDocument10 } from './schemas/cats.schema';
import { Cat11, CatDocument11 } from './schemas/cats.schema';
import { Cat12, CatDocument12 } from './schemas/cats.schema';
import { Cat13, CatDocument13 } from './schemas/cats.schema';
import { Cat14, CatDocument14 } from './schemas/cats.schema';
import { Cat15, CatDocument15 } from './schemas/cats.schema';
import { Cat16, CatDocument16 } from './schemas/cats.schema';
import { Cat99, CatDocument99 } from './schemas/cats.schema';
import { Cat100, CatDocument100 } from './schemas/cats.schema';
import { Cat17, CatDocument17 } from './schemas/cats.schema';
import { Cat18, CatDocument18 } from './schemas/cats.schema';
import { Cat19, CatDocument19 } from './schemas/cats.schema';
import { Cat20, CatDocument20 } from './schemas/cats.schema';
import { Cat21, CatDocument21 } from './schemas/cats.schema';
import { Cat22, CatDocument22 } from './schemas/cats.schema';
import { Cat23, CatDocument23 } from './schemas/cats.schema';
import { Cat24, CatDocument24 } from './schemas/cats.schema';
import { Cat25, CatDocument25 } from './schemas/cats.schema';
import { Cat26, CatDocument26 } from './schemas/cats.schema';
import { Cat27, CatDocument27 } from './schemas/cats.schema';
import { Cat28, CatDocument28 } from './schemas/cats.schema';
import { Console } from 'console';
//import { JwtModule } from '@nestjs/jwt';
//import { JwtService } from '@nestjs/jwt';

@Injectable()

export class CatsService {
  
  constructor(
    //private jwtService: JwtService,
  
    @InjectModel(Cat.name) private readonly catModel: Model<CatDocument>,
    @InjectModel(Cat2.name) public readonly catModel2: Model<CatDocument2>,
    @InjectModel(Cat3.name) private readonly catModel3: Model<CatDocument3>,
    @InjectModel(Cat4.name) private readonly catModel4: Model<CatDocument4>,
    @InjectModel(Cat5.name) private readonly catModel5: Model<CatDocument5>,
    @InjectModel(Cat55.name) private readonly catModel55: Model<CatDocument55>,
    @InjectModel(Cat6.name) private readonly catModel6: Model<CatDocument6>,
    @InjectModel(Cat7.name) private readonly catModel7: Model<CatDocument7>,
    @InjectModel(Cat8.name) private readonly catModel8: Model<CatDocument8>,
    @InjectModel(Cat9.name) private readonly catModel9: Model<CatDocument9>,
    @InjectModel(Cat10.name) private readonly catModel10: Model<CatDocument10>,
    @InjectModel(Cat11.name) private readonly catModel11: Model<CatDocument11>,
    @InjectModel(Cat12.name) private readonly catModel12: Model<CatDocument12>,
    @InjectModel(Cat13.name) private readonly catModel13: Model<CatDocument13>,
    @InjectModel(Cat14.name) private readonly catModel14: Model<CatDocument14>,
    @InjectModel(Cat15.name) private readonly catModel15: Model<CatDocument15>,
    @InjectModel(Cat16.name) private readonly catModel16: Model<CatDocument16>,
    @InjectModel(Cat99.name) private readonly catModel99: Model<CatDocument99>,
    @InjectModel(Cat99.name) private readonly catModel100: Model<CatDocument100>,
    @InjectModel(Cat17.name) private readonly catModel17: Model<CatDocument17>,
    @InjectModel(Cat18.name) private readonly catModel18: Model<CatDocument18>,
    @InjectModel(Cat19.name) private readonly catModel19: Model<CatDocument19>,
    @InjectModel(Cat20.name) private readonly catModel20: Model<CatDocument20>,
    @InjectModel(Cat21.name) private readonly catModel21: Model<CatDocument21>,
    @InjectModel(Cat22.name) private readonly catModel22: Model<CatDocument22>,
    @InjectModel(Cat23.name) private readonly catModel23: Model<CatDocument23>,
    @InjectModel(Cat24.name) private readonly catModel24: Model<CatDocument23>,
    @InjectModel(Cat25.name) private readonly catModel25: Model<CatDocument25>,
    @InjectModel(Cat26.name) private readonly catModel26: Model<CatDocument26>,
    @InjectModel(Cat27.name) private readonly catModel27: Model<CatDocument27>,
    @InjectModel(Cat28.name) private readonly catModel28: Model<CatDocument28>
  
    
    ) {
      
    }



  async create(user_name: string, password: string, full_name: string, phone_number: string, birth: Date, gender: string, nick_name: string, avatar: string, wallet_money: number, role: string, login_type: number, login_id: string, search_history: Cat18, user_id: number){
    // if(user_name == null){
    //   user_name = 'xxxxx';
    // }
    if (!user_name){
      user_name = "";
    }
    if (!password){
      password = "";
    }
    if (!gender){
      gender = "";
    }
    if (!avatar){
      avatar = 'data:image/png;base64,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';
    }
    if (!wallet_money){
      wallet_money = 0;
    }
    if (!role){
      role = 'user';
    }
    if (!login_id){
      login_id = "";
    }
    if (!login_type){
      login_type = 0;
    }
    if (!nick_name){
      nick_name = "";
    }
    var k = await this.catModel.countDocuments({})
    const salt = await bcrypt.genSalt(10);
    const hashed_pass = await bcrypt.hash(password, salt);
    //const isMatch = await bcrypt.compare(password, hashed_pass);
    //return hashed_pass;
    console.log(k);
    user_id = k + 1;
    let t = await this.catModel.findOne({user_name: user_name})
    if (user_name != null && t != null && user_name != "" && user_name != " "){
      var objJson1;
      throw new HttpException('DUPLICATE_USERNAME', HttpStatus.FORBIDDEN);
      //return objJson1 = ('{"statusCode":"403","message": "Cannot POST /user/validate","error":"DUPLICATE_USERNAME"}');
  }
    t = await this.catModel.findOne({phone_number: phone_number})
    if (!!t){
      throw new HttpException('DUPLICATE_PHONE', HttpStatus.FORBIDDEN);
      }
    console.log(hashed_pass);
    password = hashed_pass;
    const newCat = new this.catModel({
      user_name,
      password,
      full_name,
      phone_number,
      birth,
      gender,
      nick_name,
      avatar,
      wallet_money,
      role,
      login_type,
      login_id,
      search_history,
      user_id,
    });
    const result = await newCat.save();
    console.log(result);
    return objJson1 = ('{"statusCode":"0"}');
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

  async updateUsername(user_id: number, user_name_new: string){
    let newcat4 = await this.catModel.findOneAndUpdate({ user_id: user_id }, { user_name: user_name_new } );
    if (!user_id || !user_name_new){
      var objJson1;
      throw new HttpException('NULL', HttpStatus.NOT_ACCEPTABLE);
      //return objJson1 = {"statusCode":"400","message":"Wrong format"};
    }
    return objJson1 = {"statusCode":"200","message":"Success"};
  }

  async updateFullname(user_id: number, full_name_new: string){

    let newcat4 = await this.catModel.findOneAndUpdate({ user_id: user_id }, { full_name: full_name_new } );
    if (!user_id || !full_name_new){
      var objJson1;
      throw new HttpException('NULL', HttpStatus.NOT_ACCEPTABLE);
      //return objJson1 = {"statusCode":"400","message":"Wrong format"};
    }
    return objJson1 = {"statusCode":"200","message":"Success"};
  }

  async updatePhoneNumber(user_id: number, phone_number_new: string){
    let newcat4 = await this.catModel.findOneAndUpdate({ user_id: user_id }, { phone_number: phone_number_new } );
    if (!user_id || !phone_number_new){
      var objJson1;
      throw new HttpException('NULL', HttpStatus.NOT_ACCEPTABLE);
      //return objJson1 = {"statusCode":"400","message":"Wrong format"};
    }
    return objJson1 = {"statusCode":"200","message":"Success"};
  }

  async updateBirth(user_id: number, birth_new: Date){
    let newcat4 = await this.catModel.findOneAndUpdate({ user_id: user_id }, { birth: birth_new } );
    if (!user_id || !birth_new){
      var objJson1;
      throw new HttpException('NULL', HttpStatus.NOT_ACCEPTABLE);
      return objJson1 = {"statusCode":"400","message":"Wrong format"};
    }
    return objJson1 = {"statusCode":"200","message":"Success"};
  }

  async updateGender(user_id: number, gender_new: string){
    let newcat4 = await this.catModel.findOneAndUpdate({ user_id: user_id }, { gender: gender_new } );
    if (!user_id || !gender_new){
      var objJson1;
      throw new HttpException('NULL', HttpStatus.NOT_ACCEPTABLE);
      return objJson1 = {"statusCode":"400","message":"Wrong format"};
    }
    return objJson1 = {"statusCode":"200","message":"Success"};
  }

  async updateNickName(user_id: number, nick_name_new: string){
    let newcat4 = await this.catModel.findOneAndUpdate({ user_id: user_id }, { nick_name: nick_name_new } );
    if (!user_id || !nick_name_new){
      var objJson1;
      throw new HttpException('NULL', HttpStatus.NOT_ACCEPTABLE);
      return objJson1 = {"statusCode":"400","message":"Wrong format"};
    }
    return objJson1 = {"statusCode":"200","message":"Success"};
  }

  async updateAvatar(user_id: number, avatar_new: string){
    let newcat4 = await this.catModel.findOneAndUpdate({ user_id: user_id }, { avatar: avatar_new } );
    if (!user_id || !avatar_new){
      var objJson1;
      throw new HttpException('NULL', HttpStatus.NOT_ACCEPTABLE);
      return objJson1 = {"statusCode":"400","message":"Wrong format"};
    }
    return objJson1 = {"statusCode":"200","message":"Success"};
  }
  
  async updatePassword(user_id: number, password: string, password_new: string) {
    var k = await this.catModel.findOne({user_id: user_id});
    var f = await k.password;
    console.log(f);
    console.log(password);
    const isMatch = await bcrypt.compareSync(password, f);
    console.log(isMatch);
    
    if(isMatch == true){
      const salt = await bcrypt.genSalt(10);
      const hashed_pass = await bcrypt.hash(password_new, salt);
      let newcat4 = await this.catModel.findOneAndUpdate({ phone_number: user_id }, { password: hashed_pass } );
      if (user_id == null || password_new == null){
        throw new HttpException('NULL', HttpStatus.NOT_ACCEPTABLE);
        var objJson1 = JSON.parse('{"statusCode":"400",\n"message":"Wrong format"}');
        return objJson1;
      }
      var objJson1 = JSON.parse('{"statusCode":"200",\n"message":"Success"}');
      return objJson1;
    }
    throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
    var objJson1 = JSON.parse('{"statusCode":"401",\n"message":"Unauthorized"}');
    return objJson1;
  }
  async updateFull(user_id: number, user_name_new: string, full_name_new: string, birth_new: Date, gender_new: string, nick_name_new: string, avatar_new: string, ){
    var objJson1;
    if (!user_id){
      throw new HttpException('NULL', HttpStatus.NOT_ACCEPTABLE);
    }
    if (!!user_name_new){
      let newcat4 = await this.catModel.findOneAndUpdate({ user_id: user_id }, { user_name: user_name_new } );
    }
    if (!!full_name_new){
      let newcat4 = await this.catModel.findOneAndUpdate({ user_id: user_id }, { full_name: full_name_new } );
    }
    if (!!birth_new){
      let newcat4 = await this.catModel.findOneAndUpdate({ user_id: user_id }, { birth: birth_new } );
    }
    if (!!gender_new){
      let newcat4 = await this.catModel.findOneAndUpdate({ user_id: user_id }, { gender: gender_new } );
    }
    if (!!nick_name_new){
      let newcat4 = await this.catModel.findOneAndUpdate({ user_id: user_id }, { nick_name: nick_name_new } );
    }
    if (!!avatar_new){
      let newcat4 = await this.catModel.findOneAndUpdate({ user_id: user_id }, { avatar: avatar_new } );
    }user_id
    return objJson1 = {"statusCode":"200","message":"Success"};
  }
  //test return json
  async returnJson(a: string, b: string){
    var objJson1;
    return objJson1 = {"statusCode":"400","message":"Wrong format"};
  }
  async deleteUser(user_id: number){
    var k = await this.catModel.countDocuments({});
    console.log(k);
    let newcat4 = await this.catModel.findOneAndRemove({ user_id: user_id });
    var k = await this.catModel.countDocuments({});
    var k2 = await this.catModel.countDocuments({});
    var i: number;

    i = user_id;
    // typeof (i - 0);
    // let one = 1;
    i = +i + 1;
    //let i 
    console.log(i);
    while(i < k + 1){
      console.log(i);
      let newcat = await this.catModel.findOneAndUpdate({ user_id: i }, { user_id: i - 1 } );
      i++
    }
    console.log(k2);
    //return newcat4;
  }
  async count(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }
  // async findOne(user_name: string): Promise<Cat> {
  //   return this.catModel.findOne({ _id: user_name }).exec();
  // }

  async findOne(user_namePostMan: string): Promise<Cat> {
    return this.catModel.findOne({ phone_number: user_namePostMan }).exec();
  }

  async userExists (user_namePostMan: string) {
    const userExists = await this.catModel.exists({ user_name: user_namePostMan });
    if (userExists) return 1;
  }
//lovely.user_name, lovely.password, lovely.full_name, lovely.phone_number
  async validate(user_name: string, password: string, full_name: string, phone_number: string){
    var t = await this.catModel.findOne({user_name: user_name})

    if (user_name != null && t != null && user_name != "" && user_name != " "){
      var objJson1;
      throw new HttpException('DUPLICATE_USERNAME', HttpStatus.FORBIDDEN);
      //return objJson1 = ('{"statusCode":"403","message": "Cannot POST /user/validate","error":"DUPLICATE_USERNAME"}');
  }
    t = await this.catModel.findOne({phone_number: phone_number})
    if (!!t){
        throw new HttpException('DUPLICATE_PHONE', HttpStatus.FORBIDDEN);
        }
      var objJson1 = JSON.parse('{"statusCode":"0"}');
        return objJson1;
    }

    async OTPcheck(OTP: string){
      let a = '123456'
      if(OTP != a){
          throw new HttpException('WRONG_OTP', HttpStatus.EXPECTATION_FAILED);
      }
  }
  async create18(content: string, length: number, detail: string, user_id: number){
    const newCat = new this.catModel18({
      content,
      length,
      detail,
      user_id,
    });
    const result = await newCat.save();
    console.log(result);
    //return 'A New document have been created';
    let f = this.catModel.findOne({user_id: user_id});
    var current_search_history = [];
    current_search_history = (await f).search_history;
    let i = 0;
    while(current_search_history[i]){
      i++;
    }
    // if they already full 5 search history
    if(i == 5){
      i = 4;
    }
    let y = 0;
    while(y < 4){
      current_search_history[y] = current_search_history[y+1];
      y++;
    }
    //
    current_search_history[i] = newCat;
    let newcat4 = await this.catModel.findOneAndUpdate({ user_id: user_id }, {search_history: current_search_history});
  }

  async findOne18(content: string): Promise<Cat18> {
    return this.catModel18.findOne({ content: content }).exec();
  }

  async findAll18(): Promise<Cat18[]> {
    return this.catModel18.find().exec();
  }

  async delete18(content: string){
    let newcat4 = await this.catModel18.findOneAndRemove({ content: content });
  }

  async create2(user_name: string, password: string, full_name: string, phone_number: string, rating: string,
     model: string, truck_type: string, distance: number, favor: number, truck_plate: string,
     gender: string, birth: string, birthPlace: number, currentPlace: string, citizenID: string,
     IDDate: string, IDPlace: string, licenseID: number, licenseType: string, licenseDate: string,
     licensePlace: string, taxID: string, bankID: number, bankName: string){
    let rejectShipment = [];
    const k = await this.catModel2.countDocuments({});
    const salt = await bcrypt.genSalt(10);
    const hashed_pass = await bcrypt.hash(password, salt);
    console.log(k);
    var driver_id = k + 1;
    const OderDone = 0;
    var t = await this.catModel2.findOne({phone_number: phone_number});
    if (t != null){
      return 'Phone number already Taken';
    }
    console.log(hashed_pass);
    password = hashed_pass;
    user_name = phone_number;
    const newCat = new this.catModel2({
      user_name,
      password,
      full_name,
      phone_number,
      rating,
      model,
      truck_type,
      distance,
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
      driver_id,
    });
    const result = await newCat.save();
    var createCordDriver = this.createCord(1, 1, favor, driver_id);
    console.log(result);
    return 'A New document have been created';
  }

  async findOne2(user_namePostMan: string): Promise<Cat2> {
    return this.catModel2.findOne({ phone_number: user_namePostMan }).exec();
  }

  async userExists2 (user_namePostMan: string) {
    const userExists = await this.catModel2.exists({ user_name: user_namePostMan });
    if (userExists) return 1;
  }

  async findAll2(): Promise<Cat2[]> {
    return this.catModel2.find().exec();
  }

  async delete2(driver_id: number) {
    let pp = this.catModel2.findOneAndRemove({ driver_id: driver_id }).exec();
    var k = await this.catModel2.countDocuments({});
    var k2 = await this.catModel2.countDocuments({});
    var i: number;

    i = driver_id;
    // typeof (i - 0);
    // let one = 1;
    i = +i + 1;
    //let i 
    console.log(i);
    while(i < k + 1){
      console.log(i);
      let newcat = await this.catModel2.findOneAndUpdate({ driver_id: i }, { driver_id: i - 1 } );
      i++
    }
    let pp2 = this.deleteCord(driver_id);
  }

  // async modifyDriver(distanceNew: number[], typeTruckNew: string[]){
    
  //   for(var i = 1; i <19; i++){
  //     var y = i -1;
  //     let newcat4 = await this.catModel2.findOneAndUpdate({ user_id: i }, { distance: distanceNew[y] } );
  //     const result = await newcat4.save();
  //     console.log(distanceNew[y]);
  //     //console.log(distanceNew[i]);
    
  //   }
    

  //   for(var i = 1; i <19; i++){
  //     var y = i -1;
  //     let newcat4 = await this.catModel2.findOneAndUpdate({ user_id: i }, { distance: distanceNew[y] } );
  //     const result = await newcat4.save();
  //     console.log(distanceNew[y]);
  //     //console.log(distanceNew[i]);
  //   }

  //   var min = 999;
  //   var min2 = 999;

  //   for(var i = 1; i <19; i++){
  //     var y = i -1;
  //     // console.log('test');
  //     // //console.log(distanceNew[i]);
  //     // var test = (await this.catModel2.findOne({ user_id: i }).exec()).distance;
  //     // var test2 = (await this.catModel2.findOne({ user_id: i }).exec()).truck_type;
  //     // console.log(test);
  //     // console.log(test2);
  //     if((await this.catModel2.findOne({ user_id: i }).exec()).distance < min
  //         && (await this.catModel2.findOne({ user_id: i }).exec()).truck_type == typeTruckNew[0]){
  //       min = (await this.catModel2.findOne({ user_id: i }).exec()).distance;
  //     }
  //   }

  //   for(var i = 1; i <19; i++){
  //     var y = i -1;
  //     //console.log(distanceNew[i]);
  //     if((await this.catModel2.findOne({ user_id: i }).exec()).distance < 50
  //         && (await this.catModel2.findOne({ user_id: i }).exec()).truck_type == typeTruckNew[0]
  //         && (await this.catModel2.findOne({ user_id: i }).exec()).favor == 1){
  //       min = (await this.catModel2.findOne({ user_id: i }).exec()).distance;
  //     }
  //   }
  //   console.log(min);
  //   //return this.catModel2.findOne({distance: min});
  //   if(typeTruckNew[1] == null)
  //   {
  //     console.log('wrong');
  //     return this.catModel2.findOne({distance: min});
  //   }

  //   for(var i = 1; i <19; i++){
  //     var y = i -1;
  //     //console.log(distanceNew[i]);
  //     if((await this.catModel2.findOne({ user_id: i }).exec()).distance < min2
  //         && (await this.catModel2.findOne({ user_id: i }).exec()).truck_type == typeTruckNew[1]){
  //       min2 = (await this.catModel2.findOne({ user_id: i }).exec()).distance;
  //     }
  //   }

  //   for(var i = 1; i <19; i++){
  //     var y = i -1;
  //     //console.log(distanceNew[i]);
  //     if((await this.catModel2.findOne({ user_id: i }).exec()).distance < 50
  //         && (await this.catModel2.findOne({ user_id: i }).exec()).truck_type == typeTruckNew[1]
  //         && (await this.catModel2.findOne({ user_id: i }).exec()).favor == 1){
  //       min2 = (await this.catModel2.findOne({ user_id: i }).exec()).distance;
  //     }
  //   }
  //   //return this.catModel2.findOne({distance: min2});
  //   console.log('min2');
  //   console.log(min);
  //   console.log(min2);
  //   var pop = min2;
  //   // var kk = this.catModel2.find({distance: 230});
  //   // var yy = this.catModel2.find({distance: 65});
  //   // const uio0 = [kk,yy];
  //   //const uio = [min,min2];
  //   var kk2 = await this.catModel2.find({"$or": [{ "distance": pop}, { "distance": min}]}).exec();
  //   return kk2;
  //   //console.log(this.catModel2.findOne({distance: min}));

  //   // if((await this.catModel2.findOne({ user_id: 3 }).exec()).distance < 50){
  //   //     return 'hardcore'
  //   // }
    
    
  //   // let newcat3 = await this.catModel2.findOneAndUpdate({ user_id: 17 }, { distance: 80 } );
  //   // const result = await newcat3.save();
  //   // console.log('kewk');
      
    
  //   // //const result = await newcat3.save();
  //   // console.log(result);
  //   // return newcat3;
    
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
  //     let newcat4 = await this.catModel2.findOneAndUpdate({ user_id: i }, { distance: distanceNew[y] });
  //     const result = await newcat4.save();
  //     console.log(distanceNew[y]);
  //     //console.log(distanceNew[i]);
  //   }
    

  //   for(var i = 1; i <19; i++){
  //     var y = i -1;
  //     let newcat4 = await this.catModel2.findOneAndUpdate({ user_id: i }, { distance: distanceNew[y] } );
  //     const result = await newcat4.save();
  //     console.log(distanceNew[y]);
  //     //console.log(distanceNew[i]);
  //   }

  //   var min = 999;
  //   var min2 = 999;

  //   for(var i = 1; i <19; i++){
  //     var y = i -1;
  //     // console.log('test');
  //     // //console.log(distanceNew[i]);
  //     // var test = (await this.catModel2.findOne({ user_id: i }).exec()).distance;
  //     // var test2 = (await this.catModel2.findOne({ user_id: i }).exec()).truck_type;
  //     // console.log(test);
  //     // console.log(test2);
  //     if((await this.catModel2.findOne({ user_id: i }).exec()).distance < min
  //         && (await this.catModel2.findOne({ user_id: i }).exec()).truck_type == typeTruckNew[0]){
  //       min = (await this.catModel2.findOne({ user_id: i }).exec()).distance;
  //     }
  //   }

  //   for(var i = 1; i <19; i++){
  //     var y = i -1;
  //     //console.log(distanceNew[i]);
  //     if((await this.catModel2.findOne({ user_id: i }).exec()).distance < 50
  //         && (await this.catModel2.findOne({ user_id: i }).exec()).truck_type == typeTruckNew[0]
  //         && (await this.catModel2.findOne({ user_id: i }).exec()).favor == 1){
  //       min = (await this.catModel2.findOne({ user_id: i }).exec()).distance;
  //     }
  //   }
  //   console.log(min);
  //   //return this.catModel2.findOne({distance: min});
  //   if(typeTruckNew[1] == null)
  //   {
  //     console.log('wrong');
  //     return this.catModel2.findOne({distance: min});
  //   }

  //   for(var i = 1; i <19; i++){
  //     var y = i -1;
  //     //console.log(distanceNew[i]);
  //     if((await this.catModel2.findOne({ user_id: i }).exec()).distance < min2
  //         && (await this.catModel2.findOne({ user_id: i }).exec()).truck_type == typeTruckNew[1]){
  //       min2 = (await this.catModel2.findOne({ user_id: i }).exec()).distance;
  //     }
  //   }

  //   for(var i = 1; i <19; i++){
  //     var y = i -1;
  //     //console.log(distanceNew[i]);
  //     if((await this.catModel2.findOne({ user_id: i }).exec()).distance < 50
  //         && (await this.catModel2.findOne({ user_id: i }).exec()).truck_type == typeTruckNew[1]
  //         && (await this.catModel2.findOne({ user_id: i }).exec()).favor == 1){
  //       min2 = (await this.catModel2.findOne({ user_id: i }).exec()).distance;
  //     }
  //   }
  //   //return this.catModel2.findOne({distance: min2});
  //   console.log('min2');
  //   console.log(min);
  //   console.log(min2);
  //   var pop = min2;
  //   // var kk = this.catModel2.find({distance: 230});
  //   // var yy = this.catModel2.find({distance: 65});
  //   // const uio0 = [kk,yy];
  //   //const uio = [min,min2];
  //   var kk2 = await this.catModel2.find({"$or": [{ "distance": pop}, { "distance": min}]}).exec();
  //   return kk2;
  //   //console.log(this.catModel2.findOne({distance: min}));

  //   // if((await this.catModel2.findOne({ user_id: 3 }).exec()).distance < 50){
  //   //     return 'hardcore'
  //   // }
    
    
  //   // let newcat3 = await this.catModel2.findOneAndUpdate({ user_id: 17 }, { distance: 80 } );
  //   // const result = await newcat3.save();
  //   // console.log('kewk');
      
    
  //   // //const result = await newcat3.save();
  //   // console.log(result);
  //   // return newcat3;
    
  // }
//Call this if driver reject shipment
  async shipmentRejection(shipment_id: number, user_id: number){

    var result = [];

    // let getDriver = await this.catModel2.findOne({ user_id: user_id });
    // let array = [];
    // array = await getDriver.rejectShipment;
    // let i = 0;
    // while(array[i]){
    //   i++;
    // }
    // array[i] = shipment_id;
    // let newcat4 = await this.catModel2.findOneAndUpdate({ user_id: user_id }, {rejectShipment: array});
    //Get all track detail of driver of that shipment
    let getTrackDriver = await this.catModel27.findOne({ shipment_id: shipment_id });
    var arrMerge;
    arrMerge = getTrackDriver.detail;
    //Get track detail of favor driver of that shipment
    var arrMergeFavor = arrMerge.filter(shot => shot.favor === 1);
    console.log(arrMergeFavor);

    let getRejectDriver = await this.catModel2.findOne({ driver_id: user_id });

    var arrMergeMatchNoCon = arrMerge.filter(shot => shot.truck_type === getRejectDriver.truck_type)
    //Make sure they match condition
    var arrMergeMatch = arrMergeMatchNoCon.filter(shot => shot.condition === 0)
    //Get min All
    var minAll = Math.min(...arrMergeMatch.map(item => item.distance));

    var arrMergeMatchMin = arrMergeMatch.filter(shot => shot.distance === minAll)

    var arrMergeFavorMatchNoCon = arrMergeFavor.filter(shot => shot.truck_type === getRejectDriver.truck_type)

    var arrMergeFavorMatch = arrMergeFavorMatchNoCon.filter(shot => shot.condition === 0)
    //Get min favorable
    var minFavor = Math.min(...arrMergeFavorMatch.map(item => item.distance));
    //Make sure they match condition
    var arrMergeFavorMatchMin = arrMergeFavorMatch.filter(shot => shot.distance === minFavor)
    console.log('stupid:');
    console.log(arrMergeMatchMin);
    console.log(arrMergeFavorMatchMin);
    console.log(arrMergeMatchMin[0].distance);
    console.log(arrMergeFavorMatchMin[0].distance);
    //console.log(arrMergeFavorMatch.distance);
    
    //Find Truck Logic
    if(arrMergeFavorMatchMin[0].distance < 50 || arrMergeFavorMatchMin[0].distance < arrMergeMatchMin[0].distance){
      result[0] = arrMergeFavorMatchMin;
    //Change Condition cause it no longer 0
    //Find index (the rank in an array)
      var objIndex = arrMerge.findIndex((obj => obj.driver_id == arrMergeFavorMatchMin[0].driver_id));
    //Update
      arrMerge[objIndex].condition = 1;
      this.updateSelectDriver(arrMerge, shipment_id);
    }
    else{
      result[0] = arrMergeMatchMin;
    //Change Condition cause it no longer 0
      var objIndex = arrMerge.findIndex((obj => obj.driver_id == arrMergeMatchMin[0].driver_id));
    //update
      arrMerge[objIndex].condition = 1;
      this.updateSelectDriver(arrMerge, shipment_id);
    }
    console.log('here result33');
    //console.log(findShipmnent.trucks[i].truck_types);
    console.log(minAll);
    console.log(minFavor);
    // console.log(arrMergeFavorMatchMin[0].distance);
    // console.log(arrMergeMatchMin[0].distance);

  }

//: Promise<Cat2[]>
  // async findDriver(shipment_id: number, latPick: number, longPick: number, typeTruckNew: string[], latDriver: number[], longDriver: number[]){
  //   //Get Distance through lat, long
  //   let shipment = await this.catModel8.findOne({ shipment_id: shipment_id }).exec();
    

  //   const k = await this.catModel2.countDocuments({});
  //   var final = [];
  //   //(latPick: number, longPick: number, typeTruckNew: string[], latDriver: number[], longDriver: number[]){
  //   var distanceNew = [];
  //   const haversine = require('haversine')
  //   const pick = {latitude: latPick, longitude: longPick }
  //   for(var i = 1; i <= k; i++){
  //     var y = i - 1;
  //     const driver = {latitude: latDriver[i], longitude: longDriver[i] };
  //     distanceNew[y] = (haversine(pick, driver));
  //     console.log(distanceNew[y]); 
  //   }
  //   //Apply distances
  //   for(var i = 1; i <= k; i++){
  //     var y = i -1;
  //     let newcat4 = await this.catModel2.findOneAndUpdate({ user_id: i }, {distance: distanceNew[y]});
  //     const result = await newcat4.save();
  //     console.log(distanceNew[y]);
  //     //console.log(distanceNew[i]);
  //   }
  //   //Rejection exception
  //   for(var i = 1; i <= k; i++){
  //     var y = i -1;
  //     let newcat5 = await this.catModel2.findOne({ user_id: i });
  //     if((await newcat5).occupy = 1){
  //       newcat5.distance = 9999;
  //     }
  //     let zz = []; 
  //     let ii = 0;
  //     zz = await newcat5.rejectShipment;
  //     while(zz[ii]){
  //       if(zz[ii] == shipment_id){
  //         newcat5.distance = 9999;
  //       }
  //       ii++;
  //     }
  //   }
  //   //Find trucks
  //   console.log(typeTruckNew);
  //   var final = [];
  //   let f = 0;
  //   while(typeTruckNew[f])
  //   {
  //     //Find smallest driver's distance of favorable and normal ones 
  //     var favorable = await this.catModel2.findOne({truck_type: typeTruckNew[f], favor: 1}).sort('distance');
  //     var normal = await this.catModel2.findOne({truck_type: typeTruckNew[f], favor: 0}).sort('distance');
  //     //We can also use find().limit(1);
  //     if(favorable.distance < 50 || favorable.distance < normal.distance){
  //       final[f] = favorable;
  //     }
  //     else{
  //       final[f] = normal;
  //     }
  //     //var priority = await a.findOne({favor: 1}).sort('distance').exec();
  //     //console.log(priority);
  //     //console.log((await priority).distance);
  //     // if((await priority).distance < 50){
  //     //   final[i] = priority;
  //     // }
  //     //final[i] = a.findOne({favor: 0}).sort('distance').exec();
  //     f++;
      
  //   }
  //   return final;
    
  // }
//,"Xe Van 1000 kg"

  async testMin(){
   return this.catModel2.findOne({favor: 1}).sort('distance').exec();
  }

  async testArray(a: number[]){
    //console.log(distanceNew[8]);
    
    var b = [];
    for(var i = 0; i < 15; i++){
      console.log(a[i]);
      
      b[i] = a[i];
      
      //console.log(distanceNew[i]);
    }

    return b;
  }

  async pathFinder(lat: number[], long: number[]){
    let distance = [];
    let haversine = require('haversine');
    let i = 0 ;
    while(lat[i]){
      let y = 0;
      const pick = {latitude: lat[i], longitude: long[i]};
      distance[i] = [];
      while(long[y]){
        const other = {latitude: lat[y], longitude: long[y]};
        distance[i][y] = (haversine(pick, other));
        //console.log(distance[i][y]);
        y++;
      }
      i++;
    }
    var solver = require('node-tspsolver')
    var costMatrix = distance;
    //et final = [];
    var final;
    console.log(costMatrix);
    // final = solver.solveTsp(costMatrix, true, {}).then(function (result){
    //   console.log(result);
    //   //final = result;
    //   })
    // let theLast;
    let theLast = solver.solveTsp(costMatrix, true, {})
    theLast.then(function (result){
      console.log(result);
    })
    return theLast;
    //console.log(final);
    // theLast = final;
    // return theLast;
    //console.log(distance);
  }

  // async recursion(current: number[], final: number[], finali: number, i: number, countSwap: number, countCurrent: number){
  //   final[1][finali] = current;
  //   finali++; 
  //   var y = 0;
  //   //let distance = [];

  //   final[i] = current[i];
  //   while(current[i]){
  //     if(countCurrent == countSwap - 1){
  //       break;
  //     }
  //     this.recursion(current, final, finali, i, countSwap, countCurrent);
  //     countSwap--;
  //   }

  //   let el = current[i];
  //   current[i] = current[y];
  //   current[y]= el;

  //   y++;
  //   i++;
    
  //   //return distance;
  // }

  async pathFinderHandmade(lat: number[], long: number[]){
    // let countSwap = 0;
    // while(question){
    //   countSwap++;
    // }
    // let final = [];
    // var finali = 0;
    // let i = 0;
    // let y = 0;
    // var countCurrent = 0;
    // this.recursion(question, final, finali, i, countSwap, countCurrent);

    // let current = [];
    // while(current[i] != 0){
    // }

    // var permutation = require('array-permutation');
    // var range = permutation.range;
    // var random = permutation.random;
    // var shuffle = permutation.shuffle;

    // const haversine = require('haversine')
    // const pick = {latitude: latPick, longitude: longPick}
    // const driver = {latitude: latDriver, longitude: longDriver};
    // distanceNew[y] = (haversine(pick, driver));
    let z = 0;
    let zz = 0;
    while(lat[z]){
      z++;
    }
    z--;  
    console.log(z);
    let question = [];
    while(z >= 0){
      question[z-1] = z;
      z--;
    }
    console.log(question);
    console.log("\n////////////////\n");
    
    var perm = require('array-permutation');
    var k = [];
    let f = 0;
    
    let ii = 0;
    //var iter = perm([1, 2, 3, 4]);
    var iter = perm(question);
    for (var p of iter) {
      //console.log(p);
      k[f] = p;
      z = 0;
      f++;
    }
    f = 0;
    z = 0;
    //let gg = 0;
    while(k[0][ii]){
      ii++;
    }


    zz = ii;

    while(k[f]){
      while(ii>0){
        //console.log(k[f][ii-1]);
        k[f][ii] = k[f][ii-1];
        ii--;
      }
      ii = zz;
      k[f][0] = 0;
      f++;
    }




    //for(var ii = 4; ii>0; ii--){
    // while(ii>0){
    //   console.log(k[0][ii-1]);
    //   k[0][ii] = k[0][ii-1];
    //   ii--;
    // }
    // k[0][0] = 0;




    // while(k[f]){
    //   k[f][0] = 0;
    //   while(k[f][z]){
    //     k[f][z+1] = k[f][z];
    //     z++;
    //    }
    //   f++;
    // }

    console.log(k);
    //console.log("\n////////////////\n");
    //console.log(k[1]);


    const haversine = require('haversine');
    let i = 0;
    let y = 0;
    console.log("\n////////////////\n");
    // console.log(lat[k[0][0]]);
    // console.log(long[k[0][0]]);
    // console.log(lat[k[0][1]]);
    // console.log(long[k[0][1]]);
    // console.log(k[i]);
    // console.log(k[i][y]);
    console.log("\n////////////////\n");
    let from;
    let to; 
    let results;
    let yy;
    let final = [];
    let plus = 0;
    let finalest = 0;
    let finalestArray = [];
    while(k[i]){
      yy = 1;
      while(k[i][yy] != null){
        yy++;
        // console.log(lat[k[i][y]]);
        // console.log(long[k[i][y]]);
        // console.log(lat[k[i][y+1]]);
        // console.log(long[k[i][y+1]]);
        // console.log(k[i]);
        //console.log(": ");
        from = {latitude: lat[k[i][y]], longitude: long[k[i][y]]};
        to = {latitude: lat[k[i][y+1]], longitude: long[k[i][y+1]]};
        results = haversine(from, to);
        //console.log(results);
        //console.log("\n");
                
        plus = plus + results;
        final[i] = plus;
        // console.log("\n////////////////\n");
        // console.log(final[i]);

        y++;
      }
      console.log("",k[i]);
      //console.log("\n////////////////\n");
      console.log("\n",final[i]);
      console.log("\n////////////////\n\n");
      plus = 0;
      y = 0;
      
      i++;
    }
    i = 0;
    zz = 0;
    finalest = final[i]
    while(final[i]){
      if(final[i] < finalest){
        finalest = final[i];
        z = i;
      }
      i++;
    }
    // console.log("\n////////////////\n");
    // console.log("\n////////////////\n");
    // console.log("\n////////////////\n");
    console.log("\nShortest Path: ", finalest);
    //console.log(finalest);
    console.log("\n");
    console.log(k[z]);
    console.log();
    return k[z];
  }

  async pathFinderFinal(lat: number[], long: number[]){
    let k = 0;
    let count = 0;
    while(lat[k]){
      k++;
    }
    if(k > 8){
      return this.pathFinder(lat,long);
    }
    return this.pathFinderHandmade(lat,long);
  }

  //Call this if driver finish shipment
  async finishShipment(shipment_id: Cat8, user_id: Cat2){
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
    await this.catModel2.findOneAndUpdate({ user_id: user_id }, { occupy: 0 } );
  }
  //show all driver shipment data
  async show17(){
    let k = await this.catModel17.find();
    return k;
  }
  //Call this for each driver that accept shipment
  async create17(shipment_id: number, user_id: number){
  
    var driver = await this.catModel2.findOne({ user_id: user_id }).exec();
    let k = await this.catModel17.countDocuments({});
    
    let full_name = driver.full_name;
    let truck_plate =  driver.truck_plate;
    let phone_number =  driver.phone_number;
    let rating =  driver.rating;
    console.log(full_name);
    console.log(k);
    var shipmentDriverId = k + 1;
    let state = 0;
    const newCat = new this.catModel17({
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

    //await this.catModel8.findOneAndUpdate({ shipment_id: shipment_id }).exec();
    let allRightDriver = await this.catModel17.find({ shipment_id: shipment_id }).exec();
    console.log(allRightDriver);
    let ff = await this.catModel8.findOneAndUpdate({ shipment_id: shipment_id }, { driver: allRightDriver } );
    //await this.catModel2.findOneAndUpdate({ user_id: user_id }, { occupy: 1 } );
  }
  //update rating 
  async update17(shipment_id: number, user_id: number, rating: number){
    // let allRightDriver = await this.catModel17.find({ shipment_id: shipment_id }).exec();
    // console.log(allRightDriver);
    let love = rating;
    console.log(love);
    let k = await this.catModel8.findOne({ shipment_id: shipment_id, driver: {$in: [user_id]} });
    return k;
    
    //await this.catModel2.findOneAndUpdate({ user_id: user_id }, { occupy: 1 } );
  }
  //update state for realtime
  async update170(shipment_id: number, user_id: number, new_state: number){
    // let allRightDriver = await this.catModel17.find({ shipment_id: shipment_id }).exec();
    // console.log(allRightDriver);
    let k = await this.catModel17.findOneAndUpdate({ shipment_id: shipment_id, user_id: user_id}, {state: new_state});

    let allRightDriver = await this.catModel17.find({ shipment_id: shipment_id }).exec();
    // console.log(allRightDriver);
    let ff = await this.catModel8.findOneAndUpdate({ shipment_id: shipment_id }, { driver: allRightDriver } );
    // await this.catModel2.findOneAndUpdate({ user_id: user_id }, { occupy: 1 } );
    
    //await this.catModel2.findOneAndUpdate({ user_id: user_id }, { occupy: 1 } );
  }

  //call this after the order finish delivery and user is giving feedback for each user
  // async create17(shipment_id: Cat8, user_id: Cat2){
  
  //   var driver = await this.catModel2.findOne({ user_id: user_id }).exec();
  //   let k = await this.catModel17.countDocuments({});
    
  //   let full_name = await driver.full_name;
  //   let truck_plate = await driver.truck_plate;
  //   let phone_number = await driver.phone_number;
  //   let rating = await driver.rating;

  //   console.log(k);
  //   var shipmentDriverId = k + 1;
  //   const newCat = new this.catModel17({
  //     full_name,
  //     truck_plate,
  //     phone_number,
  //     rating,
  //     user_id,
  //     shipment_id,
  //     shipmentDriverId,
  //   });
  //   const result = await newCat.save();

  //   //await this.catModel8.findOneAndUpdate({ shipment_id: shipment_id }).exec();
  //   let allRightDriver = await this.catModel17.find({ shipment_id: shipment_id }).exec();
  //   await this.catModel8.findOneAndUpdate({ shipment_id: shipment_id }, { driver: allRightDriver } );
  //   await this.catModel2.findOneAndUpdate({ user_id: user_id }, { occupy: 1 } );
  // }

  async findOne17(shipmentDriverId: number): Promise<Cat17> {
    return this.catModel17.findOne({ shipmentDriverId: shipmentDriverId }).exec();
  }

  async findAll17(): Promise<Cat17[]> {
    return this.catModel17.find().exec();
  }

  async delete17(shipmentDriverId: number){
    let newcat4 = await this.catModel17.findOneAndRemove({ shipmentDriverId: shipmentDriverId });
  }

  //shipmentDriverId
  async updatePicture(packagePicture: string, shipmentDriverId: number){
    await this.catModel99.findOneAndUpdate(
      {
        id: shipmentDriverId
      },
      {$push: {"packagePicture": packagePicture } },
      { 
        new: true
      }
    )
    // let i = 0;
    // let k = await this.catModel17.findOne({ shipmentDriverId: shipmentDriverId });
    // let kk = []
    // kk = (await k).packagePicture;
    // while(kk[i]){
    //   i++;
    // }
    // kk[i] = packagePicture;
    // await this.catModel17.findOneAndUpdate({ shipmentDriverId: shipmentDriverId }, { packagePicture: kk } );
  }

  async updateQr(shipmentDriverId: number){
    let i = 0;
    let k = await this.catModel17.findOne({ shipmentDriverId: shipmentDriverId });
    let kk = []
    kk = (await k).packageQr;
    while(kk[i]){
      i++;
    }
    kk[i] = i;
    await this.catModel17.findOneAndUpdate({ shipmentDriverId: shipmentDriverId }, { packageQr: kk } );
  }

  async create3(full_name: string, phone_number: string, location: string, types: string, notes: string, user_id: number){
    var k = await this.catModel3.countDocuments({})
    console.log(k);
    user_id = k + 1;
    const newCat = new this.catModel3({
      full_name,
      phone_number,
      location,
      types,
      notes,
      user_id,
    });
    const result = await newCat.save();
    console.log(result);
    return 'A New document have been created';
  }

  async findOne3(user_namePostMan: string): Promise<Cat3> {
    return this.catModel3.findOne({ phone_number: user_namePostMan }).exec();
  }

  async create4(date: string, time: string){
    const newCat = new this.catModel4({
      date,
      time,
    });
    const result = await newCat.save();
    console.log(result);
    return 'A New document have been created';
  }

  async findOne4(user_namePostMan: string): Promise<Cat4> {
    return this.catModel4.findOne({ phone_number: user_namePostMan }).exec();
  }

  async findAll4(): Promise<Cat4[]> {
    return this.catModel4.find().exec();
  }
//62a1a019266b564cb31e200d
  async Push4(user_namePostMan: string, abc: string){
    var newCat2 = new this.catModel4({})
    //const newCat2 = this.catModel4.find({_id: abc});
    newCat2.update(
      //{ _id: abc }, 
      { $push: { time: user_namePostMan } },
    );
    //return this.catModel4.findOne({ phone_number: user_namePostMan }).exec();
    const result = await newCat2.save();
    //const love = this.catModel9.find({truck_state_id: truck_state_how}).sort({ _id: 1 }).skip(a).limit(10);
    // const newCat = new this.catModel4({
    //   date,
    //   time,
    // });
    // const result = await newCat.save();
    // console.log(result);
    return 'A New push is done';
  }

  async create5(types: string, image: string){
    const newCat = new this.catModel5({
      types,
      image,
    });
    const result = await newCat.save();
    console.log(result);
    return 'A New document have been created';
  }
  //here how to fix
  async findOne5(user_namePostMan: string): Promise<Cat5> {
    let k = this.catModel5.findOne({ types: user_namePostMan }).exec();
    console.log((await k).types)
    return this.catModel5.findOne({ types: user_namePostMan }).exec();
  }

  async findAll5(): Promise<Cat5[]> {
    return this.catModel5.find().exec();
  }

  async delete5(user_namePostMan: string){
    let newcat4 = await this.catModel5.findOneAndRemove({ types: user_namePostMan });
  }

  async create55(manual: string, image:string){
    const newCat = new this.catModel55({
      manual,
      image,
    });
    const result = await newCat.save();
    console.log(result);
    return 'A New document have been created';
  }

  async findOne55(user_namePostMan: string): Promise<Cat55> {
    return this.catModel55.findOne({ manual: user_namePostMan }).exec();
  }

  async findAll55(): Promise<Cat55[]> {
    return this.catModel55.find().exec();
  }

  async delete55(user_namePostMan: string){
    let newcat4 = await this.catModel55.findOneAndRemove({ manual: user_namePostMan });
  }

  async create6(weight: number, length: number, width: number, height: number){
    const newCat = new this.catModel6({
      weight,
      length,
      width,
      height,
    });
    const result = await newCat.save();
    console.log(result);
    return 'A New document have been created';
  }

  async findOne6(user_namePostMan: number): Promise<Cat6> {
    return this.catModel6.findOne({ weight: user_namePostMan }).exec();
  }

  async findAll6(): Promise<Cat6[]> {
    return this.catModel6.find().exec();
  }

  async create7(truck_types: string, weight: number, length: number, width: number, height: number, image: string, description: string, weight2: string){
    let volume = length * width * height;
    let k = await this.catModel7.countDocuments({});
    var truck_types_id = k + 1;
    const newCat = new this.catModel7({
      truck_types,
      weight,
      length,
      width,
      height,
      volume,
      image,
      description,
      weight2,
      truck_types_id,
    });
    const result = await newCat.save();
    console.log(result);
    return 'A New document have been created';
  }

  async findOne7(user_namePostMan: string): Promise<Cat7> {
    return this.catModel7.findOne({ truck_types: user_namePostMan }).exec();
  }

  async findAll7(): Promise<Cat7[]> {
    return this.catModel7.find().exec();
  }

  async delete7(user_namePostMan: string){
    let newcat4 = await this.catModel7.findOneAndRemove({ truck_types: user_namePostMan });
  }

  async update7(user_namePostMan: string, description: string, weight2: string){
    let newcat4 = await this.catModel7.findOneAndUpdate({ truck_types: user_namePostMan }, {description: description, weight2: weight2});
  }

  async create8(senderName: string, senderPhone: string, recAddress: Cat15[], senderAddress: Cat15[], driver: Cat17[], time: Date, typeOfShipment: string, manual: string, size: Cat6, trucks: Cat7[], payment: string, fee: string, voucher: number, user_id: number){
    var k = await this.catModel8.countDocuments({})
    //var truck_types = [];
    //truck_types = await this.chooseTruckLogic(weight,length,width,height);
    
    //Cat15.create323();
    let shipment_id;
    console.log(k);
    shipment_id = k + 1;
    const newCat = new this.catModel8({
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
    ////////////////////////////
    let i = 0;
    while(recAddress[i]){
      recAddress[i].shipmentID = shipment_id;
      const newCat2 = new this.catModel15(recAddress[i]);
      const result2 = await newCat2.save();
      i++;
    }
    ////////////////////////////
    i = 0;
    while(senderAddress[i]){
      senderAddress[i].shipmentID = shipment_id;
      const newCat3 = new this.catModel15(senderAddress);
      const result3 = await newCat3.save();
      i++;
    }
    
    console.log(result);
    return shipment_id;
  }

  async findOne8(id: number): Promise<Cat8> {
    return this.catModel8.findOne({ shipment_id: id }).exec();
  }

  async findAll8(): Promise<Cat8[]> {
    return this.catModel8.find().exec();
  }

  async delete8(shipment_id: number) {
    let pp = this.catModel8.findOneAndRemove({ shipment_id: shipment_id }).exec();
    var k = await this.catModel8.countDocuments({});
    var k2 = await this.catModel8.countDocuments({});
    var i: number;

    i = shipment_id;
    // typeof (i - 0);
    // let one = 1;
    i = +i + 1;
    //let i 
    console.log(i);
    while(i < k + 1){
      console.log(i);
      let newcat = await this.catModel8.findOneAndUpdate({ shipment_id: i }, { shipment_id: i - 1 } );
      i++
    }
  }

  async create89(recAddress: Cat15[]){
    var k = await this.catModel8.countDocuments({})
    //var truck_types = [];
    //truck_types = await this.chooseTruckLogic(weight,length,width,height);
    
    //Cat15.create323();
    console.log(k);

    const newCat = new this.catModel8({
      recAddress,
      
    });
    const result = await newCat.save();
    ////////////////////////////

    ////////////////////////////

  }

  async findOne89(id: number): Promise<Cat100> {
    return this.catModel8.findOne({ shipment_id: id }).exec();
  }

  async findAll98(): Promise<Cat100[]> {
    return this.catModel8.find().exec();
  }
  // async login(user: any) {
  //   const payload = { username: user.username, sub: user.userId };
  //   return {
  //     access_token: this.jwtService.sign(payload),
  //   };
  // }
  // async delete(id: string) {
  //   const deletedCat = await this.catModel
  //     .findByIdAndRemove({ _id: id })
  //     .exec();
  //   return deletedCat;
  // }

  async create9(truck_state: string, truck_state_id: string, truck_brand: string, truck_name: string, price: string, distance: string, picture: string, truck_id: number){
    var k = await this.catModel9.countDocuments({})
    console.log(k);
    truck_id = k + 1;
    const newCat = new this.catModel9({
      truck_state,
      truck_state_id,
      truck_brand,
      truck_name,
      price,
      distance,
      picture,
      truck_id,
    });
    const result = await newCat.save();
    console.log(result);
    return 'A New document have been created for you';
  }

  async filter(truck_state_how: string): Promise<Cat9[]> {
    if(truck_state_how == "0"){
      return this.catModel9.find().exec();
    }
    return this.catModel9.find({truck_state_id: truck_state_how}).exec();
  }

  async findAll9(): Promise<Cat9[]> {
    return this.catModel9.find().exec();
  }

  async paginate(truck_state_how: string, pagination: number){
    var a = pagination - 1;
    if(truck_state_how == "0"){
      const love = this.catModel9.find().sort({ _id: 1 }).skip(a).limit(10);
    // if (limitNum) {
    //   love.limit(limitNum);
    // }
    //love.;
    return love;
    }
    const love = this.catModel9.find({truck_state_id: truck_state_how}).sort({ _id: 1 }).skip(a).limit(10);
    // if (limitNum) {
    //   love.limit(limitNum);
    // }
    //love.;
    return love;
    
  }

  async chooseTruckLogic(weight: number, length: number, width: number, height: number){
    var a = [];

    var volume = length * width * height;
    if (weight <= 2 ){
      if(volume < 1.5){
        a[0] = 'Xe Van 500 kg';
        a[0] = 0;
        console.log(a);
        return a;
      } 
      if(volume < 2.4){
        a[0] = "Xe Ban Tai 500 kg";
        a[0] = 1;
        return a;
      } 
      if(volume < 3.7){
        a[0] = "Xe Ban Tai 1000 kg";
        a[0] = 2;
        return a;
      } 
      if(volume < 4.9){
        a[0] = "Xe Tai 500 kg";
        a[0] = 3;
        return a;
      } 
      if(volume < 8.1){
        a[0] = "Xe Tai 1000 kg";
        a[0] = 4;
        return a;
      } 
      if(volume < 13){
        a[0] = "Xe Tai 2000 kg";
        a[0] = 5;
        return a;
      } 
    }
    var volumeAfter = volume - 13;
    var weight2 = weight - 2; 
    if(volumeAfter < 1.5 && weight2 <= 0.5){
      a[0] = 'Xe Tai 2000 kg';
      a[0] = 5;
      a[1] = 'Xe Van 500 kg';
      a[1] = 0;
      console.log(a);
      return a;
    } 
    if(volumeAfter < 2.4 && weight2 <= 0.5){
      a[0] = "Xe Tai 2000 kg";
      a[0] = 5;
      a[1] = "Xe Ban Tai 500 kg";
      a[1] = 1;
      return a;
    } 
    if(volumeAfter < 3.7 && weight2 <= 1){
      a[0] = "Xe Tai 2000 kg";
      a[0] = 5;
      a[1] = "Xe Ban Tai 1000 kg";
      a[1] = 2;
      return a;
    } 
    if(volumeAfter < 4.9 && weight2 <= 0.5){
      a[0] = "Xe Tai 2000 kg";
      a[0] = 5;
      a[1] = "Xe Tai 500 kg";
      a[1] = 3;
      return a;
    } 
    if(volumeAfter < 8.1 && weight2 <= 1){
      a[0] = "Xe Tai 2000 kg";
      a[0] = 5;
      a[1] = "Xe Tai 1000 kg";
      a[1] = 4;
      return a;
    } 
    if(volumeAfter < 13 && weight2 <= 2){
      a[0] = "Xe Tai 2000 kg";
      a[0] = 5;
      a[1] = "Xe Van 2000 kg";
      a[1] = 5;
      return a;
    } 
  }



  async chooseTruckLogicFinal(amount: number, weight: number, length: number, width: number, height: number){
    var k = [];
    k = await this.catModel7.find().exec();
    var k2 = [];
    k2 = await this.catModel7.find().exec();
    var sortArray = k2.sort((a, b) => parseFloat(a.volume) - parseFloat(b.volume));

    var result = [];
    var i = 0;
    var y = 0;
    // console.log(k[0].truck_types);
    // console.log(k);
    let volumeInput = length * width * height;

    var highest_truck_volume = Math.max.apply(Math,k.map(function(o){return o.volume;}));
    var highest_truck_weight = Math.max.apply(Math,k.map(function(o){return o.weight;}));
    var length = sortArray.length - 1;
    // var highest_truck_volume = sortArray[length].volume
    // var highest_truck_weight = sortArray[length].volume
    // console.log(highest_truck_volume);
  
    while(volumeInput > highest_truck_volume || weight > highest_truck_weight){
      var length = k.length - 1;
      result[y] = k[length].truck_types_id;

      volumeInput = volumeInput - highest_truck_volume;
      weight = weight - highest_truck_weight;
      y++;
    }
    


    console.log(volumeInput);
    console.log(i);

      if(amount > 2)
      {
        if(volumeInput >= 0 && weight <= 0){
          while(sortArray[i] != null){
            if(volumeInput <= k[i].volume){
              result[y] = k[i].truck_types_id;
              console.log("abc");
              console.log(i);
              console.log(k[i].volume);
              console.log(k[i].weight);
              return result;
            }
            i++;
          }
        }
        if(weight >= 0 && volumeInput <= 0){
          while(sortArray[i] != null){
            if(weight <= k[i].weight){
              result[y] = k[i].truck_types_id;
              console.log("abc");
              console.log(i);
              console.log(k[i].volume);
              console.log(k[i].weight);
              return result;
            }
            i++;
          }
        
        }
      }
      while(sortArray[i] != null){
        // console.log(sortArray[i].volume)
        // if(volumeInput <= sortArray[0].volume && weight <= sortArray[0].weight){
        //   result[y] = k[i].truck_types_id;
        //   console.log("abc0");
        // }
        if(volumeInput <= k[i].volume && weight <= k[i].weight){
          result[y] = k[i].truck_types_id;
          console.log("abc");
          console.log(i);
          console.log(k[i].volume);
          console.log(k[i].weight);
          return result;
        }
        i++;
      }

      console.log(sortArray[0].volume);
      console.log(sortArray[1].volume);
      console.log(sortArray[2].volume);
      console.log(sortArray[3].volume);
      console.log(sortArray[4].volume);

      return result;
    }
  
  async maxTruck(){
    var k = [];
    k = await this.catModel7.find().exec();
    var k2 = [];
    k2 = await this.catModel7.find().exec();
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

  async testLogic(weight: number, length: number, width: number, height: number){
    var k = [];
    k = await this.chooseTruckLogic(weight,length,width,height);
    return k;
  }
  async create10(date: string, time: string){
    const newCat = new this.catModel10({
      date,
      time,
    });
    const result = await newCat.save();
    console.log(result);
    return 'A New document have been created';
  }

  async findOne10(user_namePostMan: string): Promise<Cat10> {
    return this.catModel10.findOne({ phone_number: user_namePostMan }).exec();
  }

  async findAll10(): Promise<Cat10[]> {
    return this.catModel10.find().exec();
  }
  async dispatch(date12: string, time12: string){
    const date123 = date12;
    console.log(date123);
    var newcat3 = await this.catModel10.findOneAndUpdate({ date: date12 }, 
      { $push : { time: time12 } });
      console.log('kewk');

      console.log(newcat3);
      return 'push done';
  }
  async dispatch2(date12: string, time12: string){
    // // //   var love = (await this.catModel4.find({date: date12}).sort({ _id: 1 }));
    // // //   love.update(
    // // //     { _id: person._id }, 
    // // //     { $push: { friends: friend } },
    // // //     done
    // // // );
    // if (limitNum) {
    //   love.limit(limitNum);
    // }
    //love.;
    
    //const love = this.catModel9.find({truck_state_id: truck_state_how}).sort({ _id: 1 }).skip(a).limit(10);
    // if (limitNum) {
    //   love.limit(limitNum);
    // }
    //love.;
    //console.log(newcat3);
    //const new12= 'new'
    var newcat3 = await this.catModel10.findOneAndUpdate({ date: date12 }, 
      { $pull : { time: time12 } });
      console.log('kewk');
      
      //const result = await newcat3.save();
      console.log(newcat3);
      return 'pull done';
    // // var newCat2 = new this.catModel4({})
    // // newCat2.Update(
    // //   { _id: time12 }, 
    // //   { $push: { time: date12 } },
    // // );
    //return love;
    
  }

  async dispatch3(time12: string){
    //const new12= 'new'
    var newcat3 = await this.catModel10.updateMany( 
      { $push : { time: time12 } });
      console.log('push all done');
      
      //const result = await newcat3.save();
      console.log(newcat3);
  }

  async create11(date: string, time: string, number: number){
    const newCat = new this.catModel11({
      date,
      time,
      number,
    });
    const result = await newCat.save();
    console.log(result);
    return 'A New document have been created';
  }

  async findOne11(user_namePostMan: string): Promise<Cat11> {
    return this.catModel11.findOne({ phone_number: user_namePostMan }).exec();
  }

  async findAll11(): Promise<Cat11[]> {
    return this.catModel11.find().exec();
  }
  //where value is greater than or equal 
  //lon hon hoac bang
  async findBig(number123: number): Promise<Cat11[]> {
    console.log(number123);
    return this.catModel11.find({ number: {$gte: number123} }).exec();
  }

  async modify(number123: number){
    //console.log(number123);
    //const kewk2 = await this.catModel11.replaceOne({date: date123}, {number: '123'}).exec();
    //const kewk2 = await this.catModel11.updateOne({date: date123}).exec();
    //const kewk2 = await this.catModel11.findOne({number: number123}).exec();
    //const kewk2 = await this.catModel11.findOneAndUpdate({number: number123}, {$set:{date:"Naomi"}});
    //const kewk2 = await this.catModel11.findOneAndReplace({number: number123}, {$set:{date:"Naomi"}});
    let newcat3 = await this.catModel11.findOneAndUpdate({ number: number123 }, { date: 'live' } );
      const result = await newcat3.save();
      console.log('kewk');
      
    
      //const result = await newcat3.save();
      console.log(result);
      return newcat3;
    //kewk2.date = 'abc';
    //kewk2.replaceOne(number: '123');
    //console.log(kewk2);
    
    //return kewk2;
    // var k = await this.catModel9.countDocuments({})
    // console.log(k);
    // truck_id = k + 1;
    // const newCat = new this.catModel9({
    //   truck_state,
    //   truck_state_id,
    //   truck_brand,
    //   truck_name,
    //   price,
    //   distance,
    //   picture,
    //   truck_id,
    // });
    //const result = await newCat.save();
  }
//: Promise<string[]>
  async showArray(date123: string){
    var kewk2 = this.catModel11.findOne({date: date123}).exec();
    var kewk = this.catModel11.findOne({date: date123}, { "time": 1, "_id": 0}).distinct("time").exec();
    //kewk = obj[0].toObject().time;
    var a: string[]; 
    console.log(kewk);
    //a = kewk;
    var b = (await kewk2).time;
    a = b;
    return a[0];
    //return kewk;
    //return a;
  }

  // async findOne2(user_namePostMan: string): Promise<Cat2> {
  //   return this.catModel2.findOne({ phone_number: user_namePostMan }).exec();
  // } 10.80685225012986, 106.6648963046039 - 10.778780910128178, 106.72382763116138
  async create12(name: String, image: String){
    console.log(image);
    const newCat = new this.catModel12({
      name,
      image,
    });
    console.log(image);
    const result = await newCat.save();
    console.log(result);
    return 'A New document have been created';
  }

  async findOne12(user_namePostMan: string): Promise<Cat12> {
    return this.catModel12.findOne({ name: user_namePostMan }).exec();
  }

  async findAll12(): Promise<Cat12[]> {
    return this.catModel12.find().exec();
  }

  async create13(name: String, image: String){
    console.log(image);
    const newCat = new this.catModel13({
      name,
      image,
    });
    const result = await newCat.save();
    console.log(result);
    return 'A New document have been created';
  }

  async findOne13(user_namePostMan: string): Promise<Cat13> {
    return this.catModel13.findOne({ name: user_namePostMan }).exec();
  }

  async findAll13(): Promise<Cat13[]> {
    return this.catModel13.find().exec();
  }

  async create14(address: String, distance: number[], truck_types: string[]){
    console.log('asdkjfahslkdjf');
    const newCat = new this.catModel14({
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

  async findOne14(address: String): Promise<Cat14> {
    return this.catModel14.findOne({ address: address }).exec();
  }

  async findAll14(): Promise<Cat14[]> {
    return this.catModel14.find().exec();
  }

  async dijkstra() {
    const Graph = require('node-dijkstra')
 
    const route = new Graph()
    
    route.addNode('A', { B:1 })
    route.addNode('B', { A:1, C:2, D: 4, E:3, F:4})
    route.addNode('C', { B:2, D:1, E:2, F:4})
    route.addNode('D', { C:1, B:4 })
    route.addNode('E', { C:2, B:3 })
    route.addNode('F', { C:4, B:4 })
    // route.addNode('A', { B:4, C:3, D:6 })
    // route.addNode('B', { A:4, C:5, D:8 })
    // route.addNode('C', { A:3, B:5, D:7 })
    // route.addNode('D', { A:6, B:8, C:7 })

    // route.addNode('A', { B: 1, C: ,D: })
    // route.addNode('B', { A: 1, C: 2, D: 4 })
    // route.addNode('C', { A: ,B: 2, D: 1 })
    // route.addNode('D', { A: ,B: 4, C: 1 })
    // include the cost
    console.log(route.path('A', 'F'));
    return route.path('A', 'F');
  }

  // async dijkstra2() {
  //   let shortestDistanceNode = (distances, visited) => {
  //     // create a default value for shortest
  //     let shortest = null;
      
  //       // for each node in the distances object
  //     for (let node in distances) {
  //         // if no node has been assigned to shortest yet
  //         // or if the current node's distance is smaller than the current shortest
  //       let currentIsShortest =
  //         shortest === null || distances[node] < distances[shortest];
              
  //         // and if the current node is in the unvisited set
  //       if (currentIsShortest && !visited.includes(node)) {
  //               // update shortest to be the current node
  //         shortest = node;
  //       }
  //     }
  //     return shortest;
  //   };
  //   let findShortestPath = (graph, startNode, endNode) => {
 
  //     // track distances from the start node using a hash object
  //       let distances = {};
  //     distances[endNode] = "Infinity";
  //     distances = Object.assign(distances, graph[startNode]);
  //    // track paths using a hash object
  //     let parents = { endNode: null };
  //     for (let child in graph[startNode]) {
  //      parents[child] = startNode;
  //     }
       
  //     // collect visited nodes
  //       let visited = [];
  //    // find the nearest node
  //       let node = shortestDistanceNode(distances, visited);
      
  //     // for that node:
  //     while (node) {
  //     // find its distance from the start node & its child nodes
  //      let distance = distances[node];
  //      let children = graph[node]; 
           
  //     // for each of those child nodes:
  //          for (let child in children) {
       
  //      // make sure each child node is not the start node
  //            if (String(child) === String(startNode)) {
  //              continue;
  //           } else {
  //              // save the distance from the start node to the child node
  //              let newdistance = distance + children[child];
  //    // if there's no recorded distance from the start node to the child node in the distances object
  //    // or if the recorded distance is shorter than the previously stored distance from the start node to the child node
  //              if (!distances[child] || distances[child] > newdistance) {
  //    // save the distance to the object
  //         distances[child] = newdistance;
  //    // record the path
  //         parents[child] = node;
  //        } 
  //             }
  //           }  
  //          // move the current node to the visited set
  //          visited.push(node);
  //    // move to the nearest neighbor node
  //          node = shortestDistanceNode(distances, visited);
  //        }
       
  //     // using the stored paths from start node to end node
  //     // record the shortest path
  //     let shortestPath = [endNode];
  //     let parent = parents[endNode];
  //     while (parent) {
  //      shortestPath.push(parent);
  //      parent = parents[parent];
  //     }
  //     shortestPath.reverse();
       
  //     //this is the shortest path
  //     let results = {
  //      distance: distances[endNode],
  //      path: shortestPath,
  //     };
  //     // return the shortest path & the end node's distance from the start node
  //       return results;
  //    };
  // }
  // official path finder
  async dijkstra3() {
    
    var solver = require('node-tspsolver')
    var kewk = [];
    //kewk[0][0] = [];
    kewk[0] = [0, 50, 3, 1, 6, 7];
    kewk[1] = [50, 0, 5, 50, 6, 7];
    kewk[2] = [3, 5, 0, 5, 6, 7];
    kewk[3] = [1, 50, 5, 0, 6, 7];
    kewk[4] = [6, 6, 6, 6, 0, 7];
    kewk[5] = [7, 7, 7, 7, 7, 0];
    var distanceNew = [0, 50, 3, 1, 6];
    console.log(kewk[0][1]);
    console.log(kewk);
    //distanceNew[0, 50, 3, 1, 6];
    var costMatrix = kewk;
    //[
        //distanceNew,
        // [0, 50, 3, 1, 6],
        // [50, 0, 5, 50, 6],
        // [3, 5, 0, 5, 6],
        // [1, 50, 5, 0, 6],
        // [6, 6, 6, 6, 0]
        
        // kewk[0],
        // kewk[1],
        // kewk[2],
        // kewk[3],
        // kewk[4]
    //]

    console.log(costMatrix);
    solver.solveTsp(costMatrix, true, {}).then(function (result){console.log(result)})

   
  }

  async delete99(){
    let newcat4 = await this.catModel99.deleteMany();
  }
  //get income daily
  async create99(recAddress: Cat15[], senderAddress: Cat5, weight: number, dateTest: Date){
    let dateString = new Date(dateTest).toISOString().substring(0, 10);
    let id = await this.catModel99.countDocuments({}) + 1;
    let i = 0;
    console.log('asdkjfahslkdjf');
    const newCat = new this.catModel99({
      recAddress,
      senderAddress,
      weight,
      dateTest,
      dateString,
      id,
    });
    const result = await newCat.save();
    while(recAddress[i]){
      const newCat2 = new this.catModel5(recAddress[i]).save();
      i++;
    }
    console.log(result);
    // let love = new Date(dateTest);
    // let month = love.getMonth();
    // let day = love.getDay();
    // let date = love.getDate();
    // 
    // console.log(dateTest);
    // console.log(month);
    // //day of week
    // console.log(day);
    // //date
    // console.log(date);

    
    //get the last monday
        let date2 = new Date(dateTest);


        let day2 = date2.getDay();
        day2--;
        console.log(day2);
        let prevMonday = new Date(dateTest);

        if(date2.getDay() == 0){
            prevMonday.setDate(date2.getDate() - 5);
        }
        else if(date2.getDay() == 1){
            prevMonday.setDate(date2.getDate() - 6);
        }
        else {
            prevMonday.setDate(date2.getDate() - (day2-1));
        }
        //console.log(day2);
        //console.log(prevMonday);
        let ppp;
        let www;
        let week = 0;
        i = 7 * week;
        //let final;
        let y = 0;
        // start counting everyday income
        //prevMonday = dateTest;
        prevMonday.setDate(prevMonday.getDate() + i);
        let lastFinal = [];
        //console.log('start');
        while(i < 7 + week * 7){
          //console.log(i);
          ppp  = new Date(prevMonday).toISOString().substring(0, 10);
          //console.log(ppp);
          www  = await this.catModel99.find({dateString: ppp, shortAddress: "abcd"}).exec();
          prevMonday.setDate(prevMonday.getDate() + 1);


          var final = await this.catModel99.aggregate(
            [
              { $match: { dateString: ppp}},
              {
                $group:
                  {
                    _id: ppp,
                    totalAmount: { $sum: weight},
                    count: { $sum: 1 }
                  }
              }
            ]
          )
          console.log('begin');
          //let id = await this.catModel99.countDocuments({}) + 1;
          let id2 = await this.catModel99.find({dateString: ppp});
          //let id3 =  await id2.countDocuments({});
          console.log(id2);

          // .then(result => {console.log(result)})
          // .catch(error => {console.log(error)})
          
          // var mmm = await final.totalAmount;
          // console.log(mmm);
          lastFinal[y] = final;
          //console.log(final);
          y++;
          i++;
        }
        return lastFinal;
        //return final;
        ///let ttt = date2.getDate() - 6;
        
        //return prevMonday;
    



    
    
    return 'A New document have been created';
  }
  //get income weekly
  async create999(recAddress: Cat15[], senderAddress: Cat5, weight: number, dateTest: Date){
    let dateString = new Date(dateTest).toISOString().substring(0, 10);
    let id = await this.catModel99.countDocuments({}) + 1;
    let i = 0;
    console.log('asdkjfahslkdjf');
    const newCat = new this.catModel99({
      recAddress,
      senderAddress,
      weight,
      dateTest,
      dateString,
      id,
    });
    const result = await newCat.save();
    while(recAddress[i]){
      const newCat2 = new this.catModel5(recAddress[i]).save();
      i++;
    }
    console.log(result);

    let monday = new Date(dateTest);
    let sunday = new Date(dateTest);
    let ppp;
    let www;
    let week = 1;
    i = 0;
    let y = 0;
    let lastFinal = [];
    
        //console.log('start');

        while(i < 4){


          ppp  = new Date(monday).toISOString().substring(0, 10);
          sunday.setDate(monday.getDate() + 6);
          www  = new Date(sunday).toISOString().substring(0, 10);
          
          // console.log(monday);
          // console.log(sunday);
          var final = await this.catModel99.aggregate(
            [
              { $match: { dateString: { $gte: ppp,  $lte: www }}},
              {
                $group:
                  {
                    _id: null,
                    totalAmount: { $sum: weight},
                    count: { $sum: 1 }
                  }
              }
            ]
          )
          // var mmm = await final.totalAmount;
          // console.log(mmm);
          lastFinal[y] = final
          console.log(final);
          y++;
          i++;
          monday.setDate(monday.getDate() + 7);
        }
        return lastFinal;
        //return final;
        ///let ttt = date2.getDate() - 6;
        
        //return prevMonday;
    
    return 'A New document have been created';
  }

  async findAll1232(): Promise<Cat99[]> {
    return this.catModel99.find().exec();
  }
// this is how you push value into an array
  async pushArray(){
    // await this.catModel99.findOneAndUpdate(
    //   {
    //     id: 30
    //   },
    //   {$push: {"kewk": 424214 } },
    //   { 
    //     new: true
    //   }
    // )
    let k;
    k = await this.catModel15.findOne({id: 9})
    await this.catModel99.findOneAndUpdate(
      {
        id: 30
      },
      {$push: {"recAddress": k } },
      { 
        new: true
      }
    )
    //return this.catModel99.find().exec();
  }
 
  async create323(coord: Cat16, shortAddress: string, detailAddress: string, apartmentFloor: string, noteAddress: string, name: string, phone: string, noteForDriver: string, role: string, shipmentID: number, id: number){
    var k = await this.catModel15.countDocuments({})
    console.log(k);
    id = k + 1;
    const newCat = new this.catModel15({
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

  async findOne332(id: number): Promise<Cat15> {
    return this.catModel15.findOne({ id: id }).exec();
  }

  async findAll122332(): Promise<Cat15[]> {
    return this.catModel15.find().exec();
  }

  async findDriverFinal(shipment_id: number){
    //Get Distance through lat, long
    let shipment = await this.catModel8.findOne({ shipment_id: shipment_id }).exec();
    
    var latPick = shipment.senderAddress[0].coord.latitude;
    var longPick = shipment.senderAddress[0].coord.longtitude;


    const k = await this.catModel16.countDocuments({});
    var final = [];
    //(latPick: number, longPick: number, typeTruckNew: string[], latDriver: number[], longDriver: number[]){
    var distanceNew = [];
    const haversine = require('haversine')

    const pick = {latitude: latPick, longitude: longPick }
    var ppp2 = await this.catModel16.find().lean().exec();
    let latitude = ppp2.map(a => a.latitude);
    let longtitude = ppp2.map(a => a.longtitude);

    console.log('ppp2');
    console.log(ppp2);
    console.log('lat');
    console.log(latitude);
    console.log('long');
    console.log(longtitude);
 
    // Get needed array of object from driver 
    var arrDriver = [];
    arrDriver = await this.catModel2.find().select(['user_id', 'favor', 'truck_type']).lean().exec();
    // Get needed array of object from coord db
    var arrCoord = [];
    arrCoord = await this.catModel16.find().select(['-_id']).lean().exec();
    // Merge the two array
    let arrMerge = arrDriver.map((item, i) => Object.assign({}, item, arrCoord[i]));
    console.log(arrMerge);
    // Add distance and condition element for array
    arrMerge.forEach(p => p.distance = 0);
    arrMerge.forEach(p => p.condition = 0);
    // Calculate distance and push it into the merge array
    for(var i = 1; i <= arrMerge.length; i++){
      var y = i - 1;
      const driver = {latitude: latitude[y], longitude: longtitude[y] };
      distanceNew[y] = (haversine(pick, driver));
      console.log('rebel'); 
      console.log(distanceNew[y]);
      //console.log();
      arrMerge[y].distance = distanceNew[y]
      //console.log(distanceNew[y]); 
    }
    //Get only favorable driver 
    console.log(arrMerge);
    // var arrMergeFavor = arrMerge.filter(function (el) {
    //   return el.favor == 1; 
    // });

    var arrMergeFavor = arrMerge.filter(shot => shot.favor === 1)

    //const arrMergeFavor = arrMerge.filter(val => val.favor.indexOf("1"));
    console.log("print the man");
    console.log(arrMergeFavor);

    // var resultAll = Math.min(...arrMerge.map(item => item.distance));
    // var highestShots = arrMerge.filter(shot => shot.distance === resultAll)
    // // var highestShots = arrMerge.filter(function (el) {
    // //   return el.distance == resultNormal; 
    // // });
    // var resultFavor = Math.min(...arrMergeFavor.map(item => item.distance));
    // var highestShots2 = arrMergeFavor.filter(shot => shot.distance === resultFavor)
    // // var highestShots2 = arrMergeFavor.filter(function (el) {
    // //   return el.distance == resultFavor; 
    // // });
    // console.log('result normal:');
    // console.log(resultAll);
    // console.log(highestShots);
    // console.log('result favor:');
    // console.log(resultFavor);
    // console.log(highestShots2);
    //Get Type of truck from shipment id
    var findShipmnent = await this.catModel8.findOne({shipment_id: shipment_id}).lean().exec();
    var typeTruck = [];


    console.log('here truck');
    //console.log(typeTruck);
    //Get array all driver match type
    console.log(arrMerge);
    console.log('here truck favor');

    console.log(arrMergeFavor);

    var result = [];

    for(var i = 0; i < findShipmnent.trucks.length; i ++){

      //Get all driver match type
      // var arrMergeMatch = arrMerge.filter(function (el) {
      //   return el.truck_type == findShipmnent.trucks[i].truck_types; 
      // });
      var arrMergeMatchNoCon = arrMerge.filter(shot => shot.truck_type === findShipmnent.trucks[i].truck_types)
      //Make sure they match condition
      var arrMergeMatch = arrMergeMatchNoCon.filter(shot => shot.condition === 0)
      //Get min All
      var minAll = Math.min(...arrMergeMatch.map(item => item.distance));

      var arrMergeMatchMin = arrMergeMatch.filter(shot => shot.distance === minAll)

      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      //Get all favorable driver match type
      
      // var arrMergeFavorMatch = arrMergeFavor.filter(function (el) {
      //   return el.truck_type == findShipmnent.trucks[i].truck_types; 
      // });
      var arrMergeFavorMatchNoCon = arrMergeFavor.filter(shot => shot.truck_type === findShipmnent.trucks[i].truck_types)
      var arrMergeFavorMatch = arrMergeFavorMatchNoCon.filter(shot => shot.condition === 0)
      //Get min favorable
      var minFavor = Math.min(...arrMergeFavorMatch.map(item => item.distance));
      //Make sure they match condition
      var arrMergeFavorMatchMin = arrMergeFavorMatch.filter(shot => shot.distance === minFavor)
      console.log('stupid:');
      console.log(arrMergeMatchMin);
      console.log(arrMergeFavorMatchMin);
      console.log(arrMergeMatchMin[0].distance);
      console.log(arrMergeFavorMatchMin[0].distance);
      //console.log(arrMergeFavorMatch.distance);
      
      //Find Truck Logic
      if(arrMergeFavorMatchMin[0].distance < 50 || arrMergeFavorMatchMin[0].distance < arrMergeMatchMin[0].distance){
        result[i] = arrMergeFavorMatchMin;
      //Change Condition cause it no longer 0
      //Find index (the rank in an array)
        var objIndex = arrMerge.findIndex((obj => obj.driver_id == arrMergeFavorMatchMin[0].driver_id));
      //Update
        arrMerge[objIndex].condition = 1;
        this.createSelectDriver(arrMerge, latPick, longPick, shipment_id);
      }
      else{
        result[i] = arrMergeMatchMin;
      //Change Condition cause it no longer 0
        var objIndex = arrMerge.findIndex((obj => obj.driver_id == arrMergeMatchMin[0].driver_id));
      //update
        arrMerge[objIndex].condition = 1;
        this.createSelectDriver(arrMerge, latPick, longPick, shipment_id);
      }
      console.log('here result33');
      console.log(findShipmnent.trucks[i].truck_types);
      console.log(minAll);
      console.log(minFavor);
      // console.log(arrMergeFavorMatchMin[0].distance);
      // console.log(arrMergeMatchMin[0].distance);

    }
    console.log('here result');
    console.log(arrMerge);
    return result;
    //return arrMergeFavor;
    // hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    // //Apply distances
    // for(var i = 1; i <= k; i++){
    //   var y = i -1;
    //   let newcat4 = await this.catModel2.findOneAndUpdate({ user_id: i }, {distance: distanceNew[y]});
    //   const result = await newcat4.save();
    //   console.log(distanceNew[y]);
    //   //console.log(distanceNew[i]);
    // }
    // //Rejection exception
    // for(var i = 1; i <= k; i++){
    //   var y = i -1;
    //   let newcat5 = await this.catModel2.findOne({ user_id: i });
    //   if((await newcat5).occupy = 1){
    //     newcat5.distance = 9999;
    //   }
    //   let zz = []; 
    //   let ii = 0;
    //   zz = await newcat5.rejectShipment;
    //   while(zz[ii]){
    //     if(zz[ii] == shipment_id){
    //       newcat5.distance = 9999;
    //     }
    //     ii++;
    //   }
    // }
    //Find trucks
    // console.log(typeTruckNew);
    // var final = [];
    // let f = 0;
    // while(typeTruckNew[f])
    // {
    //   //Find smallest driver's distance of favorable and normal ones 
    //   var favorable = await this.catModel2.findOne({truck_type: typeTruckNew[f], favor: 1}).sort('distance');
    //   var normal = await this.catModel2.findOne({truck_type: typeTruckNew[f], favor: 0}).sort('distance');
    //   //We can also use find().limit(1);
    //   if(favorable.distance < 50 || favorable.distance < normal.distance){
    //     final[f] = favorable;
    //   }
    //   else{
    //     final[f] = normal;
    //   }
    //   //var priority = await a.findOne({favor: 1}).sort('distance').exec();
    //   //console.log(priority);
    //   //console.log((await priority).distance);
    //   // if((await priority).distance < 50){
    //   //   final[i] = priority;
    //   // }
    //   //final[i] = a.findOne({favor: 0}).sort('distance').exec();
    //   f++;
      
    // }
    // return final;
  }
    
    
    async createSelectDriver(detail: any[], latPick: number, longPick: number, shipment_id: number){
      // var k = await this.catModel16.countDocuments({})
      // console.log(k);
      // id = k + 1;
      const newCat = new this.catModel27({
        detail,
        latPick,
        longPick,
        shipment_id,
      });
      const result = await newCat.save();
      console.log(result);
      return 'A New document have been created';
    }
  
    async findOneSelectDriver(shipment_id: number){
      return this.catModel27.findOne({ shipment_id: shipment_id }).exec();
    }
  
    //Convert Array of Mongoose Object to JSON(normal array of object);
    async findAllSelectDriverr(){
      return this.catModel27.find().exec();
    }

    async updateSelectDriver(arrMerge: any[], shipment_id: number){
      return this.catModel27.findOneAndUpdate({ shipment_id: shipment_id }, {arrMerge: arrMerge}).exec();
    }
  
    async deleteSelectDriver(shipment_id: number){
      let newcat4 = await this.catModel27.findOneAndRemove({ shipment_id: shipment_id });
    }

  async delete532(id: number){
    let newcat4 = await this.catModel15.findOneAndRemove({ id: id });
  }

  async createCord(latitude: number, longtitude: number, favorable: number, driver_id: number){
    // var k = await this.catModel16.countDocuments({})
    // console.log(k);
    // id = k + 1;
    const newCat = new this.catModel16({
      latitude,
      longtitude,
      favorable,
      driver_id,
    });
    const result = await newCat.save();
    console.log(result);
    return 'A New document have been created';
  }

  async findOneCord(driver_id: number): Promise<Cat16> {
    return this.catModel16.findOne({ driver_id: driver_id }).exec();
  }

  //Convert Array of Mongoose Object to JSON(normal array of object);
  async findAllCord(){

    return this.catModel16.find().exec();
    
  }

  // //Convert Array of Mongoose Object to JSON(normal array of object);
  // async findAllCord(){

  //   var ppp2 = await this.catModel16.find().lean().exec();

  //   var ppp = (ppp2);
  //   console.log(ppp2);
  //   console.log(ppp);

  //   let result = ppp2.map(a => a.longtitude);

  //   console.log("dummy");
  //   console.log(result[0]);
  //   return result;
  
  // }

  async deleteCord(driver_id: number){
    let newcat4 = await this.catModel16.findOneAndRemove({ driver_id: driver_id });
    var k = await this.catModel16.countDocuments({});
    var k2 = await this.catModel16.countDocuments({});
    var i: number;

    i = driver_id;
    // typeof (i - 0);
    // let one = 1;
    i = +i + 1;
    //let i 
    console.log(i);
    while(i < k + 1){
      console.log(i);
      let newcat = await this.catModel16.findOneAndUpdate({ user_id: i }, { user_id: i - 1 } );
      i++
    }
  }

  async updateCord(driver_id: number, latitude: number, longtitude: number){
    let newcat3 = await this.catModel16.findOneAndUpdate({ driver_id: driver_id }, { latitude: latitude, longtitude: longtitude } );
    const result = await newcat3.save();
    console.log(result);
    return newcat3;
  }

  async create19(content: string, image: string){
    const newCat = new this.catModel19({
      content,
      image,
    });
    const result = await newCat.save();
    console.log(result);
  }

  async findOne19(content: string): Promise<Cat19> {
    return this.catModel19.findOne({ content: content }).exec();
  }

  async findAll19(): Promise<Cat19[]> {
    return this.catModel19.find().exec();
  }

  async delete19(content: string){
    let newcat4 = await this.catModel19.findOneAndRemove({ content: content });
  }

  async create20(content: string, image: string){
    const newCat = new this.catModel20({
      content,
      image,
    });
    const result = await newCat.save();
    console.log(result);
  }

  async findOne20(content: string): Promise<Cat20> {
    return this.catModel20.findOne({ content: content }).exec();
  }

  async findAll20(): Promise<Cat20[]> {
    return this.catModel20.find().exec();
  }

  async delete20(content: string){
    let newcat4 = await this.catModel20.findOneAndRemove({ content: content });
  }

  async create21(brand: string, image: string){
    const newCat = new this.catModel21({
      brand,
      image,
    });
    const result = await newCat.save();
    console.log(result);
  }

  async findOne21(brand: string): Promise<Cat21> {
    return this.catModel21.findOne({ brand: brand }).exec();
  }

  async findAll21(): Promise<Cat21[]> {
    return this.catModel21.find().exec();
  }

  async delete21(brand: string){
    let newcat4 = await this.catModel21.findOneAndRemove({ brand: brand });
  }

  async create22(content: string, image: string,){
    var k = await this.catModel22.countDocuments({})
    const newCat = new this.catModel22({
      content,
      image,
      k,
    });
    const result = await newCat.save();
    console.log(result);
  }

  async pushVoucher(voucher_id: number, user_id: number,){
    let k;
    k = await this.catModel22.findOne({id: voucher_id})
    await this.catModel99.findOneAndUpdate(
      {
        id: user_id
      },
      {$push: {"voucher": k } },
      { 
        new: true
      }
    )
  }

  async findOne22(content: string): Promise<Cat22> {
    return this.catModel22.findOne({ content: content }).exec();
  }

  async findAll22(): Promise<Cat22[]> {
    return this.catModel22.find().exec();
  }

  async delete22(content: string){
    let newcat4 = await this.catModel22.findOneAndRemove({ content: content });
  }

  private allUsers = [];
  private connectedUsers = [];

  async getChats(): Promise<Cat23[]> {
    return await this.catModel23.find();
  }

  async saveChat(chat: Cat23): Promise<void> {
    const createdChat = new this.catModel23(chat);
    await createdChat.save();
  }

  userConnected(userName: string, registrationToken: string) {
    let user = { userName: userName, registrationToken: registrationToken };
    const filteredUsers = this.allUsers.filter(u => u.userName === userName);
    if (filteredUsers.length == 0) {
      this.allUsers.push(user);
    } else {
      user = filteredUsers[0];
      user.registrationToken = registrationToken;
    }
    this.connectedUsers.push(userName);
    console.log("All Users", this.allUsers);
    console.log("Connected Users", this.connectedUsers);
  }

  userDisconnected(userName: string) {
    let userIndex = this.connectedUsers.indexOf(userName);
    this.connectedUsers.splice(userIndex, 1);
    console.log("All Users", this.allUsers);
    console.log("Connected Users", this.connectedUsers);
  }

  async create25(driver_id: number, latitude: number, longtitude: number, id_realCoor: number){
    var k = await this.catModel25.countDocuments({})
    console.log(k);
    id_realCoor = k + 1;
    const newCat = new this.catModel25({
      driver_id,
      latitude,
      longtitude,
      id_realCoor,
    });
    const result = await newCat.save();
    console.log(result);
    return 'A New document have been created for you';
  } 
  
  async findAll25(): Promise<Cat25[]> {
    return this.catModel25.find().exec();
  }

  async update25(driver_id: number, latitude: number, longtitude: number){
    let newcat4 = await this.catModel25.findOneAndUpdate({ driver_id: driver_id },  {latitude: latitude, longtitude: longtitude } );

  }

  async create23(message: string, sender: string, recipient: string){
    const newCat = new this.catModel23({
      message,
      sender,
      recipient,
    });
    const result = await newCat.save();
    console.log(result);
  }

  async findAll23(){
    return this.catModel23.find();
  }

  
  async createStatus(status: number, content: string, detail: string){
    // var k = await this.catModel16.countDocuments({})
    // console.log(k);
    // id = k + 1;
    const newCat = new this.catModel26({
      status,
      content,
      detail,
    });
    const result = await newCat.save();
    console.log(result);
    return 'A New document have been created';
  }

  async findOneStatus(status: number): Promise<Cat26> {
    return this.catModel26.findOne({ status: status }).exec();
  }

  //Convert Array of Mongoose Object to JSON(normal array of object);
  async findAllStatus(){
    return this.catModel26.find().exec();
  }

  async deleteStatus(status: number){
    let newcat4 = await this.catModel26.findOneAndRemove({ status: status });
  }

  async getNextStatus(status: number){
    var kkk = status + 1;
    let newcat4 = await this.catModel26.findOne({ status: kkk });
    return newcat4;
  }

  async updateStatus(status: number, content: string, detail: string){
    // let newcat3 = await this.catModel16.findOneAndUpdate({ driver_id: driver_id }, { latitude: latitude, longtitude: longtitude } );
    // const result = await newcat3.save();
    // console.log(result);
    // return newcat3;
  }

  async create28(user_name: string, password: string, full_name: string, phone_number: string, birth: Date, gender: string){
    // if(user_name == null){
    //   user_name = 'xxxxx';
    // }
    
    var k = await this.catModel28.countDocuments({})
    const salt = await bcrypt.genSalt(10);
    const hashed_pass = await bcrypt.hash(password, salt);
    //const isMatch = await bcrypt.compare(password, hashed_pass);
    //return hashed_pass;
    console.log(k);
    var admin_id = k + 1;
    let t = await this.catModel28.findOne({user_name: user_name})
    if (user_name != null && t != null && user_name != "" && user_name != " "){
      var objJson1;
      throw new HttpException('DUPLICATE_USERNAME', HttpStatus.FORBIDDEN);
      //return objJson1 = ('{"statusCode":"403","message": "Cannot POST /user/validate","error":"DUPLICATE_USERNAME"}');
    }
    t = await this.catModel28.findOne({phone_number: phone_number})
    if (!!t){
      throw new HttpException('DUPLICATE_PHONE', HttpStatus.FORBIDDEN);
      }
    console.log(hashed_pass);
    password = hashed_pass;
    const newCat = new this.catModel28({
      user_name,
      password,
      full_name,
      phone_number,
      gender,
      birth,
      admin_id,
    });
    const result = await newCat.save();
    console.log(result);
    return objJson1 = ('{"statusCode":"0"}');
  }

  async findAll28(): Promise<Cat28[]> {
    return this.catModel28.find().exec();
  }

  async deleteUser28(admin_id: number){
    var k = await this.catModel28.countDocuments({});
    console.log(k);
    let newcat4 = await this.catModel28.findOneAndRemove({ admin_id: admin_id });
    var k = await this.catModel28.countDocuments({});
    var k2 = await this.catModel28.countDocuments({});
    var i: number;

    i = admin_id;
    // typeof (i - 0);
    // let one = 1;
    i = +i + 1;
    //let i 
    console.log(i);
    while(i < k + 1){
      console.log(i);
      let newcat = await this.catModel28.findOneAndUpdate({ admin_id: i }, { admin_id: i - 1 } );
      i++
    }
    console.log(k2);
    //return newcat4;
  }


  // async create25(driver_id: number, latitude: number, longtitude: number, id_realCoor: number){
  //   var k = await this.catModel25.countDocuments({})
  //   console.log(k);
  //   id_realCoor = k + 1;
  //   const newCat = new this.catModel25({
  //     driver_id,
  //     latitude,
  //     longtitude,
  //     id_realCoor,
  //   });
  //   const result = await newCat.save();
  //   console.log(result);
  //   return 'A New document have been created for you';
  // } 
  
  // async findAll25(): Promise<Cat25[]> {
  //   return this.catModel25.find().exec();
  // }
}
  //async OTP(){


  // var messagebird = require('messagebird')('test_gshuPaZoeEG6ovbc8M79w0QyM');

  // messagebird.messages.create({
  //     originator : '+84778207407',
  //     recipients : [ '+84778207407' ],
  //     body : 'Hi! This is your first message'
  // },
  // function (err, response) {
  //     if (err) {
  //     console.log("ERROR:");
  //     console.log(err);
  // } else {
  //     console.log("SUCCESS:");
  //     console.log(response);
  //         }
  // });
  // }
//}
