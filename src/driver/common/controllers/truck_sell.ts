import { Body, Controller, Get, UseGuards} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { TruckSellService } from '../services/truck_sell';
import { JwtAuthGuard2 } from '../../auth/jwt-auth2.guard';



@Injectable()
@Controller('/api/driver')
export class trucksellController {
  constructor(private readonly truckSellService: TruckSellService) {}
  
  @UseGuards(JwtAuthGuard2)
  @Get('createTruckSell') 
  async  getHello10(@Body() query: { truck_state: string, truck_state_id, truck_brand, truck_name: string, price: string, distance: string, picture: string, truck_id: number}) {
    return this.truckSellService.create9(query.truck_state, query.truck_state_id, query.truck_brand, query.truck_name, query.price, query.distance, query.picture, query.truck_id);
  }
  @UseGuards(JwtAuthGuard2)
  @Get('truckSellFilter') 
    async  getHello30(@Body() query: { truck_state_id: string}) {
      return this.truckSellService.filter(query.truck_state_id);
  }
  @UseGuards(JwtAuthGuard2)
  @Get('showTruckSell') 
  async  getHello20() {
    return this.truckSellService.findAll9();
  }
  @UseGuards(JwtAuthGuard2)
  @Get('truckSellPaginate') 
  async  getHello40(@Body() query: {truck_state_id: string, pagination: number}) {
    return this.truckSellService.paginate(query.truck_state_id, query.pagination);
  }

}
