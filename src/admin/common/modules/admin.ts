import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule3 } from '../users3/users3.module';
import { AuthModule3 } from '../../auth/auth3.module';

import { admin, adminSchema } from '../schemas/admin';
import { user, userSchema } from '../schemas/user';


import { AdminService } from '../services/admin';


import { adminController } from '../controllers/admin';


@Module({
  imports: [MongooseModule.forFeature([{name: admin.name, schema: adminSchema }]),
            MongooseModule.forFeature([{name: user.name, schema: userSchema }]),
            AuthModule3, UsersModule3],

  controllers: [adminController],
  
  providers: [AdminService],
})
export class adminModule {}

