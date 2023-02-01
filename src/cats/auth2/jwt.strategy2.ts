import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants2 } from './constants2';
import { CatsService } from '../cats.service';
import { Cat2, CatDocument2 } from '../schemas/cats.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthService2 } from './auth2.service';

@Injectable()
export class JwtStrategy2 extends PassportStrategy(Strategy,'jwt2') {
  constructor(private authService2: AuthService2, @InjectModel(Cat2.name) private readonly catModel2: Model<CatDocument2>) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants2.secret,
    });
  }

  async validate(payload: any) {
    
    return this.authService2.findOne2(payload.user_name);

    //return {username: payload.user_name, password: payload.password };
  }
}