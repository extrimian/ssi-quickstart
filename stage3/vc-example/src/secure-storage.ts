import { KMSStorage } from "@extrimian/kms-core";

export class SecureStorage implements KMSStorage {
    map = new Map<string, any>();

    constructor() {
        // const privateKeys = [{
        //     privateKey: '5jVGoJZXnX8JKhKrgs2PMTrwUJqG5zBYvpFpttqUaTVY',
        //     publicKey: '21myWT5FBatkNqPUVHJSBekKppyaTtgqK3KArqdyEE6zmg6RFnqaZ48GQQorS5T3FRCfoXyS1XhEg61GwFrTx3yV3xUzAyFoHL482LoeyjtLnfT9reoZVxLZYkiSfPV7Q6hZ',
        //     suite: 'bbsbls2020'
        // }];

        this.map.set("0x83b9f43105afce713fbb59c0ed4755be00b24429a2a9ec6e4d30fe79eadcf79bc668e2dae5d963bea9939564673bbf860eee6123bb69f3cd13544cfdbdeef12c7fd75ce3fa2557464114fe3e68d09d4c3e8365e2cf6d9e93ee7270bcd33b7ef2",
            {
                suite: 'bbsbls2020',
                privateKey: '3xbS7xDTfKsxEHGZ8vDhhcci7TYe4ewzHFNTkVBSkMmC',
                publicKey: 's51BcxxUF7wfmQKaM6azDRTrBLNpWEp5vfSKv24XBNMXYJGh3RiSqTaw3gEi4k4AX9Xfqkc3RFFoWiuFwREeY9fteJQQuzGH5BtT5NZ9UcBXRt5jjupjN4Tk1God64oUG6W'
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