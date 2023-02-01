import { Body, Controller, Get, UseGuards} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { TruckAdsService } from '../services/truck_ads';



@Injectable()
@Controller('/api/user')
export class truckAdsController {
  constructor(private readonly truckAdsService: TruckAdsService) {}
  
  @UseGuards(JwtAuthGuard)
    @Get('createTruckAds') 
    async  create020(@Body() query: { content: string, image: string}) {
      return this.truckAdsService.create20(query.content, query.image);
    }
    @UseGuards(JwtAuthGuard)
    @Get('getTruckAds') 
      async  get020(@Body() query: { content: string}) {
        return this.truckAdsService.findOne20(query.content);
    }
    @UseGuards(JwtAuthGuard)
    @Get('showTruckAds') 
    async  show020() {
      return this.truckAdsService.findAll20();
    }
    @UseGuards(JwtAuthGuard)
    @Get('deleteTruckAds') 
      async  delete020(@Body() query: { content: string}) {
        return this.truckAdsService.delete20(query.content);
    }

}
