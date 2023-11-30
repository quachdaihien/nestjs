import {
  Controller,
  Get,
  Post,
  Body,
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
@Controller()
@UseGuards(RolesGuardAdvanced)
@UseInterceptors(TransformInterceptor)
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('user/:id')
  @Roles(['admin'])
  async getUserDetail(@User('name') name: string) {
    console.log(name);
    return this.userService.getUserDetail();
  }
  @Post('user/:id')
  @Roles(['admin'])
  async createNewUser(@Body() createUserDto: CreateUserDto) {
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
}
