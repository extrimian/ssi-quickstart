import { Controller, Get, Body, Post, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { RecipientDto } from './dto/recipient';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('users')
  addUserData(@Body() recipient: RecipientDto) {
    return this.appService.addUserData(recipient);
  }

  @Get('users/:id')
  getUserData(@Param('id') id: string) {
    return this.appService.getUserData(id);
  }
}
