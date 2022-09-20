import { KMSStorage } from "@extrimian/kms-core";

export class SecureStorage implements KMSStorage {
    map = new Map<string, any>();

    constructor() {
        // const privateKeys = [{
        //     privateKey: '5jVGoJZXnX8JKhKrgs2PMTrwUJqG5zBYvpFpttqUaTVY',
        //     publicKey: '21myWT5FBatkNqPUVHJSBekKppyaTtgqK3KArqdyEE6zmg6RFnqaZ48GQQorS5T3FRCfoXyS1XhEg61GwFrTx3yV3xUzAyFoHL482LoeyjtLnfT9reoZVxLZYkiSfPV7Q6hZ',
        //     suite: 'bbsbls2020'
        // }];

        this.map.set("0x80d36a5a1c3fbe5c7ab7d2865360dfcbcd84de2026cffd62f53ef668df4061a423c4d180da355ea0187fd78e21e66cdc079a0d114ea620beba88d624eb8b7b28723d92293cd2aff076db8dcbfab20f1dce6f886274eaf427ca3ab41514a25d55",
            {
                suite: 'bbsbls2020',
                privateKey: '2rjK3nLMWK4qPiCU6hfLdTYGekzXD9v9jJydrPMfrrb8',
                publicKey: 'mNt7s6Wn3DcEern2DNmiZjRYwhiR41dHf59mEGH438DjmmfGuvyQmiQKU5ATg44VUvqrx71ioDheqPnujhYb2MMv4Z1FxhbFb81UEQcmQMgxNTCweGDns45juJEkp23uMVE'
            }
        )


        //UpdateKey ES256k
        // this.map.set(privateKeys[0].publicKey, privateKeys[0]);

        // //RecoveryKey ES256k
        // this.map.set(privateKeys[1].publicKey, privateKeys[1]);

        // //BbsBls2020
        // this.map.set(privateKeys[2].publicKey, privateKeys[2]);

        // //DidComm
        // this.map.set(privateKeys[3].publicKey, privateKeys[3]);
    }

    async add(key: string, data: any): Promise<void> {
        this.map.set(key, data);
    }

    async get(key: string): Promise<any> {
        return this.map.get(key);
    }

    async getAll(): Promise<Map<string, any>> {
        return this.map;
    }

    async update(key: string, data: any) {
        this.map.set(key, data);
    }

    async remove(key: string) {
        this.map.delete(key);
    }
}

export class SecureStorageMap implements KMSStorage {
    map = new Map<string, any>();

    async add(key: string, data: any): Promise<void> {
        this.map.set(key, data);
    }

    async get(key: string): Promise<any> {
        return this.map.get(key);
    }

    async getAll(): Promise<Map<string, any>> {
        return this.map;
    }

    async update(key: string, data: any) {
        this.map.set(key, data);
    }

    async remove(key: string) {
        this.map.delete(key);
    }
}