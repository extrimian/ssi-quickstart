export declare const dwnTemplate: (did: string, id: string, data: any) => {
    target: string;
    messages: {
        data: any;
        descriptor: {
            objectId: string;
            dateCreated: number;
            method: string;
            schema: string;
            dataFormat: string;
        };
    }[];
};
