# Extrimian SSI Quickstart

En este documento profundizaremos sobre SSI y las tecnologías sobre la cual se construye. Vamos a ver más de cerca cómo funcionan los distintos aspectos del sistema y se podrán hacer workshops técnicos guiados para ahondar más en el lado técnico del problema. Se utilizarán algunas de las herramientas desarrolladas por Extrimian, que permiten implementar un sistema SSI personalizado de manera simple.

## Introducción

La **Identidad Auto Soberana** (Self-Sovereign Identity o SSI en inglés) es un nuevo paradigma para la generación de confianza a través de internet que busca darle la capacidad de tener control total y exclusivo sobre su propia identidad en línea a las personas. En lugar de depender de terceros, como gobiernos o corporaciones, para gestionar y autenticar su identidad digital la SSI propone que los individuos sean los únicos propietarios y administradores de su información personal.

La idea central de la SSI es que cada individuo tenga la capacidad de poseer y controlar sus datos personales, decidiendo cuándo y con quién los comparte. Esto se logra mediante el uso de tres tecnologías fundamentales:
* Registros distribuidos, como blockchain
* Identificadores descentralizados (DIDs)
* Credenciales verificables (VCs). 

La Identidad Auto Soberana le permite a los individuos almacenar y administrar de manera segura su información personal, y compartir selectivamente partes de esta cuando sea necesario, sin la necesidad de revelar todos sus detalles.

Algunos de los principios clave de la Identidad Auto Soberana incluyen:


<table>
  <tr>
   <td><strong>Principio</strong>
   </td>
   <td><strong>Descripción</strong>
   </td>
  </tr>
  <tr>
   <td>Decentralización
   </td>
   <td>Elimina el requisito de autoridades centralizadas.
   </td>
  </tr>
  <tr>
   <td>Control
   </td>
   <td>Otorga a los individuos el poder de controlar directamente sus identificadores digitales sin la necesidad de depender de autoridades externas.
   </td>
  </tr>
  <tr>
   <td>Privacidad
   </td>
   <td>Permitir que laslas personas controlen la privacidad de su información, incluida la divulgación mínima, selectiva y progresiva de atributos u otros datos.
   </td>
  </tr>
  <tr>
   <td>Basada en pruebas
   </td>
   <td>Las interacciones entre entidades requieren el intercambio de pruebas criptográficas.
   </td>
  </tr>
  <tr>
   <td>Detectabilidad
   </td>
   <td>Las entidades pueden descubrirse entre sí para obtener más información o interactuar entre ellas.
   </td>
  </tr>
  <tr>
   <td>Interoperabilidad
   </td>
   <td>Los distintos sistemas de identidad utilizan estándares comunes para que puedan operar en conjunto y compartir información de manera simple.
   </td>
  </tr>
  <tr>
   <td>Portabilidad
   </td>
   <td>La identidad descentralizada es independiente del sistema y de la red. Esto permite que las entidades utilicen sus identificadores digitales con cualquier sistema que se adhiera a los estándares.
   </td>
  </tr>
  <tr>
   <td>Simplicidad
   </td>
   <td>Tecnología fácil de entender, implementar y desplegar.
   </td>
  </tr>
  <tr>
   <td>Extensibilidad
   </td>
   <td>Se busca permitir la expansión de los sistemas existentes mientras que no impide en gran medida la interoperabilidad, la portabilidad o la simplicidad.
   </td>
  </tr>
</table>


A continuación demostraremos cómo se ve este sistema en la práctica usando la plataforma de QuarkID, un protocolo SSI descentralizado, público, no permisionado, abierto, extensible, multi chain e interoperable desarrollado por Extrimian que está trayendo el mundo SSI a Latinoamérica.

[Demo QuarkID](https://drive.google.com/file/d/177-kzH8X_eYHwJdRik0kVRtbkE6vDph6/view?usp=share_link)

## Componentes
- [Identificadores Descentralizados (DIDs)](/docs/did.md)
- [Credenciales Verificables (VCs)](/docs/vc.md)
- [Interacciones](/docs/interactions.md)

## Workshops
### [Stage 1](stage1/README.md) 

**Temario:**

 - [Índice](stage1/README.md)
 - [Presentación](stage1/presentation.pdf)
 - [Que es un DID](stage1/what-is-did.md)
 - [Creación de un DID](stage1/create-did.md)
 - [Paquete Extrimian NPM](stage1/extrimian-packages.md)
 - [Workshop](stage1/workshop/did)
 - Ver [video](https://www.youtube.com/watch?v=WFlqVpqUtVo)
 

### [Stage 2](stage2/README.md) 

**Temario:**
- Descargar node-typescript-template
- Instalar paquetes de Extrimian
- Crear LONG DID
- Resolver Long DID
- Publicar Long DID
- Resolver DID Publicado
- [Workshop](stage2/README.md) 
- Ver [video](https://www.youtube.com/watch?v=MXvlFa-IuK4) 


### [Stage 3](stage3/README.md) 

**Temario:**

- Que es una Credencial Verificable?
- Presentación de una Credencial Verificable
- Flujo de Uso
- Generar Credencial
- Crear credencial utilizando VerifiableCredentialService
- Firmar Credencial
- Verificar VC
- [Workshop](stage3/vc-example) 
- Ver [Video](https://www.youtube.com/watch?v=RkE074tVj_k)

### [Stage 4](stage4/README.md) 

**Temario:**

- Interacción con el mundo exterior - DWN - DID Document - VC - WACI
- Service endpoints
- DWN Client NPM
- Inicializar DWN Client
- DWN Types
- Configurar el DWN para el Pulleo de mensajes
- DWN Send Message
- [Workshop](stage4/examples) 
- Ver [Video](https://www.youtube.com/watch?v=PbY2zhTuO9g) 

### [Stage 5](stage5/README.md)

**Temario:**

- Demo donde se integran todos los componentes minimos necesarios para implementar SSI.
- Obtención de VC (issuer)
- Revocación de VC: frontend / backend
- Verificador de VC (verifier)
- Componentes de orquestación 
- Ver [video](https://www.youtube.com/watch?v=ZA-neuIrThg)

