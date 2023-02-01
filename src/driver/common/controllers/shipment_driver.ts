import { Body, Controller, Get, UseGuards, Post} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { ShipmentDriverService } from '../services/shipment_driver';
import { JwtAuthGuard2 } from '../../auth/jwt-auth2.guard';


@Injectable()
@Controller('/api/driver')
export class shipmentDriverController {
  constructor(private readonly shipmentDriverService: ShipmentDriverService) {}
  
  @UseGuards(JwtAuthGuard2)
  @Post('createShipmentDriver') 
  async  getHello112(@Body() query: { shipment_id: number, user_id: number}) {
    return this.shipmentDriverService.create17(query.shipment_id, query.user_id);
  }
  @UseGuards(JwtAuthGuard2)
  @Post('showShipmentDriver') 
  async  show017() {
    return this.shipmentDriverService.show17();
  }
  @UseGuards(JwtAuthGuard2)
  @Post('updateShipmentDriver') 
  async  getHello1212(@Body() query: { shipment_id: number, user_id: number, rating: number}) {
    return this.shipmentDriverService.update17(query.shipment_id, query.user_id, query.rating);
  }
  @UseGuards(JwtAuthGuard2)
  @Post('updateShipmentDriverState') 
  async  update0170(@Body() query: { shipment_id: number, user_id: number, new_state: number}) {
    return this.shipmentDriverService.update170(query.shipment_id, query.user_id, query.new_state);
  }
  @UseGuards(JwtAuthGuard2)
  @Get('getShipmentDriver') 
  async getHello531(@Body() query: { shipmentDriverId: number}) {
      return this.shipmentDriverService.findOne17(query.shipmentDriverId);
  }
  @UseGuards(JwtAuthGuard2)
  @Get('showShipmentDriver') 
  async  getHello334() {
    return this.shipmentDriverService.findAll17();
  }
  @UseGuards(JwtAuthGuard2)
  @Get('deleteShipmentDriver') 
    async  getHello443(@Body() query: { shipmentDriverId: number}) {
      return this.shipmentDriverService.delete17(query.shipmentDriverId);
  }

}
