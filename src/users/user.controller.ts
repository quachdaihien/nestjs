import { Controller, Get, Post,Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './user.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('user/:id')
  getUserDetail() {
    return this.userService.getUserDetail();
  }
  @Post('user/:id')
  createNewUser(@Body() createUserDto: CreateUserDto){
    return this.userService.createNewUser();
  }
}
