import { Body, Controller, Get, UseGuards} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { SearchHistoryService } from '../services/search_history';


@Injectable()
@Controller('/api/user')
export class searchHistoryController {
  constructor(private readonly searchHistoryService: SearchHistoryService) {}
  
  @UseGuards(JwtAuthGuard)
  @Get('createHistory') 
  async  getHello111(@Body() query: { content: string, length: number, detail: string, user_id: number}) {
    return this.searchHistoryService.create18(query.content, query.length, query.detail, query.user_id);
  }
  @UseGuards(JwtAuthGuard)
  @Get('getHistory') 
    async  getHello222(@Body() query: { content: string}) {
      return this.searchHistoryService.findOne18(query.content);
  }
  @UseGuards(JwtAuthGuard)
  @Get('showHistory') 
  async  getHello333() {
    return this.searchHistoryService.findAll18();
  }
  @UseGuards(JwtAuthGuard)
  @Get('deleteHistory') 
    async  getHello444(@Body() query: { content: string}) {
      return this.searchHistoryService.delete18(query.content);
  }

}
