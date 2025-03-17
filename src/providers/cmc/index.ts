import {
  CryptocurrencyListingsLatestCryptocurrencyObject2,
  CryptocurrencyOHLCVLatestCryptocurrencyObject,
  GetV1CryptocurrencyListingsLatestData,
} from './_auto-generated/data-contracts';
import { V2 as HttpClient } from './_auto-generated/V2';
import { V1 as V1HttpClient } from './_auto-generated/V1';
import { CMC_API_KEY, HTTP_PROXY } from '../../env';
import { HttpsProxyAgent } from 'https-proxy-agent';
import { LOGGER } from '../../vars';
import winston from 'winston';
import { TopNOHLCVHistory } from './type';
import { Lunar } from 'lunar-typescript';

const httpsAgent = new HttpsProxyAgent(HTTP_PROXY);

export class CMCApi {
  private client: HttpClient = new HttpClient({
    headers: {
      'X-CMC_PRO_API_KEY': CMC_API_KEY,
      'Content-Type': 'application/json',
    },
    httpsAgent: HTTP_PROXY ? httpsAgent : undefined,
  });

  private v1Client: V1HttpClient = new V1HttpClient({
    headers: {
      'X-CMC_PRO_API_KEY': CMC_API_KEY,
      'Content-Type': 'application/json',
    },
    httpsAgent: HTTP_PROXY ? httpsAgent : undefined,
  });

  private logger: winston.Logger;

  constructor() {
    this.logger = LOGGER.child({ module: 'CMCApi' });
  }

  async getCurrencyOHLCVHistory(slug: string): Promise<CryptocurrencyOHLCVLatestCryptocurrencyObject[]> {
    const monthSep = 60;
    // 5 years ago
    const date = new Date();
    date.setMonth(date.getMonth() - monthSep + 1);

    const res = await this.client.getV2CryptocurrencyOhlcvHistorical({
      slug,
      time_period: 'daily',
      time_start: date.toISOString().split('T')[0],
      time_end: new Date().toISOString().split('T')[0],
    });
    return res.data.quotes;
  }

  async getTopCurrencyList(topN: number): Promise<CryptocurrencyListingsLatestCryptocurrencyObject2[]> {
    const res = await this.v1Client.getV1CryptocurrencyListingsLatest({
      limit: topN,
      sort_dir: 'desc',
    });
    return res.data;
  }

  async getTopNOHLCVHistory(topN: number = 20): Promise<TopNOHLCVHistory[]> {
    const topList = await this.getTopCurrencyList(topN);
    const promises = topList.map(async (currency) => {
      this.logger.debug(`Getting OHLCV history for ${currency.symbol}`);

      const history = await this.getCurrencyOHLCVHistory(currency.slug);
      const newHistory = history.map((quote) => {
        const lunar = Lunar.fromDate(new Date(quote['time_open']));
        const tianGanDiZhi = `${lunar.getYearInGanZhi()}年${lunar.getMonthInGanZhi()}月${lunar.getDayInGanZhi()}日`;
        return {
          ...quote.quote['USD'],
          tianGanDiZhi,
          time_open: quote.time_open,
          time_close: quote.time_close,
          time_high: quote.time_high,
          time_low: quote.time_low,
        };
      });

      return { slug: currency.slug, history: newHistory, symbol: currency.symbol, name: currency.name };
    });

    const ret: TopNOHLCVHistory[] = [];
    // one by one to avoid rate limit
    for (let i = 0; i < promises.length; i++) {
      const promise = promises[i];
      if (i % 10 === 0) {
        this.logger.debug(`Waiting for ${i} promises to resolve`);
      }
      ret.push(await promise);
      // sleep 1s
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    this.logger.debug(`End getting OHLCV history for top ${topN} currencies`);
    return ret;
  }
}
