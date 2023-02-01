import { Injectable } from '@nestjs/common';
import { UsersService } from '../common/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { user, userDocument } from '../common/schemas/user';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    @InjectModel(user.name) private readonly userModel: Model<userDocument>
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
    return null;
  }
  async login(user_name: string, password: string) {
    const payload = {user_name, password};
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
  async findOne(user_namePostMan: string): Promise<user> {
    return this.userModel.findOne({ user_name: user_namePostMan }).exec();
  }
  
}







