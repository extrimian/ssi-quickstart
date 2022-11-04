Demo Integracion SSI
========================

La demo Integracion SSI es una aplicacion de referencia que implementa los componenes minimo necesarios para cerrar un circuito de implemntacion de identidad auto soberana.

Implementa:

- Obtención de VC (issuer)
- Revocación de VC: frontend / backend
- Verificador de VC (verifier)
- Componentes de orquestación 

Pre-requisitos
------------

  * Docker
  * docker-compose 

Instalacion
-----------

Clonar el repositorio

```bash
git clone https://github.com/extrimian/ssi-quickstart.git
```


Ir al directorio del stage5

```bash
cd ssi-quickstart/stage5/
```

```bash
docker-compose up -d
```
