import { Module } from '@nestjs/common';
import { AuthService3 } from './auth3.service';
import { LocalStrategy3 } from './local.strategy3';
import { JwtStrategy3 } from './jwt.strategy3';
import { UsersModule3 } from '../common/users3/users3.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants3 } from './constants3';
import { MongooseModule } from '@nestjs/mongoose';
import { admin, adminSchema } from '../common/schemas/admin';


@Module({
  imports: [
    UsersModule3,
    MongooseModule.forFeature([{ name: admin.name, schema: adminSchema }]),
    //MongooseModule.forFeature([{ name: Cat2.name, schema: CatSchema2 }]),
    PassportModule.register({defaultStrategy:'local3',session: true}),
    JwtModule.register({

      secret: jwtConstants3.secret,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  providers: [AuthService3, LocalStrategy3, JwtStrategy3],
  exports: [AuthService3],
})
export class AuthModule3{}