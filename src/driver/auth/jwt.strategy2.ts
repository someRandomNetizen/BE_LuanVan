import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants2 } from './constants2';
import { driver, driverDocument } from '../common/schemas/driver';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthService2 } from './auth2.service';

@Injectable()
export class JwtStrategy2 extends PassportStrategy(Strategy,'jwt2') {
  constructor(private authService2: AuthService2, @InjectModel(driver.name) private readonly driverModel: Model<driverDocument>) {
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