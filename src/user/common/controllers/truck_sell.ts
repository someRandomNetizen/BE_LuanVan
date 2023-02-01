import { Body, Controller, Get, UseGuards} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { TruckSellService } from '../services/truck_sell';



@Injectable()
@Controller('/api/user')
export class trucksellController {
  constructor(private readonly truckSellService: TruckSellService) {}
  
  @UseGuards(JwtAuthGuard)
  @Get('createTruckSell') 
  async  getHello10(@Body() query: { truck_state: string, truck_state_id, truck_brand, truck_name: string, price: string, distance: string, picture: string, truck_id: number}) {
    return this.truckSellService.create9(query.truck_state, query.truck_state_id, query.truck_brand, query.truck_name, query.price, query.distance, query.picture, query.truck_id);
  }
  @UseGuards(JwtAuthGuard)
  @Get('truckSellFilter') 
    async  getHello30(@Body() query: { truck_state_id: string}) {
      return this.truckSellService.filter(query.truck_state_id);
  }
  @UseGuards(JwtAuthGuard)
  @Get('showTruckSell') 
  async  getHello20() {
    return this.truckSellService.findAll9();
  }
  @UseGuards(JwtAuthGuard)
  @Get('truckSellPaginate') 
  async  getHello40(@Body() query: {truck_state_id: string, pagination: number}) {
    return this.truckSellService.paginate(query.truck_state_id, query.pagination);
  }

}
