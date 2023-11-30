import { Controller, Get, Post, Body, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './user.dto';
import { UserDto } from 'src/dto/user.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('user/:id')
  getUserDetail() {
    return this.userService.getUserDetail();
  }
  @Post('user/:id')
  createNewUser(@Body() UserDto: UserDto) {
    return this.userService.createNewUser();
  }
}
