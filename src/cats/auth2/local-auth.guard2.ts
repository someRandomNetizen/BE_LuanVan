import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
//import { local2 } from './auth2.module';

@Injectable()
export class LocalAuthGuard2 extends AuthGuard('local2') {}




