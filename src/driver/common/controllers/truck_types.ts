import { Body, Controller, Get, UseGuards} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { TruckTypesService } from '../services/truck_types';
import { JwtAuthGuard2 } from '../../auth/jwt-auth2.guard';



@Injectable()
@Controller('/server/driver')
export class truckTypesController {
  constructor(private readonly truckTypesService: TruckTypesService) {}
  
  @UseGuards(JwtAuthGuard2)
  @Get('createTruckTypes') 
  async  getHello14(@Body() query: {truck_types: string, quantity: number, image: string}) {
    return this.truckTypesService.create7(query.truck_types, query.quantity, query.image);
  }
  @UseGuards(JwtAuthGuard2)
  @Get('getTruckTypes') 
    async  getHello15(@Body() query: { truck_types: string}) {
      return this.truckTypesService.findOne7(query.truck_types);
  }
  @UseGuards(JwtAuthGuard2)
  @Get('showTruckTypes') 
  async  getHello16() {
    return this.truckTypesService.findAll7();
  }
  @UseGuards(JwtAuthGuard2)
  @Get('deleteTruckTypes') 
    async  getHello747(@Body() query: { truck_types: string}) {
      return this.truckTypesService.delete7(query.truck_types);
  }
  @UseGuards(JwtAuthGuard2)
  @Get('maxTruck') 
  async  maxTruck() {
    return this.truckTypesService.maxTruck();
  }

}
