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
  CryptocurrenciesInfoResponseModel,
  CryptocurrencyMarketPairsLatestResponseModel,
  CryptocurrencyOHLCVHistoricalResponseModel,
  CryptocurrencyOHLCVLatestResponseModel,
  CryptocurrencyPricePerformanceStatsLatestResponseModel,
  CryptocurrencyQuotesHistoricalResponseModel,
  CryptocurrencyQuotesLatestResponseModel,
  ToolsPriceConversionResponseModel,
} from './data-contracts';

export namespace V2 {
  /**
   * @description Returns all static metadata available for one or more cryptocurrencies. This information includes details like logo, description, official website URL, social links, and links to a cryptocurrency's technical documentation. **Please note**: This documentation relates to our updated V2 endpoint, which may be incompatible with our V1 versions. Documentation for deprecated endpoints can be found <a href="#tag/deprecated">here</a>.<br><br> **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - Basic - Startup - Hobbyist - Standard - Professional - Enterprise **Cache / Update frequency:** Static data is updated only as needed, every 30 seconds. **Plan credit use:** 1 call credit per 100 cryptocurrencies returned (rounded up). **CMC equivalent pages:** Cryptocurrency detail page metadata like [coinmarketcap.com/currencies/bitcoin/](https://coinmarketcap.com/currencies/bitcoin/).
   * @tags cryptocurrency
   * @name GetV2CryptocurrencyInfo
   * @summary Metadata v2
   * @request GET:/v2/cryptocurrency/info
   */
  export namespace GetV2CryptocurrencyInfo {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * One or more comma-separated CoinMarketCap cryptocurrency IDs. Example: "1,2"
       * @pattern ^\d+(?:,\d+)*$
       */
      id?: string;
      /**
       * Alternatively pass a comma-separated list of cryptocurrency slugs. Example: "bitcoin,ethereum"
       * @pattern ^[0-9a-z-]+(?:,[0-9a-z-]+)*$
       */
      slug?: string;
      /**
       * Alternatively pass one or more comma-separated cryptocurrency symbols. Example: "BTC,ETH". At least one "id" *or* "slug" *or* "symbol" is required for this request. Please note that starting in the v2 endpoint, due to the fact that a symbol is not unique, if you request by symbol each data response will contain an array of objects containing all of the coins that use each requested symbol. The v1 endpoint will still return a single object, the highest ranked coin using that symbol.
       * @pattern ^[0-9A-Za-z$@\-,]+(?:,[0-9A-Za-z$@\-]+)*$
       */
      symbol?: string;
      /** Alternatively pass in a contract address. Example: "0xc40af1e4fecfa05ce6bab79dcd8b373d2e436c4e" */
      address?: string;
      /**
       * Pass `true` to relax request validation rules. When requesting records on multiple cryptocurrencies an error is returned if any invalid cryptocurrencies are requested or a cryptocurrency does not have matching records in the requested timeframe. If set to true, invalid lookups will be skipped allowing valid cryptocurrencies to still be returned.
       * @default false
       */
      skip_invalid?: boolean;
      /**
       * Optionally specify a comma-separated list of supplemental data fields to return. Pass `urls,logo,description,tags,platform,date_added,notice,status` to include all auxiliary fields.
       * @default "urls,logo,description,tags,platform,date_added,notice"
       * @pattern ^(urls|logo|description|tags|platform|date_added|notice|status)+(?:,(urls|logo|description|tags|platform|date_added|notice|status)+)*$
       */
      aux?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CryptocurrenciesInfoResponseModel;
  }

