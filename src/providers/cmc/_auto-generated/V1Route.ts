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
  AccountInfoResponseModel,
  AirdropResponseModel,
  AirdropsResponseModel,
  BlockchainStatisticsLatestResponseModel,
  CategoriesResponseModel,
  CategoryResponseModel,
  CommunityTrendingTokenResponseModel,
  CommunityTrendingTopicResponseModel,
  ContentLatestPostsResponseModel,
  ContentLatestResponseModel,
  ContentPostCommentsResponseModel,
  ContentTopPostsResponseModel,
  CryptocurrenciesInfoResponseModel,
  CryptocurrencyListingsLatestResponseModel,
  CryptocurrencyListingsLatestResponseModel1,
  CryptocurrencyListingsNewResponseModel,
  CryptocurrencyMapResponseModel,
  CryptocurrencyMarketPairsLatestResponseModel,
  CryptocurrencyOHLCVHistoricalResponseModel,
  CryptocurrencyOHLCVLatestResponseModel,
  CryptocurrencyPricePerformanceStatsLatestResponseModel,
  CryptocurrencyQuotesHistoricalResponseModel,
  CryptocurrencyQuotesLatestResponseModel,
  CryptocurrencyTrendingGainersLosersResponseModel,
  CryptocurrencyTrendingLatestResponseModel,
  CryptocurrencyTrendingMostVisitedResponseModel,
  ExchangeAssetsResponseModel,
  ExchangeHistoricalQuotesResponseModel,
  ExchangeListingsLatestResponseModel,
  ExchangeMapResponseModel,
  ExchangeMarketPairsLatestResponseModel,
  ExchangeQuotesLatestResponseModel,
  ExchangesInfoResponseModel,
  FCASListingsLatestResponseModel,
  FCASQuoteLatestResponseModel,
  FiatMapResponseModel,
  GlobalMetricsQuotesHistoricResponseModel,
  GlobalMetricsQuotesLatestResponseModel,
  ToolsPriceConversionResponseModel,
} from './data-contracts';

export namespace V1 {
  /**
   * @description Returns a paginated list of content pulled from CMC News/Headlines and Alexandria articles. **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - Standard - Professional - Enterprise **Cache / Update frequency:** Five Minutes **Plan credit use:** 0 credit
   * @name GetV1ContentLatest
   * @summary Content Latest
   * @request GET:/v1/content/latest
   */
  export namespace GetV1ContentLatest {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * Optionally offset the start (1-based index) of the paginated list of items to return.
       * @min 1
       * @default 1
       */
      start?: number;
      /**
       * Optionally specify the number of results to return. Use this parameter and the "start" parameter to determine your own pagination size.
       * @min 1
       * @max 200
       * @default 100
       */
      limit?: number;
      /**
       * Optionally pass a comma-separated list of CoinMarketCap cryptocurrency IDs. Example: "1,1027"
       * @pattern ^\d+(?:,\d+)*$
       */
      id?: string;
      /**
       * Optionally pass a comma-separated list of cryptocurrency slugs. Example: "bitcoin,ethereum"
       * @pattern ^[0-9a-z-]+(?:,[0-9a-z-]+)*$
       */
      slug?: string;
      /**
       * Optionally pass a comma-separated list of cryptocurrency symbols. Example: "BTC,ETH". Optionally pass "id" *or* "slug" *or* "symbol" is required for this request.
       * @pattern ^[0-9A-Za-z$@\-,]+(?:,[0-9A-Za-z$@\-]+)*$
       */
      symbol?: string;
      /**
       * Optionally specify a comma-separated list of supplemental data fields: `news`, `community`, or `alexandria` to filter news sources. Pass `all` or leave it blank to include all news types.
       * @default "all"
       * @pattern ^(news|community|alexandria|all)+(?:,(news|community|alexandria|all)+)*$
       */
      news_type?: string;
      /**
       * Optionally specify a comma-separated list of supplemental data fields: `news`, `video`, or `audio` to filter news's content. Pass `all` or leave it blank to include all content types.
       * @default "all"
       * @pattern ^(audio|news|video|all)+(?:,(audio|news|video|all)+)*$
       */
      content_type?: string;
      /** Optionally pass a comma-separated list of categories. Example: "GameFi,NFT". */
      category?: string;
      /**
       * Optionally pass a language code. Example: "en". If not specified the default value is "en".
       * @default "en"
       */
      language?:
        | 'en'
        | 'zh'
        | 'zh-tw'
        | 'de'
        | 'id'
        | 'ja'
        | 'ko'
        | 'es'
        | 'th'
        | 'tr'
        | 'vi'
        | 'ru'
        | 'fr'
        | 'nl'
        | 'ar'
        | 'pt-br'
        | 'hi'
        | 'pl'
        | 'uk'
        | 'fil-rph'
        | 'it';
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ContentLatestResponseModel;
  }

  /**
   * @description Returns information about a single airdrop available on CoinMarketCap. Includes the cryptocurrency metadata. **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - Hobbyist - Startup - Standard - Professional - Enterprise **Cache / Update frequency:** Data is updated only as needed, every 30 seconds. **Plan credit use:** 1 API call credit per request no matter query size. **CMC equivalent pages:** Our free airdrops page [coinmarketcap.com/airdrop/](https://coinmarketcap.com/airdrop/).
   * @tags cryptocurrency
   * @name GetV1CryptocurrencyAirdrop
   * @summary Airdrop
   * @request GET:/v1/cryptocurrency/airdrop
   */
  export namespace GetV1CryptocurrencyAirdrop {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Airdrop Unique ID. This can be found using the Airdrops API. */
      id: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AirdropResponseModel;
  }

  /**
   * @description Returns a list of past, present, or future airdrops which have run on CoinMarketCap. **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - Hobbyist - Startup - Standard - Professional - Enterprise **Cache / Update frequency:** Data is updated only as needed, every 30 seconds. **Plan credit use:** 1 API call credit per request no matter query size. **CMC equivalent pages:** Our free airdrops page [coinmarketcap.com/airdrop/](https://coinmarketcap.com/airdrop/).
   * @tags cryptocurrency
   * @name GetV1CryptocurrencyAirdrops
   * @summary Airdrops
   * @request GET:/v1/cryptocurrency/airdrops
   */
  export namespace GetV1CryptocurrencyAirdrops {
    export type RequestParams = {};
    export type RequestQuery = {
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
       * What status of airdrops.
       * @default "ONGOING"
       */
      status?: 'ENDED' | 'ONGOING' | 'UPCOMING';
      /**
       * Filtered airdrops by one cryptocurrency CoinMarketCap IDs. Example: 1
       * @pattern ^\d*$
       */
      id?: string;
      /**
       * Alternatively filter airdrops by a cryptocurrency slug. Example: "bitcoin"
       * @pattern ^[0-9a-z-]*$
       */
      slug?: string;
      /**
       * Alternatively filter airdrops one cryptocurrency symbol. Example: "BTC".
       * @pattern ^[0-9A-Za-z$@\-]*$
       */
      symbol?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AirdropsResponseModel;
  }

  /**
   * @description Returns information about all coin categories available on CoinMarketCap. Includes a paginated list of cryptocurrency quotes and metadata from each category. **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - Free - Hobbyist - Startup - Standard - Professional - Enterprise **Cache / Update frequency:** Data is updated only as needed, every 30 seconds. **Plan credit use:** 1 API call credit per request + 1 call credit per 200 cryptocurrencies returned (rounded up) and 1 call credit per `convert` option beyond the first. **CMC equivalent pages:** Our free airdrops page [coinmarketcap.com/cryptocurrency-category/](https://coinmarketcap.com/cryptocurrency-category/).
   * @tags cryptocurrency
   * @name GetV1CryptocurrencyCategories
   * @summary Categories
   * @request GET:/v1/cryptocurrency/categories
   */
  export namespace GetV1CryptocurrencyCategories {
    export type RequestParams = {};
    export type RequestQuery = {
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
       */
      limit?: number;
      /**
       * Filtered categories by one or more comma-separated cryptocurrency CoinMarketCap IDs. Example: 1,2
       * @pattern ^\d+(?:,\d+)*$
       */
      id?: string;
      /**
       * Alternatively filter categories by a comma-separated list of cryptocurrency slugs. Example: "bitcoin,ethereum"
       * @pattern ^[0-9a-z-]+(?:,[0-9a-z-]+)*$
       */
      slug?: string;
      /**
       * Alternatively filter categories one or more comma-separated cryptocurrency symbols. Example: "BTC,ETH".
       * @pattern ^[0-9A-Za-z$@\-,]+(?:,[0-9A-Za-z$@\-]+)*$
       */
      symbol?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CategoriesResponseModel;
  }

  /**
   * @description Returns information about a single coin category available on CoinMarketCap. Includes a paginated list of the cryptocurrency quotes and metadata for the category. **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - Free - Hobbyist - Startup - Standard - Professional - Enterprise **Cache / Update frequency:** Data is updated only as needed, every 30 seconds. **Plan credit use:** 1 API call credit per request + 1 call credit per 200 cryptocurrencies returned (rounded up) and 1 call credit per `convert` option beyond the first. **CMC equivalent pages:** Our Cryptocurrency Category page [coinmarketcap.com/cryptocurrency-category/](https://coinmarketcap.com/cryptocurrency-category/).
   * @tags cryptocurrency
   * @name GetV1CryptocurrencyCategory
   * @summary Category
   * @request GET:/v1/cryptocurrency/category
   */
  export namespace GetV1CryptocurrencyCategory {
    export type RequestParams = {};
    export type RequestQuery = {
      /** The Category ID. This can be found using the Categories API. */
      id: string;
      /**
       * Optionally offset the start (1-based index) of the paginated list of coins to return.
       * @min 1
       * @default 1
       */
      start?: number;
      /**
       * Optionally specify the number of coins to return. Use this parameter and the "start" parameter to determine your own pagination size.
       * @min 1
       * @max 1000
       * @default 100
       */
      limit?: number;
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
    export type ResponseBody = CategoryResponseModel;
  }

