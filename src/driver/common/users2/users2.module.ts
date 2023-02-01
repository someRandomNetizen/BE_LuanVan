import { Module } from '@nestjs/common';
import { UsersService2 } from './users2.service';
//import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { driver, driverSchema } from '../schemas/driver';
//import { Cat2, CatSchema2 } from '../schemas/cats.schema';

//,MongooseModule.forFeature([{ name: Cat2.name, schema: CatSchema2 }])
@Module({
  imports:[MongooseModule.forFeature([{ name: driver.name, schema: driverSchema }])],
  providers: [UsersService2],
  exports: [UsersService2],
})
export class UsersModule2 {}