  /**
   * @description Convert an amount of one cryptocurrency or fiat currency into one or more different currencies utilizing the latest market rate for each currency. You may optionally pass a historical timestamp as `time` to convert values based on historical rates (as your API plan supports). **Please note**: This documentation relates to our updated V2 endpoint, which may be incompatible with our V1 versions. Documentation for deprecated endpoints can be found <a href="#tag/deprecated">here</a>.<br><br> **Technical Notes** - Latest market rate conversions are accurate to 1 minute of specificity. Historical conversions are accurate to 1 minute of specificity outside of non-USD fiat conversions which have 5 minute specificity. - You may reference a current list of all supported cryptocurrencies via the <a href="/api/v1/#section/Standards-and-Conventions" target="_blank">cryptocurrency/map</a> endpoint. This endpoint also returns the supported date ranges for historical conversions via the `first_historical_data` and `last_historical_data` properties. - Conversions are supported in 93 different fiat currencies and 4 precious metals <a href="/api/v1/#section/Standards-and-Conventions" target="_blank">as outlined here</a>. Historical fiat conversions are supported as far back as 2013-04-28. - A `last_updated` timestamp is included for both your source currency and each conversion currency. This is the timestamp of the closest market rate record referenced for each currency during the conversion. **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - Basic (Latest market price conversions) - Hobbyist (Latest market price conversions + 1 month historical) - Startup (Latest market price conversions + 1 month historical) - Standard (Latest market price conversions + 3 months historical) - Professional (Latest market price conversions + 12 months historical) - Enterprise (Latest market price conversions + up to 6 years historical) **Cache / Update frequency:** Every 60 seconds for the lastest cryptocurrency and fiat currency rates. **Plan credit use:** 1 call credit per call and 1 call credit per `convert` option beyond the first. **CMC equivalent pages:** Our cryptocurrency conversion page at [coinmarketcap.com/converter/](https://coinmarketcap.com/converter/).
   * @tags tools
   * @name GetV2ToolsPriceconversion
   * @summary Price Conversion v2
   * @request GET:/v2/tools/price-conversion
   */
  export namespace GetV2ToolsPriceconversion {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * An amount of currency to convert. Example: 10.43
       * @min 1e-8
       * @max 1000000000000
       */
      amount: number;
      /**
       * The CoinMarketCap currency ID of the base cryptocurrency or fiat to convert from. Example: "1"
       * @pattern ^\d*$
       */
      id?: string;
      /**
       * Alternatively the currency symbol of the base cryptocurrency or fiat to convert from. Example: "BTC". One "id" *or* "symbol" is required. Please note that starting in the v2 endpoint, due to the fact that a symbol is not unique, if you request by symbol each quote response will contain an array of objects containing all of the coins that use each requested symbol. The v1 endpoint will still return a single object, the highest ranked coin using that symbol.
       * @pattern ^[0-9A-Za-z$@\-]*$
       */
      symbol?: string;
      /** Optional timestamp (Unix or ISO 8601) to reference historical pricing during conversion. If not passed, the current time will be used. If passed, we'll reference the closest historic values available for this conversion. */
      time?: string;
      /**
       * Pass up to 120 comma-separated fiat or cryptocurrency symbols to convert the source amount to.
       * @pattern ^[0-9A-Za-z$@\-,]+(?:,[0-9A-Za-z$@\-]+)*$
       */
      convert?: string;
      /**
       * Optionally calculate market quotes by CoinMarketCap ID instead of symbol. This option is identical to `convert` outside of ID format. Ex: convert_id=1,2781 would replace convert=BTC,USD in your query. This parameter cannot be used when `convert` is used.
       * @pattern ^\d+(?:,\d+)*$
       */
      convert_id?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ToolsPriceConversionResponseModel;
  }

