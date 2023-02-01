import { Module } from '@nestjs/common';
import { AuthService2 } from './auth2.service';
import { LocalStrategy2 } from './local.strategy2';
import { JwtStrategy2 } from './jwt.strategy2';
import { UsersModule2 } from '../user2/users2.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants2 } from './constants2';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsController  } from '../cats.controller';
import { Cat2, CatSchema2 } from '../schemas/cats.schema';
//import { Cat2, CatSchema2 } from '../schemas/cats.schema';

@Module({
  imports: [
    UsersModule2,
    MongooseModule.forFeature([{ name: Cat2.name, schema: CatSchema2 }]),
    //MongooseModule.forFeature([{ name: Cat2.name, schema: CatSchema2 }]),
    PassportModule.register({defaultStrategy:'local2',session: true}),
    JwtModule.register({
      secret: jwtConstants2.secret,
      signOptions: { expiresIn: '28800s' },
    }),
  ],
  providers: [AuthService2, LocalStrategy2, JwtStrategy2],
  exports: [AuthService2],
})
export class AuthModule2 {}