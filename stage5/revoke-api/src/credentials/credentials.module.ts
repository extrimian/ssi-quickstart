import { Module } from '@nestjs/common';
import { CredentialsService } from './credentials.service';
import { CredentialsController } from './credentials.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CredentialRevokedSchema } from './schemas/credentialRevoked';
import { CredentialSchema } from './schemas/credential';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'revoked-vcs', schema: CredentialRevokedSchema },
      { name: 'credentials', schema: CredentialSchema },
    ]),
  ],
  providers: [CredentialsService],
  controllers: [CredentialsController],
})
export class CredentialsModule {}
