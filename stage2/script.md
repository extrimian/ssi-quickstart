# Script

## 1. Descargar node-typescript-template
https://github.com/extrimian/node-typescript-template.git

## 2. Instalar paquetes de Extrimian
**KMS**: 
```
npm i @extrimian/kms-core
npm i @extrimian/kms-client
```

**DID**:
```
npm i @extrimian/did-core
npm i @extrimian/did-registry
npm i @extrimian/did-resolver
```

## 3. Crear LONG DID

### 1. KMS
Es necesario instanciar el KMS para crear las clave

```
import { KMSClient } from "@extrimian/kms-client";

const kms = new KMSClient({
    lang: LANG.es,
    storage: new SecureStorage(),
});
```

#### 1.1 Secure Storage
Implementar Secure Storage
```
import { KMSStorage } from "@extrimian/kms-core";
```
```
export class SecureStorage implements KMSStorage {
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
```
#### 1.2. Crear par de claves (UpdateKey, RecoveryKey, DIDComm, BbsBls2020)
```
const updateKey = await kms.create(Suite.ES256k);
const recoveryKey = await kms.create(Suite.ES256k);

const didComm = await kms.create(Suite.DIDComm);
const bbsbls = await kms.create(Suite.Bbsbls2020);
```

### 2. Crear DID
```
import { Did } from "@extrimian/did-registry";
```

```
const didService = new Did();

const longDID = await didService.createDID({
    updateKey: updateKey.publicKeyJWK,
    recoveryKey: recoveryKey.publicKeyJWK,
    verificationMethods: [{
        id: "bbsbls",
        type: "Bls12381G1Key2020",
        publicKeyJwk: bbsbls.publicKeyJWK,
        purpose: [new AssertionMethodPurpuse()]
    },
    {
        id: "didComm",
        type: "X25519KeyAgreementKey2019",
        publicKeyJwk: didComm.publicKeyJWK,
        purpose: [new KeyAgreementPurpose()]
    }],
})
```

## 3. Resolver Long DID
```
import { DIDModenaResolver } from "@extrimian/did-resolver"
```

```
const resolver = new DIDModenaResolver({ modenaURL: getModenaApiURL() });
return await resolver.resolveDID(did);
```

```
getModenaApiURL = () => {
    return "http://modena.extrimian.com";
}
```

## 4. Publicar Long DID
```
import { CreateDIDResponse, Did } from "@extrimian/did-registry";
```

```
const registry = new Did();

return await registry.publishDID({
    modenaApiURL: getModenaApiURL(),
    createDIDResponse: createDID,
});
```

## 5. Resolver DID Publicado
```
```

```
didDocument = await resolver.resolveDID(publicDID.canonicalId);
```
