import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { searchHistory, searchHistoryDocument } from '../schemas/search_history';
import { user, userDocument } from '../schemas/user';

@Injectable()

export class SearchHistoryService {
  constructor(
    @InjectModel(searchHistory.name) private readonly searchHistoryModel: Model<searchHistoryDocument>,
    @InjectModel(user.name) private readonly userModel: Model<userDocument>){}
    
  async create18(content: string, length: number, detail: string, user_id: number){
    const newCat = new this.searchHistoryModel({
      content,
      length,
      detail,
      user_id,
    });
    const result = await newCat.save();
    console.log(result);
    //return 'A New document have been created';
    let f = this.userModel.findOne({user_id: user_id});
    var current_search_history = [];
    current_search_history = (await f).search_history;
    let i = 0;
    while(current_search_history[i]){
      i++;
    }
    // if they already full 5 search history
    if(i == 5){
      i = 4;
    }
    let y = 0;
    while(y < 4){
      current_search_history[y] = current_search_history[y+1];
      y++;
    }
    //
    current_search_history[i] = newCat;
    let newcat4 = await this.userModel.findOneAndUpdate({ user_id: user_id }, {search_history: current_search_history});
  }

  async findOne18(content: string): Promise<searchHistory> {
    return this.searchHistoryModel.findOne({ content: content }).exec();
  }

  async findAll18(): Promise<searchHistory[]> {
    return this.searchHistoryModel.find().exec();
  }

  async delete18(content: string){
    let newcat4 = await this.searchHistoryModel.findOneAndRemove({ content: content });
  }

}