  /**
   * @description Lists all active market pairs that CoinMarketCap tracks for a given cryptocurrency or fiat currency. All markets with this currency as the pair base *or* pair quote will be returned. The latest price and volume information is returned for each market. Use the "convert" option to return market values in multiple fiat and cryptocurrency conversions in the same call. **Please note**: This documentation relates to our updated V2 endpoint, which may be incompatible with our V1 versions. Documentation for deprecated endpoints can be found <a href="#tag/deprecated">here</a>.<br><br> **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - ~~Basic~~ - ~~Hobbyist~~ - ~~Startup~~ - Standard - Professional - Enterprise **Cache / Update frequency:** Every 1 minute. **Plan credit use:** 1 call credit per 100 market pairs returned (rounded up) and 1 call credit per `convert` option beyond the first. **CMC equivalent pages:** Our active cryptocurrency markets pages like [coinmarketcap.com/currencies/bitcoin/#markets](https://coinmarketcap.com/currencies/bitcoin/#markets).
   * @tags cryptocurrency
   * @name GetV2CryptocurrencyMarketpairsLatest
   * @summary Market Pairs Latest v2
   * @request GET:/v2/cryptocurrency/market-pairs/latest
   */
  export namespace GetV2CryptocurrencyMarketpairsLatest {
    export type RequestParams = {};
    export type RequestQuery = {
      /** A cryptocurrency or fiat currency by CoinMarketCap ID to list market pairs for. Example: "1" */
      id?: string;
      /**
       * Alternatively pass a cryptocurrency by slug. Example: "bitcoin"
       * @pattern ^[0-9a-z-]*$
       */
      slug?: string;
      /**
       * Alternatively pass a cryptocurrency by symbol. Fiat currencies are not supported by this field. Example: "BTC". A single cryptocurrency "id", "slug", *or* "symbol" is required.
       * @pattern ^[0-9A-Za-z$@\-]*$
       */
      symbol?: string;
      /**
       * Optionally offset the start (1-based index) of the paginated list of items to return.
       * @min 1
       * @default 1
       */
      start?: number;
      /**
       * Optionally specify the number of results to return. Use this parameter and the "start" parameter to determine your own pagination size.
       * @min 1
       * @max 5000
       * @default 100
       */
      limit?: number;
      /**
       * Optionally specify the sort direction of markets returned.
       * @default "desc"
       */
      sort_dir?: 'asc' | 'desc';
      /**
       * Optionally specify the sort order of markets returned. By default we return a strict sort on 24 hour reported volume. Pass `cmc_rank` to return a CMC methodology based sort where markets with excluded volumes are returned last.
       * @default "volume_24h_strict"
       */
      sort?:
        | 'volume_24h_strict'
        | 'cmc_rank'
        | 'cmc_rank_advanced'
        | 'effective_liquidity'
        | 'market_score'
        | 'market_reputation';
      /**
       * Optionally specify a comma-separated list of supplemental data fields to return. Pass `num_market_pairs,category,fee_type,market_url,currency_name,currency_slug,price_quote,notice,cmc_rank,effective_liquidity,market_score,market_reputation` to include all auxiliary fields.
       * @default "num_market_pairs,category,fee_type"
       * @pattern ^(num_market_pairs|category|fee_type|market_url|currency_name|currency_slug|price_quote|notice|cmc_rank|effective_liquidity|market_score|market_reputation)+(?:,(num_market_pairs|category|fee_type|market_url|currency_name|currency_slug|price_quote|notice|cmc_rank|effective_liquidity|market_score|market_reputation)+)*$
       */
      aux?: string;
      /**
       * Optionally include one or more fiat or cryptocurrency IDs to filter market pairs by. For example `?id=1&matched_id=2781` would only return BTC markets that matched: "BTC/USD" or "USD/BTC". This parameter cannot be used when `matched_symbol` is used.
       * @pattern ^\d+(?:,\d+)*$
       */
      matched_id?: string;
      /**
       * Optionally include one or more fiat or cryptocurrency symbols to filter market pairs by. For example `?symbol=BTC&matched_symbol=USD` would only return BTC markets that matched: "BTC/USD" or "USD/BTC". This parameter cannot be used when `matched_id` is used.
       * @pattern ^[0-9A-Za-z$@\-,]+(?:,[0-9A-Za-z$@\-]+)*$
       */
      matched_symbol?: string;
      /**
       * The category of trading this market falls under. Spot markets are the most common but options include derivatives and OTC.
       * @default "all"
       */
      category?: 'all' | 'spot' | 'derivatives' | 'otc' | 'perpetual';
      /**
       * The fee type the exchange enforces for this market.
       * @default "all"
       */
      fee_type?: 'all' | 'percentage' | 'no-fees' | 'transactional-mining' | 'unknown';
      /**
       * Optionally calculate market quotes in up to 120 currencies at once by passing a comma-separated list of cryptocurrency or fiat currency symbols. Each additional convert option beyond the first requires an additional call credit. A list of supported fiat options can be found [here](#section/Standards-and-Conventions). Each conversion is returned in its own "quote" object.
       * @pattern ^[0-9A-Za-z$@\-,]+(?:,[0-9A-Za-z$@\-]+)*$
       */
      convert?: string;
      /**
       * Optionally calculate market quotes by CoinMarketCap ID instead of symbol. This option is identical to `convert` outside of ID format. Ex: convert_id=1,2781 would replace convert=BTC,USD in your query. This parameter cannot be used when `convert` is used.
       * @pattern ^\d+(?:,\d+)*$
       */
      convert_id?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CryptocurrencyMarketPairsLatestResponseModel;
  }

