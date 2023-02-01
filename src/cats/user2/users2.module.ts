import { Module } from '@nestjs/common';
import { UsersService2 } from './users2.service';
//import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsController  } from '../cats.controller';
import { CatsService } from '../cats.service';
import { Cat2, CatSchema2 } from '../schemas/cats.schema';
//import { Cat2, CatSchema2 } from '../schemas/cats.schema';
import { JwtService } from '@nestjs/jwt';
import { AuthModule } from '../auth/auth.module';
import { AuthModule2 } from '../auth2/auth2.module';
//import { UsersModule } from './users/users.module';
import { JwtModule } from '@nestjs/jwt';
//,MongooseModule.forFeature([{ name: Cat2.name, schema: CatSchema2 }])
@Module({
  imports:[MongooseModule.forFeature([{ name: Cat2.name, schema: CatSchema2 }])],
  providers: [UsersService2],
  exports: [UsersService2],
})
export class UsersModule2 {}