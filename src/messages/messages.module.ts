import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesGateway } from './messages.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat23, CatSchema23 } from '../cats/schemas/cats.schema';
import { Cat25, CatSchema25 } from '../cats/schemas/cats.schema';
import { Cat2, CatSchema2 } from '../cats/schemas/cats.schema';
import { Cat3, CatSchema3 } from '../cats/schemas/cats.schema';
import { Cat4, CatSchema4 } from '../cats/schemas/cats.schema';
import { Cat5, CatSchema5 } from '../cats/schemas/cats.schema';
import { Cat55, CatSchema55 } from '../cats/schemas/cats.schema';
import { Cat6, CatSchema6 } from '../cats/schemas/cats.schema';
import { Cat7, CatSchema7 } from '../cats/schemas/cats.schema';
import { Cat8, CatSchema8 } from '../cats/schemas/cats.schema';
import { Cat9, CatSchema9 } from '../cats/schemas/cats.schema';
import { Cat10, CatSchema10 } from '../cats/schemas/cats.schema';
import { Cat11, CatSchema11 } from '../cats/schemas/cats.schema';
import { Cat12, CatSchema12 } from '../cats/schemas/cats.schema';
import { Cat13, CatSchema13 } from '../cats/schemas/cats.schema';
import { Cat14, CatSchema14 } from '../cats/schemas/cats.schema';
import { Cat15, CatSchema15 } from '../cats/schemas/cats.schema';
import { Cat16, CatSchema16 } from '../cats/schemas/cats.schema';
import { Cat99, CatSchema99 } from '../cats/schemas/cats.schema';
import { Cat100, CatSchema100 } from '../cats/schemas/cats.schema';
import { Cat17, CatSchema17 } from '../cats/schemas/cats.schema';
import { Cat18, CatSchema18 } from '../cats/schemas/cats.schema';
import { Cat19, CatSchema19 } from '../cats/schemas/cats.schema';
import { Cat20, CatSchema20 } from '../cats/schemas/cats.schema';
import { Cat21, CatSchema21 } from '../cats/schemas/cats.schema';
import { Cat22, CatSchema22 } from '../cats/schemas/cats.schema';
//import { Cat23, CatSchema23 } from './schemas/cats.schema';
import { Cat24, CatSchema24 } from '../cats/schemas/cats.schema';
import { Cat26, CatSchema26 } from '../cats/schemas/cats.schema';
import { Cat27, CatSchema27 } from '../cats/schemas/cats.schema';
import { Cat28, CatSchema28 } from '../cats/schemas/cats.schema';
import { Cat, CatSchema } from '../cats/schemas/cats.schema';
import { CatsService } from '../cats/cats.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }]),
    MongooseModule.forFeature([{ name: Cat2.name, schema: CatSchema2 }]),
    MongooseModule.forFeature([{ name: Cat3.name, schema: CatSchema3 }]),
    MongooseModule.forFeature([{ name: Cat4.name, schema: CatSchema4 }]),
    MongooseModule.forFeature([{ name: Cat5.name, schema: CatSchema5 }]),
    MongooseModule.forFeature([{ name: Cat55.name, schema: CatSchema55 }]),
    MongooseModule.forFeature([{ name: Cat6.name, schema: CatSchema6 }]),
    MongooseModule.forFeature([{ name: Cat7.name, schema: CatSchema7 }]),
    MongooseModule.forFeature([{ name: Cat8.name, schema: CatSchema8 }]),
    MongooseModule.forFeature([{ name: Cat9.name, schema: CatSchema9 }]),
    MongooseModule.forFeature([{ name: Cat10.name, schema: CatSchema10 }]),
    MongooseModule.forFeature([{ name: Cat11.name, schema: CatSchema11 }]),
    MongooseModule.forFeature([{ name: Cat12.name, schema: CatSchema12 }]),
    MongooseModule.forFeature([{ name: Cat13.name, schema: CatSchema13 }]),
    MongooseModule.forFeature([{ name: Cat14.name, schema: CatSchema14 }]),
    MongooseModule.forFeature([{ name: Cat15.name, schema: CatSchema15 }]),
    MongooseModule.forFeature([{ name: Cat16.name, schema: CatSchema16 }]),
    MongooseModule.forFeature([{ name: Cat99.name, schema: CatSchema99 }]),
    MongooseModule.forFeature([{ name: Cat100.name, schema: CatSchema100 }]),
    MongooseModule.forFeature([{ name: Cat17.name, schema: CatSchema17 }]),
    MongooseModule.forFeature([{ name: Cat18.name, schema: CatSchema18 }]),
    MongooseModule.forFeature([{ name: Cat19.name, schema: CatSchema19 }]),
    MongooseModule.forFeature([{ name: Cat20.name, schema: CatSchema20 }]),
    MongooseModule.forFeature([{ name: Cat21.name, schema: CatSchema21 }]),
    MongooseModule.forFeature([{ name: Cat22.name, schema: CatSchema22 }]),
    MongooseModule.forFeature([{ name: Cat23.name, schema: CatSchema23 }]),
    MongooseModule.forFeature([{ name: Cat24.name, schema: CatSchema24 }]),
    MongooseModule.forFeature([{ name: Cat25.name, schema: CatSchema25 }]),
    MongooseModule.forFeature([{ name: Cat26.name, schema: CatSchema26 }]),
    MongooseModule.forFeature([{ name: Cat27.name, schema: CatSchema27 }]),
    MongooseModule.forFeature([{ name: Cat28.name, schema: CatSchema28 }]),],
  providers: [MessagesGateway, MessagesService, CatsService]
})
export class MessagesModule {}
