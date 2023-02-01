import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../dto/create-user.dto';
import { admin, adminDocument } from '../schemas/admin';
//import { Cat2, CatDocument2 } from '../schemas/cats.schema';
//import { JwtModule } from '@nestjs/jwt';
//import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService3 {
  constructor(
    //private jwtService: JwtService,
    @InjectModel(admin.name) private readonly catModel3: Model<adminDocument>,
  ) {}



  async create88(createCatDto: CreateUserDto): Promise<admin> {
    const createdCat = await this.catModel3.create(createCatDto);
    return createdCat;
  }

  async findAll(): Promise<admin[]> {
    return this.catModel3.find().exec();
  }

  async findOne3(user_namePostMan: string): Promise<admin> {
    return this.catModel3.findOne({ user_name: user_namePostMan }).exec();
  }

  async userExists (user_namePostMan: string) {

    const userExists = await this.catModel3.exists({ user_name: user_namePostMan });
    if (userExists) return 1;
  }

}