import { Body, Controller, Get, UseGuards} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { BrandAdsService } from '../services/brand_ads';



@Injectable()
@Controller('/api/user')
export class coordController {
  constructor(private readonly brandAdsService: BrandAdsService) {}
  


}
