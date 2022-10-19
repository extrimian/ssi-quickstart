import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { CreateOobInvitationDto } from './dto/create-oob-invitation.dto';
import { GetVcDataDto } from './dto/get-vc-data.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('vc-data/:id')
  async getVCData(
    @Param('id') waciInvitationId: string,
  ): Promise<GetVcDataDto> {
    return this.appService.getVcData(waciInvitationId);
  }

  @Post('invitation/qr')
  async getQRInvitation(@Body() body: CreateOobInvitationDto): Promise<string> {
    return this.appService.getQRInvitation(body);
  }

  @Post('invitation/deeplink')
  async getDeeplinkInvitation(
    @Body() body: CreateOobInvitationDto,
  ): Promise<string> {
    return this.appService.getDeeplinkInvitation(body);
  }
}
