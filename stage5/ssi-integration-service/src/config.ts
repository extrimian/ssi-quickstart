import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
  DEEPLINK_SCHEMA: process.env.DEEPLINK_SCHEMA || '',
  WACI_INVITATION_ENDPOINT_URL: process.env.WACI_INVITATION_ENDPOINT_URL || '',
  MONGO_URI: process.env.MONGO_URI || '',
  PORT: Number(process.env.PORT) || 3400,
};
