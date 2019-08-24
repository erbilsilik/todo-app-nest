import { Controller } from '@nestjs/common';

@Controller()
export class AppController {
  public jsonData(data) {
    return {
      data,
    };
  }
}
