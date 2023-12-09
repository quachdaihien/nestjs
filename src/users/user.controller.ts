import {
  Controller,
  Get,
  Post,
  Body,
  ValidationPipe,
  UseGuards,
  HttpException,
  HttpStatus,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './user.dto';
import { RolesGuardAdvanced } from 'src/guard/role.guard.advanced';
import { Roles } from 'src/roles/roles.decorator';
import { LoggingInterceptor } from 'src/interceptor/logging.interceptor';
import { TransformInterceptor } from 'src/interceptor/transform.interceptor';
import { User } from 'src/decorator/user.decorator';
import { UserDto } from 'src/dto/user.dto';
import { LoggerService } from 'src/logger/logger.service';

@Controller()
@UseGuards(RolesGuardAdvanced)
@UseInterceptors(TransformInterceptor)
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly logger: LoggerService,
  ) {
    console.log('ad',logger === userService.getLogger());
  }
  @Get('user/:id')
  @Roles(['admin'])
  async getUserDetail(@User('name') user: UserDto) {
    console.log('getDetail', user);
    return this.userService.getUserDetail();
  }
  @Post('user/:id')
  @Roles(['admin'])
  async createNewUser(@Body(new ValidationPipe()) UserDto: UserDto) {
    try {
      return this.userService.createNewUser();
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a custom message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  @Get('user/inject/:id')
  @Roles(['admin'])
  getLogger() {
    return [this.logger.log(),this.userService.getLogger().log()];
  }

  @Post('user/inject/:id')
  @Roles(['admin'])
  postLogger() {
    return this.logger.log();
  }
}
