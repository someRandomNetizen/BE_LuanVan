import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message } from './entities/message.entity'
import { Cat25, CatDocument25 } from '../cats/schemas/cats.schema';
import { Cat23, CatDocument23 } from '../cats/schemas/cats.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CatsService } from '../cats/cats.service';
@Injectable()
export class MessagesService {
  constructor( private readonly catsService: CatsService,
    @InjectModel(Cat25.name) private readonly catModel25: Model<CatDocument25>,
    @InjectModel(Cat23.name) private readonly catModel23: Model<CatDocument23>
  ) {}
  messages: Message[] = [{ name: 'Marius', text: 'heyooo' }];
  clientToUser = {};

  async create(createMessageDto: CreateMessageDto, clientId: string) {
    let k = createMessageDto.text;
    let ff = this.clientToUser[clientId];
    let p = 'a';
    let p1 = 'a';
    let p2 = 'a';

    
    //return 'A New document have been created';
    ///////////////
    const message = {
      name: this.clientToUser[clientId],
      text: createMessageDto.text,
    };

    this.messages.push(message);
    // const newCat = new this.catModel23({
    //   k,
    //   ff,
    //   p,
    // });
    // const result = await newCat.save();
    await this.catsService.create23(k, ff, p);
    return message;
  }  

  async updateCoor(driver_id: number, latitude: number, longtitude: number) {
    const message2 = {
      driver_id: driver_id,
      latitude: latitude,
      longtitude: longtitude,
    };
    let newcat4 = await this.catModel25.findOneAndUpdate({ driver_id: driver_id },  {latitude: latitude, longtitude: longtitude } );

    //this.messages.push(message2);
    
    return message2;
  }

  findAll() {
    return this.catModel23.find();
    //return this.messages;
  }

  findOne(id: number) {
    return `This action returns a #${id} message`;
  }

  identify(name: string, clientId: string) {
    this.clientToUser[clientId] = name;

    return Object.values(this.clientToUser);
  }

  getClientName(clientId: string) {
    return this.clientToUser[clientId];
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
