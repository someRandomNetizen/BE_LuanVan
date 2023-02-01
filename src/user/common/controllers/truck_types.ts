import { Body, Controller, Get, UseGuards} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { TruckTypesService } from '../services/truck_types';



@Injectable()
@Controller('/api/user')
export class truckTypesController {
  constructor(private readonly truckTypesService: TruckTypesService) {}
  
  @UseGuards(JwtAuthGuard)
  @Get('createTruckTypes') 
  async  getHello14(@Body() query: {truck_types: string, quantity: number, image: string}) {
    return this.truckTypesService.create7(query.truck_types, query.quantity, query.image);
  }
  @UseGuards(JwtAuthGuard)
  @Get('getTruckTypes') 
    async  getHello15(@Body() query: { truck_types: string}) {
      return this.truckTypesService.findOne7(query.truck_types);
  }
  @UseGuards(JwtAuthGuard)
  @Get('showTruckTypes') 
  async  getHello16() {
    return this.truckTypesService.findAll7();
  }
  @UseGuards(JwtAuthGuard)
  @Get('deleteTruckTypes') 
    async  getHello747(@Body() query: { truck_types: string}) {
      return this.truckTypesService.delete7(query.truck_types);
  }
  @UseGuards(JwtAuthGuard)
  @Get('maxTruck') 
  async  maxTruck() {
    return this.truckTypesService.maxTruck();
  }
}
