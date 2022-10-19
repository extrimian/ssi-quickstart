import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  UserInvitation,
  UserInvitationSchema,
} from './schemas/citizen-invitation.schema';
import {
  CredentialContext,
  CredentialContextSchema,
} from './schemas/credential-context.schema';
import { config } from './config';

@Module({
  imports: [
    MongooseModule.forRoot(config.MONGO_URI),
    MongooseModule.forFeature([
      { name: UserInvitation.name, schema: UserInvitationSchema },
      { name: CredentialContext.name, schema: CredentialContextSchema },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
