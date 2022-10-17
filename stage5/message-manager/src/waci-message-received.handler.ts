import {
  WACIInterpreter,
  WACIMessageResponseType,
  WACIResponse,
} from '@extrimian/waci';
import {
  DWNClient,
  DWNMessage,
  SendMessageParams,
  ThreadMethod,
} from '@extrimian/dwn-client';
import { DIDModenaResolver } from '@extrimian/did-resolver';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class WACIMessageReceivedHandler {
  constructor(
    private waciInterpreter: WACIInterpreter,
    private dwnClient: DWNClient,
    private didResolver: DIDModenaResolver,
  ) {}

  async handle(message: DWNMessage): Promise<void> {
    Logger.log('WACI message received');
    const {
      data: messageData,
      descriptor: { root: rootMessageId },
    } = message;
    if (await this.waciInterpreter.isWACIMessage(messageData)) {
      const dwnMessageThread = rootMessageId
        ? await this.dwnClient.getMessages({
            root: rootMessageId,
          })
        : [message];

      const waciMessageThread = dwnMessageThread.map(
        (dwnMessage) => dwnMessage.data,
      );
      const responseMessage = await this.waciInterpreter.processMessage(
        waciMessageThread,
      );
      if (responseMessage) {
        await this.sendResponse(responseMessage, message);
        Logger.log('WACI message sent');
      }
    }
  }

  private async sendResponse(
    responseMessage: WACIResponse,
    previousMessage: DWNMessage,
  ): Promise<void> {
    const dwnUrl = await this.getTargetDwnUrl(responseMessage.target);
    const params: SendMessageParams = {
      targetDID: responseMessage.target,
      targetInboxURL: dwnUrl,
      message: {
        data: responseMessage.message,
        descriptor: {
          method: undefined,
          dateCreated: new Date(),
          dataFormat: 'application/json',
        },
      },
    };
    switch (responseMessage.responseType) {
      case WACIMessageResponseType.CreateThread:
        params.message.descriptor.method = ThreadMethod.Create;
        break;
      case WACIMessageResponseType.ReplyThread:
        params.message.descriptor.method = ThreadMethod.Reply;
        params.message.descriptor.root =
          previousMessage.descriptor.root ||
          previousMessage.descriptor.objectId;
        params.message.descriptor.parent = previousMessage.descriptor.objectId;
        break;
      default:
        throw Error('Wrong WACI response type');
    }
    await this.dwnClient.sendMessage(params).catch(console.error);
  }

  private async getTargetDwnUrl(did: string): Promise<string> {
    const didIdentifier = did.slice(did.lastIndexOf(':') + 1);
    const didDocument = await this.didResolver.resolveDID(didIdentifier);
    try {
      const dwn = didDocument.service.find(
        (service) => service.type === 'DecentralizedWebNode',
      );
      return dwn.serviceEndpoint['nodes'][0];
    } catch (error) {
      Logger.error(error);
      throw Error('Error finding DWN service in DID Document');
    }
  }
}
