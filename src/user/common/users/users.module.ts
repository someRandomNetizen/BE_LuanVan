import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { user, userSchema } from '../schemas/user';
@Module({
  imports:[MongooseModule.forFeature([{ name: user.name, schema: userSchema }])],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}