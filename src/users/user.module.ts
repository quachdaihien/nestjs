import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
// import { RolesGuard } from 'src/guard/role.guard.base';
import { LoggingInterceptor } from 'src/interceptor/logging.interceptor';
import { LoggerService } from 'src/logger/logger.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    UserService,
    // {
    //   provide: APP_GUARD,
    //   useClass: RolesGuard,
    // },
    // {
    //     provide: APP_INTERCEPTOR,
    //     useClass: LoggingInterceptor,
    //   },
    LoggerService
  ],
  exports: [UserService],
})
export class UserModule {}
