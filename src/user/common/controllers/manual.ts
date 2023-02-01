import { Body, Controller, Get, UseGuards} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { manualService } from '../services/manual';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';


@Injectable()
@Controller('/api/user')
export class manualController {
  constructor(private readonly manualService: manualService) {}
  
    @UseGuards(JwtAuthGuard)
    @Get('createManual') 
    async  getHello113(@Body() query: { manual: string, image: string}) {
      return this.manualService.createManual(query.manual, query.image);
    }
    @UseGuards(JwtAuthGuard)
    @Get('getManual') 
      async  get19(@Body() query: { manual: string}) {
        return this.manualService.findOneManual(query.manual);
    }
    @UseGuards(JwtAuthGuard)
    @Get('showManual') 
    async  show19() {
      return this.manualService.findAllManual();
    }
    @UseGuards(JwtAuthGuard)
    @Get('deleteManual') 
      async  delete019(@Body() query: { manual: string}) {
        return this.manualService.deleteManual(query.manual);
    }

}
