import { Body, Controller, Get, UseGuards} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { PackageTypesService } from '../services/package_types';
import { JwtAuthGuard2 } from '../../auth/jwt-auth2.guard';


@Injectable()
@Controller('/api/driver')
export class packageTypesController {
  constructor(private readonly packageTypesService: PackageTypesService) {}
  
  @UseGuards(JwtAuthGuard2)
  @Get('createPackageType') 
  async  getHello66(@Body() query: { types: string, image: string}) {
    return this.packageTypesService.create5(query.types, query.image);
  }
  @UseGuards(JwtAuthGuard2)
  @Get('getPackageType') 
    async  getHello77(@Body() query: { types: string}) {
      return this.packageTypesService.findOne5(query.types);
  }
  @UseGuards(JwtAuthGuard2)
  @Get('showPackageType') 
  async  getHello88() {
    return this.packageTypesService.findAll5();
  }
  @UseGuards(JwtAuthGuard2)
  @Get('deletePackageType') 
    async  getHello717(@Body() query: { types: string}) {
      return this.packageTypesService.delete5(query.types);
  }

}
