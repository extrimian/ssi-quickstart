export class MessageSender {

    private async sendResponse(
        responseMessage: any,
        previousMessage: any
    ): Promise<void> {
        const dwnUrl = await this.getTargetDwnUrl(responseMessage.target);
        const params: any = {
            targetDID: responseMessage.target,
            targetInboxURL: dwnUrl,
            message: {
                data: responseMessage.message,
                descriptor: {
                    method: "ThreadsCreate",
                    dateCreated: new Date(),
                    dataFormat: 'application/json',
                },
            },
        };
    }

    private async getTargetDwnUrl(did: string): Promise<string> {
        const didDocument = await this.didResolver.resolveDid(did);
        return this.didResolver.getDwnUrlFromDocument(didDocument);
    }
}
