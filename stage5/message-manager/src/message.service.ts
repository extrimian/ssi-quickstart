import { Inject, Injectable, Logger } from '@nestjs/common';
import { CreateOobInvitationDto } from './dto/create-oob-invitation.dto';
import { WACIInterpreter, WACIMessage } from '@extrimian/waci';
import { Cron } from '@nestjs/schedule';
import { DWNClient } from '@extrimian/dwn-client';
import { WACIMessageReceivedHandler } from './waci-message-received.handler';
import { config } from './config';

export type CreateCredentialParams = {
  vcInfo: {
    issuer: string;
    expirationDate: Date;
    id: string;
    issuanceDate?: Date;
    credentialStatus?: {
      id: string;
      type?: string;
    };
    credentialSchema?: {
      id: string;
      type: string;
    };
    refreshService?: {
      id: string;
      type: string;
    };
    types: string[];
  };
  contexts: string[];
  mappingRulesDescriptor: Record<string, string>;
  data: Record<string, string>;
};

@Injectable()
export class MessageService {
  constructor(
    @Inject('DID') private did: string,
    private waciInterpreter: WACIInterpreter,
    private dwnClient: DWNClient,
    private handler: WACIMessageReceivedHandler,
  ) {
    dwnClient.addSubscriber(async (messages) => {
      Logger.log(`Found ${messages.length} messages`);
      messages.forEach((message) => handler.handle(message));
    });
  }
  async getWaciInvitationMessage(
    dto: CreateOobInvitationDto,
  ): Promise<WACIMessage> {
    return this.waciInterpreter.createOOBInvitation(this.did, dto.goalCode);
  }

  @Cron(config.DWN_SCHEDULER_CRON_EXPRESSION)
  pullNewDWNMessages(): void {
    this.dwnClient.pullNewMessages();
  }
}
