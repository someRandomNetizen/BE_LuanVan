import { Body, Controller, Get, UseGuards} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { AddressService } from '../services/address';
import { InjectModel } from '@nestjs/mongoose';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { Model } from 'mongoose';
import { coord, coordDocument } from '../schemas/coord';

@Injectable()
@Controller('/api/user')
export class addressController {
  constructor(private readonly addressService: AddressService) {}
  @InjectModel(coord.name) private readonly catModel16: Model<coordDocument>
  
  @UseGuards(JwtAuthGuard)
  @Get('createAddress') 
  async  create015(@Body() query: { coord: coord, shortAddress: string, detailAddress: string, apartmentFloor: string, noteAddress: string, name: string, phone: string, noteForDriver: string, role: string, shipmentID: number, id: number}) {
    return this.addressService.create323(query.coord, query.shortAddress, query.detailAddress, query.apartmentFloor, query.noteAddress, query.name, query.phone, query.noteForDriver, query.role, query.shipmentID, query.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('showAddress') 
  async  show015() {
    return this.addressService.findAll122332();
  }

}
