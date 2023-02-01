import { Body, Controller, Get, UseGuards} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { AdsService } from '../services/ads';
import { JwtAuthGuard2 } from '../../auth/jwt-auth2.guard';


@Injectable()
@Controller('/api/driver')
export class adsController {
  constructor(private readonly adsService: AdsService) {}
  
    @UseGuards(JwtAuthGuard2)
    @Get('createAds') 
    async  getHello113(@Body() query: { content: string, image: string}) {
      return this.adsService.create19(query.content, query.image);
    }
    @UseGuards(JwtAuthGuard2)
    @Get('getAds') 
      async  get19(@Body() query: { content: string}) {
        return this.adsService.findOne19(query.content);
    }
    @UseGuards(JwtAuthGuard2)
    @Get('showAds') 
    async  show19() {
      return this.adsService.findAll19();
    }
    @UseGuards(JwtAuthGuard2)
    @Get('deleteAds') 
      async  delete019(@Body() query: { content: string}) {
        return this.adsService.delete19(query.content);
    }

}
