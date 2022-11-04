# Extrimian SSI quickstart 

Extrimian SSI Framework agrupa estándares y especificaciones relacionadas con la identidad soberana propia, DID y credenciales verificables.

El paquete NPM proporciona las funcionalidades necesarias para implementaciones modulares de aplicaciones de identidad descentralizadas y brinda interoperabilidad con otros componentes de una manera fácil y flexible.

Algunas de las soluciones que brinda son: cliente DWN, interpretación de mensajes WACI-DIDComm, verificación de credenciales verificables.


# Introducción 

Dentro de cada apartado se encontraron los pasos para poder llegar entender el mundo SSI con ejemplos , explicaciones teóricas, gráficos y todo lo que se necesite para poder adentrarse en este mundo de la identidad auto soberana.

La **Identidad AutoSoberana** (Self-Sovereign Identity en inglés) es un nuevo paradigma para la generación de confianza en internet que trasciende las interacciones digitales y puede implementarse en el mundo físico.
Un ejemplo de modelo de SSI es QuarkId ( [https://quarkid.org/](https://quarkid.org/) ) que está trayendo el mundo de SSI a la realidad en Latinoamérica.
 
Los **Identificadores Descentralizados** (Decentralised IDs o DIDs) y las Credenciales Verificables (Verified Credencials o VCs) son los pilares del modelo Self-sovereign identity (SSI). A través de una serie de pasos vamos a recorrer materiales y workshops que una empresa puede utilizar para integrarse a un modelo de SSI de forma simple sin tener que preocuparse de la problemática tecnológica de fondo.

## [Stage 1](stage1/README.md) 

**Temario:**

 - [Índice](stage1/README.md)
 - [Presentación](stage1/presentation.pdf)
 - [Que es un DID](stage1/what-is-did.md)
 - [Creación de un DID](stage1/create-did.md)
 - [Paquete Extrimian NPM](stage1/extrimian-packages.md)
 - [Workshop](stage1/workshop/did)
 

## [Stage 2](stage2/README.md) 

**Temario:**
- Descargar node-typescript-template
- Instalar paquetes de Extrimian
- Crear LONG DID
- Resolver Long DID
- Publicar Long DID
- Resolver DID Publicado
- [Workshop](stage2/README.md) 


## [Stage 3](stage3/README.md) 

**Temario:**

- Que es una Credencial Verificable?
- Presentación de una Credencial Verificable
- Flujo de Uso
- Generar Credencial
- Crear credencial utilizando VerifiableCredentialService
- Firmar Credencial
- Verificar VC
- [Workshop](stage3/vc-example) 

## [Stage 4](stage4/README.md) 

**Temario:**

- Interacción con el mundo exterior - DWN - DID Document - VC - WACI
- Service endpoints
- DWN Client NPM
- Inicializar DWN Client
- DWN Types
- Configurar el DWN para el Pulleo de mensajes
- DWN Send Message
- [Workshop](stage4/examples) 

## [Stage 5](stage5/README.md)

**Temario:**

- Demo donde se integran todos los componentes minimos necesarios para implementar SSI.
- Obtención de VC (issuer)
- Revocación de VC: frontend / backend
- Verificador de VC (verifier)
- Componentes de orquestación 
