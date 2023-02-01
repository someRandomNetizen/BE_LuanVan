import { Body, Controller, Get, UseGuards} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { VoucherService } from '../services/voucher';
import { JwtAuthGuard2 } from '../../auth/jwt-auth2.guard';



@Injectable()
@Controller('/api/driver')
export class voucherController {
  constructor(private readonly voucherService: VoucherService) {}
  
  @UseGuards(JwtAuthGuard2)
    @Get('createVoucher') 
    async  create022(@Body() query: { content: string, image: string}) {
      return this.voucherService.create22(query.content, query.image);
    }
    @UseGuards(JwtAuthGuard2)
    @Get('pushVoucher') 
    async  pushVoucher(@Body() query: { voucher_id: number, user_id: number}) {
      return this.voucherService.pushVoucher(query.voucher_id, query.user_id);
    }
    @UseGuards(JwtAuthGuard2)
    @Get('getVoucher') 
      async  get022(@Body() query: { content: string}) {
        return this.voucherService.findOne22(query.content);
    }
    @UseGuards(JwtAuthGuard2)
    @Get('showVoucher') 
    async  show022() {
      return this.voucherService.findAll22();
    }
    @UseGuards(JwtAuthGuard2)
    @Get('deleteVoucher') 
      async  delete022(@Body() query: { content: string}) {
        return this.voucherService.delete22(query.content);
    }

}
