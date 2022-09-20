# Credenciales Verificables

## Que es una Credencial Verificable?
En el mundo físico, una credencial puede consistir en:

+ Información relacionada con la identificación del sujeto de la credencial (por ejemplo, una foto, nombre o número de identificación)
Información relacionada con la autoridad emisora ​​(por ejemplo, un gobierno de la ciudad, una agencia nacional o un organismo de certificación)

+ Información relacionada con el tipo de credencial que se trata (por ejemplo, un pasaporte holandés, una licencia de conducir estadounidense o una tarjeta de seguro médico)

+ Información relacionada con atributos o propiedades específicas que afirma la autoridad emisora ​​sobre el tema (por ejemplo, nacionalidad, las clases de vehículos con derecho a conducir o fecha de nacimiento)

+ Evidencia relacionada con cómo se obtuvo la credencial

+ Información relacionada con las restricciones de la credencial (por ejemplo, fecha de vencimiento o términos de uso).

Una credencial verificable **puede representar toda la misma información que representa una credencial física**. La adición de tecnologías, como las firmas digitales, hace que las credenciales verificables sean más evidentes y más confiables que sus contrapartes físicas.

Los titulares de credenciales verificables pueden generar presentaciones verificables y luego compartir estas presentaciones verificables con los verificadores para demostrar que poseen credenciales verificables con ciertas características.


**La palabra "verificable"** en los términos credencial verificable y presentación verificable se refiere a la característica de una credencial o presentación de **poder ser verificada por un verificador**. La verificabilidad de una credencial **no implica que se pueda evaluar la veracidad de las afirmaciones codificadas en ella**; sin embargo, el emisor puede incluir valores en la propiedad de evidencia para ayudar al verificador a aplicar su lógica de negocios para determinar si los reclamos tienen suficiente veracidad para sus necesidades.

### Ejemplo de Credencial Verificable

```
{
  
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "id": "http://example.edu/credentials/1872",
  "type": ["VerifiableCredential", "AlumniCredential"],
  "issuer": "https://example.edu/issuers/565049",
  "issuanceDate": "2010-01-01T19:23:24Z",
  "credentialSubject": {
    "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
    "alumniOf": {
      "id": "did:example:c276e12ec21ebfeb1f712ebc6f1",
      "name": [{
        "value": "Example University",
        "lang": "en"
      }, {
        "value": "Exemple d'Université",
        "lang": "fr"
      }]
    }
  },
  "proof": {
    "type": "RsaSignature2018",
    "created": "2017-06-18T21:19:10Z",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://example.edu/issuers/565049#key-1",
    "jws": "eyJhbGciOiJSUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..TCYt5X
      sITJX1CxPCT8yAV-TVkIEq_PbChOMqsLfRoPsnsgw5WEuts01mq-pQy7UJiN5mgRxD-WUc
      X16dUEMGlv50aqzpqh4Qktb3rk-BuQy72IFLOqV0G_zS245-kronKb78cPN25DGlcTwLtj
      PAYuNzVBAh4vGHSrQyHUdBBPM"
  }
}
```

## Presentación de una Credencial Verificable
El hecho de poseer una credencial no te hace subject de la misma.

Las presentaciones son datos derivados de una o más credenciales verificables, emitidas por uno o más emisores, que se comparten con un verificador específico. Una presentación verificable es una presentación a prueba de manipulaciones codificada de tal manera que se puede confiar en la autoría de los datos después de un proceso de verificación criptográfica. Ciertos tipos de presentaciones verificables **pueden contener datos que se sintetizan a partir de las credenciales verificables originales**, pero que no las contienen (por ejemplo, **pruebas de conocimiento cero**).

![](./imgs/v-presentation.png)

## Flujo de Uso
En el siguiente gráfico se observa un caso de uso desde el momento en que se obtiene la credencial hasta que se presenta utilizando selective disclosure.

![](./imgs/vc-flow.png)

## Generar Credencial

```

```

## Firmar Credencial

## Verificar VC

