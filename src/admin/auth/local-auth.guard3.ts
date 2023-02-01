import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';


@Injectable()
export class LocalAuthGuard3 extends AuthGuard('local3') {}




