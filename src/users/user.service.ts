import { Injectable } from '@nestjs/common/decorators';
@Injectable()
export class UserService {
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
}
