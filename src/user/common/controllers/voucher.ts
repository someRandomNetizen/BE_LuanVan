import { Body, Controller, Get, UseGuards} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { VoucherService } from '../services/voucher';



@Injectable()
@Controller('/api/user')
export class voucherController {
  constructor(private readonly voucherService: VoucherService) {}
  
  @UseGuards(JwtAuthGuard)
    @Get('createVoucher') 
    async  create022(@Body() query: { content: string, image: string}) {
      return this.voucherService.create22(query.content, query.image);
    }
    @UseGuards(JwtAuthGuard)
    @Get('pushVoucher') 
    async  pushVoucher(@Body() query: { voucher_id: number, user_id: number}) {
      return this.voucherService.pushVoucher(query.voucher_id, query.user_id);
    }
    @UseGuards(JwtAuthGuard)
    @Get('getVoucher') 
      async  get022(@Body() query: { content: string}) {
        return this.voucherService.findOne22(query.content);
    }
    @UseGuards(JwtAuthGuard)
    @Get('showVoucher') 
    async  show022() {
      return this.voucherService.findAll22();
    }
    @UseGuards(JwtAuthGuard)
    @Get('deleteVoucher') 
      async  delete022(@Body() query: { content: string}) {
        return this.voucherService.delete22(query.content);
    }

}
