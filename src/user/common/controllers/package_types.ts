import { Body, Controller, Get, UseGuards} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { PackageTypesService } from '../services/package_types';


@Injectable()
@Controller('/api/user')
export class packageTypesController {
  constructor(private readonly packageTypesService: PackageTypesService) {}
  
  @UseGuards(JwtAuthGuard)
  @Get('createPackageType') 
  async  getHello66(@Body() query: { types: string, image: string}) {
    return this.packageTypesService.create5(query.types, query.image);
  }
  @UseGuards(JwtAuthGuard)
  @Get('getPackageType') 
    async  getHello77(@Body() query: { types: string}) {
      return this.packageTypesService.findOne5(query.types);
  }
  @UseGuards(JwtAuthGuard)
  @Get('showPackageType') 
  async  getHello88() {
    return this.packageTypesService.findAll5();
  }
  @UseGuards(JwtAuthGuard)
  @Get('deletePackageType') 
    async  getHello717(@Body() query: { types: string}) {
      return this.packageTypesService.delete5(query.types);
  }

}
