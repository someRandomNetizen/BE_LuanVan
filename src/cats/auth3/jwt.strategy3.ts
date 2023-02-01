import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants3 } from './constants3';
import { CatsService } from '../cats.service';
import { Cat28, CatDocument28 } from '../schemas/cats.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthService3 } from './auth3.service';

@Injectable()
export class JwtStrategy3 extends PassportStrategy(Strategy,'jwt3') {
  constructor(private authService3: AuthService3, @InjectModel(Cat28.name) private readonly catModel28: Model<CatDocument28>) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants3.secret,
    });
  }

  async validate(payload: any) {
    
    return this.authService3.findOne3(payload.user_name);

    //return {username: payload.user_name, password: payload.password };
  }
}