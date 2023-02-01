import { Body, Controller, Get, UseGuards} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { PickupTimeService } from '../services/pickup_time';
import { JwtAuthGuard2 } from '../../auth/jwt-auth2.guard';


@Injectable()
@Controller('/api/driver')
export class pickupTimeController {
  constructor(private readonly pickupTimeService: PickupTimeService) {}
  
  @UseGuards(JwtAuthGuard2)
  @Get('createTime') 
  async  getHello33(@Body() query: { date: string, time: string}) {
    return this.pickupTimeService.create4(query.date, query.time);
  }

  @UseGuards(JwtAuthGuard2)
  @Get('getTime') 
    async  getHello44(@Body() query: { time: string}) {
      return this.pickupTimeService.findOne4(query.time);
  }

  @UseGuards(JwtAuthGuard2)
  @Get('showTime') 
  async  getHello55() {
    return this.pickupTimeService.findAll4();
  }

}
