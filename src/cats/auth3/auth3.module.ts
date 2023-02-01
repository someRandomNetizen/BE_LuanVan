import { Module } from '@nestjs/common';
import { AuthService3 } from './auth3.service';
import { LocalStrategy3 } from './local.strategy3';
import { JwtStrategy3 } from './jwt.strategy3';
import { UsersModule3 } from '../user3/users3.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants3 } from './constants3';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsController  } from '../cats.controller';
import { Cat28, CatSchema28 } from '../schemas/cats.schema';
//import { Cat2, CatSchema2 } from '../schemas/cats.schema';

@Module({
  imports: [
    UsersModule3,
    MongooseModule.forFeature([{ name: Cat28.name, schema: CatSchema28 }]),
    //MongooseModule.forFeature([{ name: Cat2.name, schema: CatSchema2 }]),
    PassportModule.register({defaultStrategy:'local4',session: true}),
    JwtModule.register({
      secret: jwtConstants3.secret,
      signOptions: { expiresIn: '28800s' },
    }),
  ],
  providers: [AuthService3, LocalStrategy3, JwtStrategy3],
  exports: [AuthService3],
})
export class AuthModule3 {}