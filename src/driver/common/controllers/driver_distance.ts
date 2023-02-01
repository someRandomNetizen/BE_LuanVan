import { Body, Controller, Get, UseGuards} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { DriverDistanceService } from '../services/driver_distance';
import { JwtAuthGuard2 } from '../../auth/jwt-auth2.guard';



@Injectable()
@Controller('/api/driver')
export class driverDistanceController {
  constructor(private readonly driverDistanceService: DriverDistanceService) {}
  
  @UseGuards(JwtAuthGuard2)
  @Get('createDriverDistance') 
  async  createDistance(@Body() query: { address: string, distance: number[], truck_types: string[]}) {
    return this.driverDistanceService.create14(query.address, query.distance, query.truck_types);
  }
  @UseGuards(JwtAuthGuard2)
  @Get('getDriverDistance') 
    async  getDistance(@Body() query: { address: string}) {
      return this.driverDistanceService.findOne14(query.address);
  }
  @UseGuards(JwtAuthGuard2)
  @Get('showDriverDistance') 
  async  showDriverDistance() {
    return this.driverDistanceService.findAll14();
  }

}
