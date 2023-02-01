import { Body, Controller, Get, Request, Post, Put, UseGuards, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { Injectable } from '@nestjs/common';

import { DriverService } from '../services/driver';
import { validateRule2 } from '../dto/validate.dto';
import { LocalAuthGuard2 } from '../../auth/local-auth.guard2';
import { AuthService2 } from '../../auth/auth2.service';
import { JwtAuthGuard2 } from '../../auth/jwt-auth2.guard';

@Injectable()
@Controller('/api/driver')
export class driverController {
  constructor(private readonly driverService: DriverService, private authService2: AuthService2) {}
  
  @UseGuards(LocalAuthGuard2)
  @Post('auth/loginDriver') 
    async  getHello7(@Body() body: { phone_number: string, password: string, }) {
    return this.authService2.login2(body.phone_number, body.password);
  }
  @UsePipes(ValidationPipe)
  @UseGuards(JwtAuthGuard2)
  @Get('auth/regDriver') 
  async  getHello3(@Body() lovely: validateRule2, @Body() query: {user_name: string, password: string, full_name: string, phone_number: string, rating: string, 
    model: string, truck_type: string,  favor: number, truck_plate: string, 
    gender: string, birth: string, birthPlace: number, currentPlace: string, citizenID: string,
    IDDate: string, IDPlace: string, licenseID: number, licenseType: string, licenseDate: string,
    licensePlace: string, taxID: string, bankID: number, bankName: string}) {
      console.log( `user_name: ${query.user_name}`);
      console.log(`password: ${query.password}`); 
      return this.driverService.create2(query.user_name, query.password, query.full_name, query.phone_number, query.rating,
        query.model, query.truck_type, query.favor, query.truck_plate,
        query.gender,
        query.birth,
        query.birthPlace,
        query.currentPlace,
        query.citizenID,
        query.IDDate,
        query.IDPlace,
        query.licenseID,
        query.licenseType,
        query.licenseDate,
        query.licensePlace,
        query.taxID, 
        query.bankID,
        query.bankName,);
  }
  @UseGuards(JwtAuthGuard2)
  @Get('getDriver') 
    async  getHello4(@Query() query: { phone_number: string}) {
      return this.driverService.findOne2(query.phone_number);
  }
  @UseGuards(JwtAuthGuard2)
  @Get('showDriver') 
  async  showDriver() {
    let k = '1';
    console.log(k);
    return this.driverService.findAll2();
  }
  // @UseGuards(JwtAuthGuard2)
  // @Get('modifyDriver') 
  // async  modifyDriver(@Body() query: { distanceNew: number[], typeTruckNew: string[]}) {
  //   return this.driverService.modifyDriver(query.distanceNew, query.typeTruckNew);
  // }
  // @UseGuards(JwtAuthGuard2)
  // @Get('modifyDriver2') 
  // async  modifyDriver2(@Query() query: { distanceNew: number[], typeTruckNew: string[]}) {
  //   return this.driverService.modifyDriver(query.distanceNew, query.typeTruckNew);
  // }
  // @UseGuards(JwtAuthGuard2)
  // @Get('findDriver') 
  // async  findDriver(@Body() query: {shipment_id: number, latPick: number, longPick: number, typeTruckNew: string[], latDriver: number[], longDriver: number[]}) {
  //   return this.driverService.findDriver(query.shipment_id, query.latPick, query.longPick, query.typeTruckNew, query.latDriver, query.longDriver);
  // }
  // @UseGuards(JwtAuthGuard2)
  // @Get('pathFinder') 
  // async  pathFinder(@Body() query: {lat: number[], long: number[]}) {
  //   return this.driverService.pathFinder(query.lat, query.long);
  // }
  // @UseGuards(JwtAuthGuard2)
  // @Get('pathFinderHandmade') 
  // async  pathFinderHandmade(@Body() query: {lat: number[], long: number[]}) {
  //   return this.driverService.pathFinderHandmade(query.lat, query.long);
  // }
  // @UseGuards(JwtAuthGuard2)
  // @Get('pathFinderFinal') 
  // async  pathFinderFinal(@Body() query: {lat: number[], long: number[]}) {
  //   return this.driverService.pathFinderFinal(query.lat, query.long);
  // }
  @UseGuards(JwtAuthGuard2)
  @Post('deleteDriver') 
  async  deleteDriver(@Body() query: {user_id: number}) {
    return this.driverService.delete2(query.user_id);
  }
}
