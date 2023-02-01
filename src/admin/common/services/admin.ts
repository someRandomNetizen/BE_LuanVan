import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { admin, adminDocument } from '../schemas/admin';

@Injectable()

export class AdminService {
  constructor(
    @InjectModel(admin.name) private readonly adminModel: Model<adminDocument>,){}
    
    async create2(email: string, password: string){
        const k = await this.adminModel.countDocuments({});
        const salt = await bcrypt.genSalt(10);
        const hashed_pass = await bcrypt.hash(password, salt);
        console.log(k);
        var admin_id = k + 1;
        var t = await this.adminModel.findOne({email: email});
        if (t != null){
          return 'Phone number already Taken';
        }
        password = hashed_pass;
        const newCat = new this.adminModel({
          email,
          password,
          admin_id,
        });
        const result = await newCat.save();
        console.log(result);
        return 'A New document have been created';
      }
    
      async findOne2(user_namePostMan: string): Promise<admin> {
        return this.adminModel.findOne({ email: user_namePostMan }).exec();
      }
    
      async userExists2 (user_namePostMan: string) {
        const userExists = await this.adminModel.exists({ email: user_namePostMan });
        if (userExists) return 1;
      }
    
      async findAll2(): Promise<admin[]> {
        return this.adminModel.find().exec();
      }
    
      
}