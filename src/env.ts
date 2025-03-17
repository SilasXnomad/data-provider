import 'dotenv/config';

export const LOG_LEVEL = process.env.LOG_LEVEL || 'info';

export const CMC_API_KEY = process.env.CMC_API_KEY;

export const HTTP_PROXY = process.env.HTTP_PROXY || process.env.https_proxy || process.env.HTTPS_PROXY;
process.env.https_proxy = undefined;
process.env.HTTPS_PROXY = undefined;

function checkEnv() {
  if (!CMC_API_KEY) {
    throw new Error('CMC_API_KEY is not set in environment variables');
  }
}

checkEnv();
