import { Body, Controller, Get, UseGuards} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { SearchHistoryService } from '../services/search_history';
import { JwtAuthGuard2 } from '../../auth/jwt-auth2.guard';


@Injectable()
@Controller('/api/driver')
export class searchHistoryController {
  constructor(private readonly searchHistoryService: SearchHistoryService) {}
  
  @UseGuards(JwtAuthGuard2)
  @Get('createHistory') 
  async  getHello111(@Body() query: { content: string, length: number, detail: string, user_id: number}) {
    return this.searchHistoryService.create18(query.content, query.length, query.detail, query.user_id);
  }
  @UseGuards(JwtAuthGuard2)
  @Get('getHistory') 
    async  getHello222(@Body() query: { content: string}) {
      return this.searchHistoryService.findOne18(query.content);
  }
  @UseGuards(JwtAuthGuard2)
  @Get('showHistory') 
  async  getHello333() {
    return this.searchHistoryService.findAll18();
  }
  @UseGuards(JwtAuthGuard2)
  @Get('deleteHistory') 
    async  getHello444(@Body() query: { content: string}) {
      return this.searchHistoryService.delete18(query.content);
  }

}
