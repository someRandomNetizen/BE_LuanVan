import { Injectable } from '@nestjs/common';
import { UsersService3 } from '../user3/users3.service';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCatDto } from '../dto/create-cat.dto';
import { Cat, CatDocument } from '../schemas/cats.schema';
import { Cat28, CatDocument28 } from '../schemas/cats.schema';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService3 {
  constructor(
    private usersService3: UsersService3,
    private jwtService3: JwtService,
    @InjectModel(Cat28.name) private readonly catModel28: Model<CatDocument28>
    //@InjectModel(Cat2.name) private readonly catModel2: Model<CatDocument2>
  ) {}

  async validateUser3(user_name: string, pass: string): Promise<any> {
    const user3 = await this.usersService3.findOne3(user_name);
    if (user3 == null){
      console.log("you suck");
      return null;
    }

    const isMatch3 = await bcrypt.compareSync(pass, user3.password);
    if (isMatch3 == true) {
      console.log("sweet")
      const { password, ...result } = user3;
      return result;
    }
    // if (user && user.password === pass) {
    //   const { password, ...result } = user;
    //   return result;
    // }
    console.log("you suck 2");
    return null;
  }

  // async login2(user: any) {
  //   const payload = {user_name: user.user_name, password: user.password};
  //   return {
  //     access_token: this.jwtService.sign(payload),
  //   };
  // }

  async login3(user_name: string, password: string) {
    const payload = {user_name, password};
    return {
      access_token: this.jwtService3.sign(payload),
    };
  }

  async findOne3(user_namePostMan: string): Promise<Cat28> {
    return this.catModel28.findOne({ user_name: user_namePostMan }).exec();
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






