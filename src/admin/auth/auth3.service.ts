import { Injectable } from '@nestjs/common';
import { UsersService3 } from '../common/users3/users3.service';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { admin, adminDocument } from '../common/schemas/admin';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService3 {
  constructor(
    private usersService3: UsersService3,
    private jwtService3: JwtService,
    @InjectModel(admin.name) private readonly adminModel: Model<adminDocument>
  ) {}

  async validateUser3(email: string, pass: string): Promise<any> {
    const user3 = await this.usersService3.findOne3(email);
    if (user3 == null){
      return null;
    }
    
    const isMatch2 = await bcrypt.compare(pass, user3.password);
    if (isMatch2 == true) {
      const { password, ...result } = user3;
      return result;
    }
    return null;
  }

  async login3(email: string, password: string) {
    const payload = {email, password};
    return {
      access_token: this.jwtService3.sign(payload),
    };
  }

  async findOne3(user_namePostMan: string): Promise<admin> {
    return this.adminModel.findOne({ email: user_namePostMan }).exec();
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






