import { Body, Controller, Get, Request, Post, Put, UseGuards, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { Injectable } from '@nestjs/common';

import { AdminService } from '../services/admin';
// import { validateRule2 } from '../dto/validate.dto';
import { LocalAuthGuard3 } from '../../auth/local-auth.guard3';
import { AuthService3 } from '../../auth/auth3.service';
import { JwtAuthGuard3 } from '../../auth/jwt-auth3.guard';

@Injectable()
@Controller('/server/admin')
export class adminController {
  constructor(private readonly adminService: AdminService, private authService3: AuthService3) {}
  
  @UseGuards(LocalAuthGuard3)
  @Post('auth/loginAdmin') 
    async  getHello7(@Body() body: { email: string, password: string, }) {
    return this.authService3.login3(body.email, body.password);
  }
  @UsePipes(ValidationPipe)
  //@UseGuards(JwtAuthGuard3)
  @Get('auth/regAdmin') 
    async  getHello3(@Body() query: {email: string, password: string}) {
      console.log( `user_name: ${query.email}`);
      console.log(`password: ${query.password}`); 
      return this.adminService.create2(query.email, query.password);
  }
  @UseGuards(JwtAuthGuard3)
  @Get('getAdmin') 
    async  getHello4(@Query() query: { email: string}) {
      return this.adminService.findOne2(query.email);
  }

  @Get('showAdmin') 
  async  showDriver() {
    let k = '1';
    console.log(k);
    return this.adminService.findAll2();
  }

}
