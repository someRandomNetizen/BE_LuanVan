import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService2 } from './auth2.service';

@Injectable()
export class LocalStrategy2 extends PassportStrategy(Strategy, 'local2') {
  constructor(private authService2: AuthService2) {
    super({ usernameField: 'phone_number' });
  }

  async validate(phone_number: string, password: string): Promise<any> {
    const user = await this.authService2.validateUser2(phone_number, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
