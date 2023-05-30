# Interacciones entre DIDs	

El sistema SSI se basa en el intercambio libre de VCs entre portadores de DID. Esta funcionalidad se alcanza con dos nuevos componentes: un nodo web descentralizado (Decentralized Web Node o DWN) y el protocolo de interacción entre billetera y credenciales (Wallet and Credential Interaction o WACI), que se utiliza en conjunto con el esquema de encriptación DIDComm.


## Decentralised Web Nodes

Un [DWN](https://identity.foundation/decentralized-web-node/spec/) es, esencialmente, un buzón que recibe y almacena mensajes. Al crear un DID podemos establecerlo como un servicio del mismo, permitiendo que cualquier persona que resuelva nuestro DID Document pueda enviar mensajes a nuestro DWN. Las solicitudes de creación de credenciales, el envío de credenciales y la solicitud para verificar credenciales pueden realizarse utilizando el protocolo WACI y enviando mensajes encriptados con DIDComm al DWN. 


## WACI-DIDComm

El protocolo [WACI](https://identity.foundation/waci-didcomm/) es quien sienta las bases sobre cómo se emite y presenta una credencial. Por otro lado, DIDComm es un esquema de encriptación que utiliza las claves públicas y privadas asociadas a los DIDs de ambas partes de la interacción para establecer un canal de comunicación seguro. 


## Modelo de interacción

En el siguiente diagrama vamos a ver una interacción típica entre dos portadores de DID usando DWN:

![](/resources/interaction_diagram.svg)

_Fuente: Decentralised Identity Foundation_

Usemos una interacción WACI típica, la presentación de una credencial, para mostrar el funcionamiento del sistema. Supongamos que Bob quiere que Alice presente una credencial de ciudadano para poder ingresar a un evento.

El disparador de la interacción sería que la primera parte, Alice, descubre el DID de Bob.  Esto se puede lograr mediante un mensaje _Out Of Band_ de WACI, donde Bob deja registrado su DID y el hecho de que este mensaje disparará un intercambio de presentación. Este mensaje puede ser codificado en un código QR y escaneado por Alice, en la entrada al evento.

Luego, Alice debe resolver el DID Document de Bob. Para esto deberá consultar a un DID Resolver, como el componente de Modena de Extrimian. Con esto, Alice descubrirá el URL del DWN de Bob y podrá enviarle mensajes.

El siguiente paso sería el envío del primer mensaje del intercambio, la propuesta de presentación. En este mensaje, Alice le comunica a Bob su interés por presentar su credencial y también le envía su DID.

Por otro lado, Bob ahora tiene el DID de Alice y puede resolverlo para conseguir su DWN y enviarle mensajes. Además, ahora los mensajes de ambos pueden ser encriptados con DIDComm para establecer una conexión segura ya que ambas partes conocen el DID de la otra. 

A continuación, Alice y Bob pueden proceder a realizar el resto del intercambio, donde Bob le pide a Alice que presente su credencial. Luego,  Alice presenta su credencial y Bob la evalúa para corroborar que es válida.


## Agente Backend

Si bien el uso de DWNs y WACI-DIDComm nos permite realizar un intercambio seguro entre 2 portadores de DIDs para emitir o presentar una VC, vamos a necesitar un mecanismo de orquestación que realice el intercambio de mensajes en sí. Para esto utilizamos el Agente Backend, que es un servicio que representa a un portador de un DID y realiza intercambios WACI en su nombre.

El Backend Agent de Extrimian nos permite integrar todos los servicios vistos hasta ahora para poder crear un DID, emitir y verificar credenciales y almacenarlas de manera segura. Además, es fácil de integrar con cualquier aplicación que estemos implementando y nos abstrae de los mecanismos más complejos como el manejo de claves y el intercambio de mensajes. 
