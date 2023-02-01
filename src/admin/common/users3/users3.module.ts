import { Module } from '@nestjs/common';
import { UsersService3 } from './users3.service';
//import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { admin, adminSchema } from '../schemas/admin';
//import { Cat2, CatSchema2 } from '../schemas/cats.schema';

//,MongooseModule.forFeature([{ name: Cat2.name, schema: CatSchema2 }])
@Module({
  imports:[MongooseModule.forFeature([{ name: admin.name, schema: adminSchema }])],
  providers: [UsersService3],
  exports: [UsersService3],
})
export class UsersModule3 {}