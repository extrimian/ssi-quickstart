import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
  PORT: Number(process.env.PORT) || '3800',
  MONGO_URI: process.env.MONGO_URI || '',
  API_URL: process.env.API_URL || '',
  ISSUER: 'Random Country',
  CREDENTIAL_DESCRIPTION: 'Estado de credenciales de identidad para Gibraltar',
};
