import { Injectable } from '@nestjs/common';
import { ConfigService } from './config.service';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
