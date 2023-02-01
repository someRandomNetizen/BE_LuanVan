import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCatDto } from '../dto/create-cat.dto';
import { Cat, CatDocument } from '../schemas/cats.schema';
import { Cat2, CatDocument2 } from '../schemas/cats.schema';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    @InjectModel(Cat.name) private readonly catModel: Model<CatDocument>
    //@InjectModel(Cat2.name) private readonly catModel2: Model<CatDocument2>
  ) {}

  async validateUser(user_name: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(user_name);
    if (user == null){
      return null;
    }
    const isMatch = await bcrypt.compareSync(pass, user.password);


    if (isMatch == true) {
      const { password, ...result } = user;
      return result;
    }
    // if (user && user.password === pass) {
    //   const { password, ...result } = user;
    //   return result;
    // }
    return null;
  }

  // async login2(user: any) {
  //   const payload = {user_name: user.user_name, password: user.password};
  //   return {
  //     access_token: this.jwtService.sign(payload),
  //   };
  // }

  async login(user_name: string, password: string) {
    const payload = {user_name, password};
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async findOne(user_namePostMan: string): Promise<Cat> {
    return this.catModel.findOne({ user_name: user_namePostMan }).exec();
  }
  
}

// import { Injectable } from '@nestjs/common';
// import { UsersService } from '../users/users.service';
// import { JwtService } from '@nestjs/jwt';
// import { CatsService } from '../cats.service';

// @Injectable()
// export class AuthService {
//   constructor(
//     private usersService: UsersService,
//     private jwtService: JwtService,
//     private readonly catsService: CatsService
//   ) {}

//   async validateUser(user_name: string, pass: string): Promise<any> {
//     const user = await this.catsService.findOne(user_name);
//     if (user && user.password === pass) {
//       const { password, ...result } = user;
//       return result;
//     }
//     return null;
//   }

//   async login(user: any,) {
//     const payload = { user_name: user.user_name, password: user.password };
//     return {
//       access_token: this.jwtService.sign(payload),
//     };
//   }
// }