  /**
   * @description Returns all static metadata available for one or more cryptocurrencies. This information includes details like logo, description, official website URL, social links, and links to a cryptocurrency's technical documentation. **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - Basic - Startup - Hobbyist - Standard - Professional - Enterprise **Cache / Update frequency:** Static data is updated only as needed, every 30 seconds. **Plan credit use:** 1 call credit per 100 cryptocurrencies returned (rounded up). **CMC equivalent pages:** Cryptocurrency detail page metadata like [coinmarketcap.com/currencies/bitcoin/](https://coinmarketcap.com/currencies/bitcoin/).
   * @tags deprecated
   * @name GetV1CryptocurrencyInfo
   * @summary Metadata v1 (deprecated)
   * @request GET:/v1/cryptocurrency/info
   */
  export namespace GetV1CryptocurrencyInfo {
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
   * @description Returns a mapping of all cryptocurrencies to unique CoinMarketCap `id`s. Per our <a href="#section/Best-Practices" target="_blank">Best Practices</a> we recommend utilizing CMC ID instead of cryptocurrency symbols to securely identify cryptocurrencies with our other endpoints and in your own application logic.  Each cryptocurrency returned includes typical identifiers such as `name`, `symbol`, and `token_address` for flexible mapping to `id`. By default this endpoint returns cryptocurrencies that have actively tracked markets on supported exchanges. You may receive a map of all inactive cryptocurrencies by passing `listing_status=inactive`. You may also receive a map of registered cryptocurrency projects that are listed but do not yet meet methodology requirements to have tracked markets via `listing_status=untracked`. Please review our <a target="_blank" href="https://coinmarketcap.com/methodology/">methodology documentation</a> for additional details on listing states. Cryptocurrencies returned include `first_historical_data` and `last_historical_data` timestamps to conveniently reference historical date ranges available to query with historical time-series data endpoints. You may also use the `aux` parameter to only include properties you require to slim down the payload if calling this endpoint frequently. **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - Basic - Hobbyist - Startup - Standard - Professional - Enterprise **Cache / Update frequency:** Mapping data is updated only as needed, every 30 seconds. **Plan credit use:** 1 API call credit per request no matter query size. **CMC equivalent pages:** No equivalent, this data is only available via API.
   * @tags cryptocurrency
   * @name GetV1CryptocurrencyMap
   * @summary CoinMarketCap ID Map
   * @request GET:/v1/cryptocurrency/map
   */
  export namespace GetV1CryptocurrencyMap {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * Only active cryptocurrencies are returned by default. Pass `inactive` to get a list of cryptocurrencies that are no longer active. Pass `untracked` to get a list of cryptocurrencies that are listed but do not yet meet methodology requirements to have tracked markets available. You may pass one or more comma-separated values.
       * @default "active"
       * @pattern ^(active|inactive|untracked)+(?:,(active|inactive|untracked)+)*$
       */
      listing_status?: string;
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
       */
      limit?: number;
      /**
       * What field to sort the list of cryptocurrencies by.
       * @default "id"
       */
      sort?: 'cmc_rank' | 'id';
      /**
       * Optionally pass a comma-separated list of cryptocurrency symbols to return CoinMarketCap IDs for. If this option is passed, other options will be ignored.
       * @pattern ^[0-9A-Za-z$@\-,]+(?:,[0-9A-Za-z$@\-]+)*$
       */
      symbol?: string;
      /**
       * Optionally specify a comma-separated list of supplemental data fields to return. Pass `platform,first_historical_data,last_historical_data,is_active,status` to include all auxiliary fields.
       * @default "platform,first_historical_data,last_historical_data,is_active"
       * @pattern ^(platform|first_historical_data|last_historical_data|is_active|status)+(?:,(platform|first_historical_data|last_historical_data|is_active|status)+)*$
       */
      aux?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CryptocurrencyMapResponseModel;
  }

  /**
   * @description Returns the exchange assets in the form of token holdings. This information includes details like wallet address, cryptocurrency, blockchain platform, balance, and etc. * Only wallets containing at least 100,000 USD in balance are shown * Balances from wallets might be delayed ** Disclaimer: All information and data relating to the holdings in the third-party wallet addresses are provided by the third parties to CoinMarketCap, and CoinMarketCap does not confirm or verify the accuracy or timeliness of such information and data. The information and data are provided "as is" without warranty of any kind. CoinMarketCap shall have no responsibility or liability for these third parties’ information and data or have the duty to review, confirm, verify or otherwise perform any inquiry or investigation as to the completeness, accuracy, sufficiency, integrity, reliability or timeliness of any such information or data provided. **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - Free - Hobbyist - Startup - Standard - Professional - Enterprise **Cache / Update frequency:** Balance data is updated statically based on the source. Price data is updated every 5 minutes. **Plan credit use:** 1 credit. **CMC equivalent pages:** Exchange detail page like [coinmarketcap.com/exchanges/binance/](https://coinmarketcap.com/exchanges/binance/)
   * @tags exchange
   * @name GetV1ExchangeAssets
   * @summary Exchange Assets
   * @request GET:/v1/exchange/assets
   */
  export namespace GetV1ExchangeAssets {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * A CoinMarketCap exchange ID. Example: 270
       * @pattern ^\d*$
       */
      id?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ExchangeAssetsResponseModel;
  }

  /**
   * @description Returns all static metadata for one or more exchanges. This information includes details like launch date, logo, official website URL, social links, and market fee documentation URL. **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - Basic - Hobbyist - Startup - Standard - Professional - Enterprise **Cache / Update frequency:** Static data is updated only as needed, every 30 seconds. **Plan credit use:** 1 call credit per 100 exchanges returned (rounded up). **CMC equivalent pages:** Exchange detail page metadata like [coinmarketcap.com/exchanges/binance/](https://coinmarketcap.com/exchanges/binance/).
   * @tags exchange
   * @name GetV1ExchangeInfo
   * @summary Metadata
   * @request GET:/v1/exchange/info
   */
  export namespace GetV1ExchangeInfo {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * One or more comma-separated CoinMarketCap cryptocurrency exchange ids. Example: "1,2"
       * @pattern ^\d+(?:,\d+)*$
       */
      id?: string;
      /**
       * Alternatively, one or more comma-separated exchange names in URL friendly shorthand "slug" format (all lowercase, spaces replaced with hyphens). Example: "binance,gdax". At least one "id" *or* "slug" is required.
       * @pattern ^[0-9a-z-]+(?:,[0-9a-z-]+)*$
       */
      slug?: string;
      /**
       * Optionally specify a comma-separated list of supplemental data fields to return. Pass `urls,logo,description,date_launched,notice,status` to include all auxiliary fields.
       * @default "urls,logo,description,date_launched,notice"
       * @pattern ^(urls|logo|description|date_launched|notice|status)+(?:,(urls|logo|description|date_launched|notice|status)+)*$
       */
      aux?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ExchangesInfoResponseModel;
  }

  /**
   * @description Returns a paginated list of all active cryptocurrency exchanges by CoinMarketCap ID. We recommend using this convenience endpoint to lookup and utilize our unique exchange `id` across all endpoints as typical exchange identifiers may change over time. As a convenience you may pass a comma-separated list of exchanges by `slug` to filter this list to only those you require or the `aux` parameter to slim down the payload. By default this endpoint returns exchanges that have at least 1 actively tracked market. You may receive a map of all inactive cryptocurrencies by passing `listing_status=inactive`. You may also receive a map of registered exchanges that are listed but do not yet meet methodology requirements to have tracked markets available via `listing_status=untracked`. Please review **(3) Listing Tiers** in our <a target="_blank" href="https://coinmarketcap.com/methodology/">methodology documentation</a> for additional details on listing states. **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - Basic - Hobbyist - Startup - Standard - Professional - Enterprise **Cache / Update frequency:** Mapping data is updated only as needed, every 30 seconds. **Plan credit use:** 1 call credit per call. **CMC equivalent pages:** No equivalent, this data is only available via API.
   * @tags exchange
   * @name GetV1ExchangeMap
   * @summary CoinMarketCap ID Map
   * @request GET:/v1/exchange/map
   */
  export namespace GetV1ExchangeMap {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * Only active exchanges are returned by default. Pass `inactive` to get a list of exchanges that are no longer active. Pass `untracked` to get a list of exchanges that are registered but do not currently meet methodology requirements to have active markets tracked. You may pass one or more comma-separated values.
       * @default "active"
       * @pattern ^(active|inactive|untracked)+(?:,(active|inactive|untracked)+)*$
       */
      listing_status?: string;
      /**
       * Optionally pass a comma-separated list of exchange slugs (lowercase URL friendly shorthand name with spaces replaced with dashes) to return CoinMarketCap IDs for. If this option is passed, other options will be ignored.
       * @pattern ^[0-9a-z-]+(?:,[0-9a-z-]+)*$
       */
      slug?: string;
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
       */
      limit?: number;
      /**
       * What field to sort the list of exchanges by.
       * @default "id"
       */
      sort?: 'volume_24h' | 'id';
      /**
       * Optionally specify a comma-separated list of supplemental data fields to return. Pass `first_historical_data,last_historical_data,is_active,status` to include all auxiliary fields.
       * @default "first_historical_data,last_historical_data,is_active"
       * @pattern ^(first_historical_data|last_historical_data|is_active|status)+(?:,(first_historical_data|last_historical_data|is_active|status)+)*$
       */
      aux?: string;
      /**
       * Optionally include one fiat or cryptocurrency IDs to filter market pairs by. For example `?crypto_id=1` would only return exchanges that have BTC.
       * @pattern ^\d*$
       */
      crypto_id?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ExchangeMapResponseModel;
  }

