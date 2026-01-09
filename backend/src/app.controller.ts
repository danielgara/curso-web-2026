import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  index(): string {
    return 'Hello World!';
  }

  @Get('about')
  about(): string {
    return 'About';
  }
}