  /**
   * @description Returns historical OHLCV (Open, High, Low, Close, Volume) data along with market cap for any cryptocurrency using time interval parameters. Currently daily and hourly OHLCV periods are supported. Volume is not currently supported for hourly OHLCV intervals before 2020-09-22. **Please note**: This documentation relates to our updated V2 endpoint, which may be incompatible with our V1 versions. Documentation for deprecated endpoints can be found <a href="#tag/deprecated">here</a>.<br><br> **Technical Notes** - Only the date portion of the timestamp is used for daily OHLCV so it's recommended to send an ISO date format like "2018-09-19" without time for this "time_period". - One OHLCV quote will be returned for every "time_period" between your "time_start" (exclusive) and "time_end" (inclusive). - If a "time_start" is not supplied, the "time_period" will be calculated in reverse from "time_end" using the "count" parameter which defaults to 10 results. - If "time_end" is not supplied, it defaults to the current time. - If you don't need every "time_period" between your dates you may adjust the frequency that "time_period" is sampled using the "interval" parameter. For example with "time_period" set to "daily" you may set "interval" to "2d" to get the daily OHLCV for every other day. You could set "interval" to "monthly" to get the first daily OHLCV for each month, or set it to "yearly" to get the daily OHLCV value against the same date every year. **Implementation Tips** - If querying for a specific OHLCV date your "time_start" should specify a timestamp of 1 interval prior as "time_start" is an exclusive time parameter (as opposed to "time_end" which is inclusive to the search). This means that when you pass a "time_start" results will be returned for the *next* complete "time_period". For example, if you are querying for a daily OHLCV datapoint for 2018-11-30 your "time_start" should be "2018-11-29". - If only specifying a "count" parameter to return latest OHLCV periods, your "count" should be 1 number higher than the number of results you expect to receive. "Count" defines the number of "time_period" intervals queried, *not* the number of results to return, and this includes the currently active time period which is incomplete when working backwards from current time. For example, if you want the last daily OHLCV value available simply pass "count=2" to skip the incomplete active time period. - This endpoint supports requesting multiple cryptocurrencies in the same call. Please note the API response will be wrapped in an additional object in this case. **Interval Options** There are 2 types of time interval formats that may be used for "time_period" and "interval" parameters. For "time_period" these return aggregate OHLCV data from the beginning to end of each interval period. Apply these time intervals to "interval" to adjust how frequently "time_period" is sampled. The first are calendar year and time constants in UTC time: **"hourly"** - Hour intervals in UTC. **"daily"** - Calendar day intervals for each UTC day. **"weekly"** - Calendar week intervals for each calendar week. **"monthly"** - Calendar month intervals for each calendar month. **"yearly"** - Calendar year intervals for each calendar year. The second are relative time intervals. **"h"**: Get the first quote available every "h" hours (3600 second intervals). Supported hour intervals are: "1h", "2h", "3h", "4h", "6h", "12h". **"d"**: Time periods that repeat every "d" days (86400 second intervals). Supported day intervals are: "1d", "2d", "3d", "7d", "14d", "15d", "30d", "60d", "90d", "365d". Please note that "time_period" currently supports the "daily" and "hourly" options. "interval" supports all interval options. **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - ~~Basic~~ - ~~Hobbyist~~ - Startup (1 month) - Standard (3 months) - Professional (12 months) - Enterprise (Up to 6 years) **Cache / Update frequency:** Latest Daily OHLCV record is available ~5 to ~10 minutes after each midnight UTC. The latest hourly OHLCV record is available 5 minutes after each UTC hour. **Plan credit use:** 1 call credit per 100 OHLCV data points returned (rounded up) and 1 call credit per `convert` option beyond the first. **CMC equivalent pages:** Our historical cryptocurrency data pages like [coinmarketcap.com/currencies/bitcoin/historical-data/](https://coinmarketcap.com/currencies/bitcoin/historical-data/).
   * @tags cryptocurrency
   * @name GetV2CryptocurrencyOhlcvHistorical
   * @summary OHLCV Historical v2
   * @request GET:/v2/cryptocurrency/ohlcv/historical
   */
  export namespace GetV2CryptocurrencyOhlcvHistorical {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * One or more comma-separated CoinMarketCap cryptocurrency IDs. Example: "1,1027"
       * @pattern ^\d+(?:,\d+)*$
       */
      id?: string;
      /**
       * Alternatively pass a comma-separated list of cryptocurrency slugs. Example: "bitcoin,ethereum"
       * @pattern ^[0-9a-z-]+(?:,[0-9a-z-]+)*$
       */
      slug?: string;
      /**
       * Alternatively pass one or more comma-separated cryptocurrency symbols. Example: "BTC,ETH". At least one "id" *or* "slug" *or* "symbol" is required for this request.
       * @pattern ^[0-9A-Za-z$@\-,]+(?:,[0-9A-Za-z$@\-]+)*$
       */
      symbol?: string;
      /**
       * Time period to return OHLCV data for. The default is "daily". If hourly, the open will be 01:00 and the close will be 01:59. If daily, the open will be 00:00:00 for the day and close will be 23:59:99 for the same day. See the main endpoint description for details.
       * @default "daily"
       */
      time_period?: 'daily' | 'hourly';
      /** Timestamp (Unix or ISO 8601) to start returning OHLCV time periods for. Only the date portion of the timestamp is used for daily OHLCV so it's recommended to send an ISO date format like "2018-09-19" without time. */
      time_start?: string;
      /** Timestamp (Unix or ISO 8601) to stop returning OHLCV time periods for (inclusive). Optional, if not passed we'll default to the current time. Only the date portion of the timestamp is used for daily OHLCV so it's recommended to send an ISO date format like "2018-09-19" without time. */
      time_end?: string;
      /**
       * Optionally limit the number of time periods to return results for. The default is 10 items. The current query limit is 10000 items.
       * @min 1
       * @max 10000
       * @default 10
       */
      count?: number;
      /**
       * Optionally adjust the interval that "time_period" is sampled. For example with interval=monthly&time_period=daily you will see a daily OHLCV record for January, February, March and so on. See main endpoint description for available options.
       * @default "daily"
       */
      interval?:
        | 'hourly'
        | 'daily'
        | 'weekly'
        | 'monthly'
        | 'yearly'
        | '1h'
        | '2h'
        | '3h'
        | '4h'
        | '6h'
        | '12h'
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
       * By default market quotes are returned in USD. Optionally calculate market quotes in up to 3 fiat currencies or cryptocurrencies.
       * @pattern ^[0-9A-Za-z$@\-,]+(?:,[0-9A-Za-z$@\-]+)*$
       */
      convert?: string;
      /**
       * Optionally calculate market quotes by CoinMarketCap ID instead of symbol. This option is identical to `convert` outside of ID format. Ex: convert_id=1,2781 would replace convert=BTC,USD in your query. This parameter cannot be used when `convert` is used.
       * @pattern ^\d+(?:,\d+)*$
       */
      convert_id?: string;
      /**
       * Pass `true` to relax request validation rules. When requesting records on multiple cryptocurrencies an error is returned if any invalid cryptocurrencies are requested or a cryptocurrency does not have matching records in the requested timeframe. If set to true, invalid lookups will be skipped allowing valid cryptocurrencies to still be returned.
       * @default true
       */
      skip_invalid?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CryptocurrencyOHLCVHistoricalResponseModel;
  }

