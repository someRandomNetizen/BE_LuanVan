import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsController  } from '../cats.controller';
import { Cat, CatSchema } from '../schemas/cats.schema';
//import { Cat2, CatSchema2 } from '../schemas/cats.schema';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }]),
    //MongooseModule.forFeature([{ name: Cat2.name, schema: CatSchema2 }]),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '28800s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}