  /**
   * @description Returns a mapping of all supported fiat currencies to unique CoinMarketCap ids. Per our Best Practices we recommend utilizing CMC ID instead of currency symbols to securely identify assets with our other endpoints and in your own application logic. **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - Basic - Hobbyist - Startup - Standard - Professional - Enterprise **Cache / Update frequency:** Mapping data is updated only as needed, every 30 seconds. **Plan credit use:** 1 API call credit per request no matter query size. **CMC equivalent pages:** No equivalent, this data is only available via API.
   * @tags fiat
   * @name GetV1FiatMap
   * @summary CoinMarketCap ID Map
   * @request GET:/v1/fiat/map
   */
  export namespace GetV1FiatMap {
    export type RequestParams = {};
    export type RequestQuery = {
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
       */
      limit?: number;
      /**
       * What field to sort the list by.
       * @default "id"
       */
      sort?: 'name' | 'id';
      /**
       * Pass `true` to include precious metals.
       * @default false
       */
      include_metals?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = FiatMapResponseModel;
  }

  /**
   * @description Returns API key details and usage stats. This endpoint can be used to programmatically monitor your key usage compared to the rate limit and daily/monthly credit limits available to your API plan. You may use the Developer Portal's account dashboard as an alternative to this endpoint. **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - Basic - Hobbyist - Startup - Standard - Professional - Enterprise **Cache / Update frequency:** No cache, this endpoint updates as requests are made with your key. **Plan credit use:** No API credit cost. Requests to this endpoint do contribute to your minute based rate limit however. **CMC equivalent pages:** Our Developer Portal dashboard for your API Key at [pro.coinmarketcap.com/account](https://pro.coinmarketcap.com/account).
   * @tags key
   * @name GetV1KeyInfo
   * @summary Key Info
   * @request GET:/v1/key/info
   */
  export namespace GetV1KeyInfo {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AccountInfoResponseModel;
  }