  /**
   * @description Returns the latest OHLCV (Open, High, Low, Close, Volume) market values for one or more cryptocurrencies for the current UTC day. Since the current UTC day is still active these values are updated frequently. You can find the final calculated OHLCV values for the last completed UTC day along with all historic days using /cryptocurrency/ohlcv/historical. **Please note**: This documentation relates to our updated V2 endpoint, which may be incompatible with our V1 versions. Documentation for deprecated endpoints can be found <a href="#tag/deprecated">here</a>.<br><br> **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - ~~Basic~~ - ~~Hobbyist~~ - Startup - Standard - Professional - Enterprise **Cache / Update frequency:** Every 10 minutes. Additional OHLCV intervals and 1 minute updates will be available in the future. **Plan credit use:** 1 call credit per 100 OHLCV values returned (rounded up) and 1 call credit per `convert` option beyond the first. **CMC equivalent pages:** No equivalent, this data is only available via API.
   * @tags cryptocurrency
   * @name GetV2CryptocurrencyOhlcvLatest
   * @summary OHLCV Latest v2
   * @request GET:/v2/cryptocurrency/ohlcv/latest
   */
  export namespace GetV2CryptocurrencyOhlcvLatest {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * One or more comma-separated cryptocurrency CoinMarketCap IDs. Example: 1,2
       * @pattern ^\d+(?:,\d+)*$
       */
      id?: string;
      /**
       * Alternatively pass one or more comma-separated cryptocurrency symbols. Example: "BTC,ETH". At least one "id" *or* "symbol" is required.
       * @pattern ^[0-9A-Za-z$@\-,]+(?:,[0-9A-Za-z$@\-]+)*$
       */
      symbol?: string;
      /**
       * Optionally calculate market quotes in up to 120 currencies at once by passing a comma-separated list of cryptocurrency or fiat currency symbols. Each additional convert option beyond the first requires an additional call credit. A list of supported fiat options can be found [here](#section/Standards-and-Conventions). Each conversion is returned in its own "quote" object.
       * @pattern ^[0-9A-Za-z$@\-,]+(?:,[0-9A-Za-z$@\-]+)*$
       */
      convert?: string;
      /**
       * Optionally calculate market quotes by CoinMarketCap ID instead of symbol. This option is identical to `convert` outside of ID format. Ex: convert_id=1,2781 would replace convert=BTC,USD in your query. This parameter cannot be used when `convert` is used.
       * @pattern ^\d+(?:,\d+)*$
       */
      convert_id?: string;
      /**
       * Pass `true` to relax request validation rules. When requesting records on multiple cryptocurrencies an error is returned if any invalid cryptocurrencies are requested or a cryptocurrency does not have matching records in the requested timeframe. If set to true, invalid lookups will be skipped allowing valid cryptocurrencies to still be returned.
       * @default true
       */
      skip_invalid?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CryptocurrencyOHLCVLatestResponseModel;
  }

