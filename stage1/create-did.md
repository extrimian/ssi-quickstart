# Creación de un DID

Para crear un nuevo DID puede utilizarse el paquete '@extrimian/did-registry'. Este paquete permite trabajar con los did method basados en modena. Expone la funcionalidad para crear un nuevo DID, crear un Long DID y publicarlo. El siguiente ejemplo muestar como crear un long DID usando éste paquete.

```
createDID(params: {
        updateKey: IJWK;
        recoveryKey: IJWK;
        verificationMethods: IKeys;
        services?: Service[];
    }): Promise<CreateDIDResponse>;
```
Interfaces
```
export interface CreateDIDResponse {
    recoveryKey: IJWK;
    updateKey: IJWK;
    document: IonDocumentModel;
    longDid: string;
    didUniqueSuffix: string;
}

export declare type Service = {
    id: string;
    type: string;
    serviceEndpoint: string | string[] | Record<string, string | string[]>;
};

export interface IJWK {
    kty: string;
    crv: string;
    x: string;
    y: string;
}

interface IKeys {
    bbsBls?: VerificationMethod;
    didComm?: VerificationMethod;
}
```
* **updateKey**: Clave pública para la modificación del DID Document
* **recoveryKey**: Clave pública para la restauración de un DID Document.
* **verificationMethods**: Verification Methods que va a exponer el DID Document.
* **services**: Servicios que va a exponer el DID Document.

## KMS
Para crear el par de claves, los paquetes de Extrimian exponen un KMS (Key Management Service) que permite generar las claves para agregarlas al DID Document.

```
export class KMSClient implements IKMS {
  constructor(
    private config: {
      lang: LANG;
      storage: KMSStorage;
      didResolver?: (did: string) => Promise<DIDDocument>;
      mobile?: boolean;
    }
  ) { }
```

* **storage**: Representa el Storage del KMS. Esta implementación debe ser proporcionada por quien consume este servicio. Se debe implementar una interfaz que permita guardar datos del KMS. Un ejemplo de esta implementación podría ser a través del Secure Storage del dispositivo móvil. El Storage debe implementar la siguiente interfaz:

```
export interface KMSStorage {
    add(key: string, data: any): Promise<void>;
    get(key: string): Promise<any>;
    getAll(): Promise<Map<string, any>>;
    update(key: string, data: any);
    remove(key: string);
}
```
## Generación de Claves
La invocación del servicio para la creación de un DID requiere de la generación previa de claves públicas y privadas. Modena trabaja principalmente con claves de Update y Recovery de un DID Document. Estas claves son del tipo sepc21k. Por otro lado, requiere dos claves alternativas:
* **BbsBls2020**: Para la firma de una VC.
* **DIDComm**: Para la comunicación encriptada y authenticada entre agentes. Responde al tipo sepc21k.

Para la generación de claves, disponemos de un KMS que facilita la obtención de estas claves. Sin embargo, puede utilizarse cualquier servicio externo y proveer estas claves públicas a través de la invocación del servicio.

Si alguna de las claves recoveryKey, updateKey, bbsBlsJwk, didCommJwk no se proporcionan al servicio de creación del DID, se utilizará el KMS de Extrimian para crear estas credenciales automáticamente.


* **createApiUrl**: Debe expresarse la URL de un endpoint de un nodo de Modena.