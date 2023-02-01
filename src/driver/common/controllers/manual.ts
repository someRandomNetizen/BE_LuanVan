import { Body, Controller, Get, UseGuards} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { manualService } from '../services/manual';
import { JwtAuthGuard2 } from '../../auth/jwt-auth2.guard';


@Injectable()
@Controller('/api/driver')
export class manualController {
  constructor(private readonly manualService: manualService) {}
  
    @UseGuards(JwtAuthGuard2)
    @Get('createManual') 
    async  getHello113(@Body() query: { manual: string, image: string}) {
      return this.manualService.createManual(query.manual, query.image);
    }
    @UseGuards(JwtAuthGuard2)
    @Get('getManual') 
      async  get19(@Body() query: { manual: string}) {
        return this.manualService.findOneManual(query.manual);
    }
    @UseGuards(JwtAuthGuard2)
    @Get('showManual') 
    async  show19() {
      return this.manualService.findAllManual();
    }
    @UseGuards(JwtAuthGuard2)
    @Get('deleteManual') 
      async  delete019(@Body() query: { manual: string}) {
        return this.manualService.deleteManual(query.manual);
    }

}
