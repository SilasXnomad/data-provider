/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
  GetV3CryptocurrencyQuotesHistoricalData,
  GetV3FearandgreedHistoricalData,
  GetV3FearandgreedLatestData,
  HTTPStatus400ErrorObject,
  HTTPStatus401ErrorObject,
  HTTPStatus403ErrorObject,
  HTTPStatus429ErrorObject,
  HTTPStatus500ErrorObject,
} from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class V3<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Returns a paginated list of all CMC Crypto Fear and Greed values at 12am UTC time. **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - Basic - Startup - Hobbyist - Standard - Professional - Enterprise **Cache / Update frequency:** Every 15 seconds. **Plan credit use:** 1 API call credit per request no matter query size. **CMC equivalent pages:** Our CMC Crypto Fear and Greed Index card on https://coinmarketcap.com/charts/.
   *
   * @tags fear-and-greed
   * @name GetV3FearandgreedHistorical
   * @summary CMC Crypto Fear and Greed Historical
   * @request GET:/v3/fear-and-greed/historical
   * @response `200` `GetV3FearandgreedHistoricalData` Successful
   * @response `400` `HTTPStatus400ErrorObject` Bad Request
   * @response `401` `HTTPStatus401ErrorObject` Unauthorized
   * @response `403` `HTTPStatus403ErrorObject` Forbidden
   * @response `429` `HTTPStatus429ErrorObject` Too Many Requests
   * @response `500` `HTTPStatus500ErrorObject` Internal Server Error
   */
  getV3FearandgreedHistorical = (
    query?: {
      /**
       * Optionally offset the start (1-based index) of the paginated list of items to return.
       * @min 1
       * @default 1
       */
      start?: number;
      /**
       * Optionally specify the number of results to return. Use this parameter and the "start" parameter to determine your own pagination size.
       * @min 1
       * @max 500
       * @default 50
       */
      limit?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetV3FearandgreedHistoricalData,
      | HTTPStatus400ErrorObject
      | HTTPStatus401ErrorObject
      | HTTPStatus403ErrorObject
      | HTTPStatus429ErrorObject
      | HTTPStatus500ErrorObject
    >({
      path: `/v3/fear-and-greed/historical`,
      method: 'GET',
      query: query,
      ...params,
    });
  /**
   * @description Returns the lastest CMC Crypto Fear and Greed value. **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - Basic - Startup - Hobbyist - Standard - Professional - Enterprise **Cache / Update frequency:**  Every 15 minutes. **Plan credit use:** 1 call credit per request. **CMC equivalent pages:** Our CMC Crypto Fear and Greed Index card on https://coinmarketcap.com/charts/.
   *
   * @tags fear-and-greed
   * @name GetV3FearandgreedLatest
   * @summary CMC Crypto Fear and Greed Latest
   * @request GET:/v3/fear-and-greed/latest
   * @response `200` `GetV3FearandgreedLatestData` Successful
   * @response `400` `HTTPStatus400ErrorObject` Bad Request
   * @response `401` `HTTPStatus401ErrorObject` Unauthorized
   * @response `403` `HTTPStatus403ErrorObject` Forbidden
   * @response `429` `HTTPStatus429ErrorObject` Too Many Requests
   * @response `500` `HTTPStatus500ErrorObject` Internal Server Error
   */
  getV3FearandgreedLatest = (params: RequestParams = {}) =>
    this.request<
      GetV3FearandgreedLatestData,
      | HTTPStatus400ErrorObject
      | HTTPStatus401ErrorObject
      | HTTPStatus403ErrorObject
      | HTTPStatus429ErrorObject
      | HTTPStatus500ErrorObject
    >({
      path: `/v3/fear-and-greed/latest`,
      method: 'GET',
      ...params,
    });
  /**
   * @description Returns an interval of historic market quotes for any cryptocurrency based on time and interval parameters. **Please note**: This documentation relates to our updated V3 endpoint, which may be incompatible with our V1 versions. Documentation for deprecated endpoints can be found <a href="#tag/deprecated">here</a>.<br><br> **Technical Notes** - A historic quote for every "interval" period between your "time_start" and "time_end" will be returned. - If a "time_start" is not supplied, the "interval" will be applied in reverse from "time_end". - If "time_end" is not supplied, it defaults to the current time. - At each "interval" period, the historic quote that is closest in time to the requested time will be returned. - If no historic quotes are available in a given "interval" period up until the next interval period, it will be skipped. **Implementation Tips** - Want to get the last quote of each UTC day? Don't use "interval=daily" as that returns the first quote. Instead use "interval=24h" to repeat a specific timestamp search every 24 hours and pass ex. "time_start=2019-01-04T23:59:00.000Z" to query for the last record of each UTC day. - This endpoint supports requesting multiple cryptocurrencies in the same call. Please note the API response will be wrapped in an additional object in this case. **Interval Options** There are 2 types of time interval formats that may be used for "interval". The first are calendar year and time constants in UTC time: **"hourly"** - Get the first quote available at the beginning of each calendar hour. **"daily"** - Get the first quote available at the beginning of each calendar day. **"weekly"** - Get the first quote available at the beginning of each calendar week. **"monthly"** - Get the first quote available at the beginning of each calendar month. **"yearly"** - Get the first quote available at the beginning of each calendar year. The second are relative time intervals. **"m"**: Get the first quote available every "m" minutes (60 second intervals). Supported minutes are: "5m", "10m", "15m", "30m", "45m". **"h"**: Get the first quote available every "h" hours (3600 second intervals). Supported hour intervals are: "1h", "2h", "3h", "4h", "6h", "12h". **"d"**: Get the first quote available every "d" days (86400 second intervals). Supported day intervals are: "1d", "2d", "3d", "7d", "14d", "15d", "30d", "60d", "90d", "365d". **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - ~~Basic~~ - Hobbyist (1 month) - Startup (1 month) - Standard (3 month) - Professional (12 months) - Enterprise (Up to 6 years) **Cache / Update frequency:** Every 5 minutes. **Plan credit use:** 1 call credit per 100 historical data points returned (rounded up) and 1 call credit per `convert` option beyond the first. **CMC equivalent pages:** Our historical cryptocurrency charts like [coinmarketcap.com/currencies/bitcoin/#charts](https://coinmarketcap.com/currencies/bitcoin/#charts).
   *
   * @tags cryptocurrency
   * @name GetV3CryptocurrencyQuotesHistorical
   * @summary Quotes Historical v3
   * @request GET:/v3/cryptocurrency/quotes/historical
   * @response `200` `GetV3CryptocurrencyQuotesHistoricalData` Successful
   * @response `400` `HTTPStatus400ErrorObject` Bad Request
   * @response `401` `HTTPStatus401ErrorObject` Unauthorized
   * @response `403` `HTTPStatus403ErrorObject` Forbidden
   * @response `429` `HTTPStatus429ErrorObject` Too Many Requests
   * @response `500` `HTTPStatus500ErrorObject` Internal Server Error
   */
  getV3CryptocurrencyQuotesHistorical = (
    query?: {
      /**
       * One or more comma-separated CoinMarketCap cryptocurrency IDs. Example: "1,2"
       * @pattern ^\d+(?:,\d+)*$
       */
      id?: string;
      /**
       * Alternatively pass one or more comma-separated cryptocurrency symbols. Example: "BTC,ETH". At least one "id" *or* "symbol" is required for this request.
       * @pattern ^[0-9A-Za-z$@\-,]+(?:,[0-9A-Za-z$@\-]+)*$
       */
      symbol?: string;
      /** Timestamp (Unix or ISO 8601) to start returning quotes for. Optional, if not passed, we'll return quotes calculated in reverse from "time_end". */
      time_start?: string;
      /** Timestamp (Unix or ISO 8601) to stop returning quotes for (inclusive). Optional, if not passed, we'll default to the current time. If no "time_start" is passed, we return quotes in reverse order starting from this time. */
      time_end?: string;
      /**
       * The number of interval periods to return results for. Optional, required if both "time_start" and "time_end" aren't supplied. The default is 10 items. The current query limit is 10000.
       * @min 1
       * @max 10000
       * @default 10
       */
      count?: number;
      /**
       * Interval of time to return data points for. See details in endpoint description.
       * @default "5m"
       */
      interval?:
        | 'yearly'
        | 'monthly'
        | 'weekly'
        | 'daily'
        | 'hourly'
        | '5m'
        | '10m'
        | '15m'
        | '30m'
        | '45m'
        | '1h'
        | '2h'
        | '3h'
        | '4h'
        | '6h'
        | '12h'
        | '24h'
        | '1d'
        | '2d'
        | '3d'
        | '7d'
        | '14d'
        | '15d'
        | '30d'
        | '60d'
        | '90d'
        | '365d';
      /**
       * By default market quotes are returned in USD. Optionally calculate market quotes in up to 3 other fiat currencies or cryptocurrencies.
       * @pattern ^[0-9A-Za-z$@\-,]+(?:,[0-9A-Za-z$@\-]+)*$
       */
      convert?: string;
      /**
       * Optionally calculate market quotes by CoinMarketCap ID instead of symbol. This option is identical to `convert` outside of ID format. Ex: convert_id=1,2781 would replace convert=BTC,USD in your query. This parameter cannot be used when `convert` is used.
       * @pattern (^\d+(?:,\d+)*$|(\d,)*PLATFORM_ID+(?:,\d+)*$)
       */
      convert_id?: string;
      /**
       * Optionally specify a comma-separated list of supplemental data fields to return. Pass `price,volume,market_cap,circulating_supply,total_supply,quote_timestamp,is_active,is_fiat,search_interval` to include all auxiliary fields.
       * @default "price,volume,market_cap,circulating_supply,total_supply,quote_timestamp,is_active,is_fiat"
       * @pattern ^(price|volume|market_cap|circulating_supply|total_supply|quote_timestamp|is_active|is_fiat|search_interval)+(?:,(price|volume|market_cap|circulating_supply|total_supply|quote_timestamp|is_active|is_fiat|search_interval)+)*$
       */
      aux?: string;
      /**
       * Pass `true` to relax request validation rules. When requesting records on multiple cryptocurrencies an error is returned if no match is found for 1 or more requested cryptocurrencies. If set to true, invalid lookups will be skipped allowing valid cryptocurrencies to still be returned.
       * @default true
       */
      skip_invalid?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      GetV3CryptocurrencyQuotesHistoricalData,
      | HTTPStatus400ErrorObject
      | HTTPStatus401ErrorObject
      | HTTPStatus403ErrorObject
      | HTTPStatus429ErrorObject
      | HTTPStatus500ErrorObject
    >({
      path: `/v3/cryptocurrency/quotes/historical`,
      method: 'GET',
      query: query,
      ...params,
    });
}
