# Gibraltar Portal Mock

This is an app created to simulate Gibraltar Portal where the citizens can access to obtain their Personal Id and GHA verifiable credentials. 
This app needs **gib-message-manager** and **gib-ssi-integration** to be runing at the same time to work.

# Set Up

```bash
git clone git@github.com:extrimian/gib-portal-mock.git
git checkout master
yarn
yarn start
```

# Env Variables

Set `.env` file at proyect root with the following variables:

- **REACT_APP_SSI_INTEGRATION_SERVICE_URL**=http://localhost:3400
- **REACT_APP_VERIFIER_APP_URL**=http://localhost:4000

# Docker-compose example

```ts
version: "3"
services:
  message-manager:
    image: extrimianpublic.azurecr.io/gib-message-manager:1.0.0
    ports:
      - "3500:3500"
  ssi-integration:
    image: extrimianpublic.azurecr.io/gib-ssi-integration:1.0.0
    ports:
      - "3400:3400"
  portal-mock:
    image: extrimianpublic.azurecr.io/gib-portal-mock:1.0.0
    ports:
      - "3300:3300"
    environment:
      - REACT_APP_SSI_INTEGRATION_SERVICE_URL=http://ssi-integration:3400
      - PORT=3300
  ```
