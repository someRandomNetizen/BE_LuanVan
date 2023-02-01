import { Body, Controller, Get, UseGuards} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { PackageWeightService } from '../services/package_weight';


@Injectable()
@Controller('/api/user')
export class packageWeightController {
  constructor(private readonly packageWeightService: PackageWeightService) {}
  
  @UseGuards(JwtAuthGuard)
  @Get('createWeight') 
  async  getHello99(@Body() query: { weight: number, length: number, width: number, height: number}) {
    return this.packageWeightService.create6(query.weight, query.length, query.width, query.height);
  }
  @UseGuards(JwtAuthGuard)
  @Get('getWeight') 
    async  getHello12(@Body() query: { weight: number}) {
      return this.packageWeightService.findOne6(query.weight);
  }
  @UseGuards(JwtAuthGuard)
  @Get('showWeight') 
  async  getHello13() {
    return this.packageWeightService.findAll6();
  }

}
