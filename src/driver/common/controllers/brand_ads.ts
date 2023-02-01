import { Body, Controller, Get, UseGuards} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { BrandAdsService } from '../services/brand_ads';
import { JwtAuthGuard2 } from '../../auth/jwt-auth2.guard';



@Injectable()
@Controller('/api/driver')
export class brandAdsController {
  constructor(private readonly brandAdsService: BrandAdsService) {}
  
  @UseGuards(JwtAuthGuard2)
  @Get('createBrandAds') 
  async  create021(@Body() query: { brand: string, image: string}) {
    return this.brandAdsService.create21(query.brand, query.image);
  }
  @UseGuards(JwtAuthGuard2)
  @Get('getBrandAds') 
    async  get021(@Body() query: { brand: string}) {
      return this.brandAdsService.findOne21(query.brand);
  }
  @UseGuards(JwtAuthGuard2)
  @Get('showBrandAds') 
  async  show021() {
    return this.brandAdsService.findAll21();
  }
  @UseGuards(JwtAuthGuard2)
  @Get('deleteBrandAds') 
    async  delete021(@Body() query: { brand: string}) {
      return this.brandAdsService.delete21(query.brand);
  }

}
