import { Body, Controller, Get, UseGuards} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { PickupTimeService } from '../services/pickup_time';


@Injectable()
@Controller('/api/user')
export class pickupTimeController {
  constructor(private readonly pickupTimeService: PickupTimeService) {}
  
  @UseGuards(JwtAuthGuard)
  @Get('createTime') 
  async  getHello33(@Body() query: { date: string, time: string}) {
    return this.pickupTimeService.create4(query.date, query.time);
  }

  @UseGuards(JwtAuthGuard)
  @Get('getTime') 
    async  getHello44(@Body() query: { time: string}) {
      return this.pickupTimeService.findOne4(query.time);
  }

  @Get('showTime') 
  async  getHello55() {
    return this.pickupTimeService.findAll4();
  }

}
