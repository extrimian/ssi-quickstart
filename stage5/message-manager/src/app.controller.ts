import { Body, Controller, Post } from '@nestjs/common';
import { MessageService } from './message.service';
import { CreateOobInvitationDto } from './dto/create-oob-invitation.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: MessageService) {}

  @Post('message')
  getWaciInvitationMessage(
    @Body() requestBody: CreateOobInvitationDto,
  ): Promise<any> {
    return this.appService.getWaciInvitationMessage(requestBody);
  }
}
