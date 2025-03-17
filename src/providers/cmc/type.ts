import { CryptocurrencyOHLCVHistoricalIntervalQuoteObject, CryptocurrencyOHLCVHistoricalQuoteObject } from './_auto-generated/data-contracts';

export interface TopNOHLCVHistory {
  history: ({
    tianGanDiZhi: string;
  } & CryptocurrencyOHLCVHistoricalQuoteObject & Omit<CryptocurrencyOHLCVHistoricalIntervalQuoteObject, 'quote'>)[];
  slug: string;
  symbol: string;
  name: string;
}