  /**
   * @description Returns price performance statistics for one or more cryptocurrencies including launch price ROI and all-time high / all-time low. Stats are returned for an `all_time` period by default. UTC `yesterday` and a number of *rolling time periods* may be requested using the `time_period` parameter. Utilize the `convert` parameter to translate values into multiple fiats or cryptocurrencies using historical rates. **Please note**: This documentation relates to our updated V2 endpoint, which may be incompatible with our V1 versions. Documentation for deprecated endpoints can be found <a href="#tag/deprecated">here</a>.<br><br> **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - ~~Basic~~ - ~~Hobbyist~~ - Startup - Standard - Professional - Enterprise **Cache / Update frequency:** Every 60 seconds. **Plan credit use:** 1 call credit per 100 cryptocurrencies returned (rounded up) and 1 call credit per `convert` option beyond the first. **CMC equivalent pages:** The statistics module displayed on cryptocurrency pages like [Bitcoin](https://coinmarketcap.com/currencies/bitcoin/). ***NOTE:** You may also use [/cryptocurrency/ohlcv/historical](#operation/getV1CryptocurrencyOhlcvHistorical) for traditional OHLCV data at historical daily and hourly intervals. You may also use [/v1/cryptocurrency/ohlcv/latest](#operation/getV1CryptocurrencyOhlcvLatest) for OHLCV data for the current UTC day.*
   * @tags cryptocurrency
   * @name GetV2CryptocurrencyPriceperformancestatsLatest
   * @summary Price Performance Stats v2
   * @request GET:/v2/cryptocurrency/price-performance-stats/latest
   */
  export namespace GetV2CryptocurrencyPriceperformancestatsLatest {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * One or more comma-separated cryptocurrency CoinMarketCap IDs. Example: 1,2
       * @pattern ^\d+(?:,\d+)*$
       */
      id?: string;
      /**
       * Alternatively pass a comma-separated list of cryptocurrency slugs. Example: "bitcoin,ethereum"
       * @pattern ^[0-9a-z-]+(?:,[0-9a-z-]+)*$
       */
      slug?: string;
      /**
       * Alternatively pass one or more comma-separated cryptocurrency symbols. Example: "BTC,ETH". At least one "id" *or* "slug" *or* "symbol" is required for this request.
       * @pattern ^[0-9A-Za-z$@\-,]+(?:,[0-9A-Za-z$@\-]+)*$
       */
      symbol?: string;
      /**
       * Specify one or more comma-delimited time periods to return stats for. `all_time` is the default. Pass `all_time,yesterday,24h,7d,30d,90d,365d` to return all supported time periods. All rolling periods have a rolling close time of the current request time. For example `24h` would have a close time of now and an open time of 24 hours before now. *Please note: `yesterday` is a UTC period and currently does not currently support `high` and `low` timestamps.*
       * @default "all_time"
       * @pattern ^(all_time|yesterday|24h|7d|30d|90d|365d)+(?:,(all_time|yesterday|24h|7d|30d|90d|365d)+)*$
       */
      time_period?: string;
      /**
       * Optionally calculate quotes in up to 120 currencies at once by passing a comma-separated list of cryptocurrency or fiat currency symbols. Each additional convert option beyond the first requires an additional call credit. A list of supported fiat options can be found [here](#section/Standards-and-Conventions). Each conversion is returned in its own "quote" object.
       * @pattern ^[0-9A-Za-z$@\-,]+(?:,[0-9A-Za-z$@\-]+)*$
       */
      convert?: string;
      /**
       * Optionally calculate quotes by CoinMarketCap ID instead of symbol. This option is identical to `convert` outside of ID format. Ex: convert_id=1,2781 would replace convert=BTC,USD in your query. This parameter cannot be used when `convert` is used.
       * @pattern ^\d+(?:,\d+)*$
       */
      convert_id?: string;
      /**
       * Pass `true` to relax request validation rules. When requesting records on multiple cryptocurrencies an error is returned if no match is found for 1 or more requested cryptocurrencies. If set to true, invalid lookups will be skipped allowing valid cryptocurrencies to still be returned.
       * @default true
       */
      skip_invalid?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CryptocurrencyPricePerformanceStatsLatestResponseModel;
  }

