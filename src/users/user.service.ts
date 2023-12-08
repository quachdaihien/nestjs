import { Injectable } from '@nestjs/common/decorators';
import { LoggerService } from 'src/logger/logger.service';
@Injectable()
export class UserService {
  constructor(private readonly logger: LoggerService) {}
  getUserDetail(): Object {
    return {
      name: 'adsa21',
      age: 12,
      sex: 'femail',
      dob: '12/1/12',
      address: 'HD',
    };
  }
  createNewUser(): string {
    console.log('pass guard');
    return 'create new user';
  }
  getLogger() {
    return this.logger
  }
}
