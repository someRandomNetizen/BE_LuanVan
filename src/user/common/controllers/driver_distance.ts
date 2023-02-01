import { Body, Controller, Get, UseGuards} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { DriverDistanceService } from '../services/driver_distance';



@Injectable()
@Controller('/api/user')
export class driverDistanceController {
  constructor(private readonly driverDistanceService: DriverDistanceService) {}
  
  @UseGuards(JwtAuthGuard)
  @Get('createDriverDistance') 
  async  createDistance(@Body() query: { address: string, distance: number[], truck_types: string[]}) {
    return this.driverDistanceService.create14(query.address, query.distance, query.truck_types);
  }
  @UseGuards(JwtAuthGuard)
  @Get('getDriverDistance') 
    async  getDistance(@Body() query: { address: string}) {
      return this.driverDistanceService.findOne14(query.address);
  }
  @UseGuards(JwtAuthGuard)
  @Get('showDriverDistance') 
  async  showDriverDistance() {
    return this.driverDistanceService.findAll14();
  }

}
