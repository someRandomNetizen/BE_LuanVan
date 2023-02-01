import { Body, Controller, Get, UseGuards} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { BrandAdsService } from '../services/brand_ads';
import { JwtAuthGuard2 } from '../../auth/jwt-auth2.guard';



@Injectable()
@Controller('/api/driver')
export class coordController {
  constructor(private readonly brandAdsService: BrandAdsService) {}
  


}
