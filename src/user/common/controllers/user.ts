import { Body, Controller, Get, Request, Post, Put, UseGuards, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { UserService } from '../services/user';
import { validateRule } from '../dto/validate.dto';
import { validateFullName } from '../dto/validate.dto';
import { validatePassword } from '../dto/validate.dto';
import { validateUserName } from '../dto/validate.dto';
import { validatePhone } from '../dto/validate.dto';
import { validateBirth } from '../dto/validate.dto';
import { validateGender } from '../dto/validate.dto';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { LocalAuthGuard } from '../../auth/local-auth.guard';
import { AuthService } from '../../auth/auth.service';

@Injectable()
@Controller('/api/user')
export class userController {
  constructor(private readonly userService: UserService, private authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post('auth/loginUser') 
  async  getHello(@Body() body: { user_name: string, password: string, }) {
    return this.authService.login(body.user_name, body.password);
  }
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
  @Get('auth/logoutUser') 
  async  logoutUser(@Request() req) {
    return 'User Logout Succesfully'
  }
  @UsePipes(ValidationPipe)
  @Post('auth/regUser') 
  async  getHelo2(@Body() lovely: validateRule, @Body() body: {user_name: string, password: string, full_name: string, phone_number: string, birth: Date, gender: string, nick_name: string, avatar: string, wallet_money: number, role: string, login_type: number, login_id: string,  user_id: number}) {
    console.log(`password: ${body.password}`); 
    return this.userService.create(lovely.user_name, lovely.password, lovely.full_name, lovely.phone_number, body.birth, body.gender, body.nick_name, body.avatar, body.wallet_money, body.role, body.login_type, body.login_id, body.user_id);
  }
  //reg2 khong co check cac thong tin validate
  @Post('auth/regUser2') 
  async  getHello2(@Body() lovely: validateRule, @Body () body: {user_name: string, password: string, full_name: string, phone_number: string, birth: Date, gender: string, nick_name: string, avatar: string, wallet_money: number, role: string, login_type: number, login_id: string,  user_id: number}) {
    console.log(`password: ${body.password}`); 
      return this.userService.create(lovely.user_name, body.password, lovely.full_name, lovely.phone_number, body.birth, body.gender, body.nick_name, body.avatar, body.wallet_money, body.role, body.login_type, body.login_id, body.user_id);
  }
  @UseGuards(JwtAuthGuard)
  @Get('getUser') 
    async  getHello9(@Query() query: { phone_number: string}) {
      return this.userService.findOne(query.phone_number);
  }
  @Get('showUser') 
  async  showUser() {
    return this.userService.findAll();
  }
  @UsePipes(ValidationPipe)
  @UseGuards(JwtAuthGuard)
  @Put('updateUsername') 
  async  updateUsername(@Body() lovely: validateUserName, @Body() query: { user_id: number, user_name_new: string}) {
    return this.userService.updateUsername(query.user_id,lovely.user_name_new);
  }
  @UsePipes(ValidationPipe)
  @UseGuards(JwtAuthGuard)
  @Put('updateFullname') 
  async  updateFullname(@Body() lovely: validateFullName, @Body() query: { user_id: number, full_name_new: string}) {
    console.log(query.user_id);
    return this.userService.updateFullname(query.user_id,lovely.full_name_new);
  }
  @UsePipes(ValidationPipe)
  @UseGuards(JwtAuthGuard)
  @Put('updatePhoneNumber') 
  async  updatePhoneNumber(@Body() lovely: validatePhone, @Body() query: { user_id: number, phone_number_new: string}) {
    return this.userService.updatePhoneNumber(query.user_id,lovely.phone_number_new);
  }
  @UsePipes(ValidationPipe)
  @UseGuards(JwtAuthGuard)
  @Put('updateBirth') 
  async  updateBirth(@Body() lovely: validateBirth, @Body() query: { user_id: number, birth_new: Date}) {
    return this.userService.updateBirth(query.user_id,lovely.birth_new);
  }
  @UsePipes(ValidationPipe)
  @UseGuards(JwtAuthGuard)
  @Put('updateGender') 
  async  updateGender(@Body() lovely: validateGender, @Body() query: { user_id: number, gender_new: string}) {
    return this.userService.updateGender(query.user_id,lovely.gender_new);
  }
  @UseGuards(JwtAuthGuard)
  @Put('updateNickName') 
  async  updateNickName(@Body() query: { user_id: number, nick_name_new: string}) {
    return this.userService.updateNickName(query.user_id,query.nick_name_new);
  }
  @UsePipes(ValidationPipe)
  @UseGuards(JwtAuthGuard)
  @Put('updateAvatar') 
  async  updateAvatar(@Body() query: { user_id: number, avatar_new: string}) {
    return this.userService.updateAvatar(query.user_id,query.avatar_new);
  }
  @UsePipes(ValidationPipe)
  @UseGuards(JwtAuthGuard)
  @Put('updatePassword') 
  async  updatePassword(@Body() lovely: validatePassword, @Body() query: { user_id: number, password: string, password_new: string}) {
    return this.userService.updatePassword(query.user_id, query.password, lovely.password_new);
  }
  @UsePipes(ValidationPipe)
  @UseGuards(JwtAuthGuard)
  @Put('updateFull') 
  async  updateFull(@Body() lovely: validatePassword, @Body() lovely2: validateUserName, @Body() lovely3: validateFullName, @Body() lovely5: validateBirth, @Body() lovely6: validateGender
  , @Body() query: { user_id: number, user_name_new: string, full_name_new: string, birth_new: Date, gender_new: string, nick_name_new: string, avatar_new: string}) {
    return this.userService.updateFull(query.user_id, lovely2.user_name_new, lovely3.full_name_new, lovely5.birth_new, lovely6.gender_new, query.nick_name_new, query.avatar_new);
  }
  @Get('compare') 
  async  compare(@Query() query: { a: string, b: string}) {
    return this.userService.compare(query.a,query.b);
  }
  @Get('deleteUser') 
  async  deleteUser(@Query() query: { user_id: number}) {
    return this.userService.deleteUser(query.user_id);
  }
  @UsePipes(ValidationPipe)
  @Post('validate') 
  async  getHelo267( @Body() lovely: validateRule, @Body() body: {user_name: string, password: string, full_name: string, phone_number: string}) {
    console.log(`password: ${body.password}`); 
    return this.userService.validate(lovely.user_name, lovely.password, lovely.full_name, lovely.phone_number);
  }
  @UsePipes(JwtAuthGuard)
  @Get('checkOTP') 
  async  CheckOTP(@Body() query: { OTP: string}) {
    return this.userService.OTPcheck(query.OTP);
  }
}
