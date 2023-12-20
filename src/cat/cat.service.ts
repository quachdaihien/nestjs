import { Get, Injectable, OnModuleInit } from '@nestjs/common';
import { ContextIdFactory, ModuleRef } from '@nestjs/core';
import { UserService } from 'src/users/user.service';

@Injectable()
// module ref thì ko cần import module user vào module cat
export class CatsService implements OnModuleInit {
  private userService: UserService;
  constructor(private moduleRef: ModuleRef) {}
  async onModuleInit() {
    // this.userService = this.moduleRef.get(UserService, { strict: false });
    // this.userService = this.moduleRef.resolve(UserService)
    const contextId = ContextIdFactory.create();
    this.userService = await this.moduleRef.resolve(UserService, contextId, {
      strict: false,
    });
    console.log(['log'], this.userService.getLogger().log);
    console.log(['count'], this.userService.getLogger().count);
  }
  @Get()
  getCat() {
    console.log(['getCat'], this.userService.getLogger().count);
  }
}

// phải import module user vào module cat trong cat.module.ts
// export class CatsService {
//   constructor(private readonly userService : UserService) {}
//   getCat() {
//     console.log(['log'],this.userService.getLogger().count)
//   }
//   @Get()
//   getName() :any{
//     return {
//         ad: '222'
//     }
//   }
// }
