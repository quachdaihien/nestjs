import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cat.service';

@Controller()
export class CatController {
  constructor(private readonly catsService: CatsService) {}
  @Get('cats')
  getCat() {
    return this.catsService.getCat();
  }
}
