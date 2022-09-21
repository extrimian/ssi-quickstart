import { KMSStorage } from "@extrimian/kms-core";

export class SecureStorage implements KMSStorage {
    map = new Map<string, any>();

    constructor() {
        // const privateKeys = [{
        //     privateKey: '5jVGoJZXnX8JKhKrgs2PMTrwUJqG5zBYvpFpttqUaTVY',
        //     publicKey: '21myWT5FBatkNqPUVHJSBekKppyaTtgqK3KArqdyEE6zmg6RFnqaZ48GQQorS5T3FRCfoXyS1XhEg61GwFrTx3yV3xUzAyFoHL482LoeyjtLnfT9reoZVxLZYkiSfPV7Q6hZ',
        //     suite: 'bbsbls2020'
        // }];

        this.map.set("0x882051967acb469d4ac50b66f0c237c6a5f9cd3875d0c78edfe7d2e06d6df629ad9ea7aa94113eab0df6945acb1b11f10c437a3bc0b107d94962b0303e1edaed93bd932a04b8a41e4ac54cfa72b74406146d8b984b29b86dfeb43f993a84a53c",
            {
                suite: 'bbsbls2020',
                privateKey: '12J5BMF6AUSY8sQUg1x7fhaWWT5AAiiTKhAvE53TM3Z9',
                publicKey: 'otjvbJbRqhtkGtod122m97hw7MLz2HPZGS2z1ZC2TuYtQ98dKc8C6nTrXjSFeicymj1gyzYBAeuvaMuQLtEv1PHoN8zEJn1KqL9iMdLCAVUa6hpAXQnEUgn4AiDLJgG9XWb'
            });
        this.map.set("0xadc28ac68a2391c2be2fb413dcdffaa824dec5afcb0944b825acf46e8bbb07f070169cee11aadd0af28207771d17836d173a2fcbdcee28afff4f9aaa78546c4a9e9a158fae4467f610561cbe364b40e3429d00d8ca3f0770dd5be2c4a3d73eee",
            {
                suite: 'bbsbls2020',
                privateKey: '6DwtqfiXTBvFgkYvg5tfGixr62ZghNEQFQTTAdpj326g',
                publicKey: '22reLzFQ7mBZHvsUnf9d2onYq5N7BfbkKJmiKP9Xcc5jCssTM61rPHBvSZwZLnNucCjnBu4bVzrvbn1voS31Ktd74zrvKkvKhv5svsp76AX1AyNHV8AEkmQ5kZrwTtXKEAgm'
            }
        );


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