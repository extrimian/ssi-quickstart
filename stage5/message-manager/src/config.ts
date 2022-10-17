import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
  CREATE_DID_API_URL: process.env.CREATE_DID_API_URL || '',
  DWN_SCHEDULER_CRON_EXPRESSION:
    process.env.DWN_SCHEDULER_CRON_EXPRESSION || '*/10 * * * * *',
  RESOLVER_URL: process.env.RESOLVER_URL || '',
  DWN_URL: process.env.DWN_URL || '',
  VC_DATA_API_URL: process.env.VC_DATA_API_URL || '',
  VC_STATUS_API_URL: process.env.VC_STATUS_API_URL || '',
  PORT: Number(process.env.PORT) || 3500,
};
