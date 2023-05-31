# Identificadores Descentralizados (DIDs)

Con la SSI, los titulares de la identidad individual crean y controlan completamente sus identidades, sin verse obligados a solicitar autorización de una autoridad intermediaria o centralizada. Esto les da control sobre cómo se comparten y usan sus datos personales. Las personas tienen un medio para generar y controlar identificadores únicos.


## Visión general del sistema

![](/resources/did_brief_architecture_overview.svg)

## DID

Los DID son un nuevo tipo de identificador que permite una identidad digital verificable y descentralizada. A diferencia de los identificadores federados típicos, los DID se han diseñado para que puedan desvincularse de los registros centralizados, los proveedores de identidad y las autoridades de certificación. Esto permite que el controlador de un DID tenga control sobre él sin requerir el permiso de ninguna otra parte. 

Esencialmente, los DID son identificadores únicos asociados a un sujeto. Un DID está definido totalmente por 3 partes:

* Scheme: Esta parte nos permite saber que lo que viene a continuación es un DID
* DID Method: Nos permite saber cómo interpretar el identificador que sigue, cuyo significado es específico para el DID Method. Dos identificadores iguales pero con DID Methods diferentes están identificando sujetos distintos.
* Identificador: La secuencia de caracteres única para ese DID Method, que nos permite tener identificar unívocamente al DID Document asociado.

![](/resources/parts-of-a-did.svg)

## DID Method

Existen múltiples formas de gestionar los DID, cada una de ellas tipificada en un DID Method particular. Los DID Methods son el mecanismo mediante el cual se crea, resuelve, actualiza y desactiva un tipo particular de DID y su DID Document asociado. 


## DID Documents

Los DID pueden resolverse a un DID Document asociado. Éste contiene toda información asociada a un DID. Por lo general, en estos expresan métodos de verificación, como claves públicas criptográficas y servicios relevantes para las interacciones con el sujeto del DID.


## DID Subjects

El sujeto de un DID (DID Subject) es la entidad identificada por el DID. Un DID Subject se refiere a cualquier sujeto, ya sea una persona, organización, cosa, modelo de datos, entidad abstracta, etc. El DID Subject es determinado por el DID Controller.


## DID Controllers

El controlador de un DID (o DID Controller) es la entidad (persona, organización o software autónomo) que tiene la capacidad, según lo define un DID Method, para realizar cambios en un documento DID. 

Esta capacidad generalmente se afirma mediante el control de un conjunto de claves criptográficas utilizadas por el software que actúa en nombre del controlador, aunque también se puede afirmar a través de otros mecanismos. 

Es importante tener en cuenta que un DID puede tener más de un controlador, y el sujeto DID puede ser el controlador DID o uno de ellos. Por ejemplo, un adulto podría ser el controlador de su propia identidad. En este caso, el DID Controller es el mismo que el DID Subject. Sin embargo, un niño podría ser el sujeto identificado por el DID, pero que su identidad sea controlada por un guardián hasta una determinada edad. En ese caso, el DID Subject sería el niño, mientras que el DID Controller sería el guardián.


## DID Resolvers

Un DID Resolver es un componente del sistema que toma un DID como entrada y produce un DID Document conforme como salida. Este proceso se denomina DID Resolution. Estos resolvers suelen suelen ser específicos a cada DID Method.

El componente [Modena](https://idportal.extrimian.com/) de Extrimian es un resolver que soporta múltiples DID Methods y nos permite anclar DIDs en varias blockchain, como Polygon, Ethereum, Starknet, RSK y zkSync. 


## Registros de Datos Verificables

Para que los DID se puedan resolver en DID Documents, éstos generalmente se registran en un sistema subyacente o en una red de algún tipo. Independientemente de la tecnología específica utilizada, cualquier sistema que admita el registro de DID y la devolución de los datos necesarios para producir documentos DID se denomina Verifiable Data Registries. Generalmente se usan sistemas de blockchain para registrar y resolver los DID.
