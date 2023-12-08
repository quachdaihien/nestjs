import { Get, Injectable } from "@nestjs/common";
import { ModuleRef } from "@nestjs/core";

@Injectable()
export class CatsService {
  constructor(private moduleRef: ModuleRef) {}
  @Get()
  getName() :any{ 
    return {
        ad: '222'
    }
  }
}