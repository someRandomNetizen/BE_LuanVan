import { Body, Controller, Get, UseGuards} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { AdsService } from '../services/ads';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';


@Injectable()
@Controller('/api/user')
export class adsController {
  constructor(private readonly adsService: AdsService) {}
  
    @UseGuards(JwtAuthGuard)
    @Get('createAds') 
    async  getHello113(@Body() query: { content: string, image: string}) {
      return this.adsService.create19(query.content, query.image);
    }
    @UseGuards(JwtAuthGuard)
    @Get('getAds') 
      async  get19(@Body() query: { content: string}) {
        return this.adsService.findOne19(query.content);
    }
    @UseGuards(JwtAuthGuard)
    @Get('showAds') 
    async  show19() {
      return this.adsService.findAll19();
    }
    @UseGuards(JwtAuthGuard)
    @Get('deleteAds') 
      async  delete019(@Body() query: { content: string}) {
        return this.adsService.delete19(query.content);
    }

}
