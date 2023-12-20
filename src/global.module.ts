import { Module, Injectable, Global } from '@nestjs/common';

@Injectable()
export class GlobalService {
  constructor() {
    console.log('GlobalService instantiated');
  }

  getHello() {
    return 'hello';
  }
}

@Global()
@Module({
  providers: [GlobalService],
  exports: [GlobalService],
})
export class GlobalModule {}