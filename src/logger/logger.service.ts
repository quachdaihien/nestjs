import { Scope } from '@nestjs/common';
import { Injectable } from '@nestjs/common/decorators';
@Injectable({scope: Scope.TRANSIENT})
export class LoggerService {
  count = 0;
  log(): number {
    this.count++;
    return this.count;
  }
}