  /**
   * @description Convert APIs into postman format. You can reference the operation from <a href="https://coinmarketcap.com/alexandria/article/register-for-coinmarketcap-api" target="_blank"><b>this article</b></a>. **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - Free - Hobbyist - Startup - Standard - Professional - Enterprise **Technical Notes** - Set the env variables in the postman: {{baseUrl}}, {{API_KEY}}
   * @tags tools
   * @name GetV1ToolsPostman
   * @summary Postman Conversion v1
   * @request GET:/v1/tools/postman
   */
  export namespace GetV1ToolsPostman {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
   * @description Convert an amount of one cryptocurrency or fiat currency into one or more different currencies utilizing the latest market rate for each currency. You may optionally pass a historical timestamp as `time` to convert values based on historical rates (as your API plan supports). **Technical Notes** - Latest market rate conversions are accurate to 1 minute of specificity. Historical conversions are accurate to 1 minute of specificity outside of non-USD fiat conversions which have 5 minute specificity. - You may reference a current list of all supported cryptocurrencies via the <a href="/api/v1/#section/Standards-and-Conventions" target="_blank">cryptocurrency/map</a> endpoint. This endpoint also returns the supported date ranges for historical conversions via the `first_historical_data` and `last_historical_data` properties. - Conversions are supported in 93 different fiat currencies and 4 precious metals <a href="/api/v1/#section/Standards-and-Conventions" target="_blank">as outlined here</a>. Historical fiat conversions are supported as far back as 2013-04-28. - A `last_updated` timestamp is included for both your source currency and each conversion currency. This is the timestamp of the closest market rate record referenced for each currency during the conversion. **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - Basic (Latest market price conversions) - Hobbyist (Latest market price conversions + 1 month historical) - Startup (Latest market price conversions + 1 month historical) - Standard (Latest market price conversions + 3 months historical) - Professional (Latest market price conversions + 12 months historical) - Enterprise (Latest market price conversions + up to 6 years historical) **Cache / Update frequency:** Every 60 seconds for the lastest cryptocurrency and fiat currency rates. **Plan credit use:** 1 call credit per call and 1 call credit per `convert` option beyond the first. **CMC equivalent pages:** Our cryptocurrency conversion page at [coinmarketcap.com/converter/](https://coinmarketcap.com/converter/).
   * @tags deprecated
   * @name GetV1ToolsPriceconversion
   * @summary Price Conversion v1 (deprecated)
   * @request GET:/v1/tools/price-conversion
   */
  export namespace GetV1ToolsPriceconversion {
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
   * @description Returns the latest blockchain statistics data for 1 or more blockchains. Bitcoin, Litecoin, and Ethereum are currently supported. Additional blockchains will be made available on a regular basis. **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - ~~Basic~~ - ~~Hobbyist~~ - ~~Startup~~ - ~~Standard~~ - ~~Professional~~ - Enterprise **Cache / Update frequency:** Every 15 seconds. **Plan credit use:** 1 call credit per request. **CMC equivalent pages:** Our blockchain explorer pages like [blockchain.coinmarketcap.com/](https://blockchain.coinmarketcap.com/).
   * @tags blockchain
   * @name GetV1BlockchainStatisticsLatest
   * @summary Statistics Latest
   * @request GET:/v1/blockchain/statistics/latest
   */
  export namespace GetV1BlockchainStatisticsLatest {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * One or more comma-separated cryptocurrency CoinMarketCap IDs to return blockchain data for. Pass `1,2,1027` to request all currently supported blockchains.
       * @pattern ^\d+(?:,\d+)*$
       */
      id?: string;
      /**
       * Alternatively pass one or more comma-separated cryptocurrency symbols. Pass `BTC,LTC,ETH` to request all currently supported blockchains.
       * @pattern ^[0-9A-Za-z$@\-,]+(?:,[0-9A-Za-z$@\-]+)*$
       */
      symbol?: string;
      /**
       * Alternatively pass a comma-separated list of cryptocurrency slugs. Pass `bitcoin,litecoin,ethereum` to request all currently supported blockchains.
       * @pattern ^[0-9a-z-]+(?:,[0-9a-z-]+)*$
       */
      slug?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = BlockchainStatisticsLatestResponseModel;
  }

  /**
   * @description Returns the latest trending tokens from the CMC Community. **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - Standard - Professional - Enterprise **Cache / Update frequency:** One Minute **Plan credit use:** 0 credit
   * @name GetV1CommunityTrendingToken
   * @summary Community Trending Tokens
   * @request GET:/v1/community/trending/token
   */
  export namespace GetV1CommunityTrendingToken {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * Optionally specify the number of results to return.
       * @min 1
       * @max 5
       * @default 5
       */
      limit?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CommunityTrendingTokenResponseModel;
  }

  /**
   * @description Returns the latest trending topics from the CMC Community. **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - Standard - Professional - Enterprise **Cache / Update frequency:** One Minute **Plan credit use:** 0 credit
   * @name GetV1CommunityTrendingTopic
   * @summary Community Trending Topics
   * @request GET:/v1/community/trending/topic
   */
  export namespace GetV1CommunityTrendingTopic {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * Optionally specify the number of results to return.
       * @min 1
       * @max 5
       * @default 5
       */
      limit?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CommunityTrendingTopicResponseModel;
  }

  /**
   * @description Returns comments of the CMC Community post. **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - Standard - Professional - Enterprise **Cache / Update frequency:** Five Minutes **Plan credit use:** 0 credit
   * @name GetV1ContentPostsComments
   * @summary Content Post Comments
   * @request GET:/v1/content/posts/comments
   */
  export namespace GetV1ContentPostsComments {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * Required post ID. Example: 325670123
       * @pattern ^\d*$
       */
      post_id: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ContentPostCommentsResponseModel;
  }

  /**
   * @description Returns the latest crypto-related posts from the CMC Community. **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - Standard - Professional - Enterprise **Cache / Update frequency:** Five Minutes **Plan credit use:** 0 credit
   * @name GetV1ContentPostsLatest
   * @summary Content Latest Posts
   * @request GET:/v1/content/posts/latest
   */
  export namespace GetV1ContentPostsLatest {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * Optional one cryptocurrency CoinMarketCap ID. Example: 1027
       * @pattern ^\d*$
       */
      id?: string;
      /**
       * Alternatively pass one cryptocurrency slug. Example: "ethereum"
       * @pattern ^[0-9a-z-]*$
       */
      slug?: string;
      /**
       * Alternatively pass one cryptocurrency symbols. Example: "ETH"
       * @pattern ^[0-9A-Za-z$@\-]*$
       */
      symbol?: string;
      /** Optional. The score is given in the response for finding next batch posts. Example: 1662903634322 */
      last_score?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ContentLatestPostsResponseModel;
  }

  /**
   * @description Returns the top crypto-related posts from the CMC Community. **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - Standard - Professional - Enterprise **Cache / Update frequency:** Five Minutes **Plan credit use:** 0 credit
   * @name GetV1ContentPostsTop
   * @summary Content Top Posts
   * @request GET:/v1/content/posts/top
   */
  export namespace GetV1ContentPostsTop {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * Optional one cryptocurrency CoinMarketCap ID. Example: 1027
       * @pattern ^\d*$
       */
      id?: string;
      /**
       * Alternatively pass one cryptocurrency slug. Example: "ethereum"
       * @pattern ^[0-9a-z-]*$
       */
      slug?: string;
      /**
       * Alternatively pass one cryptocurrency symbols. Example: "ETH"
       * @pattern ^[0-9A-Za-z$@\-]*$
       */
      symbol?: string;
      /** Optional. The score is given in the response for finding next batch of related posts. Example: 38507.8865 */
      last_score?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ContentTopPostsResponseModel;
  }

  /**
   * @description Returns a ranked and sorted list of all cryptocurrencies for a historical UTC date. **Technical Notes** - This endpoint is identical in format to our [/cryptocurrency/listings/latest](#operation/getV1CryptocurrencyListingsLatest) endpoint but is used to retrieve historical daily ranking snapshots from the end of each UTC day. - Daily snapshots reflect market data at the end of each UTC day and may be requested as far back as 2013-04-28 (as supported by your plan's historical limits). - The required "date" parameter can be passed as a Unix timestamp or ISO 8601 date but only the date portion of the timestamp will be referenced. It is recommended to send an ISO date format like "2019-10-10" without time. - This endpoint is for retrieving paginated and sorted lists of all currencies. If you require historical market data on specific cryptocurrencies you should use [/cryptocurrency/quotes/historical](#operation/getV1CryptocurrencyQuotesHistorical). Cryptocurrencies are listed by cmc_rank by default. You may optionally sort against any of the following: **cmc_rank**: CoinMarketCap's market cap rank as outlined in <a href="https://coinmarketcap.com/methodology/" target="_blank">our methodology</a>. **name**: The cryptocurrency name. **symbol**: The cryptocurrency symbol. **market_cap**: market cap (latest trade price x circulating supply). **price**: latest average trade price across markets. **circulating_supply**: approximate number of coins currently in circulation. **total_supply**: approximate total amount of coins in existence right now (minus any coins that have been verifiably burned). **max_supply**: our best approximation of the maximum amount of coins that will ever exist in the lifetime of the currency. **num_market_pairs**: number of market pairs across all exchanges trading each currency. **volume_24h**: 24 hour trading volume for each currency. **percent_change_1h**: 1 hour trading price percentage change for each currency. **percent_change_24h**: 24 hour trading price percentage change for each currency. **percent_change_7d**: 7 day trading price percentage change for each currency. **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - ~~Basic~~ - Hobbyist (1 month) - Startup (1 month) - Standard (3 month) - Professional (12 months) - Enterprise (Up to 6 years) **Cache / Update frequency:** The last completed UTC day is available 30 minutes after midnight on the next UTC day. **Plan credit use:** 1 call credit per 100 cryptocurrencies returned (rounded up) and 1 call credit per `convert` option beyond the first. **CMC equivalent pages:** Our historical daily crypto ranking snapshot pages like this one on [February 02, 2014](https://coinmarketcap.com/historical/20140202/).
   * @tags cryptocurrency
   * @name GetV1CryptocurrencyListingsHistorical
   * @summary Listings Historical
   * @request GET:/v1/cryptocurrency/listings/historical
   */
  export namespace GetV1CryptocurrencyListingsHistorical {
    export type RequestParams = {};
    export type RequestQuery = {
      /** date (Unix or ISO 8601) to reference day of snapshot. */
      date: string;
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
       * What field to sort the list of cryptocurrencies by.
       * @default "cmc_rank"
       */
      sort?:
        | 'cmc_rank'
        | 'name'
        | 'symbol'
        | 'market_cap'
        | 'price'
        | 'circulating_supply'
        | 'total_supply'
        | 'max_supply'
        | 'num_market_pairs'
        | 'volume_24h'
        | 'percent_change_1h'
        | 'percent_change_24h'
        | 'percent_change_7d';
      /** The direction in which to order cryptocurrencies against the specified sort. */
      sort_dir?: 'asc' | 'desc';
      /**
       * The type of cryptocurrency to include.
       * @default "all"
       */
      cryptocurrency_type?: 'all' | 'coins' | 'tokens';
      /**
       * Optionally specify a comma-separated list of supplemental data fields to return. Pass `platform,tags,date_added,circulating_supply,total_supply,max_supply,cmc_rank,num_market_pairs` to include all auxiliary fields.
       * @default "platform,tags,date_added,circulating_supply,total_supply,max_supply,cmc_rank,num_market_pairs"
       * @pattern ^(platform|tags|date_added|circulating_supply|total_supply|max_supply|cmc_rank|num_market_pairs)+(?:,(platform|tags|date_added|circulating_supply|total_supply|max_supply|cmc_rank|num_market_pairs)+)*$
       */
      aux?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CryptocurrencyListingsLatestResponseModel;
  }

  /**
   * @description Returns a paginated list of all active cryptocurrencies with latest market data. The default "market_cap" sort returns cryptocurrency in order of CoinMarketCap's market cap rank (as outlined in <a href="https://coinmarketcap.com/methodology/" target="_blank">our methodology</a>) but you may configure this call to order by another market ranking field. Use the "convert" option to return market values in multiple fiat and cryptocurrency conversions in the same call. You may sort against any of the following: **market_cap**: CoinMarketCap's market cap rank as outlined in <a href="https://coinmarketcap.com/methodology/" target="_blank">our methodology</a>. **market_cap_strict**: A strict market cap sort (latest trade price x circulating supply). **name**: The cryptocurrency name. **symbol**: The cryptocurrency symbol. **date_added**: Date cryptocurrency was added to the system. **price**: latest average trade price across markets. **circulating_supply**: approximate number of coins currently in circulation. **total_supply**: approximate total amount of coins in existence right now (minus any coins that have been verifiably burned). **max_supply**: our best approximation of the maximum amount of coins that will ever exist in the lifetime of the currency. **num_market_pairs**: number of market pairs across all exchanges trading each currency. **market_cap_by_total_supply_strict**: market cap by total supply. **volume_24h**: rolling 24 hour adjusted trading volume. **volume_7d**: rolling 24 hour adjusted trading volume. **volume_30d**: rolling 24 hour adjusted trading volume. **percent_change_1h**: 1 hour trading price percentage change for each currency. **percent_change_24h**: 24 hour trading price percentage change for each currency. **percent_change_7d**: 7 day trading price percentage change for each currency. **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - Basic - Hobbyist - Startup - Standard - Professional - Enterprise **Cache / Update frequency:** Every 60 seconds. **Plan credit use:** 1 call credit per 200 cryptocurrencies returned (rounded up) and 1 call credit per `convert` option beyond the first. **CMC equivalent pages:** Our latest cryptocurrency listing and ranking pages like [coinmarketcap.com/all/views/all/](https://coinmarketcap.com/all/views/all/), [coinmarketcap.com/tokens/](https://coinmarketcap.com/tokens/), [coinmarketcap.com/gainers-losers/](https://coinmarketcap.com/gainers-losers/), [coinmarketcap.com/new/](https://coinmarketcap.com/new/). ***NOTE:** Use this endpoint if you need a sorted and paginated list of all cryptocurrencies. If you want to query for market data on a few specific cryptocurrencies use [/v1/cryptocurrency/quotes/latest](#operation/getV1CryptocurrencyQuotesLatest) which is optimized for that purpose. The response data between these endpoints is otherwise the same.*
   * @tags cryptocurrency
   * @name GetV1CryptocurrencyListingsLatest
   * @summary Listings Latest
   * @request GET:/v1/cryptocurrency/listings/latest
   */
  export namespace GetV1CryptocurrencyListingsLatest {
    export type RequestParams = {};
    export type RequestQuery = {
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
       * Optionally specify a threshold of minimum USD price to filter results by.
       * @min 0
       * @max 100000000000000000
       */
      price_min?: number;
      /**
       * Optionally specify a threshold of maximum USD price to filter results by.
       * @min 0
       * @max 100000000000000000
       */
      price_max?: number;
      /**
       * Optionally specify a threshold of minimum market cap to filter results by.
       * @min 0
       * @max 100000000000000000
       */
      market_cap_min?: number;
      /**
       * Optionally specify a threshold of maximum market cap to filter results by.
       * @min 0
       * @max 100000000000000000
       */
      market_cap_max?: number;
      /**
       * Optionally specify a threshold of minimum 24 hour USD volume to filter results by.
       * @min 0
       * @max 100000000000000000
       */
      volume_24h_min?: number;
      /**
       * Optionally specify a threshold of maximum 24 hour USD volume to filter results by.
       * @min 0
       * @max 100000000000000000
       */
      volume_24h_max?: number;
      /**
       * Optionally specify a threshold of minimum circulating supply to filter results by.
       * @min 0
       * @max 100000000000000000
       */
      circulating_supply_min?: number;
      /**
       * Optionally specify a threshold of maximum circulating supply to filter results by.
       * @min 0
       * @max 100000000000000000
       */
      circulating_supply_max?: number;
      /**
       * Optionally specify a threshold of minimum 24 hour percent change to filter results by.
       * @min -100
       */
      percent_change_24h_min?: number;
      /**
       * Optionally specify a threshold of maximum 24 hour percent change to filter results by.
       * @min -100
       */
      percent_change_24h_max?: number;
      /**
       * Optionally specify a threshold of minimum self reported circulating supply to filter results by.
       * @min 0
       * @max 100000000000000000
       */
      self_reported_circulating_supply_min?: number;
      /**
       * Optionally specify a threshold of maximum self reported circulating supply to filter results by.
       * @min 0
       * @max 100000000000000000
       */
      self_reported_circulating_supply_max?: number;
      /**
       * Optionally specify a threshold of minimum self reported market cap to filter results by.
       * @min 0
       * @max 100000000000000000
       */
      self_reported_market_cap_min?: number;
      /**
       * Optionally specify a threshold of maximum self reported market cap to filter results by.
       * @min 0
       * @max 100000000000000000
       */
      self_reported_market_cap_max?: number;
      /**
       * Optionally specify a threshold of minimum unlocked market cap to filter results by.
       * @min 0
       * @max 100000000000000000
       */
      unlocked_market_cap_min?: number;
      /**
       * Optionally specify a threshold of maximum unlocked market cap to filter results by.
       * @min 0
       * @max 100000000000000000
       */
      unlocked_market_cap_max?: number;
      /**
       * Optionally specify a threshold of minimum unlocked circulating supply to filter results by.
       * @min 0
       * @max 100000000000000000
       */
      unlocked_circulating_supply_min?: number;
      /**
       * Optionally specify a threshold of maximum unlocked circulating supply to filter results by.
       * @min 0
       * @max 100000000000000000
       */
      unlocked_circulating_supply_max?: number;
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
       * What field to sort the list of cryptocurrencies by.
       * @default "market_cap"
       */
      sort?:
        | 'name'
        | 'symbol'
        | 'date_added'
        | 'market_cap'
        | 'market_cap_strict'
        | 'price'
        | 'circulating_supply'
        | 'total_supply'
        | 'max_supply'
        | 'num_market_pairs'
        | 'volume_24h'
        | 'percent_change_1h'
        | 'percent_change_24h'
        | 'percent_change_7d'
        | 'market_cap_by_total_supply_strict'
        | 'volume_7d'
        | 'volume_30d';
      /** The direction in which to order cryptocurrencies against the specified sort. */
      sort_dir?: 'asc' | 'desc';
      /**
       * The type of cryptocurrency to include.
       * @default "all"
       */
      cryptocurrency_type?: 'all' | 'coins' | 'tokens';
      /**
       * The tag of cryptocurrency to include.
       * @default "all"
       */
      tag?: 'all' | 'defi' | 'filesharing';
      /**
       * Optionally specify a comma-separated list of supplemental data fields to return. Pass `num_market_pairs,cmc_rank,date_added,tags,platform,max_supply,circulating_supply,total_supply,market_cap_by_total_supply,volume_24h_reported,volume_7d,volume_7d_reported,volume_30d,volume_30d_reported,is_market_cap_included_in_calc` to include all auxiliary fields.
       * @default "num_market_pairs,cmc_rank,date_added,tags,platform,max_supply,circulating_supply,total_supply"
       * @pattern ^(num_market_pairs|cmc_rank|date_added|tags|platform|max_supply|circulating_supply|total_supply|market_cap_by_total_supply|volume_24h_reported|volume_7d|volume_7d_reported|volume_30d|volume_30d_reported|is_market_cap_included_in_calc)+(?:,(num_market_pairs|cmc_rank|date_added|tags|platform|max_supply|circulating_supply|total_supply|market_cap_by_total_supply|volume_24h_reported|volume_7d|volume_7d_reported|volume_30d|volume_30d_reported|is_market_cap_included_in_calc)+)*$
       */
      aux?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CryptocurrencyListingsLatestResponseModel1;
  }

  /**
   * @description Returns a paginated list of most recently added cryptocurrencies. **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - Startup - Standard - Professional - Enterprise **Cache / Update frequency:** Every 60 seconds. **Plan credit use:** 1 call credit per 200 cryptocurrencies returned (rounded up) and 1 call credit per `convert` option beyond the first. **CMC equivalent pages:** Our "new" cryptocurrency page [coinmarketcap.com/new/](https://coinmarketcap.com/new) ***NOTE:** Use this endpoint if you need a sorted and paginated list of all recently added cryptocurrencies.*
   * @tags cryptocurrency
   * @name GetV1CryptocurrencyListingsNew
   * @summary Listings New
   * @request GET:/v1/cryptocurrency/listings/new
   */
  export namespace GetV1CryptocurrencyListingsNew {
    export type RequestParams = {};
    export type RequestQuery = {
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
       * Optionally calculate market quotes in up to 120 currencies at once by passing a comma-separated list of cryptocurrency or fiat currency symbols. Each additional convert option beyond the first requires an additional call credit. A list of supported fiat options can be found [here](#section/Standards-and-Conventions). Each conversion is returned in its own "quote" object.
       * @pattern ^[0-9A-Za-z$@\-,]+(?:,[0-9A-Za-z$@\-]+)*$
       */
      convert?: string;
      /**
       * Optionally calculate market quotes by CoinMarketCap ID instead of symbol. This option is identical to `convert` outside of ID format. Ex: convert_id=1,2781 would replace convert=BTC,USD in your query. This parameter cannot be used when `convert` is used.
       * @pattern ^\d+(?:,\d+)*$
       */
      convert_id?: string;
      /** The direction in which to order cryptocurrencies against the specified sort. */
      sort_dir?: 'asc' | 'desc';
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CryptocurrencyListingsNewResponseModel;
  }

  /**
   * @description Lists all active market pairs that CoinMarketCap tracks for a given cryptocurrency or fiat currency. All markets with this currency as the pair base *or* pair quote will be returned. The latest price and volume information is returned for each market. Use the "convert" option to return market values in multiple fiat and cryptocurrency conversions in the same call. **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - ~~Basic~~ - ~~Hobbyist~~ - ~~Startup~~ - Standard - Professional - Enterprise **Cache / Update frequency:** Every 1 minute. **Plan credit use:** 1 call credit per 100 market pairs returned (rounded up) and 1 call credit per `convert` option beyond the first. **CMC equivalent pages:** Our active cryptocurrency markets pages like [coinmarketcap.com/currencies/bitcoin/#markets](https://coinmarketcap.com/currencies/bitcoin/#markets).
   * @tags deprecated
   * @name GetV1CryptocurrencyMarketpairsLatest
   * @summary Market Pairs Latest v1 (deprecated)
   * @request GET:/v1/cryptocurrency/market-pairs/latest
   */
  export namespace GetV1CryptocurrencyMarketpairsLatest {
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
   * @description Returns historical OHLCV (Open, High, Low, Close, Volume) data along with market cap for any cryptocurrency using time interval parameters. Currently daily and hourly OHLCV periods are supported. Volume is not currently supported for hourly OHLCV intervals before 2020-09-22. **Technical Notes** - Only the date portion of the timestamp is used for daily OHLCV so it's recommended to send an ISO date format like "2018-09-19" without time for this "time_period". - One OHLCV quote will be returned for every "time_period" between your "time_start" (exclusive) and "time_end" (inclusive). - If a "time_start" is not supplied, the "time_period" will be calculated in reverse from "time_end" using the "count" parameter which defaults to 10 results. - If "time_end" is not supplied, it defaults to the current time. - If you don't need every "time_period" between your dates you may adjust the frequency that "time_period" is sampled using the "interval" parameter. For example with "time_period" set to "daily" you may set "interval" to "2d" to get the daily OHLCV for every other day. You could set "interval" to "monthly" to get the first daily OHLCV for each month, or set it to "yearly" to get the daily OHLCV value against the same date every year. **Implementation Tips** - If querying for a specific OHLCV date your "time_start" should specify a timestamp of 1 interval prior as "time_start" is an exclusive time parameter (as opposed to "time_end" which is inclusive to the search). This means that when you pass a "time_start" results will be returned for the *next* complete "time_period". For example, if you are querying for a daily OHLCV datapoint for 2018-11-30 your "time_start" should be "2018-11-29". - If only specifying a "count" parameter to return latest OHLCV periods, your "count" should be 1 number higher than the number of results you expect to receive. "Count" defines the number of "time_period" intervals queried, *not* the number of results to return, and this includes the currently active time period which is incomplete when working backwards from current time. For example, if you want the last daily OHLCV value available simply pass "count=2" to skip the incomplete active time period. - This endpoint supports requesting multiple cryptocurrencies in the same call. Please note the API response will be wrapped in an additional object in this case. **Interval Options** There are 2 types of time interval formats that may be used for "time_period" and "interval" parameters. For "time_period" these return aggregate OHLCV data from the beginning to end of each interval period. Apply these time intervals to "interval" to adjust how frequently "time_period" is sampled. The first are calendar year and time constants in UTC time: **"hourly"** - Hour intervals in UTC. **"daily"** - Calendar day intervals for each UTC day. **"weekly"** - Calendar week intervals for each calendar week. **"monthly"** - Calendar month intervals for each calendar month. **"yearly"** - Calendar year intervals for each calendar year. The second are relative time intervals. **"h"**: Get the first quote available every "h" hours (3600 second intervals). Supported hour intervals are: "1h", "2h", "3h", "4h", "6h", "12h". **"d"**: Time periods that repeat every "d" days (86400 second intervals). Supported day intervals are: "1d", "2d", "3d", "7d", "14d", "15d", "30d", "60d", "90d", "365d". Please note that "time_period" currently supports the "daily" and "hourly" options. "interval" supports all interval options. **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - ~~Basic~~ - ~~Hobbyist~~ - Startup (1 month) - Standard (3 months) - Professional (12 months) - Enterprise (Up to 6 years) **Cache / Update frequency:** Latest Daily OHLCV record is available ~5 to ~10 minutes after each midnight UTC. The latest hourly OHLCV record is available 5 minutes after each UTC hour. **Plan credit use:** 1 call credit per 100 OHLCV data points returned (rounded up) and 1 call credit per `convert` option beyond the first. **CMC equivalent pages:** Our historical cryptocurrency data pages like [coinmarketcap.com/currencies/bitcoin/historical-data/](https://coinmarketcap.com/currencies/bitcoin/historical-data/).
   * @tags deprecated
   * @name GetV1CryptocurrencyOhlcvHistorical
   * @summary OHLCV Historical v1 (deprecated)
   * @request GET:/v1/cryptocurrency/ohlcv/historical
   */
  export namespace GetV1CryptocurrencyOhlcvHistorical {
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
   * @description Returns the latest OHLCV (Open, High, Low, Close, Volume) market values for one or more cryptocurrencies for the current UTC day. Since the current UTC day is still active these values are updated frequently. You can find the final calculated OHLCV values for the last completed UTC day along with all historic days using /cryptocurrency/ohlcv/historical. **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - ~~Basic~~ - ~~Hobbyist~~ - Startup - Standard - Professional - Enterprise **Cache / Update frequency:** Every 10 minutes. Additional OHLCV intervals and 1 minute updates will be available in the future. **Plan credit use:** 1 call credit per 100 OHLCV values returned (rounded up) and 1 call credit per `convert` option beyond the first. **CMC equivalent pages:** No equivalent, this data is only available via API.
   * @tags deprecated
   * @name GetV1CryptocurrencyOhlcvLatest
   * @summary OHLCV Latest v1 (deprecated)
   * @request GET:/v1/cryptocurrency/ohlcv/latest
   */
  export namespace GetV1CryptocurrencyOhlcvLatest {
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
   * @description Returns price performance statistics for one or more cryptocurrencies including launch price ROI and all-time high / all-time low. Stats are returned for an `all_time` period by default. UTC `yesterday` and a number of *rolling time periods* may be requested using the `time_period` parameter. Utilize the `convert` parameter to translate values into multiple fiats or cryptocurrencies using historical rates. **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - ~~Basic~~ - ~~Hobbyist~~ - Startup - Standard - Professional - Enterprise **Cache / Update frequency:** Every 60 seconds. **Plan credit use:** 1 call credit per 100 cryptocurrencies returned (rounded up) and 1 call credit per `convert` option beyond the first. **CMC equivalent pages:** The statistics module displayed on cryptocurrency pages like [Bitcoin](https://coinmarketcap.com/currencies/bitcoin/). ***NOTE:** You may also use [/cryptocurrency/ohlcv/historical](#operation/getV1CryptocurrencyOhlcvHistorical) for traditional OHLCV data at historical daily and hourly intervals. You may also use [/v1/cryptocurrency/ohlcv/latest](#operation/getV1CryptocurrencyOhlcvLatest) for OHLCV data for the current UTC day.*
   * @tags deprecated
   * @name GetV1CryptocurrencyPriceperformancestatsLatest
   * @summary Price Performance Stats v1 (deprecated)
   * @request GET:/v1/cryptocurrency/price-performance-stats/latest
   */
  export namespace GetV1CryptocurrencyPriceperformancestatsLatest {
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
   * @description Returns an interval of historic market quotes for any cryptocurrency based on time and interval parameters. **Technical Notes** - A historic quote for every "interval" period between your "time_start" and "time_end" will be returned. - If a "time_start" is not supplied, the "interval" will be applied in reverse from "time_end". - If "time_end" is not supplied, it defaults to the current time. - At each "interval" period, the historic quote that is closest in time to the requested time will be returned. - If no historic quotes are available in a given "interval" period up until the next interval period, it will be skipped. **Implementation Tips** - Want to get the last quote of each UTC day? Don't use "interval=daily" as that returns the first quote. Instead use "interval=24h" to repeat a specific timestamp search every 24 hours and pass ex. "time_start=2019-01-04T23:59:00.000Z" to query for the last record of each UTC day. - This endpoint supports requesting multiple cryptocurrencies in the same call. Please note the API response will be wrapped in an additional object in this case. **Interval Options** There are 2 types of time interval formats that may be used for "interval". The first are calendar year and time constants in UTC time: **"hourly"** - Get the first quote available at the beginning of each calendar hour. **"daily"** - Get the first quote available at the beginning of each calendar day. **"weekly"** - Get the first quote available at the beginning of each calendar week. **"monthly"** - Get the first quote available at the beginning of each calendar month. **"yearly"** - Get the first quote available at the beginning of each calendar year. The second are relative time intervals. **"m"**: Get the first quote available every "m" minutes (60 second intervals). Supported minutes are: "5m", "10m", "15m", "30m", "45m". **"h"**: Get the first quote available every "h" hours (3600 second intervals). Supported hour intervals are: "1h", "2h", "3h", "4h", "6h", "12h". **"d"**: Get the first quote available every "d" days (86400 second intervals). Supported day intervals are: "1d", "2d", "3d", "7d", "14d", "15d", "30d", "60d", "90d", "365d". **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - ~~Basic~~ - Hobbyist (1 month) - Startup (1 month) - Standard (3 month) - Professional (12 months) - Enterprise (Up to 6 years) **Cache / Update frequency:** Every 5 minutes. **Plan credit use:** 1 call credit per 100 historical data points returned (rounded up) and 1 call credit per `convert` option beyond the first. **CMC equivalent pages:** Our historical cryptocurrency charts like [coinmarketcap.com/currencies/bitcoin/#charts](https://coinmarketcap.com/currencies/bitcoin/#charts).
   * @tags deprecated
   * @name GetV1CryptocurrencyQuotesHistorical
   * @summary Quotes Historical v1 (deprecated)
   * @request GET:/v1/cryptocurrency/quotes/historical
   */
  export namespace GetV1CryptocurrencyQuotesHistorical {
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
   * @description Returns the latest market quote for 1 or more cryptocurrencies. Use the "convert" option to return market values in multiple fiat and cryptocurrency conversions in the same call. **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - Basic - Startup - Hobbyist - Standard - Professional - Enterprise **Cache / Update frequency:** Every 60 seconds. **Plan credit use:** 1 call credit per 100 cryptocurrencies returned (rounded up) and 1 call credit per `convert` option beyond the first. **CMC equivalent pages:** Latest market data pages for specific cryptocurrencies like [coinmarketcap.com/currencies/bitcoin/](https://coinmarketcap.com/currencies/bitcoin/). ***NOTE:** Use this endpoint to request the latest quote for specific cryptocurrencies. If you need to request all cryptocurrencies use [/v1/cryptocurrency/listings/latest](#operation/getV1CryptocurrencyListingsLatest) which is optimized for that purpose. The response data between these endpoints is otherwise the same.*
   * @tags deprecated
   * @name GetV1CryptocurrencyQuotesLatest
   * @summary Quotes Latest v1 (deprecated)
   * @request GET:/v1/cryptocurrency/quotes/latest
   */
  export namespace GetV1CryptocurrencyQuotesLatest {
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

  /**
   * @description Returns a paginated list of all trending cryptocurrencies, determined and sorted by the largest price gains or losses. You may sort against any of the following: **percent_change_24h**: 24 hour trading price percentage change for each currency. **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - Startup - Standard - Professional - Enterprise **Cache / Update frequency:** Every 10 minutes. **Plan credit use:** 1 call credit per 200 cryptocurrencies returned (rounded up) and 1 call credit per `convert` option beyond the first. **CMC equivalent pages:** Our cryptocurrency Gainers & Losers page [coinmarketcap.com/gainers-losers/](https://coinmarketcap.com/gainers-losers/).
   * @tags cryptocurrency
   * @name GetV1CryptocurrencyTrendingGainerslosers
   * @summary Trending Gainers & Losers
   * @request GET:/v1/cryptocurrency/trending/gainers-losers
   */
  export namespace GetV1CryptocurrencyTrendingGainerslosers {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * Optionally offset the start (1-based index) of the paginated list of items to return.
       * @min 1
       * @default 1
       */
      start?: number;
      /**
       * Optionally specify the number of results to return. Use this parameter and the "start" parameter to determine your own pagination size.
       * @min 1
       * @max 1000
       * @default 100
       */
      limit?: number;
      /**
       * Adjusts the overall window of time for the biggest gainers and losers.
       * @default "24h"
       */
      time_period?: '1h' | '24h' | '30d' | '7d';
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
       * What field to sort the list of cryptocurrencies by.
       * @default "percent_change_24h"
       */
      sort?: 'percent_change_24h';
      /** The direction in which to order cryptocurrencies against the specified sort. */
      sort_dir?: 'asc' | 'desc';
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CryptocurrencyTrendingGainersLosersResponseModel;
  }

  /**
   * @description Returns a paginated list of all trending cryptocurrency market data, determined and sorted by CoinMarketCap search volume. **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - Startup - Standard - Professional - Enterprise **Cache / Update frequency:** Every 10 minutes. **Plan credit use:** 1 call credit per 200 cryptocurrencies returned (rounded up) and 1 call credit per `convert` option beyond the first. **CMC equivalent pages:** Our cryptocurrency Trending page [coinmarketcap.com/trending-cryptocurrencies/](https://coinmarketcap.com/trending-cryptocurrencies/).
   * @tags cryptocurrency
   * @name GetV1CryptocurrencyTrendingLatest
   * @summary Trending Latest
   * @request GET:/v1/cryptocurrency/trending/latest
   */
  export namespace GetV1CryptocurrencyTrendingLatest {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * Optionally offset the start (1-based index) of the paginated list of items to return.
       * @min 1
       * @default 1
       */
      start?: number;
      /**
       * Optionally specify the number of results to return. Use this parameter and the "start" parameter to determine your own pagination size.
       * @min 1
       * @max 1000
       * @default 100
       */
      limit?: number;
      /**
       * Adjusts the overall window of time for the latest trending coins.
       * @default "24h"
       */
      time_period?: '24h' | '30d' | '7d';
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
    export type ResponseBody = CryptocurrencyTrendingLatestResponseModel;
  }

  /**
   * @description Returns a paginated list of all trending cryptocurrency market data, determined and sorted by traffic to coin detail pages. **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - Startup - Standard - Professional - Enterprise **Cache / Update frequency:** Every 24 hours. **Plan credit use:** 1 call credit per 200 cryptocurrencies returned (rounded up) and 1 call credit per `convert` option beyond the first. **CMC equivalent pages:** The CoinMarketCap “Most Visited” trending list. [coinmarketcap.com/most-viewed-pages/](https://coinmarketcap.com/most-viewed-pages/).
   * @tags cryptocurrency
   * @name GetV1CryptocurrencyTrendingMostvisited
   * @summary Trending Most Visited
   * @request GET:/v1/cryptocurrency/trending/most-visited
   */
  export namespace GetV1CryptocurrencyTrendingMostvisited {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * Optionally offset the start (1-based index) of the paginated list of items to return.
       * @min 1
       * @default 1
       */
      start?: number;
      /**
       * Optionally specify the number of results to return. Use this parameter and the "start" parameter to determine your own pagination size.
       * @min 1
       * @max 1000
       * @default 100
       */
      limit?: number;
      /**
       * Adjusts the overall window of time for most visited currencies.
       * @default "24h"
       */
      time_period?: '24h' | '30d' | '7d';
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
    export type ResponseBody = CryptocurrencyTrendingMostVisitedResponseModel;
  }

  /**
   * @description Returns a paginated list of all cryptocurrency exchanges including the latest aggregate market data for each exchange. Use the "convert" option to return market values in multiple fiat and cryptocurrency conversions in the same call. **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - ~~Basic~~ - ~~Hobbyist~~ - ~~Startup~~ - Standard - Professional - Enterprise **Cache / Update frequency:** Every 1 minute. **Plan credit use:** 1 call credit per 100 exchanges returned (rounded up) and 1 call credit per `convert` option beyond the first. **CMC equivalent pages:** Our latest exchange listing and ranking pages like [coinmarketcap.com/rankings/exchanges/](https://coinmarketcap.com/rankings/exchanges/). ***NOTE:** Use this endpoint if you need a sorted and paginated list of exchanges. If you want to query for market data on a few specific exchanges use /v1/exchange/quotes/latest which is optimized for that purpose. The response data between these endpoints is otherwise the same.* *“exchange_score" will be deprecated on 4 November 2024.* *After this date, the "exchange_score" field return null from these endpoints. We encourage users to review and update their implementations accordingly to avoid any disruptions.*
   * @tags exchange
   * @name GetV1ExchangeListingsLatest
   * @summary Listings Latest
   * @request GET:/v1/exchange/listings/latest
   */
  export namespace GetV1ExchangeListingsLatest {
    export type RequestParams = {};
    export type RequestQuery = {
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
       * What field to sort the list of exchanges by.
       * @default "volume_24h"
       */
      sort?: 'name' | 'volume_24h' | 'volume_24h_adjusted' | 'exchange_score';
      /** The direction in which to order exchanges against the specified sort. */
      sort_dir?: 'asc' | 'desc';
      /**
       * The type of exchange markets to include in rankings. This field is deprecated. Please use "all" for accurate sorting.
       * @default "all"
       */
      market_type?: 'fees' | 'no_fees' | 'all';
      /**
       * The category for this exchange.
       * @default "all"
       */
      category?: 'all' | 'spot' | 'derivatives' | 'dex' | 'lending';
      /**
       * Optionally specify a comma-separated list of supplemental data fields to return. Pass `num_market_pairs,traffic_score,rank,exchange_score,effective_liquidity_24h,date_launched,fiats` to include all auxiliary fields.
       * @default "num_market_pairs,traffic_score,rank,exchange_score,effective_liquidity_24h"
       * @pattern ^(num_market_pairs|traffic_score|rank|exchange_score|effective_liquidity_24h|date_launched|fiats)+(?:,(num_market_pairs|traffic_score|rank|exchange_score|effective_liquidity_24h|date_launched|fiats)+)*$
       */
      aux?: string;
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
    export type ResponseBody = ExchangeListingsLatestResponseModel;
  }

  /**
   * @description Returns all active market pairs that CoinMarketCap tracks for a given exchange. The latest price and volume information is returned for each market. Use the "convert" option to return market values in multiple fiat and cryptocurrency conversions in the same call.' **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - ~~Basic~~ - ~~Hobbyist~~ - ~~Startup~~ - Standard - Professional - Enterprise **Cache / Update frequency:** Every 60 seconds. **Plan credit use:** 1 call credit per 100 market pairs returned (rounded up) and 1 call credit per `convert` option beyond the first. **CMC equivalent pages:** Our exchange level active markets pages like [coinmarketcap.com/exchanges/binance/](https://coinmarketcap.com/exchanges/binance/).
   * @tags exchange
   * @name GetV1ExchangeMarketpairsLatest
   * @summary Market Pairs Latest
   * @request GET:/v1/exchange/market-pairs/latest
   */
  export namespace GetV1ExchangeMarketpairsLatest {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * A CoinMarketCap exchange ID. Example: "1"
       * @pattern ^\d*$
       */
      id?: string;
      /**
       * Alternatively pass an exchange "slug" (URL friendly all lowercase shorthand version of name with spaces replaced with hyphens). Example: "binance". One "id" *or* "slug" is required.
       * @pattern ^[0-9a-z-]*$
       */
      slug?: string;
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
       * Optionally specify a comma-separated list of supplemental data fields to return. Pass `num_market_pairs,category,fee_type,market_url,currency_name,currency_slug,price_quote,effective_liquidity,market_score,market_reputation` to include all auxiliary fields.
       * @default "num_market_pairs,category,fee_type"
       * @pattern ^(num_market_pairs|category|fee_type|market_url|currency_name|currency_slug|price_quote|effective_liquidity|market_score|market_reputation)+(?:,(num_market_pairs|category|fee_type|market_url|currency_name|currency_slug|price_quote|effective_liquidity|market_score|market_reputation)+)*$
       */
      aux?: string;
      /**
       * Optionally include one or more comma-delimited fiat or cryptocurrency IDs to filter market pairs by. For example `?matched_id=2781` would only return BTC markets that matched: "BTC/USD" or "USD/BTC" for the requested exchange. This parameter cannot be used when `matched_symbol` is used.
       * @pattern ^\d+(?:,\d+)*$
       */
      matched_id?: string;
      /**
       * Optionally include one or more comma-delimited fiat or cryptocurrency symbols to filter market pairs by. For example `?matched_symbol=USD` would only return BTC markets that matched: "BTC/USD" or "USD/BTC" for the requested exchange. This parameter cannot be used when `matched_id` is used.
       * @pattern ^[0-9A-Za-z$@\-,]+(?:,[0-9A-Za-z$@\-]+)*$
       */
      matched_symbol?: string;
      /**
       * The category of trading this market falls under. Spot markets are the most common but options include derivatives and OTC.
       * @default "all"
       */
      category?: 'all' | 'spot' | 'derivatives' | 'otc' | 'futures' | 'perpetual';
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
    export type ResponseBody = ExchangeMarketPairsLatestResponseModel;
  }

  /**
   * @description Returns an interval of historic quotes for any exchange based on time and interval parameters. **Technical Notes** - A historic quote for every "interval" period between your "time_start" and "time_end" will be returned. - If a "time_start" is not supplied, the "interval" will be applied in reverse from "time_end". - If "time_end" is not supplied, it defaults to the current time. - At each "interval" period, the historic quote that is closest in time to the requested time will be returned. - If no historic quotes are available in a given "interval" period up until the next interval period, it will be skipped. - This endpoint supports requesting multiple exchanges in the same call. Please note the API response will be wrapped in an additional object in this case. **Interval Options** There are 2 types of time interval formats that may be used for "interval". The first are calendar year and time constants in UTC time: **"hourly"** - Get the first quote available at the beginning of each calendar hour. **"daily"** - Get the first quote available at the beginning of each calendar day. **"weekly"** - Get the first quote available at the beginning of each calendar week. **"monthly"** - Get the first quote available at the beginning of each calendar month. **"yearly"** - Get the first quote available at the beginning of each calendar year. The second are relative time intervals. **"m"**: Get the first quote available every "m" minutes (60 second intervals). Supported minutes are: "5m", "10m", "15m", "30m", "45m". **"h"**: Get the first quote available every "h" hours (3600 second intervals). Supported hour intervals are: "1h", "2h", "3h", "4h", "6h", "12h". **"d"**: Get the first quote available every "d" days (86400 second intervals). Supported day intervals are: "1d", "2d", "3d", "7d", "14d", "15d", "30d", "60d", "90d", "365d". **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - ~~Basic~~ - Hobbyist (1 month) - Startup (1 month) - Standard (3 month) - Professional (Up to 12 months) - Enterprise (Up to 6 years) **Note:** You may use the /exchange/map endpoint to receive a list of earliest historical dates that may be fetched for each exchange as  `first_historical_data`. This timestamp will either be the date CoinMarketCap first started tracking the exchange or 2018-04-26T00:45:00.000Z, the earliest date this type of historical data is available for. **Cache / Update frequency:** Every 5 minutes. **Plan credit use:** 1 call credit per 100 historical data points returned (rounded up) and 1 call credit per `convert` option beyond the first. **CMC equivalent pages:** No equivalent, this data is only available via API outside of our volume sparkline charts in [coinmarketcap.com/rankings/exchanges/](https://coinmarketcap.com/rankings/exchanges/).
   * @tags exchange
   * @name GetV1ExchangeQuotesHistorical
   * @summary Quotes Historical
   * @request GET:/v1/exchange/quotes/historical
   */
  export namespace GetV1ExchangeQuotesHistorical {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * One or more comma-separated exchange CoinMarketCap ids. Example: "24,270"
       * @pattern ^\d+(?:,\d+)*$
       */
      id?: string;
      /**
       * Alternatively, one or more comma-separated exchange names in URL friendly shorthand "slug" format (all lowercase, spaces replaced with hyphens). Example: "binance,kraken". At least one "id" *or* "slug" is required.
       * @pattern ^[0-9a-z-]+(?:,[0-9a-z-]+)*$
       */
      slug?: string;
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
       * @pattern ^\d+(?:,\d+)*$
       */
      convert_id?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ExchangeHistoricalQuotesResponseModel;
  }

  /**
   * @description Returns the latest aggregate market data for 1 or more exchanges. Use the "convert" option to return market values in multiple fiat and cryptocurrency conversions in the same call. **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - ~~Basic~~ - ~~Hobbyist~~ - ~~Startup~~ - Standard - Professional - Enterprise **Cache / Update frequency:** Every 60 seconds. **Plan credit use:** 1 call credit per 100 exchanges returned (rounded up) and 1 call credit per `convert` option beyond the first. **CMC equivalent pages:** Latest market data summary for specific exchanges like [coinmarketcap.com/rankings/exchanges/](https://coinmarketcap.com/rankings/exchanges/). ***NOTE:** “exchange_score" will be deprecated on 4 November 2024.* *After this date, the "exchange_score" field return null from these endpoints. We encourage users to review and update their implementations accordingly to avoid any disruptions.*
   * @tags exchange
   * @name GetV1ExchangeQuotesLatest
   * @summary Quotes Latest
   * @request GET:/v1/exchange/quotes/latest
   */
  export namespace GetV1ExchangeQuotesLatest {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * One or more comma-separated CoinMarketCap exchange IDs. Example: "1,2"
       * @pattern ^\d+(?:,\d+)*$
       */
      id?: string;
      /**
       * Alternatively, pass a comma-separated list of exchange "slugs" (URL friendly all lowercase shorthand version of name with spaces replaced with hyphens). Example: "binance,gdax". At least one "id" *or* "slug" is required.
       * @pattern ^[0-9a-z-]+(?:,[0-9a-z-]+)*$
       */
      slug?: string;
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
       * Optionally specify a comma-separated list of supplemental data fields to return. Pass `num_market_pairs,traffic_score,rank,exchange_score,liquidity_score,effective_liquidity_24h` to include all auxiliary fields.
       * @default "num_market_pairs,traffic_score,rank,exchange_score,liquidity_score,effective_liquidity_24h"
       * @pattern ^(num_market_pairs|traffic_score|rank|exchange_score|liquidity_score|effective_liquidity_24h)+(?:,(num_market_pairs|traffic_score|rank|exchange_score|liquidity_score|effective_liquidity_24h)+)*$
       */
      aux?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ExchangeQuotesLatestResponseModel;
  }

  /**
   * @description Returns an interval of historical global cryptocurrency market metrics based on time and interval parameters. **Technical Notes** - A historic quote for every "interval" period between your "time_start" and "time_end" will be returned. - If a "time_start" is not supplied, the "interval" will be applied in reverse from "time_end". - If "time_end" is not supplied, it defaults to the current time. - At each "interval" period, the historic quote that is closest in time to the requested time will be returned. - If no historic quotes are available in a given "interval" period up until the next interval period, it will be skipped. **Interval Options** There are 2 types of time interval formats that may be used for "interval". The first are calendar year and time constants in UTC time: **"hourly"** - Get the first quote available at the beginning of each calendar hour. **"daily"** - Get the first quote available at the beginning of each calendar day. **"weekly"** - Get the first quote available at the beginning of each calendar week. **"monthly"** - Get the first quote available at the beginning of each calendar month. **"yearly"** - Get the first quote available at the beginning of each calendar year. The second are relative time intervals. **"m"**: Get the first quote available every "m" minutes (60 second intervals). Supported minutes are: "5m", "10m", "15m", "30m", "45m". **"h"**: Get the first quote available every "h" hours (3600 second intervals). Supported hour intervals are: "1h", "2h", "3h", "4h", "6h", "12h". **"d"**: Get the first quote available every "d" days (86400 second intervals). Supported day intervals are: "1d", "2d", "3d", "7d", "14d", "15d", "30d", "60d", "90d", "365d". **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - ~~Basic~~ - Hobbyist (1 month) - Startup (1 month) - Standard (3 month) - Professional (12 months) - Enterprise (Up to 6 years) **Cache / Update frequency:** Every 5 minutes. **Plan credit use:** 1 call credit per 100 historical data points returned (rounded up). **CMC equivalent pages:** Our Total Market Capitalization global chart [coinmarketcap.com/charts/](https://coinmarketcap.com/charts/).
   * @tags global-metrics
   * @name GetV1GlobalmetricsQuotesHistorical
   * @summary Quotes Historical
   * @request GET:/v1/global-metrics/quotes/historical
   */
  export namespace GetV1GlobalmetricsQuotesHistorical {
    export type RequestParams = {};
    export type RequestQuery = {
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
       * @default "1d"
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
       * @pattern ^\d+(?:,\d+)*$
       */
      convert_id?: string;
      /**
       * Optionally specify a comma-separated list of supplemental data fields to return. Pass `btc_dominance,eth_dominance,active_cryptocurrencies,active_exchanges,active_market_pairs,total_volume_24h,total_volume_24h_reported,altcoin_market_cap,altcoin_volume_24h,altcoin_volume_24h_reported,search_interval` to include all auxiliary fields.
       * @default "btc_dominance,eth_dominance,active_cryptocurrencies,active_exchanges,active_market_pairs,total_volume_24h,total_volume_24h_reported,altcoin_market_cap,altcoin_volume_24h,altcoin_volume_24h_reported"
       * @pattern ^(btc_dominance|eth_dominance|active_cryptocurrencies|active_exchanges|active_market_pairs|total_volume_24h|total_volume_24h_reported|altcoin_market_cap|altcoin_volume_24h|altcoin_volume_24h_reported|search_interval)+(?:,(btc_dominance|eth_dominance|active_cryptocurrencies|active_exchanges|active_market_pairs|total_volume_24h|total_volume_24h_reported|altcoin_market_cap|altcoin_volume_24h|altcoin_volume_24h_reported|search_interval)+)*$
       */
      aux?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GlobalMetricsQuotesHistoricResponseModel;
  }

  /**
   * @description Returns the latest global cryptocurrency market metrics. Use the "convert" option to return market values in multiple fiat and cryptocurrency conversions in the same call. **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - Basic - Hobbyist - Startup - Standard - Professional - Enterprise **Cache / Update frequency:** Every 5 minute. **Plan credit use:** 1 call credit per call and 1 call credit per `convert` option beyond the first. **CMC equivalent pages:** The latest aggregate global market stats ticker across all CMC pages like [coinmarketcap.com](https://coinmarketcap.com/).
   * @tags global-metrics
   * @name GetV1GlobalmetricsQuotesLatest
   * @summary Quotes Latest
   * @request GET:/v1/global-metrics/quotes/latest
   */
  export namespace GetV1GlobalmetricsQuotesLatest {
    export type RequestParams = {};
    export type RequestQuery = {
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
    export type ResponseBody = GlobalMetricsQuotesLatestResponseModel;
  }

  /**
   * @description Returns a paginated list of FCAS scores for all cryptocurrencies currently supported by FCAS. FCAS ratings are on a 0-1000 point scale with a corresponding letter grade and is updated once a day at UTC midnight. FCAS stands for Fundamental Crypto Asset Score, a single, consistently comparable value for measuring cryptocurrency project health. FCAS measures User Activity, Developer Behavior and Market Maturity and is provided by <a rel="noopener noreferrer" href="https://www.flipsidecrypto.com/" target="_blank">FlipSide Crypto</a>. Find out more about <a rel="noopener noreferrer" href="https://www.flipsidecrypto.com/fcas-explained" target="_blank">FCAS methodology</a>. Users interested in FCAS historical data including sub-component scoring may inquire through our <a rel="noopener noreferrer" href="https://pro.coinmarketcap.com/contact-data/" target="_blank">CSV Data Delivery</a> request form. *Disclaimer: Ratings that are calculated by third party organizations and are not influenced or endorsed by CoinMarketCap in any way.* **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - Basic - Hobbyist - Startup - Standard - Professional - Enterprise **Cache / Update frequency:** Once a day at UTC midnight. **Plan credit use:** 1 call credit per 100 FCAS scores returned (rounded up). **CMC equivalent pages:** The FCAS ratings available under our cryptocurrency ratings tab like [coinmarketcap.com/currencies/bitcoin/#ratings](https://coinmarketcap.com/currencies/bitcoin/#ratings). ***NOTE:** Use this endpoint to request the latest FCAS score for all supported cryptocurrencies at the same time. If you require FCAS for only specific cryptocurrencies use [/v1/partners/flipside-crypto/fcas/quotes/latest](#operation/getV1PartnersFlipsidecryptoFcasQuotesLatest) which is optimized for that purpose. The response data between these endpoints is otherwise the same.*
   * @tags deprecated
   * @name GetV1PartnersFlipsidecryptoFcasListingsLatest
   * @summary FCAS Listings Latest (deprecated)
   * @request GET:/v1/partners/flipside-crypto/fcas/listings/latest
   */
  export namespace GetV1PartnersFlipsidecryptoFcasListingsLatest {
    export type RequestParams = {};
    export type RequestQuery = {
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
       * Optionally specify a comma-separated list of supplemental data fields to return. Pass `point_change_24h,percent_change_24h` to include all auxiliary fields.
       * @default "point_change_24h,percent_change_24h"
       * @pattern ^(point_change_24h|percent_change_24h)+(?:,(point_change_24h|percent_change_24h)+)*$
       */
      aux?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = FCASListingsLatestResponseModel;
  }

  /**
   * @description Returns the latest FCAS score for 1 or more cryptocurrencies. FCAS ratings are on a 0-1000 point scale with a corresponding letter grade and is updated once a day at UTC midnight. FCAS stands for Fundamental Crypto Asset Score, a single, consistently comparable value for measuring cryptocurrency project health. FCAS measures User Activity, Developer Behavior and Market Maturity and is provided by <a rel="noopener noreferrer" href="https://www.flipsidecrypto.com/" target="_blank">FlipSide Crypto</a>. Find out more about <a rel="noopener noreferrer" href="https://www.flipsidecrypto.com/fcas-explained" target="_blank">FCAS methodology</a>. Users interested in FCAS historical data including sub-component scoring may inquire through our <a rel="noopener noreferrer" href="https://pro.coinmarketcap.com/contact-data/" target="_blank">CSV Data Delivery</a> request form. *Disclaimer: Ratings that are calculated by third party organizations and are not influenced or endorsed by CoinMarketCap in any way.* **This endpoint is available on the following <a href="https://coinmarketcap.com/api/features" target="_blank">API plans</a>:** - Basic - Hobbyist - Startup - Standard - Professional - Enterprise **Cache / Update frequency:** Once a day at UTC midnight. **Plan credit use:** 1 call credit per 100 FCAS scores returned (rounded up). **CMC equivalent pages:** The FCAS ratings available under our cryptocurrency ratings tab like [coinmarketcap.com/currencies/bitcoin/#ratings](https://coinmarketcap.com/currencies/bitcoin/#ratings). ***NOTE:** Use this endpoint to request the latest FCAS score for specific cryptocurrencies. If you require FCAS for all supported cryptocurrencies use [/v1/partners/flipside-crypto/fcas/listings/latest](#operation/getV1PartnersFlipsidecryptoFcasListingsLatest) which is optimized for that purpose. The response data between these endpoints is otherwise the same.*
   * @tags deprecated
   * @name GetV1PartnersFlipsidecryptoFcasQuotesLatest
   * @summary FCAS Quotes Latest (deprecated)
   * @request GET:/v1/partners/flipside-crypto/fcas/quotes/latest
   */
  export namespace GetV1PartnersFlipsidecryptoFcasQuotesLatest {
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
       * Optionally specify a comma-separated list of supplemental data fields to return. Pass `point_change_24h,percent_change_24h` to include all auxiliary fields.
       * @default "point_change_24h,percent_change_24h"
       * @pattern ^(point_change_24h|percent_change_24h)+(?:,(point_change_24h|percent_change_24h)+)*$
       */
      aux?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = FCASQuoteLatestResponseModel;
  }
}
