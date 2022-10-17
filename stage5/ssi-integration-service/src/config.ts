import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
  PORT: Number(process.env.PORT) || 3400,
  DEEPLINK_SCHEMA: process.env.DEEPLINK_SCHEMA || '',
  WACI_INVITATION_ENDPOINT_URL: process.env.WACI_INVITATION_ENDPOINT_URL || '',
  MONGO_URI: process.env.MONGO_URI || '',
  CITIZEN_DATA_API_URL: process.env.CITIZEN_DATA_API_URL || '',
};
