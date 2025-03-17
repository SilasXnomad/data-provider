import { CMCApi } from './providers/cmc';
import fs from 'fs';

async function start() {
  const api = new CMCApi();
  const res = await api.getTopNOHLCVHistory();
  // write to file
  fs.writeFileSync('debug/cmc.json', JSON.stringify(res));
  return res;
}

start().catch(console.error);