  /**
   * @description Returns an interval of historic market quotes for any cryptocurrency based on time and interval parameters. **Please note**: This documentation relates to our updated V2 endpoint, which may be incompatible with our V1 versions. Documentation for deprecated endpoints can be found <a href="#tag/deprecated">here</a>.<br><br> **Technical Notes** - A historic quote for every "interval" period between your "time_start" and "time_end" will be returned. - If a "time_start" is not supplied, the "interval" will be applied in reverse from "time_end". - If "time_end" is not supplied, it defaults to the current time. - At each "interval" period, the historic quote that is closest in time to the requested time will be returned. - If no historic quotes are available in a given "interval" period up until the next interval period, it will be skipped. **Implementation Tips** - Want to get the last quote of each UTC day? Don't use "interval=daily" as that returns the first quote. Instead use "interval=24h" to repeat a specific timestamp search every 24 hours and pass ex. "time_start=2019-01-04T23:59:00.000Z" to query for the last record of each UTC day. - This endpoint supports requesting multiple cryptocurrencies in the same call. Please note the API response will be wrapped in an additional object in this case. **Interval Options** There are 2 types of time interval formats that may be used for "interval". The first are calendar year and time constants in UTC time: **"hourly"** - Get the first quote available at the beginning of each calendar hour. **"daily"** - Get the first quote available at the beginning of each calendar day. **"weekly"** - Get the first quote available at the beginning of each calendar week. **"monthly"** - Get the first quote available at the beginning of each calendar month. **"yearly"** - Get the first quote available at the beginning of each calendar year. The second are relative time intervals. **"m"**: Get the first quote available every "m" minutes (60 second intervals). Supported minutes are: "5m", "10m", "15m", "30m", "45m". **"h"**: Get the first quote available every "h" hours (3600 second intervals). Supported hour intervals are: "1h", "2h", "3h", "4h", "6h", "12h". **"d"**: Get the first quote available every "d" days (86400 second intervals). Supported day intervals are: "1d", "2d", "3d", "7d", "14d", "15d", "30d", "60d", "90d", "365d". **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - ~~Basic~~ - Hobbyist (1 month) - Startup (1 month) - Standard (3 month) - Professional (12 months) - Enterprise (Up to 6 years) **Cache / Update frequency:** Every 5 minutes. **Plan credit use:** 1 call credit per 100 historical data points returned (rounded up) and 1 call credit per `convert` option beyond the first. **CMC equivalent pages:** Our historical cryptocurrency charts like [coinmarketcap.com/currencies/bitcoin/#charts](https://coinmarketcap.com/currencies/bitcoin/#charts).
   * @tags cryptocurrency
   * @name GetV2CryptocurrencyQuotesHistorical
   * @summary Quotes Historical v2
   * @request GET:/v2/cryptocurrency/quotes/historical
   */
  export namespace GetV2CryptocurrencyQuotesHistorical {
    export type RequestParams = {};
    export type RequestQuery = {
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
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CryptocurrencyQuotesHistoricalResponseModel;
  }

