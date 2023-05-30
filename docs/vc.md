# Credenciales Verificables

Las credenciales verificables (o VCs) son la versión digital de los documentos físicos que usan personas, negocios y organizaciones para identificarse. Las VCs funcionan de una manera muy análoga a los documentos, pero ofrecen algunas ventajas muy importantes.

En el mundo físico, una credencial puede consistir en:



* Información relacionada con la identificación del sujeto de la credencial (por ejemplo, una foto, nombre o número de identificación) \
Información relacionada con la autoridad emisora ​​(por ejemplo, un gobierno de la ciudad, una agencia nacional o un organismo de certificación)
* Información relacionada con el tipo de credencial que se trata (por ejemplo, un pasaporte holandés, una licencia de conducir estadounidense o una tarjeta de seguro médico)
* Información relacionada con atributos o propiedades específicas que afirma la autoridad emisora ​​sobre el tema (por ejemplo, nacionalidad, las clases de vehículos con derecho a conducir o fecha de nacimiento)
* Evidencia relacionada con cómo se obtuvo la credencial
* Información relacionada con las restricciones de la credencial (por ejemplo, fecha de vencimiento o términos de uso). \


Una credencial verificable **puede representar toda la misma información que representa una credencial física**. La adición de tecnologías, como las firmas digitales, hace que las credenciales verificables sean más evidentes y más confiables que sus contrapartes físicas.

La palabra "verificable" se refiere a la característica de una credencial o presentación de poder ser verificada por un verificador. La verificabilidad de una credencial **no implica que se pueda evaluar la veracidad de las afirmaciones codificadas en ella**. Sin embargo, el emisor puede incluir valores en la propiedad de evidencia para ayudar al verificador a aplicar su lógica de negocios para determinar si los reclamos tienen suficiente veracidad para sus necesidades. Estas verificaciones se efectúan de manera programática y con mucha más certeza que su análogo físico.


## Presentaciones Verificables

Las presentaciones verificables son datos derivados de una o más credenciales verificables, emitidas por uno o más emisores, que se comparten con un verificador específico. Una presentación verificable es una presentación a prueba de manipulaciones codificada de tal manera que se puede confiar en la autoría de los datos después de un proceso de verificación criptográfica. 

A la hora de generar una presentación verificable nos encontramos con otra ventaja importantísima: la posibilidad de hacer divulgación selectiva y pruebas de conocimiento cero. Las pruebas de conocimiento cero son un mecanismo que nos permite probar que cumplimos un determinado requisito sin revelar nuestros datos. Podemos generar una prueba de conocimiento cero utilizando datos sintetizados a partir de las VCs originales, pero sin contener los datos en sí. Por otro lado, la divulgación selectiva nos permite mostrar los datos mínimos e indispensables para demostrar que cumplimos con alguna condición.


## Tipos de agente

En un intercambio de credenciales tenemos 3 tipos de agentes fundamentales:

* Emisor: Quien emite una VC luego de recibir pruebas por parte del portador
* Portador: Quien porta y administra las VCs en su Billetera Digital y la presenta para validar su identidad
* Verificador: Quien verifica la credencial presentada para validar la identidad del portador

Lo interesante de este modelo es que las interacciones _dentro_ del triángulo revelan la cantidad mínima de información, mientras que no se revela nada de información a agentes _fuera_ del triángulo.

![](/resources/toip_model.png)

_Fuente: Trust Over IP_


## Flujo de uso

A continuación podemos ver un flujo de emisión y presentación completo, donde se emplean distintos métodos de presentación. Podemos ver cómo un portador puede generar presentaciones distintas dependiendo de la ocasión, siempre basándose en las mismas credenciales subyacentes.

![](/resources/vc-flow.png)

