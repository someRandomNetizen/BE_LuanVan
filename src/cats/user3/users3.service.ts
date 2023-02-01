// import { Injectable } from '@nestjs/common';

// // This should be a real class/interface representing a user entity
// export type User = any;

// @Injectable()
// export class UsersService {
//   private readonly users = [
//     {
//       user_name: 'john',
//       password: 'changeme',
//     },
//     {
//       user_name: 'maria',
//       password: 'guess',
//     },
//   ];

//   async findOne(username: string): Promise<User | undefined> {
//     return this.users.find(user => user.user_name === username);
//   }
// }

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCatDto } from '../dto/create-cat.dto';
import { Cat28, CatDocument28 } from '../schemas/cats.schema';
//import { Cat2, CatDocument2 } from '../schemas/cats.schema';
//import { JwtModule } from '@nestjs/jwt';
//import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService3 {
  constructor(
    //private jwtService: JwtService,
    @InjectModel(Cat28.name) private readonly catModel28: Model<CatDocument28>,
    //@InjectModel(Cat2.name) private readonly catModel2: Model<CatDocument>
  ) {}



  async create88(createCatDto: CreateCatDto): Promise<Cat28> {
    const createdCat = await this.catModel28.create(createCatDto);
    return createdCat;
  }

  async findAll(): Promise<Cat28[]> {
    return this.catModel28.find().exec();
  }

  // async findOne(user_name: string): Promise<Cat> {
  //   return this.catModel.findOne({ _id: user_name }).exec();
  // }

  async findOne3(user_namePostMan: string): Promise<Cat28> {
    return this.catModel28.findOne({ user_name: user_namePostMan }).exec();
  }

  async userExists (user_namePostMan: string) {

    const userExists = await this.catModel28.exists({ user_name: user_namePostMan });
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