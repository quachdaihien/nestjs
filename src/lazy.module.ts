import { Module, Injectable, OnModuleInit } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { GlobalService } from './global.module';

@Injectable()
export class LazyService implements OnModuleInit {
  private globalService: GlobalService;
  onModuleInit() {
    this.globalService = this.moduleRef.get(GlobalService, {strict: false});
  }
  constructor(private moduleRef: ModuleRef) {}
  
  getHello() {
    console.log(this.globalService.getHello());
  }
}

@Module({
  providers: [LazyService],
})
export class LazyModule {}
