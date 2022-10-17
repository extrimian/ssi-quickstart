import { DynamicModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { MessageService } from './message.service';
import { ScheduleModule } from '@nestjs/schedule';
import { DWNClient } from '@extrimian/dwn-client';
import { inMemoryMessageStorage } from './storage/messages-storage';
import { config } from './config';
import { VerifiableCredentialService } from '@extrimian/vc-core';
import { waciInterpreterProvider } from './waci-interpreter';
import { KMSClient } from '@extrimian/kms-client';
import { LANG } from '@extrimian/kms-core';
import { didStorage } from './storage/did-storage';
import { DIDModenaResolver } from '@extrimian/did-resolver';
import { DidResolverService } from './did-resolver.service';
import { WACIMessageReceivedHandler } from './waci-message-received.handler';
import { CredentialService } from './credential.service';

export class AppModule {
  static register(did: string): DynamicModule {
    return {
      module: AppModule,
      imports: [ScheduleModule.forRoot()],
      controllers: [AppController],
      providers: [
        { provide: 'DID', useValue: did },
        {
          provide: DIDModenaResolver,
          useValue: new DIDModenaResolver({
            modenaURL: config.RESOLVER_URL,
          }),
        },
        {
          provide: KMSClient,
          useFactory: async (didResolver: DidResolverService) =>
            new KMSClient({
              lang: LANG.en,
              storage: didStorage,
              didResolver: (did) => didResolver.resolve(did),
            }),
          inject: [DidResolverService],
        },
        {
          provide: DWNClient,
          useValue: new DWNClient({
            inboxURL: config.DWN_URL,
            storage: inMemoryMessageStorage,
            did,
          }),
        },
        {
          provide: VerifiableCredentialService,
          useValue: new VerifiableCredentialService(),
        },
        MessageService,
        CredentialService,
        DidResolverService,
        waciInterpreterProvider,
        WACIMessageReceivedHandler,
      ],
    };
  }
}
