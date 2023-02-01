import { Body, Controller, Get, UseGuards} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { BrandAdsService } from '../services/brand_ads';



@Injectable()
@Controller('/api/user')
export class brandAdsController {
  constructor(private readonly brandAdsService: BrandAdsService) {}
  
  @UseGuards(JwtAuthGuard)
  @Get('createBrandAds') 
  async  create021(@Body() query: { brand: string, image: string}) {
    return this.brandAdsService.create21(query.brand, query.image);
  }
  @UseGuards(JwtAuthGuard)
  @Get('getBrandAds') 
    async  get021(@Body() query: { brand: string}) {
      return this.brandAdsService.findOne21(query.brand);
  }
  @UseGuards(JwtAuthGuard)
  @Get('showBrandAds') 
  async  show021() {
    return this.brandAdsService.findAll21();
  }
  @UseGuards(JwtAuthGuard)
  @Get('deleteBrandAds') 
    async  delete021(@Body() query: { brand: string}) {
      return this.brandAdsService.delete21(query.brand);
  }

}
