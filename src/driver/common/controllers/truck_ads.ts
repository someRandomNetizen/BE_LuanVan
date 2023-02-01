import { Body, Controller, Get, UseGuards} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { TruckAdsService } from '../services/truck_ads';
import { JwtAuthGuard2 } from '../../auth/jwt-auth2.guard';



@Injectable()
@Controller('/api/driver')
export class truckAdsController {
  constructor(private readonly truckAdsService: TruckAdsService) {}
  
  @UseGuards(JwtAuthGuard2)
    @Get('createTruckAds') 
    async  create020(@Body() query: { content: string, image: string}) {
      return this.truckAdsService.create20(query.content, query.image);
    }
    @UseGuards(JwtAuthGuard2)
    @Get('getTruckAds') 
      async  get020(@Body() query: { content: string}) {
        return this.truckAdsService.findOne20(query.content);
    }
    @UseGuards(JwtAuthGuard2)
    @Get('showTruckAds') 
    async  show020() {
      return this.truckAdsService.findAll20();
    }
    @UseGuards(JwtAuthGuard2)
    @Get('deleteTruckAds') 
      async  delete020(@Body() query: { content: string}) {
        return this.truckAdsService.delete20(query.content);
    }

}
