import { DWNClient } from '@extrimian/dwn-client';
import { WACIMessageReceivedHandler } from '../waci/message';
import storageMock from './storage';

export const initializeDwnClient = (did: string, dwnUrl: string): DWNClient => {
  const config = {
    did: did,
    inboxURL: dwnUrl,
    storage: storageMock,
  };

  const dwnClient = new DWNClient(config);
  const msgHandler = new WACIMessageReceivedHandler(dwnClient);

  dwnClient.addSubscriber(async (newMessages) => {
    console.log(`Found ${newMessages.length} messages`);
    if (newMessages.length) {
      newMessages.forEach((message) => {
        msgHandler.handle(message);
      });
    }
  });

  return dwnClient;
};
