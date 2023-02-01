import { Body, Controller, Get, UseGuards} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { PackageWeightService } from '../services/package_weight';
import { JwtAuthGuard2 } from '../../auth/jwt-auth2.guard';


@Injectable()
@Controller('/api/driver')
export class packageWeightController {
  constructor(private readonly packageWeightService: PackageWeightService) {}
  
  @UseGuards(JwtAuthGuard2)
  @Get('createWeight') 
  async  getHello99(@Body() query: { weight: number, length: number, width: number, height: number}) {
    return this.packageWeightService.create6(query.weight, query.length, query.width, query.height);
  }
  @UseGuards(JwtAuthGuard2)
  @Get('getWeight') 
    async  getHello12(@Body() query: { weight: number}) {
      return this.packageWeightService.findOne6(query.weight);
  }
  @UseGuards(JwtAuthGuard2)
  @Get('showWeight') 
  async  getHello13() {
    return this.packageWeightService.findAll6();
  }

}
