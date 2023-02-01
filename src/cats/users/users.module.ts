import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
//import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsController  } from '../cats.controller';
import { CatsService } from '../cats.service';
import { Cat, CatSchema } from '../schemas/cats.schema';
//import { Cat2, CatSchema2 } from '../schemas/cats.schema';
import { JwtService } from '@nestjs/jwt';
import { AuthModule } from '../auth/auth.module';
//import { UsersModule } from './users/users.module';
import { JwtModule } from '@nestjs/jwt';
//,MongooseModule.forFeature([{ name: Cat2.name, schema: CatSchema2 }])
@Module({
  imports:[MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}