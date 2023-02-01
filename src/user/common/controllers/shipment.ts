import { Body, Controller, Get, UseGuards, Post} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { ShipmentService } from '../services/shipment';
import { address } from '../schemas/address';
import { shipmentDriver } from '../schemas/shipment_driver';
import { packageWeight } from '../schemas/package_weight';
import { truckTypes } from '../schemas/truck_types';

@Injectable()
@Controller('/api/user')
export class shipmentController {
  constructor(private readonly shipmentService: ShipmentService) {}

  @UseGuards(JwtAuthGuard)
  @Post('createShipment') 
  async  getHello21(@Body() query: {senderName: string, senderPhone: string, recAddress: address[], senderAddress: address[], driver: shipmentDriver[], time: Date, typeOfShipment: string, manual: string, size: packageWeight, trucks: truckTypes[], payment: string, fee: string, voucher: number, user_id: number}) {
    return this.shipmentService.create8(query.senderName, query.senderPhone, query.recAddress, query.senderAddress, query.driver, query.time, query.typeOfShipment, query.manual, query.size, query.trucks, query.payment, query.fee, query.voucher, query.user_id);
  }
  @UseGuards(JwtAuthGuard)
  @Get('getShipment') 
    async  getHello24(@Body() query: { id: number}) {
      return this.shipmentService.findOne8(query.id);
  }
  @UseGuards(JwtAuthGuard)
  @Get('showShipment') 
  async  getHello23() {
    return this.shipmentService.findAll8();
  }
  @UseGuards(JwtAuthGuard)
  @Get('createShipment2') 
  async  getHello221(@Body() query: {recAddress: address[]}) {
    return this.shipmentService.create89(query.recAddress);
  }
  @UseGuards(JwtAuthGuard)
  @Get('getShipment2') 
    async  getHello224(@Body() query: { id: number}) {
    return this.shipmentService.findOne89(query.id);
  }
  @UseGuards(JwtAuthGuard)
  @Get('showShipment2') 
  async  getHello223() {
    return this.shipmentService.findAll98();
  }
  @UseGuards(JwtAuthGuard)
  @Post('deleteShipment') 
    async  deleteShipment(@Body() query: { shipment_id: number}) {
      return this.shipmentService.delete8(query.shipment_id);
  }


}
