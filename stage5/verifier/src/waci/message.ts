import waciInterpreter from './interpreterTS';
import DidResolverService, { didResolver } from '../dwn-client/didResolver';
import { DWNClient, ThreadMethod } from '@extrimian/dwn-client';

export class WACIMessageReceivedHandler {
  constructor(private dwnClient: DWNClient) {}

  async handle(command: any) {
    console.log('Message received: ', command);
    /*const {
			message: {
				data: messageData,
				descriptor: { root: rootMessageId },
			},
		} = command;*/
    const { data, descriptor } = command;
    const messageData = data;
    const rootMessageId = descriptor.root;
    if (await waciInterpreter.isWACIMessage(messageData)) {
      const dwnMessageThread = rootMessageId
        ? await this.dwnClient.getMessages({
            root: rootMessageId,
          })
        : [command];

      const waciMessageThread = dwnMessageThread.map(
        (dwnMessage) => dwnMessage.data
      );
      const responseMessage = await waciInterpreter.processMessage(
        waciMessageThread
      );
      if (responseMessage) {
        await this.sendResponse(responseMessage, command);
      }
    }
  }

  async sendResponse(responseMessage: any, previousMessage: any) {
    const dwnUrl = await this.getTargetDwnUrl(responseMessage.target);
    const params: any = {
      targetDID: responseMessage.target,
      targetInboxURL: dwnUrl,
      message: {
        data: responseMessage.message,
        descriptor: {
          method: ThreadMethod.Create,
          dateCreated: new Date(),
          dataFormat: 'application/json',
        },
      },
    };

    switch (responseMessage.responseType) {
      case 0:
        params.message.descriptor.method = ThreadMethod.Create;
        break;
      case 1:
        params.message.descriptor.method = ThreadMethod.Reply;
        params.message.descriptor.root =
          previousMessage.descriptor.root ||
          previousMessage.descriptor.objectId;
        params.message.descriptor.parent = previousMessage.descriptor.objectId;
        break;
      default:
        throw Error('Wrong WACI response type');
    }
    console.log('DWN Send Params: ', params);
    await this.dwnClient.sendMessage(params).catch(console.error);
  }

  async getTargetDwnUrl(did: any) {
    const didDocument = await didResolver.resolveDid(did);
    return didResolver.getDwnUrlFromDocument(didDocument);
  }
}
