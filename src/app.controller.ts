import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('cats/:id')
  getHello(@Param('id') id: string): string {
    console.log(id)
    return this.appService.getHello();
  }
}
