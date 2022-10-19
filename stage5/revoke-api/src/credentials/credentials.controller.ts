import { Controller, HttpCode, Param, Post, Body, Get } from '@nestjs/common';
import { RevokedCredentialDto } from './dto/revokedCredential';
import { CredentialsService } from './credentials.service';

@Controller('credentials')
export class CredentialsController {
  constructor(private credentialsService: CredentialsService) {}

  @Post('revoke/:id')
  @HttpCode(200)
  async Revoke(
    @Param('id') id: string,
    @Body() revokedCredential: RevokedCredentialDto,
  ) {
    return await this.credentialsService.revoke(id, revokedCredential);
  }

  @Post('verify/:id')
  @HttpCode(200)
  async Verify(@Param('id') id: string) {
    return await this.credentialsService.verifyCredential(id);
  }

  @Get()
  @HttpCode(200)
  async Get() {
    return await this.credentialsService.getCredentials();
  }

  @Get('byid/:id')
  @HttpCode(200)
  async GetById(@Param('id') id: string) {
    const vc = await this.credentialsService.getCredentialById(id);
    return vc;
  }
}
