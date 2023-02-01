import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../dto/create-user.dto';
import { user, userDocument } from '../schemas/user';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(user.name) private readonly catModel: Model<userDocument>,
  ) {}
  async create88(createCatDto: CreateUserDto): Promise<user> {
    const createdCat = await this.catModel.create(createCatDto);
    return createdCat;
  }
  async findAll(): Promise<user[]> {
    return this.catModel.find().exec();
  }
  async findOne(user_namePostMan: string): Promise<user> {
    return this.catModel.findOne({ user_name: user_namePostMan }).exec();
  }
  async userExists (user_namePostMan: string) {
    const userExists = await this.catModel.exists({ user_name: user_namePostMan });
    if (userExists) return 1;
  }

  ////////////////
  // async create2(createCatDto: CreateCatDto): Promise<Cat> {
  //   const createdCat = await this.catModel2.create(createCatDto);
  //   return createdCat;
  // }

  // async findAll2(): Promise<Cat[]> {
  //   return this.catModel2.find().exec();
  // }

  // // async findOne(user_name: string): Promise<Cat> {
  // //   return this.catModel.findOne({ _id: user_name }).exec();
  // // }

  // async findOne2(user_namePostMan: string): Promise<Cat> {
  //   return this.catModel2.findOne({ user_name: user_namePostMan }).exec();
  // }

  // async userExists2 (user_namePostMan: string) {

  //   const userExists = await this.catModel2.exists({ user_name: user_namePostMan });
  //   if (userExists) return 1;
  // }
}