  /**
   * @description Returns the latest market quote for 1 or more cryptocurrencies. Use the "convert" option to return market values in multiple fiat and cryptocurrency conversions in the same call. **Please note**: This documentation relates to our updated V2 endpoint, which may be incompatible with our V1 versions. Documentation for deprecated endpoints can be found <a href="#tag/deprecated">here</a>.<br><br> **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - Basic - Startup - Hobbyist - Standard - Professional - Enterprise **Cache / Update frequency:** Every 60 seconds. **Plan credit use:** 1 call credit per 100 cryptocurrencies returned (rounded up) and 1 call credit per `convert` option beyond the first. **CMC equivalent pages:** Latest market data pages for specific cryptocurrencies like [coinmarketcap.com/currencies/bitcoin/](https://coinmarketcap.com/currencies/bitcoin/). ***NOTE:** Use this endpoint to request the latest quote for specific cryptocurrencies. If you need to request all cryptocurrencies use [/v1/cryptocurrency/listings/latest](#operation/getV1CryptocurrencyListingsLatest) which is optimized for that purpose. The response data between these endpoints is otherwise the same.*
   * @tags cryptocurrency
   * @name GetV2CryptocurrencyQuotesLatest
   * @summary Quotes Latest v2
   * @request GET:/v2/cryptocurrency/quotes/latest
   */
  export namespace GetV2CryptocurrencyQuotesLatest {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * One or more comma-separated cryptocurrency CoinMarketCap IDs. Example: 1,2
       * @pattern ^\d+(?:,\d+)*$
       */
      id?: string;
      /**
       * Alternatively pass a comma-separated list of cryptocurrency slugs. Example: "bitcoin,ethereum"
       * @pattern ^[0-9a-z-]+(?:,[0-9a-z-]+)*$
       */
      slug?: string;
      /**
       * Alternatively pass one or more comma-separated cryptocurrency symbols. Example: "BTC,ETH". At least one "id" *or* "slug" *or* "symbol" is required for this request.
       * @pattern ^[0-9A-Za-z$@\-,]+(?:,[0-9A-Za-z$@\-]+)*$
       */
      symbol?: string;
      /**
       * Optionally calculate market quotes in up to 120 currencies at once by passing a comma-separated list of cryptocurrency or fiat currency symbols. Each additional convert option beyond the first requires an additional call credit. A list of supported fiat options can be found [here](#section/Standards-and-Conventions). Each conversion is returned in its own "quote" object.
       * @pattern ^[0-9A-Za-z$@\-,]+(?:,[0-9A-Za-z$@\-]+)*$
       */
      convert?: string;
      /**
       * Optionally calculate market quotes by CoinMarketCap ID instead of symbol. This option is identical to `convert` outside of ID format. Ex: convert_id=1,2781 would replace convert=BTC,USD in your query. This parameter cannot be used when `convert` is used.
       * @pattern (^\d+(?:,\d+)*$|(\d,)*PLATFORM_ID+(?:,\d+)*$)
       */
      convert_id?: string;
      /**
       * Optionally specify a comma-separated list of supplemental data fields to return. Pass `num_market_pairs,cmc_rank,date_added,tags,platform,max_supply,circulating_supply,total_supply,market_cap_by_total_supply,volume_24h_reported,volume_7d,volume_7d_reported,volume_30d,volume_30d_reported,is_active,is_fiat` to include all auxiliary fields.
       * @default "num_market_pairs,cmc_rank,date_added,tags,platform,max_supply,circulating_supply,total_supply,is_active,is_fiat"
       * @pattern ^(num_market_pairs|cmc_rank|date_added|tags|platform|max_supply|circulating_supply|total_supply|market_cap_by_total_supply|volume_24h_reported|volume_7d|volume_7d_reported|volume_30d|volume_30d_reported|is_active|is_fiat)+(?:,(num_market_pairs|cmc_rank|date_added|tags|platform|max_supply|circulating_supply|total_supply|market_cap_by_total_supply|volume_24h_reported|volume_7d|volume_7d_reported|volume_30d|volume_30d_reported|is_active|is_fiat)+)*$
       */
      aux?: string;
      /**
       * Pass `true` to relax request validation rules. When requesting records on multiple cryptocurrencies an error is returned if no match is found for 1 or more requested cryptocurrencies. If set to true, invalid lookups will be skipped allowing valid cryptocurrencies to still be returned.
       * @default true
       */
      skip_invalid?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CryptocurrencyQuotesLatestResponseModel;
  }
}
