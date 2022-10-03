import { DWNClientScheduler } from '@extrimian/dwn-client-scheduler';
import { DWNClient, DWNMessage } from '@extrimian/dwn-client';

export class StartDWNMessagesPullHandler {
    dwnClient: any;


    handle = async () => {
        const dwnClientConfig = {
            did: string;
            inboxURL: string;
            storage: MessageStorage;
        }

        this.dwnClient = new DWNClient(dwnClientConfig)

        const dwnClientScheduler = new DWNClientScheduler(
            this.dwnClient,
            cronExpression ////"/10 * * * *"
        );

        // Se inicia el cron para el pulleo del DWN
        this.dwnClientScheduler.start();

        //Se reciben nuevos mensajes en el DWN y se delega cada uno al event handler de WACI:
        this.dwnClient.addSubscriber(async (messages) => {
            console.log(`Found ${messages.length} messages`);
            messages.forEach(this.sendNewMessageNotification);
        });
    }

    sendNewMessageNotification = (message: DWNMessage): void => {
        this.mediator.notify(
            new NewMessageReceivedEvent({
                message,
            })
        );
    };
}