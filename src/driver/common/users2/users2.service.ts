import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../dto/create-user.dto';
import { driver, driverDocument } from '../schemas/driver';
//import { Cat2, CatDocument2 } from '../schemas/cats.schema';
//import { JwtModule } from '@nestjs/jwt';
//import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService2 {
  constructor(
    //private jwtService: JwtService,
    @InjectModel(driver.name) private readonly catModel2: Model<driverDocument>,
  ) {}



  async create88(createCatDto: CreateUserDto): Promise<driver> {
    const createdCat = await this.catModel2.create(createCatDto);
    return createdCat;
  }

  async findAll(): Promise<driver[]> {
    return this.catModel2.find().exec();
  }

  async findOne2(user_namePostMan: string): Promise<driver> {
    return this.catModel2.findOne({ user_name: user_namePostMan }).exec();
  }

  async userExists (user_namePostMan: string) {

    const userExists = await this.catModel2.exists({ user_name: user_namePostMan });
    if (userExists) return 1;
  }

}