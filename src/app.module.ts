// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { MongooseModule } from '@nestjs/mongoose';
// import { AuthModule } from './auth/auth.module';
// import { UsersModule } from './users/users.module';
// import { AppService } from './app.service';

// @Module({
//   imports: [AuthModule, UsersModule, MongooseModule.forRoot('mongodb://localhost/nest')],
//   controllers: [AppController],
//   providers: [AppService],
  
// })
// export class AppModule {}


// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// //import { CatsService } from './cats.service';
// import { catsProviders } from './app.providers';
// import { DatabaseModule } from './database.module';

// @Module({
//   imports: [DatabaseModule],
//   controllers: [AppController],
//   providers: [
//     //CatsService,
//     ...catsProviders,
//   ],
// })
// export class CatsModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';
import { userModule } from './user/common/modules/user';
import { driverModule } from './driver/common/modules/driver';
import { adminModule } from './admin/common/modules/admin';
import { ConfigModule, ConfigService  } from '@nestjs/config';
import { TwilioModule } from 'nestjs-twilio';
import { AppController } from './app.controller';
//import { UserController } from './user/user.controller';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [
            MongooseModule.forRoot('mongodb+srv://giadinhthai:Ngpro123@cluster0.gtocs.mongodb.net/365truck'),
            //MongooseModule.forRoot('mongodb+srv://giadinhthai:<Ngpro123>@cluster0.gtocs.mongodb.net/?retryWrites=true&w=majority'),
            CatsModule, userModule, driverModule, adminModule, MessagesModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
//mongodb://localhost:27017/365truck
//mongodb+srv://giadinhthai:Ngpro123@cluster0.gtocs.mongodb.net/365truck

//mongodb+srv://giadinhthai:<Ngpro123>@cluster0.gtocs.mongodb.net/?retryWrites=true&w=majority