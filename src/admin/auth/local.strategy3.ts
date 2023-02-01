import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService3 } from './auth3.service';

@Injectable()
export class LocalStrategy3 extends PassportStrategy(Strategy, 'local3') {
  constructor(private authService3: AuthService3) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string): Promise<any> {
    const user = await this.authService3.validateUser3(email, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}