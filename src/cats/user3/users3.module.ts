import { Module } from '@nestjs/common';
import { UsersService3 } from './users3.service';
//import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsController  } from '../cats.controller';
import { CatsService } from '../cats.service';
import { Cat28, CatSchema28 } from '../schemas/cats.schema';
//import { Cat2, CatSchema2 } from '../schemas/cats.schema';
import { JwtService } from '@nestjs/jwt';
import { AuthModule } from '../auth/auth.module';
import { AuthModule3 } from '../auth3/auth3.module';
//import { UsersModule } from './users/users.module';
import { JwtModule } from '@nestjs/jwt';
//,MongooseModule.forFeature([{ name: Cat2.name, schema: CatSchema2 }])
@Module({
  imports:[MongooseModule.forFeature([{ name: Cat28.name, schema: CatSchema28 }])],
  providers: [UsersService3],
  exports: [UsersService3],
})
export class UsersModule3 {}