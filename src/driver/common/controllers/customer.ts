import { Body, Controller, Get, UseGuards} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { CustomerService } from '../services/customer';
import { JwtAuthGuard2 } from '../../auth/jwt-auth2.guard';



@Injectable()
@Controller('/api/driver')
export class customerController {
  constructor(private readonly customerService: CustomerService) {}
  
  @UseGuards(JwtAuthGuard2)
  @Get('auth/regCustomer') 
    async  getHello11(@Body() query: { full_name: string, phone_number: string, location: string, types: string, notes: string, user_id: number}) {
      return this.customerService.create3(query.full_name, query.phone_number, query.location, query.types, query.notes, query.user_id);
  }
  @UseGuards(JwtAuthGuard2)
  @Get('getCustomer') 
    async  getHello22(@Body() query: { phone_number: string}) {
      return this.customerService.findOne3(query.phone_number);
  }

}
