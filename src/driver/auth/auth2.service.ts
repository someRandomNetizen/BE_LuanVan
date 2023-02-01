import { Injectable } from '@nestjs/common';
import { UsersService2 } from '../common/users2/users2.service';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { driver, driverDocument } from '../common/schemas/driver';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService2 {
  constructor(
    private usersService2: UsersService2,
    private jwtService2: JwtService,
    @InjectModel(driver.name) private readonly driverModel: Model<driverDocument>
  ) {}

  async validateUser2(phone_number: string, pass: string): Promise<any> {
    const user2 = await this.usersService2.findOne2(phone_number);
    if (user2 == null){
      return null;
    }
    
    const isMatch2 = await bcrypt.compare(pass, user2.password);
    if (isMatch2 == true) {
      const { password, ...result } = user2;
      return result;
    }
    return null;
  }

  async login2(phone_number: string, password: string) {
    const payload = {phone_number, password};
    return {
      access_token: this.jwtService2.sign(payload),
    };
  }

  async findOne2(user_namePostMan: string): Promise<driver> {
    return this.driverModel.findOne({ phone_number: user_namePostMan }).exec();
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






