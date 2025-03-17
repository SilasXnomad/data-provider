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

export interface Assets {
  /**
   * The unique CoinMarketCap ID for this cryptocurrency.
   * @example 1
   */
  id: number;
  /**
   * The name of this cryptocurrency.
   * @example "Bitcoin"
   */
  name: string;
  /**
   * The ticker symbol for this cryptocurrency.
   * @example "BTC"
   */
  symbol: string;
  /**
   * The web URL friendly shorthand version of this cryptocurrency name.
   * @example "bitcoin"
   */
  slug: string;
}

export interface Status {
  /**
   * Current ISO 8601 timestamp on the server.
   * @format date
   * @example "2018-06-02T22:51:28.209Z"
   */
  timestamp: string;
  /**
   * An internal error code for the current error. If a unique platform error code is not available the HTTP status code is returned.
   * @default 400
   * @example 400
   */
  error_code: number;
  /**
   * An error message to go along with the error code.
   * @example "Invalid value for \"id\""
   */
  error_message: string;
  /**
   * Number of milliseconds taken to generate this response
   * @example 10
   */
  elapsed: number;
  /**
   * Number of API call credits required for this call. Always 0 for errors.
   * @example 0
   */
  credit_count: number;
}

export interface Coin {
  /**
   * The unique CoinMarketCap ID for this asset.
   * @example 2781
   */
  id: number;
  /**
   * The name of this cryptocurrency.
   * @example "Bitcoin"
   */
  name: string;
  /**
   * The ticker symbol for this cryptocurrency.
   * @example "BTC"
   */
  symbol: string;
  /**
   * The web URL friendly shorthand version of this cryptocurrency name.
   * @example "bitcoin"
   */
  slug: string;
}

/**
 * Array of tags associated with this cryptocurrency. Currently only a mineable tag will be returned if the cryptocurrency is mineable. Additional tags will be returned in the future.
 * @example ["mineable"]
 */
export type Tags = string[];

/** Metadata about the parent cryptocurrency platform this cryptocurrency belongs to if it is a token, otherwise null. */
export interface Platform {
  /**
   * The unique CoinMarketCap ID for the parent platform cryptocurrency.
   * @example 1
   */
  id: number;
  /**
   * The name of the parent platform cryptocurrency.
   * @example "Ethereum"
   */
  name: string;
  /**
   * The ticker symbol for the parent platform cryptocurrency.
   * @example "ETH"
   */
  symbol: string;
  /**
   * The web URL friendly shorthand version of the parent platform cryptocurrency name.
   * @example "ethereum"
   */
  slug: string;
  /**
   * The token address on the parent platform cryptocurrency.
   * @example "0xe41d2489571d322189246dafa5ebde1f4699f498"
   */
  token_address: string;
}

/**
 * Array of self reported tags associated with this cryptocurrency.
 * @example ["Store Of Value","Play To Earn"]
 */
export type SelfReportedTags = string[];

/**
 * Array of website URLs.
 * @example ["https://bitcoin.org/"]
 */
export type Website = string[];

/**
 * Array of white paper or technical documentation URLs.
 * @example ["https://bitcoin.org/bitcoin.pdf"]
 */
export type TechnicalDoc = string[];

/**
 * Array of block explorer URLs.
 * @example ["https://blockchain.coinmarketcap.com/chain/bitcoin","https://blockchain.info/","https://live.blockcypher.com/btc/"]
 */
export type Explorer = string[];

/**
 * Array of source code URLs.
 * @example ["https://github.com/bitcoin/"]
 */
export type SourceCode = string[];

/**
 * Array of message board URLs.
 * @example ["https://bitcointalk.org"]
 */
export type MessageBoard = string[];

/**
 * Array of chat service URLs.
 * @example []
 */
export type Chat = string[];

/**
 * Array of announcement URLs.
 * @example []
 */
export type Announcement = string[];

/**
 * Array of Reddit community page URLs.
 * @example ["https://reddit.com/r/bitcoin"]
 */
export type Reddit = string[];

/**
 * Array of official twitter profile URLs.
 * @example ["https://twitter.com/Bitcoin"]
 */
export type Twitter = string[];

export type Data = ExchangeAssetsWalletsResponseModel[];

/**
 * Official blog URLs.
 * @example ["https://blog.kraken.com/"]
 */
export type Blog = string[];

/**
 * Official web URLs covering exchange fees.
 * @example ["https://www.gdax.com/fees"]
 */
export type Fee = string[];

/** Object containing rate limit and daily/monthly credit limit details for your API Key. */
export interface Plan {
  /**
   * The number of API credits that can be used each monthly period before receiving a HTTP 429 rate limit error. This limit is based on the API plan tier.
   * @example 120000
   */
  credit_limit_monthly: number;
  /**
   * A human readable countdown of when the API key monthly credit limit will reset back to 0.
   * @example "In 3 days, 19 hours, 56 minutes"
   */
  credit_limit_monthly_reset: string;
  /**
   * Timestamp (ISO 8601) of when the monthly credit limit will reset. This is based on your billing plan activation date for premium subscription based keys or calendar month UTC midnight for free Basic plan keys.
   * @format date
   * @example "2019-09-01T00:00:00.000Z"
   */
  credit_limit_monthly_reset_timestamp: string;
  /**
   * The number of API calls that can be made within the same UTC minute before receiving a HTTP 429 rate limit error. This limit is based on the API plan tier.
   * @example 60
   */
  rate_limit_minute: number;
}

/** Usage stats around the minute based rate limit. */
export interface CurrentMinute {
  /**
   * The number of API calls that have been made in the current UTC minute.
   * @example 1
   */
  requests_made: number;
  /**
   * The number of remaining API calls that can be made in the current UTC minute before receiving a HTTP 429 rate limit error. This limit resets each UTC minute.
   * @example 59
   */
  requests_left: number;
}

/** Usage stats around the daily API credit limit. */
export interface CurrentDay {
  /**
   * The number of API credits used during the current daily period.
   * @example 1
   */
  credits_used: number;
  /**
   * The number of remaining API credits that can be used during the current daily period before receiving a HTTP 429 rate limit error. This limit resets at the end of each daily period.
   * @example 3999
   */
  credits_left: number;
}

/** Usage stats around the monthly API credit limit. */
export interface CurrentMonth {
  /**
   * The number of API credits used during the current monthly period.
   * @example 1
   */
  credits_used: number;
  /**
   * The number of remaining API credits that can be used during the current monthly period before receiving a HTTP 429 rate limit error. This limit resets at the end of each monthly period.
   * @example 119999
   */
  credits_left: number;
}

/** Object containing live usage details about your API Key. */
export interface Usage {
  /** Usage stats around the minute based rate limit. */
  current_minute: CurrentMinute;
  /** Usage stats around the daily API credit limit. */
  current_day: CurrentDay;
  /** Usage stats around the monthly API credit limit. */
  current_month: CurrentMonth;
}

export interface Owner {
  nickname?: string;
  avatar_url?: string;
}

export type Photos = string[];

export type Currencies = Model3[];

export type List = Model4[];

export interface Model1 {
  cover?: string;
  title?: string;
  subtitle?: string;
  source_name?: string;
  source_url?: string;
  type?: string;
  assets?: Assets;
  /**
   * Timestamp (ISO 8601) of the time this was created.
   * @format date
   * @example "2018-06-02T23:59:59.999Z"
   */
  created_at?: string;
  /**
   * Timestamp (ISO 8601) of the time this was released.
   * @format date
   * @example "2018-06-02T23:59:59.999Z"
   */
  released_at?: string;
}

/** Array of content objects. */
export type ContentLatestResultsArray = Model1[];

/** Standardized status object for API calls. */
export interface APIStatusObject {
  /**
   * Current timestamp (ISO 8601) on the server.
   * @format date
   * @example "2025-03-14T08:00:40.521Z"
   */
  timestamp: string;
  /** An internal error code for the current error. If a unique platform error code is not available the HTTP status code is returned. `null` is returned if there is no error. */
  error_code: number;
  /**
   * An error message to go along with the error code.
   * @example ""
   */
  error_message: string;
  /**
   * Number of milliseconds taken to generate this response.
   * @example 10
   */
  elapsed: number;
  /**
   * Number of API call credits that were used for this call.
   * @example 1
   */
  credit_count: number;
  /**
   * Optional notice about API key information.
   * @example ""
   */
  notice?: string;
}

/** @example {"data":[{"cover":"https://academy-public.coinmarketcap.com/optimized-uploads/0aec0502868046419ceace229f92601f.gif","assets":[{"id":1027,"name":"Ethereum","symbol":"ETH","slug":"ethereum"}],"created_at":"2021-05-05T00:00:00Z","released_at":"2021-05-05T00:00:00Z","title":"Article Title","subtitle":"Article Subtitle","type":"alexandria","source_name":"Connor Sephton","source_url":"https://coinmarketcap.com/alexandria/article/coinmarketcap-news-august-9-u-s-comes-for-tornado-cash"}],"status":{"timestamp":"2018-06-02T22:51:28.209Z","error_code":0,"error_message":"","elapsed":10,"credit_count":1}} */
export interface ContentLatestResponseModel {
  /** Array of content objects. */
  data: any[];
  /** Standardized status object for API calls. */
  status: APIStatusObject;
}

/** Bad Request */
export interface HTTPStatus400ErrorObject {
  status?: Status;
}

export interface Status1 {
  /**
   * Current ISO 8601 timestamp on the server.
   * @format date
   * @example "2018-06-02T22:51:28.209Z"
   */
  timestamp: string;
  /**
   * An internal error code for the current error. If a unique platform error code is not available the HTTP status code is returned.
   * @default 401
   * @example 1002
   */
  error_code: number;
  /**
   * An error message to go along with the error code.
   * @example "API key missing."
   */
  error_message: string;
  /**
   * Number of milliseconds taken to generate this response
   * @example 10
   */
  elapsed: number;
  /**
   * Number of API call credits required for this call. Always 0 for errors.
   * @example 0
   */
  credit_count: number;
}

/** Unauthorized */
export interface HTTPStatus401ErrorObject {
  status?: Status1;
}

export interface Status2 {
  /**
   * Current ISO 8601 timestamp on the server.
   * @format date
   * @example "2018-06-02T22:51:28.209Z"
   */
  timestamp: string;
  /**
   * An internal error code for the current error. If a unique platform error code is not available the HTTP status code is returned.
   * @default 403
   * @example 1006
   */
  error_code: number;
  /**
   * An error message to go along with the error code.
   * @example "Your API Key subscription plan doesn't support this endpoint."
   */
  error_message: string;
  /**
   * Number of milliseconds taken to generate this response
   * @example 10
   */
  elapsed: number;
  /**
   * Number of API call credits required for this call. Always 0 for errors.
   * @example 0
   */
  credit_count: number;
}

/** Forbidden */
export interface HTTPStatus403ErrorObject {
  status?: Status2;
}

export interface Status3 {
  /**
   * Current ISO 8601 timestamp on the server.
   * @format date
   * @example "2018-06-02T22:51:28.209Z"
   */
  timestamp: string;
  /**
   * An internal error code string for the current error. If a unique platform error code is not available the HTTP status code is returned.
   * @default 429
   * @example 1008
   */
  error_code: number;
  /**
   * An error message to go along with the error code.
   * @example "You've exceeded your API Key's HTTP request rate limit. Rate limits reset every minute."
   */
  error_message: string;
  /**
   * Number of milliseconds taken to generate this response
   * @example 10
   */
  elapsed: number;
  /**
   * Number of API call credits required for this call. Always 0 for errors.
   * @example 0
   */
  credit_count: number;
}

/** Too Many Requests */
export interface HTTPStatus429ErrorObject {
  status?: Status3;
}

export interface Status4 {
  /**
   * Current ISO 8601 timestamp on the server.
   * @format date
   * @example "2018-06-02T22:51:28.209Z"
   */
  timestamp: string;
  /**
   * An internal error code string for the current error. If a unique platform error code is not available the HTTP status code is returned.
   * @default 500
   */
  error_code: 500;
  /**
   * An error message to go along with the error code.
   * @example "An internal server error occurred"
   */
  error_message: string;
  /**
   * Number of milliseconds taken to generate this response
   * @example 10
   */
  elapsed: number;
  /**
   * Number of API call credits required for this call. Always 0 for errors.
   * @example 0
   */
  credit_count: number;
}

/** Internal Server Error */
export interface HTTPStatus500ErrorObject {
  status?: Status4;
}

/** A results object for the airdrop requested. */
export interface AirdropAirdropObject {
  /**
   * The unique ID of the airdrop
   * @example "60e59b99c8ca1d58514a2322"
   */
  id: string;
  /**
   * The project name
   * @example "DeRace Airdrop"
   */
  project_name?: string;
  /**
   * The description of the airdrop.
   * @example "For 7 days starting from August 15, 2021, CoinMarketCap will host an Airdrop event..."
   */
  description?: string;
  /**
   * The current status of the airdrop.
   * @example "UPCOMING"
   */
  status?: string;
  coin?: Coin;
  /**
   * Timestamp (ISO 8601) of when this cryptocurrency was added to CoinMarketCap.
   * @format date
   * @example "2013-04-28T00:00:00.000Z"
   */
  start_date: string;
  /**
   * Timestamp (ISO 8601) of when this cryptocurrency was added to CoinMarketCap.
   * @format date
   * @example "2013-04-28T00:00:00.000Z"
   */
  end_date: string;
  /** @example 10000 */
  total_prize?: number;
  /** @example 55 */
  winner_count?: number;
  /**
   * A link to the airdrop information.
   * @example "https://coinmarketcap.com/currencies/derace/airdrop"
   */
  link?: string;
}

/**
 * Results of your query returned as an object map.
 * @example {"id":"60e59b99c8ca1d58514a2322","project_name":"DeRace Airdrop","description":"For 7 days starting from August 15, 2021, CoinMarketCap will host an Airdrop event...","status":"UPCOMING","coin":{"id":10744,"name":"DeRace","slug":"derace","symbol":"DERC"},"start_date":"2021-06-01T22:11:00.000Z","end_date":"2021-07-01T22:11:00.000Z","total_prize":20000000000,"winner_count":1000,"link":"https://coinmarketcap.com/currencies/derace/airdrop/"}
 */
export interface AirdropResultsMap {
  /** A results object for the airdrop requested. */
  $key: AirdropAirdropObject;
}

export interface AirdropResponseModel {
  /** Results of your query returned as an object map. */
  data: AirdropResultsMap;
  /** Standardized status object for API calls. */
  status?: APIStatusObject;
}

/** Airdrop object for each result */
export interface AirdropsAirdropObject {
  /**
   * The unique ID of the airdrop
   * @example "60e59b99c8ca1d58514a2322"
   */
  id: string;
  /**
   * The project name
   * @example "DeRace Airdrop"
   */
  project_name?: string;
  /**
   * The description of the airdrop.
   * @example "For 7 days starting from August 15, 2021, CoinMarketCap will host an Airdrop event..."
   */
  description?: string;
  /**
   * The current status of the airdrop.
   * @example "UPCOMING"
   */
  status?: string;
  coin?: Coin;
  /**
   * Timestamp (ISO 8601) of when this cryptocurrency was added to CoinMarketCap.
   * @format date
   * @example "2013-04-28T00:00:00.000Z"
   */
  start_date: string;
  /**
   * Timestamp (ISO 8601) of when this cryptocurrency was added to CoinMarketCap.
   * @format date
   * @example "2013-04-28T00:00:00.000Z"
   */
  end_date: string;
  /** @example 10000 */
  total_prize?: number;
  /** @example 55 */
  winner_count?: number;
  /**
   * A link to the airdrop information.
   * @example "https://coinmarketcap.com/currencies/derace/airdrop"
   */
  link?: string;
}

/** Array of airdrop object results. */
export type AirdropsAirdropArray = AirdropsAirdropObject[];

/** @example {"data":[{"id":"60e59b99c8ca1d58514a2322","project_name":"DeRace Airdrop","description":"For 7 days starting from August 15, 2021, CoinMarketCap will host an Airdrop event...","status":"UPCOMING","coin":{"id":10744,"name":"DeRace","slug":"derace","symbol":"DERC"},"start_date":"2021-06-01T22:11:00.000Z","end_date":"2021-07-01T22:11:00.000Z","total_prize":20000000000,"winner_count":1000,"link":"https://coinmarketcap.com/currencies/derace/airdrop/"}],"status":{"timestamp":"2021-08-01T22:51:28.209Z","error_code":0,"error_message":"","elapsed":3,"credit_count":1}} */
export interface AirdropsResponseModel {
  /** Array of airdrop object results. */
  data: any[];
  /** Standardized status object for API calls. */
  status?: APIStatusObject;
}

/** A results object for each category requested. The map key being the id used in the request. */
export interface CategoriesCategoryObject {
  /**
   * The unique ID of the category
   * @example 2781
   */
  id: number;
  /**
   * The name of the category
   * @example "A16Z Portfolio"
   */
  name?: string;
  /**
   * The title of the category
   * @example "A16Z Portfolio"
   */
  title?: string;
  /**
   * The description of the category
   * @example "A16Z Portfolio"
   */
  description?: string;
  /** @example 12 */
  num_tokens?: number;
  /**
   * Average price change of coins within this categry
   * @example 0.03
   */
  avg_price_change: number;
  /**
   * Market cap of coins within this categry
   * @example 121020662982
   */
  market_cap: number;
  /**
   * Market cap change of coins within this categry
   * @example 0.03
   */
  market_cap_change: number;
  /**
   * Volume of coins within this categry
   * @example 121020662982
   */
  volume: number;
  /**
   * Volume change of coins within this categry
   * @example 0.03
   */
  volume_change: number;
  /**
   * Timestamp (ISO 8601) of when this was last updated.
   * @format date
   * @example "2013-04-28T00:00:00.000Z"
   */
  last_updated: string;
}

/** Results of your query returned as an object map. */
export type CategoriesResultsMap = CategoriesCategoryObject[];

/** @example {"data":[{"id":"605e2ce9d41eae1066535f7c","name":"A16Z Portfolio","title":"A16Z Portfolio","description":"A16Z Portfolio","num_tokens":12,"avg_price_change":0.61305157,"market_cap":29429241867.031097,"market_cap_change":3.049044106496,"volume":4103706600.0391645,"volume_change":-10.538325849854,"last_updated":1616488708878}],"status":{"timestamp":"2021-08-01T22:51:28.209Z","error_code":0,"error_message":"","elapsed":3,"credit_count":1}} */
export interface CategoriesResponseModel {
  /** Results of your query returned as an object map. */
  data: any[];
  /** Standardized status object for API calls. */
  status?: APIStatusObject;
}

/** A market quote in the currency conversion option. */
export interface CryptocurrencyQuoteObject {
  /**
   * Price in the specified currency for this historical.
   * @example 7139.82
   */
  price: number;
  /**
   * Rolling 24 hour adjusted volume in the specified currency.
   * @example 4885880000
   */
  volume_24h: number;
  /**
   * Rolling 24 hour reported volume in the specified currency. *This field is only returned if requested through the `aux` request parameter.*
   * @example 4885880000
   */
  volume_24h_reported?: number;
  /**
   * Rolling 7 day adjusted volume in the specified currency. *This field is only returned if requested through the `aux` request parameter.*
   * @example 4885880000
   */
  volume_7d?: number;
  /**
   * Rolling 7 day reported volume in the specified currency. *This field is only returned if requested through the `aux` request parameter.*
   * @example 4885880000
   */
  volume_7d_reported?: number;
  /**
   * Rolling 30 day adjusted volume in the specified currency. *This field is only returned if requested through the `aux` request parameter.*
   * @example 4885880000
   */
  volume_30d?: number;
  /**
   * Rolling 30 day reported volume in the specified currency. *This field is only returned if requested through the `aux` request parameter.*
   * @example 4885880000
   */
  volume_30d_reported?: number;
  /**
   * Market cap in the specified currency.
   * @example 121020662982
   */
  market_cap: number;
  /**
   * 1 hour change in the specified currency.
   * @example 0.03
   */
  percent_change_1h: number;
  /**
   * 24 hour change in the specified currency.
   * @example 5.75
   */
  percent_change_24h: number;
  /**
   * 7 day change in the specified currency.
   * @example -19.64
   */
  percent_change_7d: number;
  /**
   * Timestamp (ISO 8601) of when the conversion currency's current value was referenced.
   * @format date
   * @example "2018-06-02T23:59:59.999Z"
   */
  last_updated: string;
}

/**
 * A map of market quotes in different currency conversions. The default map included is USD.
 * @example {"USD":{"price":9283.92,"volume_24h":7155680000,"percent_change_1h":-0.152774,"percent_change_24h":0.518894,"percent_change_7d":0.986573,"market_cap":158055024432,"last_updated":"2018-08-09T22:53:32.000Z"},"BTC":{"price":1,"volume_24h":772012,"percent_change_1h":0,"percent_change_24h":0,"percent_change_7d":0,"market_cap":17024600,"last_updated":"2018-08-09T22:53:32.000Z"}}
 */
export interface CryptocurrencyQuoteMap {
  /** A market quote in the currency conversion option. */
  $key: CryptocurrencyQuoteObject;
}

/** A cryptocurrency object for every cryptocurrency that matched list options. */
export interface CryptocurrencyCryptocurrencyObject {
  /**
   * The unique CoinMarketCap ID for this cryptocurrency.
   * @example 1
   */
  id: number;
  /**
   * The name of this cryptocurrency.
   * @example "Bitcoin"
   */
  name: string;
  /**
   * The ticker symbol for this cryptocurrency.
   * @example "BTC"
   */
  symbol: string;
  /**
   * The web URL friendly shorthand version of this cryptocurrency name.
   * @example "bitcoin"
   */
  slug: string;
  /**
   * The cryptocurrency's CoinMarketCap rank by market cap.
   * @example 5
   */
  cmc_rank?: number;
  /**
   * The number of active trading pairs available for this cryptocurrency across supported exchanges.
   * @example 500
   */
  num_market_pairs?: number;
  /**
   * The approximate number of coins circulating for this cryptocurrency.
   * @example 16950100
   */
  circulating_supply?: number;
  /**
   * The approximate total amount of coins in existence right now (minus any coins that have been verifiably burned).
   * @example 16950100
   */
  total_supply?: number;
  /**
   * The market cap by total supply. *This field is only returned if requested through the `aux` request parameter.*
   * @example 158055024432
   */
  market_cap_by_total_supply?: number;
  /**
   * The expected maximum limit of coins ever to be available for this cryptocurrency.
   * @example 21000000
   */
  max_supply?: number;
  /**
   * Timestamp (ISO 8601) of the last time this cryptocurrency's market data was updated.
   * @format date
   * @example "2018-06-02T22:51:28.209Z"
   */
  last_updated: string;
  /**
   * Timestamp (ISO 8601) of when this cryptocurrency was added to CoinMarketCap.
   * @format date
   * @example "2013-04-28T00:00:00.000Z"
   */
  date_added?: string;
  /** Array of tags associated with this cryptocurrency. Currently only a mineable tag will be returned if the cryptocurrency is mineable. Additional tags will be returned in the future. */
  tags?: any[];
  /** Metadata about the parent cryptocurrency platform this cryptocurrency belongs to if it is a token, otherwise null. */
  platform?: Platform;
  /** A map of market quotes in different currency conversions. The default map included is USD. */
  quote: CryptocurrencyQuoteMap;
}

/** Array of cryptocurrency objects matching the list options. */
export type CryptocurrencyResultsArray = CryptocurrencyCryptocurrencyObject[];

/** A results object for each cryptocurrency found in the category. */
export interface CategoryCryptocurrencyObject {
  /**
   * The unique ID of the category
   * @example 2781
   */
  id: number;
  /**
   * The name of the category
   * @example "A16Z Portfolio"
   */
  name?: string;
  /**
   * The title of the category
   * @example "A16Z Portfolio"
   */
  title?: string;
  /**
   * The description of the category
   * @example "A16Z Portfolio"
   */
  description?: string;
  /** @example 12 */
  num_tokens?: number;
  /**
   * Average price change of coins within this categry
   * @example 0.03
   */
  avg_price_change: number;
  /**
   * Market cap of coins within this categry
   * @example 121020662982
   */
  market_cap: number;
  /**
   * Market cap change of coins within this categry
   * @example 0.03
   */
  market_cap_change: number;
  /**
   * Volume of coins within this categry
   * @example 121020662982
   */
  volume: number;
  /**
   * Volume change of coins within this categry
   * @example 0.03
   */
  volume_change: number;
  /** Array of cryptocurrency objects matching the list options. */
  coins: any[];
  /**
   * Timestamp (ISO 8601) of when this was last updated.
   * @format date
   * @example "2013-04-28T00:00:00.000Z"
   */
  last_updated: string;
}

/**
 * Results of your query returned as an object map.
 * @example {"id":"605e2ce9d41eae1066535f7c","name":"A16Z Portfolio","title":"A16Z Portfolio","description":"A16Z Portfolio","num_tokens":12,"avg_price_change":0.61305157,"market_cap":29429241867.031097,"market_cap_change":3.049044106496,"volume":4103706600.0391645,"volume_change":-10.538325849854,"coins":[{"id":1,"name":"Bitcoin","symbol":"BTC","slug":"bitcoin","cmc_rank":5,"num_market_pairs":500,"circulating_supply":16950100,"total_supply":16950100,"max_supply":21000000,"last_updated":"2018-06-02T22:51:28.209Z","date_added":"2013-04-28T00:00:00.000Z","tags":["mineable"],"platform":null,"quote":{"USD":{"price":9283.92,"volume_24h":7155680000,"percent_change_1h":-0.152774,"percent_change_24h":0.518894,"percent_change_7d":0.986573,"market_cap":158055024432,"last_updated":"2018-08-09T22:53:32.000Z"},"BTC":{"price":1,"volume_24h":772012,"percent_change_1h":0,"percent_change_24h":0,"percent_change_7d":0,"market_cap":17024600,"last_updated":"2018-08-09T22:53:32.000Z"}}},{"id":1027,"name":"Ethereum","symbol":"ETH","slug":"ethereum","num_market_pairs":6360,"circulating_supply":16950100,"total_supply":16950100,"max_supply":21000000,"last_updated":"2018-06-02T22:51:28.209Z","date_added":"2013-04-28T00:00:00.000Z","tags":["mineable"],"platform":null,"quote":{"USD":{"price":1283.92,"volume_24h":7155680000,"percent_change_1h":-0.152774,"percent_change_24h":0.518894,"percent_change_7d":0.986573,"market_cap":158055024432,"last_updated":"2018-08-09T22:53:32.000Z"},"ETH":{"price":1,"volume_24h":772012,"percent_change_1h":0,"percent_change_24h":0,"percent_change_7d":0,"market_cap":17024600,"last_updated":"2018-08-09T22:53:32.000Z"}}}],"last_updated":1616488708878}
 */
export interface CategoryResultsMap {
  /** A results object for each cryptocurrency found in the category. */
  $key: CategoryCryptocurrencyObject;
}

export interface CategoryResponseModel {
  /** Results of your query returned as an object map. */
  data: CategoryResultsMap;
  /** Standardized status object for API calls. */
  status?: APIStatusObject;
}

/**
 * Tags associated with this cryptocurrency.
 * @example ["mineable"]
 */
export type Tags1 = string[];

/** An object containing various resource URLs for this cryptocurrency. */
export interface CryptocurrenciesInfoURLsObject {
  /** Array of website URLs. */
  website: any[];
  /** Array of white paper or technical documentation URLs. */
  technical_doc: any[];
  /** Array of block explorer URLs. */
  explorer: any[];
  /** Array of source code URLs. */
  source_code: any[];
  /** Array of message board URLs. */
  message_board: any[];
  /** Array of chat service URLs. */
  chat: any[];
  /** Array of announcement URLs. */
  announcement: any[];
  /** Array of Reddit community page URLs. */
  reddit: any[];
  /** Array of official twitter profile URLs. */
  twitter: any[];
}

/** A results object for each cryptocurrency requested. The map key being the id/symbol used in the request. */
export interface CryptocurrenciesInfoCryptocurrencyObjectPleaseNoteThisWillBeWrappedInAnArrayIfYouRequestBySymbolUsingTheV2Endpoint {
  /**
   * The unique CoinMarketCap ID for this cryptocurrency.
   * @example 1
   */
  id: number;
  /**
   * The name of this cryptocurrency.
   * @example "Bitcoin"
   */
  name: string;
  /**
   * The ticker symbol for this cryptocurrency.
   * @example "BTC"
   */
  symbol: string;
  /**
   * The category for this cryptocurrency.
   * @example "coin"
   */
  category: 'coin' | 'token';
  /**
   * The web URL friendly shorthand version of this cryptocurrency name.
   * @example "bitcoin"
   */
  slug: string;
  /**
   * Link to a CoinMarketCap hosted logo png for this cryptocurrency. 64px is default size returned. Replace "64x64" in the image path with these alternative sizes: 16, 32, 64, 128, 200
   * @example "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
   */
  logo: string;
  /**
   * A CoinMarketCap supplied brief description of this cryptocurrency. This field will return null if a description is not available.
   * @example "Bitcoin (BTC) is a consensus network that enables a new payment system and a completely digital currency. Powered by its users, it is a peer to peer payment network that requires no central authority to operate."
   */
  description: string;
  /**
   * Timestamp (ISO 8601) of when this cryptocurrency was added to CoinMarketCap.
   * @format date
   * @example "2013-04-28T00:00:00.000Z"
   */
  date_added: string;
  /**
   * Timestamp (ISO 8601) of when this cryptocurrency was launched.
   * @format date
   * @example "2013-04-28T00:00:00.000Z"
   */
  date_launched: string;
  /** A [Markdown](https://commonmark.org/help/) formatted notice that may highlight a significant event or condition that is impacting the cryptocurrency or how it is displayed, otherwise null. A notice may highlight a recent or upcoming mainnet swap, symbol change, exploit event, or known issue with a particular exchange or market, for example. If present, this notice is also displayed in an alert banner at the top of the cryptocurrency's page on coinmarketcap.com. */
  notice: string;
  /** Tags associated with this cryptocurrency. */
  tags: any[];
  /** Metadata about the parent cryptocurrency platform this cryptocurrency belongs to if it is a token, otherwise null. */
  platform: Platform;
  /**
   * The self reported number of coins circulating for this cryptocurrency.
   * @example 16950100
   */
  self_reported_circulating_supply?: number;
  /**
   * The self reported market cap for this cryptocurrency.
   * @example 16950100
   */
  self_reported_market_cap?: number;
  /** Array of self reported tags associated with this cryptocurrency. */
  self_reported_tags?: any[];
  /**
   * The cryptocurrency is known to have an infinite supply.
   * @example false
   */
  infinite_supply?: boolean;
  /** An object containing various resource URLs for this cryptocurrency. */
  urls: CryptocurrenciesInfoURLsObject;
}

/**
 * Results of your query returned as an object map.
 * @example {"1":{"urls":{"website":["https://bitcoin.org/"],"technical_doc":["https://bitcoin.org/bitcoin.pdf"],"twitter":[],"reddit":["https://reddit.com/r/bitcoin"],"message_board":["https://bitcointalk.org"],"announcement":[],"chat":[],"explorer":["https://blockchain.coinmarketcap.com/chain/bitcoin","https://blockchain.info/","https://live.blockcypher.com/btc/"],"source_code":["https://github.com/bitcoin/"]},"logo":"https://s2.coinmarketcap.com/static/img/coins/64x64/1.png","id":1,"name":"Bitcoin","symbol":"BTC","slug":"bitcoin","description":"Bitcoin (BTC) is a consensus network that enables a new payment system and a completely digital currency. Powered by its users, it is a peer to peer payment network that requires no central authority to operate. On October 31st, 2008, an individual or group of individuals operating under the pseudonym \"Satoshi Nakamoto\" published the Bitcoin Whitepaper and described it as: \"a purely peer-to-peer version of electronic cash would allow online payments to be sent directly from one party to another without going through a financial institution.\"","date_added":"2013-04-28T00:00:00.000Z","date_launched":"2013-04-28T00:00:00.000Z","tags":["mineable"],"platform":null,"category":"coin"},"1027":{"urls":{"website":["https://www.ethereum.org/"],"technical_doc":["https://github.com/ethereum/wiki/wiki/White-Paper"],"twitter":["https://twitter.com/ethereum"],"reddit":["https://reddit.com/r/ethereum"],"message_board":["https://forum.ethereum.org/"],"announcement":["https://bitcointalk.org/index.php?topic=428589.0"],"chat":["https://gitter.im/orgs/ethereum/rooms"],"explorer":["https://blockchain.coinmarketcap.com/chain/ethereum","https://etherscan.io/","https://ethplorer.io/"],"source_code":["https://github.com/ethereum"]},"logo":"https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png","id":1027,"name":"Ethereum","symbol":"ETH","slug":"ethereum","description":"Ethereum (ETH) is a smart contract platform that enables developers to build decentralized applications (dapps) conceptualized by Vitalik Buterin in 2013. ETH is the native currency for the Ethereum platform and also works as the transaction fees to miners on the Ethereum network.\n\nEthereum is the pioneer for blockchain based smart contracts. When running on the blockchain a smart contract becomes like a self-operating computer program that automatically executes when specific conditions are met. On the blockchain, smart contracts allow for code to be run exactly as programmed without any possibility of downtime, censorship, fraud or third-party interference. It can facilitate the exchange of money, content, property, shares, or anything of value. The Ethereum network went live on July 30th, 2015 with 72 million Ethereum premined.","notice":null,"date_added":"2015-08-07T00:00:00.000Z","date_launched":"2015-08-07T00:00:00.000Z","tags":["mineable"],"platform":null,"category":"coin","self_reported_circulating_supply":null,"self_reported_market_cap":null,"self_reported_tags":null,"infinite_supply":false}}
 */
export interface CryptocurrencyInfoResultsMap {
  /** A results object for each cryptocurrency requested. The map key being the id/symbol used in the request. */
  $key: CryptocurrenciesInfoCryptocurrencyObjectPleaseNoteThisWillBeWrappedInAnArrayIfYouRequestBySymbolUsingTheV2Endpoint;
}

export interface CryptocurrenciesInfoResponseModel {
  /** Results of your query returned as an object map. */
  data: CryptocurrencyInfoResultsMap;
  /** Standardized status object for API calls. */
  status?: APIStatusObject;
}

/** Cryptocurrency object for each result */
export interface CryptocurrencyMapCryotocurrencyObject {
  /**
   * The unique cryptocurrency ID for this cryptocurrency.
   * @example 1
   */
  id: number;
  /**
   * The rank of this cryptocurrency.
   * @example 1
   */
  rank: number;
  /**
   * The name of this cryptocurrency.
   * @example "Bitcoin"
   */
  name: string;
  /**
   * The ticker symbol for this cryptocurrency, always in all caps.
   * @example "BTC"
   */
  symbol: string;
  /**
   * The web URL friendly shorthand version of this cryptocurrency name.
   * @example "bitcoin"
   */
  slug: string;
  /**
   * 1 if this cryptocurrency has at least 1 active market currently being tracked by the platform, otherwise 0. A value of 1 is analogous with `listing_status=active`.
   * @min 0
   * @max 1
   * @example 1
   */
  is_active?: number;
  /**
   * The listing status of the cryptocurrency. *This field is only returned if requested through the `aux` request parameter.*
   * @example "active"
   */
  status?: 'active' | 'inactive' | 'untracked';
  /**
   * Timestamp (ISO 8601) of the date this cryptocurrency was first available on the platform.
   * @format date
   * @example "2013-04-28T18:47:21.000Z"
   */
  first_historical_data?: string;
  /**
   * Timestamp (ISO 8601) of the last time this cryptocurrency's market data was updated.
   * @format date
   * @example "2018-06-02T22:51:28.209Z"
   */
  last_historical_data?: string;
  /** Metadata about the parent cryptocurrency platform this cryptocurrency belongs to if it is a token, otherwise null. */
  platform?: Platform;
}

/** Array of cryptocurrency object results. */
export type CryptocurrencyMapCryptocurrencyArray = CryptocurrencyMapCryotocurrencyObject[];

/** @example {"data":[{"id":1,"rank":1,"name":"Bitcoin","symbol":"BTC","slug":"bitcoin","is_active":1,"first_historical_data":"2013-04-28T18:47:21.000Z","last_historical_data":"2020-05-05T20:44:01.000Z","platform":null},{"id":1839,"rank":3,"name":"Binance Coin","symbol":"BNB","slug":"binance-coin","is_active":1,"first_historical_data":"2017-07-25T04:30:05.000Z","last_historical_data":"2020-05-05T20:44:02.000Z","platform":{"id":1027,"name":"Ethereum","symbol":"ETH","slug":"ethereum","token_address":"0xB8c77482e45F1F44dE1745F52C74426C631bDD52"}},{"id":825,"rank":5,"name":"Tether","symbol":"USDT","slug":"tether","is_active":1,"first_historical_data":"2015-02-25T13:34:26.000Z","last_historical_data":"2020-05-05T20:44:01.000Z","platform":{"id":1027,"name":"Ethereum","symbol":"ETH","slug":"ethereum","token_address":"0xdac17f958d2ee523a2206206994597c13d831ec7"}}],"status":{"timestamp":"2018-06-02T22:51:28.209Z","error_code":0,"error_message":"","elapsed":10,"credit_count":1}} */
export interface CryptocurrencyMapResponseModel {
  /** Array of cryptocurrency object results. */
  data: any[];
  /** Standardized status object for API calls. */
  status?: APIStatusObject;
}

export interface TheBlockchainPlatformWhereTheAssetsAreHeldOn {
  /**
   * The CoinMarketCap ID for the blockchain platform where the assets are held on
   * @example 1027
   */
  crypto_id?: number;
  /**
   * The symbol for the blockchain platform where the assets are held on
   * @example "ETH"
   */
  symbol?: number;
  /**
   * The name for the blockchain platform where the assets are held on
   * @example "Ethereum"
   */
  name?: number;
}

export interface TheCryptocurrencyOfTheHoldingsInTheWallet {
  /**
   * The CoinMarketCap ID for the coin/token used for this wallet
   * @example 1027
   */
  crypto_id?: number;
  /**
   * The symbol for the coin/token used for this wallet
   * @example "ETH"
   */
  symbol?: number;
  /**
   * The name for the coin/token used for this wallet
   * @example "Ethereum"
   */
  name?: number;
  /**
   * The price in USD for 1 coin/token
   * @example 1200.055
   */
  price_usd?: number;
}

export interface ExchangeAssetsWalletsResponseModel {
  /**
   * The address of the wallet
   * @example "0x5a52e96bacdabb82fd05763e25335261b270efcb"
   */
  wallet_address: string;
  /**
   * The amount of coins/tokens held in this wallet
   * @example 1000
   */
  balance: number;
  platform: TheBlockchainPlatformWhereTheAssetsAreHeldOn;
  currency: TheCryptocurrencyOfTheHoldingsInTheWallet;
}

/** @example {"status":{"timestamp":"2022-11-24T08:23:22.028Z","error_code":0,"error_message":null,"elapsed":1828,"credit_count":0,"notice":null},"data":[{"wallet_address":"0x5a52e96bacdabb82fd05763e25335261b270efcb","balance":45000000,"platform":{"crypto_id":1027,"symbol":"ETH","name":"Ethereum"},"currency":{"crypto_id":5117,"price_usd":0.10241799413549,"symbol":"OGN","name":"Origin Protocol"}},{"wallet_address":"0xf977814e90da44bfa03b6295a0616a897441acec","balance":400000000,"platform":{"crypto_id":1027,"symbol":"ETH","name":"Ethereum"},"currency":{"crypto_id":5824,"price_usd":0.00251174724338,"symbol":"SLP","name":"Smooth Love Potion"}},{"wallet_address":"0x5a52e96bacdabb82fd05763e25335261b270efcb","balance":5588175,"platform":{"crypto_id":1027,"symbol":"ETH","name":"Ethereum"},"currency":{"crypto_id":3928,"price_usd":0.04813245442357,"symbol":"IDEX","name":"IDEX"}},{"wallet_address":"0x5a52e96bacdabb82fd05763e25335261b270efcb","balance":125000,"platform":{"crypto_id":1027,"symbol":"ETH","name":"Ethereum"},"currency":{"crypto_id":1552,"price_usd":20.46545919550142,"symbol":"MLN","name":"Enzyme"}},{"wallet_address":"0x21a31ee1afc51d94c2efccaa2092ad1028285549","balance":27241191.98,"platform":{"crypto_id":1027,"symbol":"ETH","name":"Ethereum"},"currency":{"crypto_id":14806,"price_usd":0.02390427295165,"symbol":"PEOPLE","name":"ConstitutionDAO"}}]} */
export interface ExchangeAssetsResponseModel {
  data?: any[];
  /** Standardized status object for API calls. */
  status?: APIStatusObject;
}

/**
 * Official website URLs.
 * @example ["https://binance.com"]
 */
export type Website1 = string[];

/**
 * Official chat URLs.
 * @example ["https://t.me/coinbene"]
 */
export type Chat1 = string[];

/**
 * Official twitter profile URLs.
 * @example ["https://twitter.com/Bitcoin"]
 */
export type Twitter1 = string[];

/** An object containing various resource URLs for this exchange. */
export interface ExchangesInfoURLsObject {
  /** Official website URLs. */
  website: any[];
  /** Official blog URLs. */
  blog: any[];
  /** Official chat URLs. */
  chat: any[];
  /** Official web URLs covering exchange fees. */
  fee: any[];
  /** Official twitter profile URLs. */
  twitter: any[];
}

/** A results object for each exchange requested. The map key being the id or slug used in the request. */
export interface ExchangesInfoExchangeInfoObject {
  /**
   * The unique CoinMarketCap ID for this exchange.
   * @example 1
   */
  id: number;
  /**
   * The name of this exchange.
   * @example "Binance"
   */
  name: string;
  /**
   * The web URL friendly shorthand version of the exchange name.
   * @example "binance"
   */
  slug: string;
  /**
   * Link to a CoinMarketCap hosted logo png for this exchange. 64px is default size returned. Replace "64x64" in the image path with these alternative sizes: 16, 32, 64, 128, 200
   * @example "https://s2.coinmarketcap.com/static/img/exchanges/64x64/270.png"
   */
  logo: string;
  /**
   * A CoinMarketCap supplied brief description of this cryptocurrency exchange. This field will return null if a description is not available.
   * @example "Launched in Jul-2017, Binance is a centralized exchange based in Malta."
   */
  description: string;
  /**
   * Timestamp (ISO 8601) of the launch date for this exchange.
   * @format date
   * @example "2017-07-14T00:00:00.000Z"
   */
  date_launched: string;
  /** A [Markdown](https://commonmark.org/help/) formatted message outlining a condition that is impacting the availability of the exchange's market data or the secure use of the exchange, otherwise null. This may include a maintenance event on the exchange's end or CoinMarketCap's end, an alert about reported issues with withdrawls from this exchange, or another condition that may be impacting the exchange and it's markets. If present, this notice is also displayed in an alert banner at the top of the exchange's page on coinmarketcap.com. */
  notice: string;
  /**
   * The number of weekly visitors.
   * @example 1000
   */
  weekly_visits?: number;
  /**
   * Reported all time spot volume in the specified currency.
   * @example 768478308.529847
   */
  spot_volume_usd?: number;
  /** An object containing various resource URLs for this exchange. */
  urls: ExchangesInfoURLsObject;
}

/**
 * Results of your query returned as an object map.
 * @example {"270":{"id":270,"name":"Binance","slug":"binance","logo":"https://s2.coinmarketcap.com/static/img/exchanges/64x64/270.png","description":"Launched in Jul-2017, Binance is a centralized exchange based in Malta.","date_launched":"2017-07-14T00:00:00.000Z","notice":null,"countries":[],"fiats":["AED","USD"],"tags":null,"type":"","maker_fee":0.02,"taker_fee":0.04,"weekly_visits":5123451,"spot_volume_usd":66926283498.60113,"spot_volume_last_updated":"2021-05-06T01:20:15.451Z","urls":{"website":["https://www.binance.com/"],"twitter":["https://twitter.com/binance"],"blog":[],"chat":["https://t.me/binanceexchange"],"fee":["https://www.binance.com/fees.html"]}}}
 */
export interface ExchangesInfoResultsMap {
  /** A results object for each exchange requested. The map key being the id or slug used in the request. */
  $key: ExchangesInfoExchangeInfoObject;
}

export interface ExchangesInfoResponseModel {
  /** Results of your query returned as an object map. */
  data: ExchangesInfoResultsMap;
  /** Standardized status object for API calls. */
  status?: APIStatusObject;
}

/** Exchange object description */
export interface ExchangeMapExchangeObject {
  /**
   * The unique CoinMarketCap ID for this exchange.
   * @example 270
   */
  id: number;
  /**
   * The name of this exchange.
   * @example "Binance"
   */
  name: string;
  /**
   * The web URL friendly shorthand version of this exchange name.
   * @example "binance"
   */
  slug: string;
  /**
   * 1 if this exchange is still being actively tracked and updated, otherwise 0.
   * @min 0
   * @max 1
   * @example 1
   */
  is_active?: number;
  /**
   * The listing status of the exchange. *This field is only returned if requested through the `aux` request parameter.*
   * @example "active"
   */
  status?: 'active' | 'inactive' | 'untracked';
  /**
   * Timestamp (ISO 8601) of the earliest market data record available to query using our historical endpoints. `null` if there is no historical data currently available for this exchange.
   * @format date
   * @example "2018-04-26T00:45:00.000Z"
   */
  first_historical_data?: string;
  /**
   * Timestamp (ISO 8601) of the latest market data record available to query using our historical endpoints. `null` if there is no historical data currently available for this exchange.
   * @format date
   * @example "2019-06-02T21:25:00.000Z"
   */
  last_historical_data?: string;
}

/** Array of exchange object results. */
export type ExchangeMapExchangesArray = ExchangeMapExchangeObject[];

export interface ExchangeMapResponseModel {
  /** Array of exchange object results. */
  data: any[];
  /** Standardized status object for API calls. */
  status?: APIStatusObject;
}

/** Fiat object for each result */
export interface FiatMapFiatObject {
  /**
   * The unique CoinMarketCap ID for this asset.
   * @example 2781
   */
  id: number;
  /**
   * The name of this asset.
   * @example "United States Dollar"
   */
  name: string;
  /**
   * The currency sign for this asset.
   * @example "$"
   */
  sign: string;
  /**
   * The ticker symbol for this asset, always in all caps.
   * @example "USD"
   */
  symbol: string;
}

/** Array of fiat object results. */
export type FiatMapFiatArray = FiatMapFiatObject[];

/** @example {"data":[{"id":2781,"name":"United States Dollar","sign":"$","symbol":"USD"},{"id":2787,"name":"Chinese Yuan","sign":"¥","symbol":"CNY"},{"id":2781,"name":"South Korean Won","sign":"₩","symbol":"KRW"}],"status":{"timestamp":"2020-01-07T22:51:28.209Z","error_code":0,"error_message":"","elapsed":3,"credit_count":1}} */
export interface FiatMapResponseModel {
  /** Array of fiat object results. */
  data: any[];
  /** Standardized status object for API calls. */
  status?: APIStatusObject;
}

/** Details about your API key are returned in this object. */
export interface AccountInfoResponseObject {
  /** Object containing rate limit and daily/monthly credit limit details for your API Key. */
  plan: Plan;
  /** Object containing live usage details about your API Key. */
  usage: Usage;
}

export interface AccountInfoResponseModel {
  /** Details about your API key are returned in this object. */
  data: AccountInfoResponseObject;
  /** Standardized status object for API calls. */
  status?: APIStatusObject;
}

/** A quote object for each conversion requested. The map key being the id/symbol used in the request. */
export interface ToolsPriceConversionQuoteObject {
  /**
   * Converted price in terms of the quoted currency and historic time (if supplied).
   * @example 1235000
   */
  price: number;
  /**
   * Timestamp (ISO 8601) of when the destination currency's market value was recorded.
   * @format date
   * @example "2018-06-02T00:00:00.000Z"
   */
  last_updated: string;
}

/** An object map of price conversions. */
export interface ToolsPriceConversionQuotesMapPleaseNoteThisWillBeWrappedInAnArrayIfYouRequestBySymbolUsingTheV2Endpoint {
  /** A quote object for each conversion requested. The map key being the id/symbol used in the request. */
  $key: ToolsPriceConversionQuoteObject;
}

/**
 * Results object for your API call.
 * @example {"symbol":"BTC","id":"1","name":"Bitcoin","amount":50,"last_updated":"2018-06-06T08:04:36.000Z","quote":{"GBP":{"price":284656.08465608465,"last_updated":"2018-06-06T06:00:00.000Z"},"LTC":{"price":3128.7279766396537,"last_updated":"2018-06-06T08:04:02.000Z"},"USD":{"price":381442,"last_updated":"2018-06-06T08:06:51.968Z"}}}
 */
export interface ToolsPriceConversionResultsObject {
  /**
   * The unique CoinMarketCap ID for your base currency.
   * @example 1
   */
  id: number;
  /**
   * The name of your base currency.
   * @example "Bitcoin"
   */
  name: string;
  /**
   * The symbol for your base currency.
   * @example "BTC"
   */
  symbol: string;
  /**
   * Amount of base currency to convert from.
   * @example 50
   */
  amount: number;
  /**
   * Timestamp (ISO 8601) of when the referenced market value of the base currency was recorded.
   * @format date
   * @example "2018-06-02T00:00:00.000Z"
   */
  last_updated: string;
  /** An object map of price conversions. */
  quote: ToolsPriceConversionQuotesMapPleaseNoteThisWillBeWrappedInAnArrayIfYouRequestBySymbolUsingTheV2Endpoint;
}

export interface ToolsPriceConversionResponseModel {
  /** Results object for your API call. */
  data: ToolsPriceConversionResultsObject;
  /** Standardized status object for API calls. */
  status?: APIStatusObject;
}

/** Fear and Greed Historical */
export interface FearAndGreedHistoricalFearAndGreedObject {
  /**
   * Timestamp of when this historical quote was recorded.
   * @format date
   */
  timestamp: string;
  /**
   * The value of CMC Fear and Greed.
   *
   * When the value is closer to 0, the market is in Extreme Fear, and investors have over-sold irrationally.
   *
   * When the value is closer to 100, the market is in Extreme Greed, indicating a likely market correction.
   */
  value: number;
  /**
   * The value classication of CMC Fear and Greed.
   *
   * 1 ≤ x < 20: Extreme Fear
   * 20 ≤ x < 40: Fear
   * 40 ≤ x < 60: Neutral
   * 60 ≤ x < 80: Greed
   * 80 ≤ x ≤ 100: Extreme Greed
   */
  value_classification: string;
}

/**
 * Fear and Greed Historical.
 * @example [{"timestamp":"1726617600","value":38,"value_classification":"Fear"},{"timestamp":"1726531200","value":34,"value_classification":"Fear"},{"timestamp":"1726444800","value":36,"value_classification":"Fear"},{"timestamp":"1726358400","value":38,"value_classification":"Fear"},{"timestamp":"1726272000","value":38,"value_classification":"Fear"}]
 */
export type FearAndGreedHistoricalResultsMap = FearAndGreedHistoricalFearAndGreedObject[];

export interface FearAndGreedHistoricalResponseModel {
  /** Fear and Greed Historical. */
  data: any[];
  /** Standardized status object for API calls. */
  status?: APIStatusObject;
}

/**
 * The latest CMC Fear and Greed value.
 * @example {"value ":40,"value_classification":"Neutral","update_time":"2024-09-19T02:54:56.017Z"}
 */
export interface FearAndGreedLatestResponseObject {
  /**
   * The value of CMC Fear and Greed.
   *
   * When the value is closer to 0, the market is in Extreme Fear, and investors have over-sold irrationally.
   *
   * When the value is closer to 100, the market is in Extreme Greed, indicating a likely market correction.
   * @min 0
   * @max 100
   */
  value: number;
  /**
   * The value classication of CMC Fear and Greed.
   *
   * 1 ≤ x < 20: Extreme Fear
   * 20 ≤ x < 40: Fear
   * 40 ≤ x < 60: Neutral
   * 60 ≤ x < 80: Greed
   * 80 ≤ x ≤ 100: Extreme Greed
   */
  value_classification: string;
  /**
   * Timestamp (ISO 8601) of the last time this record was updated.
   * @format date
   */
  update_time: string;
}

export interface FearAndGreedLatestResponseModel {
  /** The latest CMC Fear and Greed value. */
  data: FearAndGreedLatestResponseObject;
  /** Standardized status object for API calls. */
  status?: APIStatusObject;
}

/** A blockchain object for every blockchain that matched list options. */
export interface BlockchainStatisticsLatestBlockchainObject {
  /**
   * The unique CoinMarketCap ID for this blockchain's cryptocurrency.
   * @example 1
   */
  id: number;
  /**
   * The web URL friendly shorthand version of the cryptocurrency's name.
   * @example "bitcoin"
   */
  slug: string;
  /**
   * The ticker symbol for the cryptocurrency.
   * @example "BTC"
   */
  symbol: string;
  /**
   * The reward assigned to the miner of a block excluding fees.
   * @example 12.5
   */
  block_reward_static: number;
  /**
   * The consensus mechanism used by the blockchain, for example, "proof-of-work" or "proof-of-stake".
   * @example "proof-of-work"
   */
  consensus_mechanism: string;
  /**
   * The global block difficulty determining how hard to find a hash on this blockchain. *Note: This integer is returned as a string to use with BigInt libraries as it may exceed the max safe integer size for many programming languages.*
   * @example "2264398029247833"
   */
  difficulty: string;
  /**
   * The average hashrate over the past 24 hours. *Note: This integer is returned as a string to use with BigInt libraries as it may exceed the max safe integer size for many programming languages.*
   * @example "169267882822616"
   */
  hashrate_24h: string;
  /**
   * The number of pending transactions.
   * @example 5120
   */
  pending_transactions: number;
  /**
   * The rate the block reward is adjusted at a specified interval.
   * @example "50%"
   */
  reduction_rate: string;
  /**
   * The total number of blocks.
   * @example 8385036
   */
  total_blocks: number;
  /**
   * The total number of transactions. *Note: This integer is returned as a string to use with BigInt libraries as it may exceed the max safe integer size for many programming languages.*
   * @example "523059480"
   */
  total_transactions: string;
  /**
   * The average transactions per second over the past 24 hours.
   * @example 8.463935185185186
   */
  tps_24h: number;
  /**
   * Timestamp (ISO 8601) of the time the first block was mined on this chain.
   * @format date
   * @example "2009-01-09T02:54:25.000Z"
   */
  first_block_timestamp: string;
}

/**
 * A map of blockchain objects by ID, symbol, or slug (as used in query parameters).
 * @example {"BTC":{"id":1,"slug":"bitcoin","symbol":"BTC","block_reward_static":12.5,"consensus_mechanism":"proof-of-work","difficulty":"11890594958796","hashrate_24h":"85116194130018810000","pending_transactions":1177,"reduction_rate":"50%","total_blocks":595165,"total_transactions":"455738994","tps_24h":3.808090277777778,"first_block_timestamp":"2009-01-09T02:54:25.000Z"}}
 */
export interface BlockchainStatisticsLatestResultsMap {
  /** A blockchain object for every blockchain that matched list options. */
  $key: BlockchainStatisticsLatestBlockchainObject;
}

export interface BlockchainStatisticsLatestResponseModel {
  /** A map of blockchain objects by ID, symbol, or slug (as used in query parameters). */
  data: BlockchainStatisticsLatestResultsMap;
  /** Standardized status object for API calls. */
  status?: APIStatusObject;
}

/** Cntent objects. */
export interface CommunityTrendingTokenResults {
  /**
   * The community rank of the coin
   * @example 1
   */
  rank?: number;
  /**
   * The unique CoinMarketCap ID for this cryptocurrency.
   * @example 1
   */
  id: number;
  /**
   * The name of this cryptocurrency.
   * @example "Bitcoin"
   */
  name: string;
  /**
   * The ticker symbol for this cryptocurrency.
   * @example "BTC"
   */
  symbol: string;
  /**
   * The web URL friendly shorthand version of this cryptocurrency name.
   * @example "bitcoin"
   */
  slug: string;
  /**
   * The cryptocurrency's CoinMarketCap rank by market cap.
   * @example 5
   */
  cmc_rank?: number;
}

/** @example {"data":[{"id":7102,"name":"Linear Finance","symbol":"LINA","slug":"linear","cmc_rank":461,"rank":1},{"id":26265,"name":"NiHao","symbol":"NIHAO","slug":"nihao","cmc_rank":5000,"rank":2},{"id":22538,"name":"T-mac DAO","symbol":"TMG","slug":"t-mac-dao","cmc_rank":4802,"rank":3},{"id":2398,"name":"SelfKey","symbol":"KEY","slug":"selfkey","cmc_rank":753,"rank":4},{"id":3437,"name":"ABBC Coin","symbol":"ABBC","slug":"abbc-coin","cmc_rank":178,"rank":5}],"status":{"timestamp":"2022-09-08T16:08:52.641Z","error_code":"0","error_message":"SUCCESS","elapsed":"0","credit_count":0}} */
export interface CommunityTrendingTokenResponseModel {
  /** Cntent objects. */
  data: CommunityTrendingTokenResults;
}

/** Cntent objects. */
export interface CommunityTrendingTopicResults {
  /**
   * The community rank of the topic
   * @example 1
   */
  rank?: number;
  /**
   * The trending topic name
   * @example "Bitcoin"
   */
  topic?: string;
}

/** @example {"data":[{"rank":1,"topic":"Tether"},{"rank":2,"topic":"DebtCeiling"},{"rank":3,"topic":"HongKong"},{"rank":4,"topic":"AI"},{"rank":5,"topic":"MIEX"}],"status":{"timestamp":"2022-09-08T16:08:52.641Z","error_code":"0","error_message":"SUCCESS","elapsed":"0","credit_count":0}} */
export interface CommunityTrendingTopicResponseModel {
  /** Cntent objects. */
  data: CommunityTrendingTopicResults;
}

export interface Model2 {
  post_id?: string;
  owner: Owner;
  text_content?: string;
  photos?: any[];
  comment_count?: string;
  like_count?: string;
  post_time?: string;
  language_code?: string;
  /** Returns comments of the current post/comment */
  comments_url?: string;
}

/** Array of content objects. */
export type ContentPostCommentsResultsArray = Model2[];

/** @example {"data":[{"post_id":"317807035","owner":{"nickname":"Amy","avatar_url":"https://s3.coinmarketcap.com/static/img/portraits/61359449293ccc2c4bcf07c7.png"},"text_content":"Someone's working on it!!","photos":[],"comment_count":"0","like_count":"0","post_time":"1662640110429","language_code":"en"},{"post_id":"317807862","owner":{"nickname":"Wanda","avatar_url":"https://s3.coinmarketcap.com/static/img/portraits/6136cf1015b8f3308e283073.png"},"text_content":"yes sir!!","photos":[],"comment_count":"0","like_count":"0","post_time":"1662635039889","language_code":"en"}],"status":{"timestamp":"2022-09-08T16:07:30.033Z","error_code":"0","error_message":"SUCCESS","elapsed":"0","credit_count":0}} */
export interface ContentPostCommentsResponseModel {
  /** Array of content objects. */
  data: any[];
  /** Standardized status object for API calls. */
  status?: APIStatusObject;
}

export interface Model3 {
  id?: number;
  symbol?: string;
  slug?: string;
}

export interface Model4 {
  post_id?: string;
  owner: Owner;
  text_content?: string;
  photos?: any[];
  comment_count?: string;
  like_count?: string;
  post_time?: string;
  currencies?: any[];
  language_code?: string;
  /** Returns comments of the current post/comment */
  comments_url?: string;
}

/** Cntent objects. */
export interface ContentTopPostsResults {
  list?: any[];
  last_score?: number;
}

/** @example {"data":{"list":[{"post_id":"123456789","comments_url":"{{baseUrl}}/v1/content/posts/comments?post_id=123456789","owner":{"nickname":"CoinMarketCap","avatar_url":"https://s3.coinmarketcap.com/static/img/portraits/621c22097aafe46422aa1161.png"},"text_content":"$ETH regardless of merging or not merging...","photos":["https://s3.coinmarketcap.com/static/img/portraits/621c22097aafe46422aa1161.png"],"comment_count":"5","like_count":"5","post_time":"1662643031298","currencies":[{"id":1027,"symbol":"ETH","slug":"ethereum"}],"language_code":"en"},{"post_id":"123456790","comments_url":"{{baseUrl}}/v1/content/posts/comments?post_id=123456790","owner":{"nickname":"John","avatar_url":"https://s3.coinmarketcap.com/static/img/portraits/61b9aaca1d79d0637758fdeb.png"},"text_content":"$ETH The success and the failure are almost...","photos":["https://s3.coinmarketcap.com/static/img/portraits/621c22097aafe46422aa1161.png"],"comment_count":"6","like_count":"60","post_time":"1662612816768","currencies":[{"id":1027,"symbol":"ETH","slug":"ethereum"}],"repost_count":"0","language_code":"en"}],"last_score":"1662903634322"},"status":{"timestamp":"2022-09-08T16:08:52.641Z","error_code":"0","error_message":"SUCCESS","elapsed":"0","credit_count":0}} */
export interface ContentLatestPostsResponseModel {
  /** Cntent objects. */
  data: ContentTopPostsResults;
}

/** @example {"data":{"list":[{"post_id":"123456789","comments_url":"{{baseUrl}}/v1/content/posts/comments?post_id=123456789","owner":{"nickname":"CoinMarketCap","avatar_url":"https://s3.coinmarketcap.com/static/img/portraits/621c22097aafe46422aa1161.png"},"text_content":"$ETH regardless of merging or not merging...","photos":["https://s3.coinmarketcap.com/static/img/portraits/621c22097aafe46422aa1161.png"],"comment_count":"5","like_count":"5","post_time":"1662643031298","currencies":[{"id":1027,"symbol":"ETH","slug":"ethereum"}],"language_code":"en"},{"post_id":"123456790","comments_url":"{{baseUrl}}/v1/content/posts/comments?post_id=123456790","owner":{"nickname":"John","avatar_url":"https://s3.coinmarketcap.com/static/img/portraits/61b9aaca1d79d0637758fdeb.png"},"text_content":"$ETH The success and the failure are almost...","photos":["https://s3.coinmarketcap.com/static/img/portraits/621c22097aafe46422aa1161.png"],"comment_count":"6","like_count":"60","post_time":"1662612816768","currencies":[{"id":1027,"symbol":"ETH","slug":"ethereum"}],"repost_count":"0","language_code":"en"}],"last_score":"38507.8865"},"status":{"timestamp":"2022-09-08T16:08:52.641Z","error_code":"0","error_message":"SUCCESS","elapsed":"0","credit_count":0}} */
export interface ContentTopPostsResponseModel {
  /** Cntent objects. */
  data: ContentTopPostsResults;
  /** Standardized status object for API calls. */
  status?: APIStatusObject;
}

/** A market quote in the currency conversion option. */
export interface CryptocurrencyListingsLatestQuoteObject {
  /**
   * Price in the specified currency at the end of the requested UTC day.
   * @example 7139.82
   */
  price: number;
  /**
   * 24 hour adjusted volume in the specified currency at the end of the requested UTC day.
   * @example 4885880000
   */
  volume_24h: number;
  /**
   * Market cap in the specified currency at the end of the requested UTC day.
   * @example 121020662982
   */
  market_cap: number;
  /**
   * 1 hour change in the specified currency at the end of the requested UTC day.
   * @example 0.03
   */
  percent_change_1h: number;
  /**
   * 24 hour change in the specified currency at the end of the requested UTC day.
   * @example 5.75
   */
  percent_change_24h: number;
  /**
   * 7 day change in the specified currency at the end of the requested UTC day.
   * @example -19.64
   */
  percent_change_7d: number;
  /**
   * Timestamp (ISO 8601) of when the conversion currency's current value was referenced.
   * @format date
   * @example "2018-06-02T23:59:59.999Z"
   */
  last_updated: string;
}

/**
 * A map of market quotes in different currency conversions. The default map included is USD.
 * @example {"USD":{"price":9283.92,"volume_24h":7155680000,"percent_change_1h":-0.152774,"percent_change_24h":0.518894,"percent_change_7d":0.986573,"market_cap":158055024432},"BTC":{"price":1,"volume_24h":772012,"percent_change_1h":0,"percent_change_24h":0,"percent_change_7d":0,"market_cap":17024600}}
 */
export interface CryptocurrencyListingsLatestQuoteMap {
  /** A market quote in the currency conversion option. */
  $key: CryptocurrencyListingsLatestQuoteObject;
}

/** A cryptocurrency object for every cryptocurrency that matched list options. */
export interface CryptocurrencyListingsLatestCryptocurrencyObject {
  /**
   * The unique CoinMarketCap ID for this cryptocurrency.
   * @example 1
   */
  id: number;
  /**
   * The name of this cryptocurrency.
   * @example "Bitcoin"
   */
  name: string;
  /**
   * The ticker symbol for this cryptocurrency.
   * @example "BTC"
   */
  symbol: string;
  /**
   * The web URL friendly shorthand version of this cryptocurrency name.
   * @example "bitcoin"
   */
  slug: string;
  /**
   * The cryptocurrency's historic CoinMarketCap rank at the end of the requested UTC day.
   * @example 5
   */
  cmc_rank: number;
  /**
   * The number of active trading pairs available for this cryptocurrency across supported exchanges.
   * @example 500
   */
  num_market_pairs?: number;
  /**
   * The approximate number of coins circulating for this cryptocurrency at the end of the requested UTC day.
   * @example 16950100
   */
  circulating_supply: number;
  /**
   * The approximate total amount of coins in existence right now (minus any coins that have been verifiably burned) at the end of the requested UTC day.
   * @example 16950100
   */
  total_supply: number;
  /**
   * The expected maximum limit of coins ever to be available for this cryptocurrency.
   * @example 21000000
   */
  max_supply: number;
  /**
   * Timestamp (ISO 8601) of when this cryptocurrency's market data was referenced for this UTC date snapshot. This is always the last update available during the UTC date requested.
   * @format date
   * @example "2018-06-02T22:51:28.209Z"
   */
  last_updated: string;
  /**
   * Timestamp (ISO 8601) of when this cryptocurrency was added to CoinMarketCap.
   * @format date
   * @example "2013-04-28T00:00:00.000Z"
   */
  date_added: string;
  /** Array of tags associated with this cryptocurrency. Currently only a mineable tag will be returned if the cryptocurrency is mineable. Additional tags will be returned in the future. */
  tags: any[];
  /** Metadata about the parent cryptocurrency platform this cryptocurrency belongs to if it is a token, otherwise null. */
  platform: Platform;
  /** A map of market quotes in different currency conversions. The default map included is USD. */
  quote: CryptocurrencyListingsLatestQuoteMap;
}

/** Array of cryptocurrency objects matching the list options. */
export type CryptocurrencyListingsLatestResultsArray = CryptocurrencyListingsLatestCryptocurrencyObject[];

/** @example {"data":[{"id":1,"name":"Bitcoin","symbol":"BTC","slug":"bitcoin","cmc_rank":1,"num_market_pairs":500,"circulating_supply":17200062,"total_supply":17200062,"max_supply":21000000,"last_updated":"2018-06-02T22:51:28.209Z","date_added":"2013-04-28T00:00:00.000Z","tags":["mineable"],"platform":null,"quote":{"USD":{"price":9283.92,"volume_24h":7155680000,"percent_change_1h":-0.152774,"percent_change_24h":0.518894,"percent_change_7d":0.986573,"market_cap":158055024432,"last_updated":"2018-08-09T22:53:32.000Z"},"BTC":{"price":1,"volume_24h":772012,"percent_change_1h":0,"percent_change_24h":0,"percent_change_7d":0,"market_cap":17024600,"last_updated":"2018-08-09T22:53:32.000Z"}}},{"id":1027,"name":"Ethereum","symbol":"ETH","slug":"ethereum","num_market_pairs":6089,"circulating_supply":17200062,"total_supply":17200062,"max_supply":21000000,"last_updated":"2018-06-02T22:51:28.209Z","date_added":"2013-04-28T00:00:00.000Z","tags":["mineable"],"platform":null,"quote":{"USD":{"price":1678.6501384942708,"volume_24h":7155680000,"percent_change_1h":-0.152774,"percent_change_24h":0.518894,"percent_change_7d":0.986573,"market_cap":158055024432,"last_updated":"2018-08-09T22:53:32.000Z"},"ETH":{"price":1,"volume_24h":772012,"percent_change_1h":0,"percent_change_24h":0,"percent_change_7d":0,"market_cap":17024600,"last_updated":"2018-08-09T22:53:32.000Z"}}}],"status":{"timestamp":"2019-04-02T22:44:24.200Z","error_code":0,"error_message":"","elapsed":10,"credit_count":1}} */
export interface CryptocurrencyListingsLatestResponseModel {
  /** Array of cryptocurrency objects matching the list options. */
  data: any[];
  /** Standardized status object for API calls. */
  status?: APIStatusObject;
}

/** A market quote in the currency conversion option. */
export interface CryptocurrencyListingsLatestQuoteObject1 {
  /**
   * Price in the specified currency for this historical.
   * @example 7139.82
   */
  price: number;
  /**
   * Rolling 24 hour adjusted volume in the specified currency.
   * @example 4885880000
   */
  volume_24h: number;
  /**
   * 24 hour change in the specified currencies volume.
   * @example 5.75
   */
  volume_change_24h?: number;
  /**
   * Rolling 24 hour reported volume in the specified currency. *This field is only returned if requested through the `aux` request parameter.*
   * @example 4885880000
   */
  volume_24h_reported?: number;
  /**
   * Rolling 7 day adjusted volume in the specified currency. *This field is only returned if requested through the `aux` request parameter.*
   * @example 4885880000
   */
  volume_7d?: number;
  /**
   * Rolling 7 day reported volume in the specified currency. *This field is only returned if requested through the `aux` request parameter.*
   * @example 4885880000
   */
  volume_7d_reported?: number;
  /**
   * Rolling 30 day adjusted volume in the specified currency. *This field is only returned if requested through the `aux` request parameter.*
   * @example 4885880000
   */
  volume_30d?: number;
  /**
   * Rolling 30 day reported volume in the specified currency. *This field is only returned if requested through the `aux` request parameter.*
   * @example 4885880000
   */
  volume_30d_reported?: number;
  /**
   * Market cap in the specified currency.
   * @example 121020662982
   */
  market_cap: number;
  /**
   * Market cap dominance in the specified currency.
   * @example 121020662982
   */
  market_cap_dominance: number;
  /**
   * Fully diluted market cap in the specified currency.
   * @example 121020662982
   */
  fully_diluted_market_cap: number;
  /**
   * Total Value Locked
   * @example 0
   */
  tvl?: number;
  /**
   * 1 hour change in the specified currency.
   * @example 0.03
   */
  percent_change_1h: number;
  /**
   * 24 hour change in the specified currency.
   * @example 5.75
   */
  percent_change_24h: number;
  /**
   * 7 day change in the specified currency.
   * @example -19.64
   */
  percent_change_7d: number;
  /**
   * Timestamp (ISO 8601) of when the conversion currency's current value was referenced.
   * @format date
   * @example "2018-06-02T23:59:59.999Z"
   */
  last_updated: string;
}

/**
 * A map of market quotes in different currency conversions. The default map included is USD.
 * @example {"USD":{"price":9283.92,"volume_24h":7155680000,"volume_change_24h":-0.152774,"percent_change_1h":-0.152774,"percent_change_24h":0.518894,"percent_change_7d":0.986573,"market_cap":158055024432,"market_cap_dominance":51,"fully_diluted_market_cap":952835089431.14,"last_updated":"2018-08-09T22:53:32.000Z"},"BTC":{"price":1,"volume_24h":772012,"volume_change_24h":-0.152774,"percent_change_1h":0,"percent_change_24h":0,"percent_change_7d":0,"market_cap":17024600,"market_cap_dominance":12,"fully_diluted_market_cap":952835089431.14,"last_updated":"2018-08-09T22:53:32.000Z"}}
 */
export interface CryptocurrencyListingsLatestQuoteMap1 {
  /** A market quote in the currency conversion option. */
  $key: CryptocurrencyListingsLatestQuoteObject1;
}

/** A cryptocurrency object for every cryptocurrency that matched list options. */
export interface CryptocurrencyListingsLatestCryptocurrencyObject1 {
  /**
   * The unique CoinMarketCap ID for this cryptocurrency.
   * @example 1
   */
  id: number;
  /**
   * The name of this cryptocurrency.
   * @example "Bitcoin"
   */
  name: string;
  /**
   * The ticker symbol for this cryptocurrency.
   * @example "BTC"
   */
  symbol: string;
  /**
   * The web URL friendly shorthand version of this cryptocurrency name.
   * @example "bitcoin"
   */
  slug: string;
  /**
   * The cryptocurrency's CoinMarketCap rank by market cap.
   * @example 5
   */
  cmc_rank?: number;
  /**
   * The number of active trading pairs available for this cryptocurrency across supported exchanges.
   * @example 500
   */
  num_market_pairs?: number;
  /**
   * The approximate number of coins circulating for this cryptocurrency.
   * @example 16950100
   */
  circulating_supply?: number;
  /**
   * The approximate total amount of coins in existence right now (minus any coins that have been verifiably burned).
   * @example 16950100
   */
  total_supply?: number;
  /**
   * The market cap by total supply. *This field is only returned if requested through the `aux` request parameter.*
   * @example 158055024432
   */
  market_cap_by_total_supply?: number;
  /**
   * The expected maximum limit of coins ever to be available for this cryptocurrency.
   * @example 21000000
   */
  max_supply?: number;
  /**
   * The cryptocurrency is known to have an infinite supply.
   * @example false
   */
  infinite_supply?: boolean;
  /**
   * Timestamp (ISO 8601) of the last time this cryptocurrency's market data was updated.
   * @format date
   * @example "2018-06-02T22:51:28.209Z"
   */
  last_updated: string;
  /**
   * Timestamp (ISO 8601) of when this cryptocurrency was added to CoinMarketCap.
   * @format date
   * @example "2013-04-28T00:00:00.000Z"
   */
  date_added?: string;
  /** Array of tags associated with this cryptocurrency. Currently only a mineable tag will be returned if the cryptocurrency is mineable. Additional tags will be returned in the future. */
  tags?: any[];
  /**
   * The self reported number of coins circulating for this cryptocurrency.
   * @example 16950100
   */
  self_reported_circulating_supply?: number;
  /**
   * The self reported market cap for this cryptocurrency.
   * @example 16950100
   */
  self_reported_market_cap?: number;
  /**
   * Percentage of Total Value Locked
   * @example 0
   */
  tvl_ratio?: number;
  /** Metadata about the parent cryptocurrency platform this cryptocurrency belongs to if it is a token, otherwise null. */
  platform?: Platform;
  /** A map of market quotes in different currency conversions. The default map included is USD. */
  quote: CryptocurrencyListingsLatestQuoteMap1;
}

/** Array of cryptocurrency objects matching the list options. */
export type CryptocurrencyListingsLatestResultsArray1 = CryptocurrencyListingsLatestCryptocurrencyObject1[];

/** @example {"data":[{"id":1,"name":"Bitcoin","symbol":"BTC","slug":"bitcoin","cmc_rank":5,"num_market_pairs":500,"circulating_supply":16950100,"total_supply":16950100,"max_supply":21000000,"infinite_supply":false,"last_updated":"2018-06-02T22:51:28.209Z","date_added":"2013-04-28T00:00:00.000Z","tags":["mineable"],"platform":null,"self_reported_circulating_supply":null,"self_reported_market_cap":null,"quote":{"USD":{"price":9283.92,"volume_24h":7155680000,"volume_change_24h":-0.152774,"percent_change_1h":-0.152774,"percent_change_24h":0.518894,"percent_change_7d":0.986573,"market_cap":852164659250.2758,"market_cap_dominance":51,"fully_diluted_market_cap":952835089431.14,"last_updated":"2018-08-09T22:53:32.000Z"},"BTC":{"price":1,"volume_24h":772012,"volume_change_24h":0,"percent_change_1h":0,"percent_change_24h":0,"percent_change_7d":0,"market_cap":17024600,"market_cap_dominance":12,"fully_diluted_market_cap":952835089431.14,"last_updated":"2018-08-09T22:53:32.000Z"}}},{"id":1027,"name":"Ethereum","symbol":"ETH","slug":"ethereum","num_market_pairs":6360,"circulating_supply":16950100,"total_supply":16950100,"max_supply":21000000,"infinite_supply":false,"last_updated":"2018-06-02T22:51:28.209Z","date_added":"2013-04-28T00:00:00.000Z","tags":["mineable"],"platform":null,"quote":{"USD":{"price":1283.92,"volume_24h":7155680000,"volume_change_24h":-0.152774,"percent_change_1h":-0.152774,"percent_change_24h":0.518894,"percent_change_7d":0.986573,"market_cap":158055024432,"market_cap_dominance":51,"fully_diluted_market_cap":952835089431.14,"last_updated":"2018-08-09T22:53:32.000Z"},"ETH":{"price":1,"volume_24h":772012,"volume_change_24h":-0.152774,"percent_change_1h":0,"percent_change_24h":0,"percent_change_7d":0,"market_cap":17024600,"market_cap_dominance":12,"fully_diluted_market_cap":952835089431.14,"last_updated":"2018-08-09T22:53:32.000Z"}}}],"status":{"timestamp":"2018-06-02T22:51:28.209Z","error_code":0,"error_message":"","elapsed":10,"credit_count":1}} */
export interface CryptocurrencyListingsLatestResponseModel1 {
  /** Array of cryptocurrency objects matching the list options. */
  data: any[];
  /** Standardized status object for API calls. */
  status?: APIStatusObject;
}

/** A market quote in the currency conversion option. */
export interface CryptocurrencyListingsLatestQuoteObject2 {
  /**
   * Price in the specified currency for this historical.
   * @example 7139.82
   */
  price: number;
  /**
   * Rolling 24 hour adjusted volume in the specified currency.
   * @example 4885880000
   */
  volume_24h: number;
  /**
   * 24 hour change in the specified currencies volume.
   * @example 5.75
   */
  volume_change_24h?: number;
  /**
   * Rolling 24 hour reported volume in the specified currency. *This field is only returned if requested through the `aux` request parameter.*
   * @example 4885880000
   */
  volume_24h_reported?: number;
  /**
   * Rolling 7 day adjusted volume in the specified currency. *This field is only returned if requested through the `aux` request parameter.*
   * @example 4885880000
   */
  volume_7d?: number;
  /**
   * Rolling 7 day reported volume in the specified currency. *This field is only returned if requested through the `aux` request parameter.*
   * @example 4885880000
   */
  volume_7d_reported?: number;
  /**
   * Rolling 30 day adjusted volume in the specified currency. *This field is only returned if requested through the `aux` request parameter.*
   * @example 4885880000
   */
  volume_30d?: number;
  /**
   * Rolling 30 day reported volume in the specified currency. *This field is only returned if requested through the `aux` request parameter.*
   * @example 4885880000
   */
  volume_30d_reported?: number;
  /**
   * Market cap in the specified currency.
   * @example 121020662982
   */
  market_cap: number;
  /**
   * Market cap dominance in the specified currency.
   * @example 121020662982
   */
  market_cap_dominance: number;
  /**
   * Fully diluted market cap in the specified currency.
   * @example 121020662982
   */
  fully_diluted_market_cap: number;
  /**
   * 1 hour change in the specified currency.
   * @example 0.03
   */
  percent_change_1h: number;
  /**
   * 24 hour change in the specified currency.
   * @example 5.75
   */
  percent_change_24h: number;
  /**
   * 7 day change in the specified currency.
   * @example -19.64
   */
  percent_change_7d: number;
  /**
   * Timestamp (ISO 8601) of when the conversion currency's current value was referenced.
   * @format date
   * @example "2018-06-02T23:59:59.999Z"
   */
  last_updated: string;
}

/**
 * A map of market quotes in different currency conversions. The default map included is USD.
 * @example {"USD":{"price":9283.92,"volume_24h":7155680000,"volume_change_24h":-0.152774,"percent_change_1h":-0.152774,"percent_change_24h":0.518894,"percent_change_7d":0.986573,"market_cap":158055024432,"market_cap_dominance":51,"fully_diluted_market_cap":952835089431.14,"last_updated":"2018-08-09T22:53:32.000Z"},"BTC":{"price":1,"volume_24h":772012,"volume_change_24h":-0.152774,"percent_change_1h":0,"percent_change_24h":0,"percent_change_7d":0,"market_cap":17024600,"market_cap_dominance":12,"fully_diluted_market_cap":952835089431.14,"last_updated":"2018-08-09T22:53:32.000Z"}}
 */
export interface CryptocurrencyListingsLatestQuoteMap2 {
  /** A market quote in the currency conversion option. */
  $key: CryptocurrencyListingsLatestQuoteObject2;
}

/** A cryptocurrency object for every cryptocurrency that matched list options. */
export interface CryptocurrencyListingsLatestCryptocurrencyObject2 {
  /**
   * The unique CoinMarketCap ID for this cryptocurrency.
   * @example 1
   */
  id: number;
  /**
   * The name of this cryptocurrency.
   * @example "Bitcoin"
   */
  name: string;
  /**
   * The ticker symbol for this cryptocurrency.
   * @example "BTC"
   */
  symbol: string;
  /**
   * The web URL friendly shorthand version of this cryptocurrency name.
   * @example "bitcoin"
   */
  slug: string;
  /**
   * The cryptocurrency's CoinMarketCap rank by market cap.
   * @example 5
   */
  cmc_rank?: number;
  /**
   * The number of active trading pairs available for this cryptocurrency across supported exchanges.
   * @example 500
   */
  num_market_pairs?: number;
  /**
   * The approximate number of coins circulating for this cryptocurrency.
   * @example 16950100
   */
  circulating_supply?: number;
  /**
   * The approximate total amount of coins in existence right now (minus any coins that have been verifiably burned).
   * @example 16950100
   */
  total_supply?: number;
  /**
   * The market cap by total supply. *This field is only returned if requested through the `aux` request parameter.*
   * @example 158055024432
   */
  market_cap_by_total_supply?: number;
  /**
   * The expected maximum limit of coins ever to be available for this cryptocurrency.
   * @example 21000000
   */
  max_supply?: number;
  /**
   * Timestamp (ISO 8601) of the last time this cryptocurrency's market data was updated.
   * @format date
   * @example "2018-06-02T22:51:28.209Z"
   */
  last_updated: string;
  /**
   * Timestamp (ISO 8601) of when this cryptocurrency was added to CoinMarketCap.
   * @format date
   * @example "2013-04-28T00:00:00.000Z"
   */
  date_added?: string;
  /** Array of tags associated with this cryptocurrency. Currently only a mineable tag will be returned if the cryptocurrency is mineable. Additional tags will be returned in the future. */
  tags?: any[];
  /** Metadata about the parent cryptocurrency platform this cryptocurrency belongs to if it is a token, otherwise null. */
  platform?: Platform;
  /** A map of market quotes in different currency conversions. The default map included is USD. */
  quote: CryptocurrencyListingsLatestQuoteMap2;
}

/** Array of cryptocurrency objects matching the list options. */
export type CryptocurrencyListingsNewResultsArray = CryptocurrencyListingsLatestCryptocurrencyObject2[];

/** @example {"data":[{"id":1,"name":"Bitcoin","symbol":"BTC","slug":"bitcoin","cmc_rank":5,"num_market_pairs":500,"circulating_supply":16950100,"total_supply":16950100,"max_supply":21000000,"last_updated":"2018-06-02T22:51:28.209Z","date_added":"2013-04-28T00:00:00.000Z","tags":["mineable"],"platform":null,"quote":{"USD":{"price":9283.92,"volume_24h":7155680000,"volume_change_24h":-0.152774,"percent_change_1h":-0.152774,"percent_change_24h":0.518894,"percent_change_7d":0.986573,"market_cap":852164659250.2758,"market_cap_dominance":51,"fully_diluted_market_cap":952835089431.14,"last_updated":"2018-08-09T22:53:32.000Z"},"BTC":{"price":1,"volume_24h":772012,"volume_change_24h":0,"percent_change_1h":0,"percent_change_24h":0,"percent_change_7d":0,"market_cap":17024600,"market_cap_dominance":12,"fully_diluted_market_cap":952835089431.14,"last_updated":"2018-08-09T22:53:32.000Z"}}},{"id":1027,"name":"Ethereum","symbol":"ETH","slug":"ethereum","num_market_pairs":6360,"circulating_supply":16950100,"total_supply":16950100,"max_supply":21000000,"last_updated":"2018-06-02T22:51:28.209Z","date_added":"2013-04-28T00:00:00.000Z","tags":["mineable"],"platform":null,"quote":{"USD":{"price":1283.92,"volume_24h":7155680000,"volume_change_24h":-0.152774,"percent_change_1h":-0.152774,"percent_change_24h":0.518894,"percent_change_7d":0.986573,"market_cap":158055024432,"market_cap_dominance":51,"fully_diluted_market_cap":952835089431.14,"last_updated":"2018-08-09T22:53:32.000Z"},"ETH":{"price":1,"volume_24h":772012,"volume_change_24h":-0.152774,"percent_change_1h":0,"percent_change_24h":0,"percent_change_7d":0,"market_cap":17024600,"market_cap_dominance":12,"fully_diluted_market_cap":952835089431.14,"last_updated":"2018-08-09T22:53:32.000Z"}}}],"status":{"timestamp":"2018-06-02T22:51:28.209Z","error_code":0,"error_message":"","elapsed":10,"credit_count":1}} */
export interface CryptocurrencyListingsNewResponseModel {
  /** Array of cryptocurrency objects matching the list options. */
  data: any[];
  /** Standardized status object for API calls. */
  status?: APIStatusObject;
}

/** Exchange details for this market pair. */
export interface CryptocurrencyMarketPairsLatestExchangeInfoObject {
  /**
   * The id of the exchange this market pair is under.
   * @example 1
   */
  id: number;
  /**
   * The slug of the exchange this market pair is under.
   * @example "binance"
   */
  slug: string;
  /**
   * The name of the exchange this market pair is under.
   * @example "binance"
   */
  name: string;
  /**
   * A [Markdown](https://commonmark.org/help/) formatted message outlining a condition that is impacting the availability of this exchange's market data or the secure use of the exchange, otherwise null. This may include a maintenance event on the exchange's end or CoinMarketCap's end, an alert about reported issues with withdrawls from this exchange, or another condition that may be impacting this exchange and it's markets. If present, this notice is also displayed in an alert banner at the top of the exchange's page on coinmarketcap.com. *This field is only returned if requested through the `aux` request parameter.*
   * @example "The BTC/USD market on BitMEX is a derivatives market NOT actually spot trading Bitcoin. As a result, it has been excluded from the price and volume averages of Bitcoin."
   */
  notice?: string;
}

/** Base currency details object for this market pair. */
export interface CryptocurrencyMarketPairsLatestPairBaseCurrencyInfoObject {
  /**
   * The CoinMarketCap ID for the base currency in this market pair.
   * @example 1
   */
  currency_id: number;
  /**
   * The name of this cryptocurrency. *This field is only returned if requested through the `aux` request parameter.*
   * @example "Bitcoin"
   */
  currency_name?: string;
  /**
   * The CoinMarketCap identified symbol for the base currency in this market pair.
   * @example "BTC"
   */
  currency_symbol: string;
  /**
   * The web URL friendly shorthand version of this cryptocurrency name. *This field is only returned if requested through the `aux` request parameter.*
   * @example "bitcoin"
   */
  currency_slug?: string;
  /**
   * The exchange reported symbol for the base currency in this market pair. In most cases this is identical to CoinMarketCap's symbol but it may differ if the exchange uses an outdated or contentious symbol that contrasts with the majority of other markets.
   * @example "BTC"
   */
  exchange_symbol: string;
  /**
   * The currency type for the base currency in this market pair.
   * @example "cryptocurrency"
   */
  currency_type: 'cryptocurrency' | 'fiat';
}

/** Quote (secondary) currency details object for this market pair. */
export interface CryptocurrencyMarketPairsLatestPairBaseCurrencyInfoObject1 {
  /**
   * The CoinMarketCap ID for the quote (secondary) currency in this market pair.
   * @example 2781
   */
  currency_id: number;
  /**
   * The name of this cryptocurrency. *This field is only returned if requested through the `aux` request parameter.*
   * @example "Bitcoin"
   */
  currency_name?: string;
  /**
   * The symbol for the quote (secondary) currency in this market pair.
   * @example "USD"
   */
  currency_symbol: string;
  /**
   * The web URL friendly shorthand version of this cryptocurrency name. *This field is only returned if requested through the `aux` request parameter.*
   * @example "bitcoin"
   */
  currency_slug?: string;
  /**
   * The exchange reported symbol for the quote (secondary) currency in this market pair. In most cases this is identical to CoinMarketCap's symbol but it may differ if the exchange uses an outdated or contentious symbol that contrasts with the majority of other markets.
   * @example "USD"
   */
  exchange_symbol: string;
  /**
   * The currency type for the quote (secondary) currency in this market pair.
   * @example "fiat"
   */
  currency_type: 'cryptocurrency' | 'fiat';
}

/** A default exchange reported quote containing raw exchange reported values. */
export interface CryptocurrencyMarketPairsLatestMarketPairExchangeReportedQuote {
  /**
   * The lastest exchange reported price for this market pair in quote currency units.
   * @example 8000.23
   */
  price: number;
  /**
   * The latest exchange reported 24 hour rolling volume for this market pair in base cryptocurrency units.
   * @example 30768
   */
  volume_24h_base: number;
  /**
   * The latest exchange reported 24 hour rolling volume for this market pair in quote cryptocurrency units.
   * @example 250448443.2
   */
  volume_24h_quote: number;
  effective_liquidity?: any;
  market_score?: any;
  market_reputation?: any;
  /**
   * Timestamp (ISO 8601) of the last time this market data was updated.
   * @format date
   * @example "2018-06-02T23:59:59.999Z"
   */
  last_updated: string;
}

/** One or more market quotes where $key is the conversion currency requested, ex. USD */
export interface CryptocurrencyMarketPairsLatestMarketPairQuote {
  /**
   * The lastest exchange reported price for this market pair converted into the requested convert currency.
   * @example 8000.23
   */
  price: number;
  /**
   * The latest exchange reported price in base units converted into the requested convert currency. *This field is only returned if requested through the `aux` request parameter.*
   * @example 8000.23
   */
  price_quote?: number;
  /**
   * The latest exchange reported 24 hour rolling volume in quote units for this market pair converted into the requested convert currency.
   * @example 1600000
   */
  volume_24h: number;
  /**
   * Timestamp (ISO 8601) of when the conversion currency's current value was referenced for this conversion.
   * @format date
   * @example "2018-06-02T23:59:59.999Z"
   */
  last_updated: string;
}

/** Market Pair quotes object containing key->quote objects for each convert option requested. USD and "exchange_reported" are defaults. */
export interface CryptocurrencyMarketPairsLatestMarketPairQuoteObject {
  /** A default exchange reported quote containing raw exchange reported values. */
  exchange_reported: CryptocurrencyMarketPairsLatestMarketPairExchangeReportedQuote;
  /** One or more market quotes where $key is the conversion currency requested, ex. USD */
  $key: CryptocurrencyMarketPairsLatestMarketPairQuote;
}

/** Market Pair info object. */
export interface CryptocurrencyMarketPairsLatestMarketPairInfoObject {
  /** Exchange details for this market pair. */
  exchange: CryptocurrencyMarketPairsLatestExchangeInfoObject;
  /**
   * The CoinMarketCap ID for this market pair. This ID can reliably be used to identify this unique market as the ID never changes.
   * @example 9933
   */
  market_id?: number;
  /**
   * The name of this market pair.  Example: "BTC/USD"
   * @example "BTC/USD"
   */
  market_pair?: string;
  /**
   * The category of trading this market falls under. Spot markets are the most common but options include derivatives and OTC.
   * @example "spot"
   */
  category?: 'spot' | 'derivatives' | 'otc';
  /**
   * The fee type the exchange enforces for this market.
   * @example "percentage"
   */
  fee_type?: 'percentage' | 'no-fees' | 'transactional-mining' | 'unknown';
  /**
   * The URL to this market's trading page on the exchange if available. If not available the exchange's homepage URL is returned. *This field is only returned if requested through the `aux` request parameter.*
   * @example "https://www.binance.com/en/trade/BTC_USDT"
   */
  market_url?: string;
  /** Base currency details object for this market pair. */
  mark_pair_base: CryptocurrencyMarketPairsLatestPairBaseCurrencyInfoObject;
  /** Quote (secondary) currency details object for this market pair. */
  mark_pair_quote: CryptocurrencyMarketPairsLatestPairBaseCurrencyInfoObject1;
  /** Market Pair quotes object containing key->quote objects for each convert option requested. USD and "exchange_reported" are defaults. */
  quote: CryptocurrencyMarketPairsLatestMarketPairQuoteObject;
}

/** Array of all market pairs for this cryptocurrency. */
export type CryptocurrencyMarketPairsLatestMarketPairsArray = CryptocurrencyMarketPairsLatestMarketPairInfoObject[];

/**
 * Results of your query returned as an object.
 * @example {"id":1,"name":"Bitcoin","symbol":"BTC","num_market_pairs":7526,"market_pairs":[{"exchange":{"id":157,"name":"BitMEX","slug":"bitmex"},"market_id":4902,"market_pair":"BTC/USD","category":"derivatives","fee_type":"no-fees","market_pair_base":{"currency_id":1,"currency_symbol":"BTC","exchange_symbol":"XBT","currency_type":"cryptocurrency"},"market_pair_quote":{"currency_id":2781,"currency_symbol":"USD","exchange_symbol":"USD","currency_type":"fiat"},"quote":{"exchange_reported":{"price":7839,"volume_24h_base":434215.85308502,"volume_24h_quote":3403818072.33347,"last_updated":"2019-05-24T02:39:00.000Z"},"USD":{"price":7839,"volume_24h":3403818072.33347,"last_updated":"2019-05-24T02:39:00.000Z"}}},{"exchange":{"id":108,"name":"Negocie Coins","slug":"negocie-coins"},"market_id":3377,"market_pair":"BTC/BRL","category":"spot","fee_type":"percentage","market_pair_base":{"currency_id":1,"currency_symbol":"BTC","exchange_symbol":"BTC","currency_type":"cryptocurrency"},"market_pair_quote":{"currency_id":2783,"currency_symbol":"BRL","exchange_symbol":"BRL","currency_type":"fiat"},"quote":{"exchange_reported":{"price":33002.11,"volume_24h_base":336699.03559957,"volume_24h_quote":11111778609.7509,"last_updated":"2019-05-24T02:39:00.000Z"},"USD":{"price":8165.02539531659,"volume_24h":2749156176.2491,"last_updated":"2019-05-24T02:39:00.000Z"}}}]}
 */
export interface CryptocurrencyMarketPairsLatestResultsObject {
  /**
   * The CoinMarketCap ID for this cryptocurrency.
   * @min 1
   * @example 1
   */
  id: number;
  /**
   * The name of this cryptocurrency.
   * @example "Bitcoin"
   */
  name: string;
  /**
   * The symbol for this cryptocurrency.
   * @example "BTC"
   */
  symbol: string;
  /**
   * The number of active market pairs listed for this cryptocurrency. This number is filtered down to only matching markets if a `matched` parameter is used.
   * @example 303
   */
  num_market_pairs?: number;
  /** Array of all market pairs for this cryptocurrency. */
  market_pairs: any[];
}

export interface CryptocurrencyMarketPairsLatestResponseModel {
  /** Results of your query returned as an object. */
  data: CryptocurrencyMarketPairsLatestResultsObject;
  /** Standardized status object for API calls. */
  status?: APIStatusObject;
}

/** A market quote in each currency conversion option. */
export interface CryptocurrencyOHLCVHistoricalQuoteObject {
  /**
   * Opening price for time series interval.
   * @example 3849.21640853
   */
  open: number;
  /**
   * Highest price during this time series interval.
   * @example 3947.9812729
   */
  high: number;
  /**
   * Lowest price during this time series interval.
   * @example 3817.40949569
   */
  low: number;
  /**
   * Closing price for this time series interval.
   * @example 3943.40933686
   */
  close: number;
  /**
   * Adjusted volume for this time series interval. Volume is not currently supported for hourly OHLCV intervals before 2020-09-22.
   * @example 5244856835.70851
   */
  volume: number;
  /**
   * Market cap by circulating supply for this time series interval.
   * @example 68849856731.6738
   */
  market_cap: number;
  /**
   * Timestamp (ISO 8601) of when the conversion currency's current value was referenced for this conversion.
   * @format date
   * @example "2019-01-02T23:59:59.999Z"
   */
  timestamp: string;
}

/** A map of market quotes in different currency conversions. The default map included is USD. */
export interface CryptocurrencyOHLCVHistoricalQuoteMap {
  /** A market quote in each currency conversion option. */
  $key: CryptocurrencyOHLCVHistoricalQuoteObject;
}

/** An OHLCV quote for the supplied interval. */
export interface CryptocurrencyOHLCVHistoricalIntervalQuoteObject {
  /**
   * Timestamp (ISO 8601) of the start of this time series interval.
   * @format date
   * @example "2018-06-02T00:00:00.000Z"
   */
  time_open: string;
  /**
   * Timestamp (ISO 8601) of the end of this time series interval.
   * @format date
   * @example "2018-06-02T23:59:59.999Z"
   */
  time_close: string;
  /**
   * Timestamp (ISO 8601) of the high of this time series interval.
   * @format date
   * @example "2018-06-02T22:59:59.999Z"
   */
  time_high: string;
  /**
   * Timestamp (ISO 8601) of the low of this time series interval.
   * @format date
   * @example "2018-06-02T21:59:59.999Z"
   */
  time_low: string;
  /** A map of market quotes in different currency conversions. The default map included is USD. */
  quote: CryptocurrencyOHLCVHistoricalQuoteMap;
}

/** An array of OHLCV quotes for the supplied interval. */
export type CryptocurrencyOHLCVHistoricalIntervalQuotesArray = CryptocurrencyOHLCVHistoricalIntervalQuoteObject[];

/**
 * Results of your query returned as an object.
 * @example {"id":1,"name":"Bitcoin","symbol":"BTC","quotes":[{"time_open":"2019-01-02T00:00:00.000Z","time_close":"2019-01-02T23:59:59.999Z","time_high":"2019-01-02T03:53:00.000Z","time_low":"2019-01-02T02:43:00.000Z","quote":{"USD":{"open":3849.21640853,"high":3947.9812729,"low":3817.40949569,"close":3943.40933686,"volume":5244856835.70851,"market_cap":68849856731.6738,"timestamp":"2019-01-02T23:59:59.999Z"}}},{"time_open":"2019-01-03T00:00:00.000Z","time_close":"2019-01-03T23:59:59.999Z","time_high":"2019-01-02T03:53:00.000Z","time_low":"2019-01-02T02:43:00.000Z","quote":{"USD":{"open":3931.04863841,"high":3935.68513083,"low":3826.22287069,"close":3836.74131867,"volume":4530215218.84018,"market_cap":66994920902.7202,"timestamp":"2019-01-03T23:59:59.999Z"}}}]}
 */
export interface CryptocurrencyOHLCVHistoricalResultsObject {
  /**
   * The CoinMarketCap cryptocurrency ID.
   * @example 1
   */
  id: number;
  /**
   * The cryptocurrency name.
   * @example "Bitcoin"
   */
  name: string;
  /**
   * The cryptocurrency symbol.
   * @example "BTC"
   */
  symbol: string;
  /** An array of OHLCV quotes for the supplied interval. */
  quotes: any[];
}

export interface CryptocurrencyOHLCVHistoricalResponseModel {
  /** Results of your query returned as an object. */
  data: CryptocurrencyOHLCVHistoricalResultsObject;
  /** Standardized status object for API calls. */
  status?: APIStatusObject;
}

/** A market quote in each currency conversion option. */
export interface CryptocurrencyOHLCVLatestQuoteObject {
  /**
   * Price from first datapoint of today in UTC time for the convert option requested.
   * @example 966.34
   */
  open: number;
  /**
   * Highest price so far today in UTC time for the convert option requested.
   * @example 1005
   */
  high: number;
  /**
   * Lowest price today in UTC time for the convert option requested.
   * @example 960.53
   */
  low: number;
  /**
   * Latest price today in UTC time for the convert option requested. This is not the final price during close as the current day period is not over.
   * @example 997.75
   */
  close: number;
  /**
   * Aggregate 24 hour adjusted volume for the convert option requested. Please note, this is a rolling 24 hours back from the current time.
   * @example 6850.59330859
   */
  volume: number;
  /**
   * Timestamp (ISO 8601) of when the conversion currency's current value was last updated when referenced for this conversion.
   * @format date
   * @example "2018-06-02T00:00:00.000Z"
   */
  last_updated: string;
}

/** A map of market quotes in different currency conversions. The default map included is USD. */
export interface CryptocurrencyOHLCVLatestQuoteMap {
  /** A market quote in each currency conversion option. */
  $key: CryptocurrencyOHLCVLatestQuoteObject;
}

/** A cryptocurrency object for each requested. */
export interface CryptocurrencyOHLCVLatestCryptocurrencyObject {
  /**
   * The unique CoinMarketCap ID for this cryptocurrency.
   * @example 1
   */
  id: number;
  /**
   * The name of this cryptocurrency.
   * @example "Bitcoin"
   */
  name: string;
  /**
   * The ticker symbol for this cryptocurrency.
   * @example "BTC"
   */
  symbol: string;
  /**
   * Timestamp (ISO 8601) of the lastest market value record included to generate the latest active day OHLCV values.
   * @format date
   * @example "2018-06-02T23:59:59.999Z"
   */
  last_updated: string;
  /**
   * Timestamp (ISO 8601) of the start of this OHLCV period.
   * @format date
   * @example "2018-06-02T00:00:00.000Z"
   */
  time_open: string;
  /**
   * Timestamp (ISO 8601) of the high of this OHLCV period.
   * @format date
   * @example "2018-06-02T00:00:00.000Z"
   */
  time_high: string;
  /**
   * Timestamp (ISO 8601) of the low of this OHLCV period.
   * @format date
   * @example "2018-06-02T00:00:00.000Z"
   */
  time_low: string;
  /**
   * Timestamp (ISO 8601) of the end of this OHLCV period. Always `null` as the current day is incomplete. See `last_updated` for the last UTC time included in the current OHLCV calculation.
   * @format date
   * @example "null"
   */
  time_close: string;
  /** A map of market quotes in different currency conversions. The default map included is USD. */
  quote: CryptocurrencyOHLCVLatestQuoteMap;
}

/**
 * A map of cryptocurrency objects by ID or symbol (as passed in query parameters).
 * @example {"1":{"id":1,"name":"Bitcoin","symbol":"BTC","last_updated":"2018-09-10T18:54:00.000Z","time_open":"2018-09-10T00:00:00.000Z","time_close":null,"time_high":"2018-09-10T00:00:00.000Z","time_low":"2018-09-10T00:00:00.000Z","quote":{"USD":{"open":6301.57,"high":6374.98,"low":6292.76,"close":6308.76,"volume":3786450000,"last_updated":"2018-09-10T18:54:00.000Z"}}}}
 */
export interface CryptocurrencyOHLCVLatestCryptocurrencyResultsMap {
  /** A cryptocurrency object for each requested. */
  $key: CryptocurrencyOHLCVLatestCryptocurrencyObject;
}

export interface CryptocurrencyOHLCVLatestResponseModel {
  /** A map of cryptocurrency objects by ID or symbol (as passed in query parameters). */
  data: CryptocurrencyOHLCVLatestCryptocurrencyResultsMap;
  /** Standardized status object for API calls. */
  status?: APIStatusObject;
}

/** A time period quote in the currency conversion option. */
export interface CryptocurrencyPricePerformanceStatsLatestQuoteObject {
  /**
   * Cryptocurrency price at the start of the requested time period historically converted into units of the convert currency.
   * @example 135.3000030517578
   */
  open: number;
  /**
   * Timestamp (ISO 8601) of the closest convert currency reference price used during `open` price conversion.
   * @format date
   * @example "2013-04-28T00:00:00.000Z"
   */
  open_timestamp: string;
  /**
   * Highest USD price achieved within the requested time period historically converted into units of the convert currency.
   * @example 20088.99609375
   */
  high: number;
  /**
   * Timestamp (ISO 8601) of the closest convert currency reference price used during `high` price conversion. *For `yesterday` UTC close will be used.*
   * @format date
   * @example "2017-12-17T12:19:14.000Z"
   */
  high_timestamp: string;
  /**
   * Lowest USD price achieved within the requested time period historically converted into units of the convert currency.
   * @example 65.5260009765625
   */
  low: number;
  /**
   * Timestamp (ISO 8601) of the closest convert currency reference price used during `low` price conversion. *For `yesterday` UTC close will be used.*
   * @format date
   * @example "2013-07-05T18:56:01.000Z"
   */
  low_timestamp: string;
  /**
   * Cryptocurrency price at the end of the requested time period historically converted into units of the convert currency.
   * @example 9908.99193585
   */
  close: number;
  /**
   * Timestamp (ISO 8601) of the closest convert currency reference price used during `close` price conversion.
   * @format date
   * @example "2019-08-22T01:52:18.618Z"
   */
  close_timestamp: string;
  /**
   * The approximate percentage change (ROI) if purchased at the start of the time period. This is the time of launch or earliest known price for the `all_time` period. This value includes historical change in market rate for the specified convert currency.
   * @example 7223.718930042746
   */
  percent_change: number;
  /**
   * The actual price change between the start of the time period and end. This is the time of launch or earliest known price for the `all_time` period. This value includes historical change in market rate for the specified convert currency.
   * @example 9773.691932798241
   */
  price_change: number;
}

/** An object map of time period quotes for each convert option requested. The default map included is USD. */
export interface CryptocurrencyPricePerformanceStatsLatestQuoteMap {
  /** A time period quote in the currency conversion option. */
  $key: CryptocurrencyPricePerformanceStatsLatestQuoteObject;
}

/** A time period data object. `all_time` is the default. */
export interface CryptocurrencyPricePerformanceStatsLatestPeriodObject {
  /**
   * Timestamp (ISO 8601) of the start of this time period. Please note that this is a rolling period back from current time for time periods outside of `yesterday`.
   * @format date
   * @example "2013-04-28T00:00:00.000Z"
   */
  open_timestamp: string;
  /**
   * Timestamp (ISO 8601) of when this cryptocurrency achieved it's highest USD price during the requested time period. *Note: The `yesterday` period currently doesn't support this field and will return `null`.*
   * @format date
   * @example "2017-12-17T12:19:14.000Z"
   */
  high_timestamp: string;
  /**
   * Timestamp (ISO 8601) of when this cryptocurrency achieved it's lowest USD price during the requested time period. *Note: The `yesterday` period currently doesn't support this field and will return `null`.*
   * @format date
   * @example "2013-07-05T18:56:01.000Z"
   */
  low_timestamp: string;
  /**
   * Timestamp (ISO 8601) of the end of this time period. Please note that this is a rolling period back from current time for time periods outside of `yesterday`.
   * @format date
   * @example "2019-08-22T01:52:18.613Z"
   */
  close_timestamp: string;
  /** An object map of time period quotes for each convert option requested. The default map included is USD. */
  quote: CryptocurrencyPricePerformanceStatsLatestQuoteMap;
}

/** An object map of time periods by period requested. */
export interface CryptocurrencyPricePerformanceStatsLatestPeriodObjectMap {
  /** A time period data object. `all_time` is the default. */
  $key: CryptocurrencyPricePerformanceStatsLatestPeriodObject;
}

/** A cryptocurrency object for each requested. */
export interface CryptocurrencyPricePerformanceStatsLatestCryptocurrencyObject {
  /**
   * The unique CoinMarketCap ID for this cryptocurrency.
   * @example 1
   */
  id: number;
  /**
   * The name of this cryptocurrency.
   * @example "Bitcoin"
   */
  name: string;
  /**
   * The ticker symbol for this cryptocurrency.
   * @example "BTC"
   */
  symbol: string;
  /**
   * The web URL friendly shorthand version of this cryptocurrency name.
   * @example "bitcoin"
   */
  slug: string;
  /**
   * Timestamp (ISO 8601) of the last time this cryptocurrency's market data was updated.
   * @format date
   * @example "2019-08-22T01:51:32.000Z"
   */
  last_updated: string;
  /** An object map of time periods by period requested. */
  periods: CryptocurrencyPricePerformanceStatsLatestPeriodObjectMap;
}

/**
 * An object map of cryptocurrency objects by ID, slug, or symbol (as used in query parameters).
 * @example {"1":{"id":1,"name":"Bitcoin","symbol":"BTC","slug":"bitcoin","last_updated":"2019-08-22T01:51:32.000Z","periods":{"all_time":{"open_timestamp":"2013-04-28T00:00:00.000Z","high_timestamp":"2017-12-17T12:19:14.000Z","low_timestamp":"2013-07-05T18:56:01.000Z","close_timestamp":"2019-08-22T01:52:18.613Z","quote":{"USD":{"open":135.3000030517578,"open_timestamp":"2013-04-28T00:00:00.000Z","high":20088.99609375,"high_timestamp":"2017-12-17T12:19:14.000Z","low":65.5260009765625,"low_timestamp":"2013-07-05T18:56:01.000Z","close":65.5260009765625,"close_timestamp":"2019-08-22T01:52:18.618Z","percent_change":7223.718930042746,"price_change":9773.691932798241}}}}}}
 */
export interface CryptocurrencyPricePerformanceStatsLatestCryptocurrencyResultsMap {
  /** A cryptocurrency object for each requested. */
  $key: CryptocurrencyPricePerformanceStatsLatestCryptocurrencyObject;
}

export interface CryptocurrencyPricePerformanceStatsLatestResponseModel {
  /** An object map of cryptocurrency objects by ID, slug, or symbol (as used in query parameters). */
  data: CryptocurrencyPricePerformanceStatsLatestCryptocurrencyResultsMap;
  /** Standardized status object for API calls. */
  status?: APIStatusObject;
}

/** The market details for the current interval and currency conversion option. The map key being the curency symbol. */
export interface CryptocurrencyQuotesHistoricalCurrencyQuoteObject {
  /**
   * Price at this interval quote.
   * @example 1235000
   */
  price: number;
  /**
   * Aggregate 24 hour adjusted volume for all market pairs tracked for this cryptocurrency at the current historical interval.
   * @example 1235000
   */
  volume_24hr: number;
  /**
   * Number of market pairs available at the current historical interval.
   * @example 123456789
   */
  market_cap: number;
  /**
   * Timestamp (ISO 8601) of when the conversion currency's current value was referenced for this conversion.
   * @format date
   * @example "2018-06-02T22:51:28.209Z"
   */
  timestamp: string;
}

/** A map of market details for this quote in different currency conversions. The default map included is USD. */
export interface CryptocurrencyQuotesHistoricalQuoteCurrencyMap {
  /** The market details for the current interval and currency conversion option. The map key being the curency symbol. */
  $key: CryptocurrencyQuotesHistoricalCurrencyQuoteObject;
}

/** An object containing details for the current interval quote. */
export interface CryptocurrencyQuotesHistoricalIntervalQuoteObject {
  /**
   * Timestamp of when this historical quote was recorded.
   * @format date
   * @example "2018-06-02T23:59:59.999Z"
   */
  timestamp: string;
  /**
   * The interval timestamp for the search period that this historical quote was located against. *This field is only returned if requested through the `aux` request parameter.*
   * @format date
   * @example "2018-06-02T00:00:00.000Z"
   */
  search_interval?: string;
  /** A map of market details for this quote in different currency conversions. The default map included is USD. */
  quote: CryptocurrencyQuotesHistoricalQuoteCurrencyMap;
}

/** An array of quotes for each interval for this cryptocurrency. */
export type CryptocurrencyQuotesHistoricalIntervalQuotesArray = CryptocurrencyQuotesHistoricalIntervalQuoteObject[];

/** A results object for each cryptocurrency requested. The map key being the id/symbol used in the request. */
export interface CryptocurrencyQuotesHistoricalResultObject {
  /**
   * The CoinMarketCap cryptocurrency ID.
   * @example 1
   */
  id: number;
  /**
   * The cryptocurrency name.
   * @example "Bitcoin"
   */
  name: string;
  /**
   * The cryptocurrency symbol.
   * @example "BTC"
   */
  symbol: string;
  /**
   * 1 if this cryptocurrency has at least 1 active market currently being tracked by the platform, otherwise 0. A value of 1 is analogous with `listing_status=active`.
   * @min 0
   * @max 1
   * @example 1
   */
  is_active?: number;
  /**
   * 1 if this is a fiat
   * @min 0
   * @max 1
   * @example 1
   */
  is_fiat?: number;
  /** An array of quotes for each interval for this cryptocurrency. */
  quotes: any[];
}

/**
 * Results of your query returned as an object map.
 * @example {"id":1,"name":"Bitcoin","symbol":"BTC","is_active":1,"is_fiat":0,"quotes":[{"timestamp":"2018-06-22T19:29:37.000Z","quote":{"USD":{"price":6242.29,"volume_24h":4681670000,"market_cap":106800038746.48,"circulating_supply":4681670000,"total_supply":4681670000,"timestamp":"2018-06-22T19:29:37.000Z"}}},{"timestamp":"2018-06-22T19:34:33.000Z","quote":{"USD":{"price":6242.82,"volume_24h":4682330000,"market_cap":106809106575.84,"circulating_supply":4681670000,"total_supply":4681670000,"timestamp":"2018-06-22T19:34:33.000Z"}}}]}
 */
export interface CryptocurrencyQuotesHistoricalResultsMap {
  /** A results object for each cryptocurrency requested. The map key being the id/symbol used in the request. */
  $key: CryptocurrencyQuotesHistoricalResultObject;
}

export interface CryptocurrencyQuotesHistoricalResponseModel {
  /** Results of your query returned as an object map. */
  data: CryptocurrencyQuotesHistoricalResultsMap;
  /** Standardized status object for API calls. */
  status?: APIStatusObject;
}

/** A market quote in the currency conversion option. */
export interface CryptocurrencyQuotesLatestQuoteObject {
  /**
   * Price in the specified currency.
   * @example 7139.82
   */
  price: number;
  /**
   * Rolling 24 hour adjusted volume in the specified currency.
   * @example 4885880000
   */
  volume_24h: number;
  /**
   * 24 hour change in the specified currencies volume.
   * @example 5.75
   */
  volume_change_24h?: number;
  /**
   * Rolling 24 hour reported volume in the specified currency. *This field is only returned if requested through the `aux` request parameter.*
   * @example 4885880000
   */
  volume_24h_reported?: number;
  /**
   * Rolling 7 day adjusted volume in the specified currency. *This field is only returned if requested through the `aux` request parameter.*
   * @example 4885880000
   */
  volume_7d?: number;
  /**
   * Rolling 7 day reported volume in the specified currency. *This field is only returned if requested through the `aux` request parameter.*
   * @example 4885880000
   */
  volume_7d_reported?: number;
  /**
   * Rolling 30 day adjusted volume in the specified currency. *This field is only returned if requested through the `aux` request parameter.*
   * @example 4885880000
   */
  volume_30d?: number;
  /**
   * Rolling 30 day reported volume in the specified currency. *This field is only returned if requested through the `aux` request parameter.*
   * @example 4885880000
   */
  volume_30d_reported?: number;
  /**
   * Market cap in the specified currency.
   * @example 121020662982
   */
  market_cap: number;
  /**
   * Market cap dominance in the specified currency.
   * @example 121020662982
   */
  market_cap_dominance: number;
  /**
   * Fully diluted market cap in the specified currency.
   * @example 121020662982
   */
  fully_diluted_market_cap: number;
  /**
   * 1 hour change in the specified currency.
   * @example 0.03
   */
  percent_change_1h: number;
  /**
   * 24 hour change in the specified currency.
   * @example 5.75
   */
  percent_change_24h: number;
  /**
   * 7 day change in the specified currency.
   * @example -19.64
   */
  percent_change_7d: number;
  /**
   * 30 day change in the specified currency.
   * @example -19.64
   */
  percent_change_30d: number;
  /**
   * Timestamp (ISO 8601) of when the conversion currency's current value was referenced.
   * @format date
   * @example "2018-06-02T23:59:59.999Z"
   */
  last_updated: string;
}

/** A map of market quotes in different currency conversions. The default map included is USD. */
export interface CryptocurrencyQuotesLatestQuoteMap {
  /** A market quote in the currency conversion option. */
  $key: CryptocurrencyQuotesLatestQuoteObject;
}

/** A cryptocurrency object for each requested. */
export interface CryptocurrencyQuotesLatestCryptocurrencyObject {
  /**
   * The unique CoinMarketCap ID for this cryptocurrency.
   * @example 1
   */
  id: number;
  /**
   * The name of this cryptocurrency.
   * @example "Bitcoin"
   */
  name: string;
  /**
   * The ticker symbol for this cryptocurrency.
   * @example "BTC"
   */
  symbol: string;
  /**
   * The web URL friendly shorthand version of this cryptocurrency name.
   * @example "bitcoin"
   */
  slug: string;
  /**
   * 1 if this cryptocurrency has at least 1 active market currently being tracked by the platform, otherwise 0. A value of 1 is analogous with `listing_status=active`.
   * @min 0
   * @max 1
   * @example 1
   */
  is_active?: number;
  /**
   * 1 if this is a fiat
   * @min 0
   * @max 1
   * @example 1
   */
  is_fiat?: number;
  /**
   * The cryptocurrency's CoinMarketCap rank by market cap.
   * @example 5
   */
  cmc_rank?: number;
  /**
   * The number of active trading pairs available for this cryptocurrency across supported exchanges.
   * @example 500
   */
  num_market_pairs?: number;
  /**
   * The approximate number of coins circulating for this cryptocurrency.
   * @example 16950100
   */
  circulating_supply?: number;
  /**
   * The approximate total amount of coins in existence right now (minus any coins that have been verifiably burned).
   * @example 16950100
   */
  total_supply?: number;
  /**
   * The market cap by total supply. *This field is only returned if requested through the `aux` request parameter.*
   * @example 158055024432
   */
  market_cap_by_total_supply?: number;
  /**
   * The expected maximum limit of coins ever to be available for this cryptocurrency.
   * @example 21000000
   */
  max_supply?: number;
  /**
   * Timestamp (ISO 8601) of when this cryptocurrency was added to CoinMarketCap.
   * @format date
   * @example "2013-04-28T00:00:00.000Z"
   */
  date_added?: string;
  /** Array of tags associated with this cryptocurrency. Currently only a mineable tag will be returned if the cryptocurrency is mineable. Additional tags will be returned in the future. */
  tags?: any[];
  /** Metadata about the parent cryptocurrency platform this cryptocurrency belongs to if it is a token, otherwise null. */
  platform?: Platform;
  /**
   * Timestamp (ISO 8601) of the last time this cryptocurrency's market data was updated.
   * @format date
   * @example "2018-06-02T23:59:59.999Z"
   */
  last_updated: string;
  /**
   * The self reported number of coins circulating for this cryptocurrency.
   * @example 16950100
   */
  self_reported_circulating_supply?: number;
  /**
   * The self reported market cap for this cryptocurrency.
   * @example 16950100
   */
  self_reported_market_cap?: number;
  /** A map of market quotes in different currency conversions. The default map included is USD. */
  quote: CryptocurrencyQuotesLatestQuoteMap;
}

/**
 * A map of cryptocurrency objects by ID, symbol, or slug (as used in query parameters).
 * @example {"1":{"id":1,"name":"Bitcoin","symbol":"BTC","slug":"bitcoin","is_active":1,"is_fiat":0,"circulating_supply":17199862,"total_supply":17199862,"max_supply":21000000,"date_added":"2013-04-28T00:00:00.000Z","num_market_pairs":331,"cmc_rank":1,"last_updated":"2018-08-09T21:56:28.000Z","tags":["mineable"],"platform":null,"self_reported_circulating_supply":null,"self_reported_market_cap":null,"quote":{"USD":{"price":6602.60701122,"volume_24h":4314444687.5194,"volume_change_24h":-0.152774,"percent_change_1h":0.988615,"percent_change_24h":4.37185,"percent_change_7d":-12.1352,"percent_change_30d":-12.1352,"market_cap":852164659250.2758,"market_cap_dominance":51,"fully_diluted_market_cap":952835089431.14,"last_updated":"2018-08-09T21:56:28.000Z"}}}}
 */
export interface CryptocurrencyQuotesLatestCryptocurrencyResultsMap {
  /** A cryptocurrency object for each requested. */
  $key: CryptocurrencyQuotesLatestCryptocurrencyObject;
}

export interface CryptocurrencyQuotesLatestResponseModel {
  /** A map of cryptocurrency objects by ID, symbol, or slug (as used in query parameters). */
  data: CryptocurrencyQuotesLatestCryptocurrencyResultsMap;
  /** Standardized status object for API calls. */
  status?: APIStatusObject;
}

/** Array of cryptocurrency objects matching the list options. */
export type CryptocurrencyTrendingGainersLosersResultsArray = CryptocurrencyCryptocurrencyObject[];

/** @example {"data":[{"id":1,"name":"Bitcoin","symbol":"BTC","slug":"bitcoin","cmc_rank":5,"num_market_pairs":500,"circulating_supply":16950100,"total_supply":16950100,"max_supply":21000000,"last_updated":"2018-06-02T22:51:28.209Z","date_added":"2013-04-28T00:00:00.000Z","tags":["mineable"],"platform":null,"quote":{"USD":{"price":9283.92,"volume_24h":7155680000,"percent_change_1h":-0.152774,"percent_change_24h":0.518894,"percent_change_7d":0.986573,"market_cap":158055024432,"last_updated":"2018-08-09T22:53:32.000Z"},"BTC":{"price":1,"volume_24h":772012,"percent_change_1h":0,"percent_change_24h":0,"percent_change_7d":0,"market_cap":17024600,"last_updated":"2018-08-09T22:53:32.000Z"}}},{"id":1027,"name":"Ethereum","symbol":"ETH","slug":"ethereum","num_market_pairs":6360,"circulating_supply":16950100,"total_supply":16950100,"max_supply":21000000,"last_updated":"2018-06-02T22:51:28.209Z","date_added":"2013-04-28T00:00:00.000Z","tags":["mineable"],"platform":null,"quote":{"USD":{"price":1283.92,"volume_24h":7155680000,"percent_change_1h":-0.152774,"percent_change_24h":0.518894,"percent_change_7d":0.986573,"market_cap":158055024432,"last_updated":"2018-08-09T22:53:32.000Z"},"ETH":{"price":1,"volume_24h":772012,"percent_change_1h":0,"percent_change_24h":0,"percent_change_7d":0,"market_cap":17024600,"last_updated":"2018-08-09T22:53:32.000Z"}}}],"status":{"timestamp":"2018-06-02T22:51:28.209Z","error_code":0,"error_message":"","elapsed":10,"credit_count":1}} */
export interface CryptocurrencyTrendingGainersLosersResponseModel {
  /** Array of cryptocurrency objects matching the list options. */
  data: any[];
  /** Standardized status object for API calls. */
  status?: APIStatusObject;
}

/** A cryptocurrency object for every cryptocurrency that matched list options. */
export interface CryptocurrencyTrendingLatestCryptocurrencyObject {
  /**
   * The unique CoinMarketCap ID for this cryptocurrency.
   * @example 1
   */
  id: number;
  /**
   * The name of this cryptocurrency.
   * @example "Bitcoin"
   */
  name: string;
  /**
   * The ticker symbol for this cryptocurrency.
   * @example "BTC"
   */
  symbol: string;
  /**
   * The web URL friendly shorthand version of this cryptocurrency name.
   * @example "bitcoin"
   */
  slug: string;
  /**
   * The cryptocurrency's CoinMarketCap rank by market cap.
   * @example 5
   */
  cmc_rank?: number;
  /**
   * 1 if this is a fiat
   * @min 0
   * @max 1
   * @example 1
   */
  is_fiat?: number;
  /**
   * The self reported number of coins circulating for this cryptocurrency.
   * @example 16950100
   */
  self_reported_circulating_supply?: number;
  /**
   * The self reported market cap for this cryptocurrency.
   * @example 16950100
   */
  self_reported_market_cap?: number;
  /**
   * 1 if this cryptocurrency has at least 1 active market currently being tracked by the platform, otherwise 0. A value of 1 is analogous with `listing_status=active`.
   * @min 0
   * @max 1
   * @example 1
   */
  is_active?: number;
  /**
   * The number of active trading pairs available for this cryptocurrency across supported exchanges.
   * @example 500
   */
  num_market_pairs?: number;
  /**
   * The approximate number of coins circulating for this cryptocurrency.
   * @example 16950100
   */
  circulating_supply?: number;
  /**
   * The approximate total amount of coins in existence right now (minus any coins that have been verifiably burned).
   * @example 16950100
   */
  total_supply?: number;
  /**
   * The market cap by total supply. *This field is only returned if requested through the `aux` request parameter.*
   * @example 158055024432
   */
  market_cap_by_total_supply?: number;
  /**
   * The expected maximum limit of coins ever to be available for this cryptocurrency.
   * @example 21000000
   */
  max_supply?: number;
  /**
   * Timestamp (ISO 8601) of the last time this cryptocurrency's market data was updated.
   * @format date
   * @example "2018-06-02T22:51:28.209Z"
   */
  last_updated: string;
  /**
   * Timestamp (ISO 8601) of when this cryptocurrency was added to CoinMarketCap.
   * @format date
   * @example "2013-04-28T00:00:00.000Z"
   */
  date_added?: string;
  /** Array of tags associated with this cryptocurrency. Currently only a mineable tag will be returned if the cryptocurrency is mineable. Additional tags will be returned in the future. */
  tags?: any[];
  /** Metadata about the parent cryptocurrency platform this cryptocurrency belongs to if it is a token, otherwise null. */
  platform?: Platform;
  /** A map of market quotes in different currency conversions. The default map included is USD. */
  quote: CryptocurrencyQuoteMap;
}

/** Array of cryptocurrency objects matching the list options. */
export type CryptocurrencyTrendingLatestResultsArray = CryptocurrencyTrendingLatestCryptocurrencyObject[];

/** @example {"data":[{"id":1,"name":"Bitcoin","symbol":"BTC","slug":"bitcoin","cmc_rank":5,"is_active":true,"is_fiat":0,"self_reported_circulating_supply":null,"self_reported_market_cap":null,"num_market_pairs":500,"circulating_supply":16950100,"total_supply":16950100,"max_supply":21000000,"last_updated":"2018-06-02T22:51:28.209Z","date_added":"2013-04-28T00:00:00.000Z","tags":["mineable"],"platform":null,"quote":{"USD":{"price":9283.92,"volume_24h":7155680000,"percent_change_1h":-0.152774,"percent_change_24h":0.518894,"percent_change_7d":0.986573,"market_cap":158055024432,"last_updated":"2018-08-09T22:53:32.000Z"},"BTC":{"price":1,"volume_24h":772012,"percent_change_1h":0,"percent_change_24h":0,"percent_change_7d":0,"market_cap":17024600,"last_updated":"2018-08-09T22:53:32.000Z"}}},{"id":1027,"name":"Ethereum","symbol":"ETH","slug":"ethereum","num_market_pairs":6360,"circulating_supply":16950100,"total_supply":16950100,"max_supply":21000000,"last_updated":"2018-06-02T22:51:28.209Z","date_added":"2013-04-28T00:00:00.000Z","tags":["mineable"],"platform":null,"quote":{"USD":{"price":1283.92,"volume_24h":7155680000,"percent_change_1h":-0.152774,"percent_change_24h":0.518894,"percent_change_7d":0.986573,"market_cap":158055024432,"last_updated":"2018-08-09T22:53:32.000Z"},"ETH":{"price":1,"volume_24h":772012,"percent_change_1h":0,"percent_change_24h":0,"percent_change_7d":0,"market_cap":17024600,"last_updated":"2018-08-09T22:53:32.000Z"}}}],"status":{"timestamp":"2018-06-02T22:51:28.209Z","error_code":0,"error_message":"","elapsed":10,"credit_count":1}} */
export interface CryptocurrencyTrendingLatestResponseModel {
  /** Array of cryptocurrency objects matching the list options. */
  data: any[];
  /** Standardized status object for API calls. */
  status?: APIStatusObject;
}

/** Array of cryptocurrency objects matching the list options. */
export type CryptocurrencyTrendingMostVisitedResultsArray = CryptocurrencyCryptocurrencyObject[];

/** @example {"data":[{"id":1,"name":"Bitcoin","symbol":"BTC","slug":"bitcoin","cmc_rank":5,"num_market_pairs":500,"circulating_supply":16950100,"total_supply":16950100,"max_supply":21000000,"last_updated":"2018-06-02T22:51:28.209Z","date_added":"2013-04-28T00:00:00.000Z","tags":["mineable"],"platform":null,"quote":{"USD":{"price":9283.92,"volume_24h":7155680000,"percent_change_1h":-0.152774,"percent_change_24h":0.518894,"percent_change_7d":0.986573,"market_cap":158055024432,"last_updated":"2018-08-09T22:53:32.000Z"},"BTC":{"price":1,"volume_24h":772012,"percent_change_1h":0,"percent_change_24h":0,"percent_change_7d":0,"market_cap":17024600,"last_updated":"2018-08-09T22:53:32.000Z"}}},{"id":1027,"name":"Ethereum","symbol":"ETH","slug":"ethereum","num_market_pairs":6360,"circulating_supply":16950100,"total_supply":16950100,"max_supply":21000000,"last_updated":"2018-06-02T22:51:28.209Z","date_added":"2013-04-28T00:00:00.000Z","tags":["mineable"],"platform":null,"quote":{"USD":{"price":1283.92,"volume_24h":7155680000,"percent_change_1h":-0.152774,"percent_change_24h":0.518894,"percent_change_7d":0.986573,"market_cap":158055024432,"last_updated":"2018-08-09T22:53:32.000Z"},"ETH":{"price":1,"volume_24h":772012,"percent_change_1h":0,"percent_change_24h":0,"percent_change_7d":0,"market_cap":17024600,"last_updated":"2018-08-09T22:53:32.000Z"}}}],"status":{"timestamp":"2018-06-02T22:51:28.209Z","error_code":0,"error_message":"","elapsed":10,"credit_count":1}} */
export interface CryptocurrencyTrendingMostVisitedResponseModel {
  /** Array of cryptocurrency objects matching the list options. */
  data: any[];
  /** Standardized status object for API calls. */
  status?: APIStatusObject;
}

/** A market quote in the currency conversion option. */
export interface ExchangeListingsLatestQuoteObject {
  /**
   * Timestamp (ISO 8601) of when the conversion currency's current value was referenced for this conversion.
   * @format date
   * @example "2018-06-02T23:59:59.999Z"
   */
  last_updated: string;
  /**
   * Reported 24 hour volume in the specified currency.
   * @example 768478308.529847
   */
  volume_24h: number;
  /**
   * Adjusted 24 hour volume in the specified currency for spot markets excluding markets with no fees and transaction mining.
   * @example 768478308.529847
   */
  volume_24h_adjusted: number;
  /**
   * 7 day volume in the specified currency.
   * @example 3666423776
   */
  volume_7d: number;
  /**
   * 30 day volume in the specified currency.
   * @example 21338299776
   */
  volume_30d: number;
  /**
   * 24 hour volume change percentage in the specified currency.
   * @example 0.03
   */
  percent_change_volume_24h: number;
  /**
   * 7 day volume change percentage in the specified currency.
   * @example 5.75
   */
  percent_change_volume_7d: number;
  /**
   * 30 day volume change percentage in the specified currency.
   * @example -19.64
   */
  percent_change_volume_30d: number;
  /**
   * 24 hour liquidity in the specified currency.
   * @example -19.64
   */
  effective_liquidity_24h?: number;
  /**
   * Reported 24 hour derivative volume in the specified currency.
   * @example 768478308.529847
   */
  derivative_volume?: number;
  /**
   * Reported 24 hour derivative open interest in the specified currency.
   * @example 768478308.529847
   */
  open_interest?: number;
  /**
   * Reported all time spot volume in the specified currency.
   * @example 768478308.529847
   */
  spot_volume_usd?: number;
}

/**
 * A map of market quotes in different currency conversions. The default map included is USD.
 * @example {"USD":{"volume_24h":1418940000}}
 */
export interface ExchangeListingsLatestQuoteMap {
  /** A market quote in the currency conversion option. */
  $key: ExchangeListingsLatestQuoteObject;
}

/** An exchange object for every exchange that matched list options. */
export interface ExchangeListingsLatestExchangeObject {
  /**
   * The unique CoinMarketCap ID for this exchange.
   * @example 1
   */
  id: number;
  /**
   * The name of this exchange.
   * @example "Binance"
   */
  name: string;
  /**
   * The web URL friendly shorthand version of this exchange name.
   * @example "Binance"
   */
  slug: string;
  /**
   * The number of trading pairs actively tracked on this exchange.
   * @example 500
   */
  num_market_pairs?: string;
  /**
   * Timestamp (ISO 8601) of the date this exchange launched. *This field is only returned if requested through the `aux` request parameter.*
   * @format date
   * @example "2018-06-02T00:00:00.000Z"
   */
  date_launched?: string;
  /**
   * The exchange score.
   * @example 9.8
   */
  exchange_score?: number;
  /**
   * The liquidity score.
   * @example 9.8
   */
  liquidity_score?: number;
  /**
   * The exchange rank.
   * @example 5
   */
  rank?: number;
  /**
   * The traffic score.
   * @example 1000
   */
  traffic_score?: number;
  /**
   * Timestamp (ISO 8601) of the last time this record was upated.
   * @format date
   * @example "2018-06-02T00:00:00.000Z"
   */
  last_updated: string;
  /** A map of market quotes in different currency conversions. The default map included is USD. */
  quote: ExchangeListingsLatestQuoteMap;
}

/**
 * Array of exchange objects matching the list options.
 * @example [{"id":270,"name":"Binance","slug":"binance","num_market_pairs":1214,"fiats":["AED","USD"],"traffic_score":1000,"rank":1,"exchange_score":null,"liquidity_score":9.8028,"last_updated":"2018-11-08T22:18:00.000Z","quote":{"USD":{"volume_24h":769291636.239632,"volume_24h_adjusted":769291636.239632,"volume_7d":3666423776,"volume_30d":21338299776,"percent_change_volume_24h":-11.6153,"percent_change_volume_7d":67.2055,"percent_change_volume_30d":0.00169339,"effective_liquidity_24h":629.9774,"derivative_volume_usd":62828618628.85901,"spot_volume_usd":39682580614.8572}}},{"id":294,"name":"OKEx","slug":"okex","num_market_pairs":385,"fiats":["AED","USD"],"traffic_score":845.1565,"rank":1,"exchange_score":null,"liquidity_score":9.8028,"last_updated":"2018-11-08T22:18:00.000Z","quote":{"USD":{"volume_24h":677439315.721563,"volume_24h_adjusted":677439315.721563,"volume_7d":3506137120,"volume_30d":14418225072,"percent_change_volume_24h":-13.9256,"percent_change_volume_7d":60.0461,"percent_change_volume_30d":67.2225,"effective_liquidity_24h":629.9774,"derivative_volume_usd":62828618628.85901,"spot_volume_usd":39682580614.8572}}}]
 */
export type ExchangeListingsLatestResultsArray = ExchangeListingsLatestExchangeObject[];

export interface ExchangeListingsLatestResponseModel {
  /** Array of exchange objects matching the list options. */
  data: any[];
  /** Standardized status object for API calls. */
  status?: APIStatusObject;
}

/** Base currency details object for this market pair. */
export interface ExchangeMarketPairsLatestPairBaseCurrencyInfoObject {
  /**
   * The CoinMarketCap ID for the base currency in this market pair.
   * @example 1
   */
  currency_id: number;
  /**
   * The name of this cryptocurrency. *This field is only returned if requested through the `aux` request parameter.*
   * @example "Bitcoin"
   */
  currency_name?: string;
  /**
   * The symbol for the base currency in this market pair.
   * @example "BTC"
   */
  currency_symbol: string;
  /**
   * The exchange reported symbol for the base currency in this market pair. In most cases this is identical to CoinMarketCap's symbol but it may differ if the exchange uses an outdated or contentious symbol that contrasts with the majority of other markets.
   * @example "BTC"
   */
  exchange_symbol: string;
  /**
   * The web URL friendly shorthand version of this cryptocurrency name. *This field is only returned if requested through the `aux` request parameter.*
   * @example "bitcoin"
   */
  currency_slug?: string;
  /**
   * The currency type for the base currency in this market pair.
   * @example "cryptocurrency"
   */
  currency_type: 'cryptocurrency' | 'fiat';
}

/** Quote (secondary) currency details object for this market pair */
export interface ExchangeMarketPairsLatestPairBaseCurrencyInfoObject1 {
  /**
   * The CoinMarketCap ID for the quote (secondary) currency in this market pair.
   * @example 2781
   */
  currency_id: number;
  /**
   * The name of this cryptocurrency. *This field is only returned if requested through the `aux` request parameter.*
   * @example "Bitcoin"
   */
  currency_name?: string;
  /**
   * The symbol for the quote (secondary) currency in this market pair.
   * @example "USD"
   */
  currency_symbol: string;
  /**
   * The exchange reported symbol for the quote (secondary) currency in this market pair. In most cases this is identical to CoinMarketCap's symbol but it may differ if the exchange uses an outdated or contentious symbol that contrasts with the majority of other markets.
   * @example "USD"
   */
  exchange_symbol: string;
  /**
   * The web URL friendly shorthand version of this cryptocurrency name. *This field is only returned if requested through the `aux` request parameter.*
   * @example "bitcoin"
   */
  currency_slug?: string;
  /**
   * The currency type for the quote (secondary) currency in this market pair.
   * @example "fiat"
   */
  currency_type: 'cryptocurrency' | 'fiat';
}

/** A default exchange reported quote containing raw exchange reported values. */
export interface ExchangeMarketPairsLatestMarketPairExchangeReportedQuote {
  /**
   * The last exchange reported price for this market pair in quote currency units.
   * @example 8000.23
   */
  price: number;
  /**
   * The last exchange reported 24 hour volume for this market pair in base cryptocurrency units.
   * @example 30768
   */
  volume_24h_base: number;
  /**
   * The last exchange reported 24 hour volume for this market pair in quote cryptocurrency units.
   * @example 250448443.2
   */
  volume_24h_quote: number;
  /**
   * Percentage of total exchange volume_24h
   * @example 0.03
   */
  volume_percentage: number;
  /**
   * Timestamp (ISO 8601) of the last time this market data was updated.
   * @format date
   * @example "2018-06-02T23:59:59.999Z"
   */
  last_updated: string;
}

/** One or more market quotes where $key is the conversion currency requested, ex. USD */
export interface ExchangeMarketPairsLatestMarketPairQuote {
  /**
   * The last reported exchange price for this market pair converted into the requested convert currency.
   * @example 8000.23
   */
  price: number;
  /**
   * The latest exchange reported price in base units converted into the requested convert currency. *This field is only returned if requested through the `aux` request parameter.*
   * @example 8000.23
   */
  price_quote?: number;
  /**
   * The last reported exchange volume for this market pair converted into the requested convert currency.
   * @example 1600000
   */
  volume_24h: number;
  /**
   * -2% Depth in the specified currency.
   * @example 1600000
   */
  depth_negative_two?: number;
  /**
   * +2% Depth in the specified currency.
   * @example 1600000
   */
  depth_positive_two?: number;
  effective_liquidity?: any;
  market_score?: any;
  market_reputation?: any;
  /**
   * Timestamp (ISO 8601) of when the conversion currency's current value was referenced for this conversion.
   * @format date
   * @example "2018-06-02T23:59:59.999Z"
   */
  last_updated: string;
}

/** Market Pair quotes object containing key->quote objects for each convert option requested. USD and "exchange_reported" are defaults. */
export interface ExchangeMarketPairsLatestMarketPairQuoteObject {
  /** A default exchange reported quote containing raw exchange reported values. */
  exchange_reported: ExchangeMarketPairsLatestMarketPairExchangeReportedQuote;
  /** One or more market quotes where $key is the conversion currency requested, ex. USD */
  $key: ExchangeMarketPairsLatestMarketPairQuote;
}

/** Market Pair info object. */
export interface ExchangeMarketPairsLatestMarketPairInfoObject {
  /**
   * The CoinMarketCap ID for this market pair. This ID can reliably be used to identify this unique market as the ID never changes.
   * @example 9933
   */
  market_id: number;
  /**
   * The name of this market pair. Example: "BTC/USD"
   * @example "BTC/USD"
   */
  market_pair: string;
  /**
   * The category of trading this market falls under. Spot markets are the most common but options include derivatives and OTC.
   * @example "spot"
   */
  category: 'spot' | 'derivatives' | 'otc';
  /**
   * The fee type the exchange enforces for this market.
   * @example "percentage"
   */
  fee_type?: 'percentage' | 'no-fees' | 'transactional-mining' | 'unknown';
  /**
   * The URL to this market's trading page on the exchange if available. If not available the exchange's homepage URL is returned. *This field is only returned if requested through the `aux` request parameter.*
   * @example "https://www.binance.com/en/trade/BTC_USDT"
   */
  market_url?: string;
  /** Base currency details object for this market pair. */
  mark_pair_base: ExchangeMarketPairsLatestPairBaseCurrencyInfoObject;
  /** Quote (secondary) currency details object for this market pair */
  mark_pair_quote: ExchangeMarketPairsLatestPairBaseCurrencyInfoObject1;
  /** Market Pair quotes object containing key->quote objects for each convert option requested. USD and "exchange_reported" are defaults. */
  quote: ExchangeMarketPairsLatestMarketPairQuoteObject;
}

/** Array of all active market pairs for this exchange. */
export type ExchangeMarketPairsLatestMarketPairsArray = ExchangeMarketPairsLatestMarketPairInfoObject[];

/**
 * Results of your query returned as an object.
 * @example {"id":270,"name":"Binance","slug":"binance","num_market_pairs":473,"volume_24h":769291636.239632,"market_pairs":[{"market_id":9933,"market_pair":"BTC/USDT","category":"spot","fee_type":"percentage","outlier_detected":0,"exclusions":null,"market_pair_base":{"currency_id":1,"currency_symbol":"BTC","exchange_symbol":"BTC","currency_type":"cryptocurrency"},"market_pair_quote":{"currency_id":825,"currency_symbol":"USDT","exchange_symbol":"USDT","currency_type":"cryptocurrency"},"quote":{"exchange_reported":{"price":7901.83,"volume_24h_base":47251.3345550653,"volume_24h_quote":373372012.927251,"volume_percentage":19.4346563602467,"last_updated":"2019-05-24T01:40:10.000Z"},"USD":{"price":7933.66233493434,"volume_24h":374876133.234903,"depth_negative_two":40654.68019906,"depth_positive_two":17352.9964811,"last_updated":"2019-05-24T01:40:10.000Z"}}},{"market_id":36329,"market_pair":"MATIC/BTC","category":"spot","fee_type":"percentage","outlier_detected":0,"exclusions":null,"market_pair_base":{"currency_id":3890,"currency_symbol":"MATIC","exchange_symbol":"MATIC","currency_type":"cryptocurrency"},"market_pair_quote":{"currency_id":1,"currency_symbol":"BTC","exchange_symbol":"BTC","currency_type":"cryptocurrency"},"quote":{"exchange_reported":{"price":0.0000034,"volume_24h_base":8773968381.05,"volume_24h_quote":29831.49249557,"volume_percentage":19.4346563602467,"last_updated":"2019-05-24T01:41:16.000Z"},"USD":{"price":0.0269295015799739,"volume_24h":236278595.380127,"depth_negative_two":40654.68019906,"depth_positive_two":17352.9964811,"last_updated":"2019-05-24T01:41:16.000Z"}}}]}
 */
export interface ExchangeMarketPairsLatestResultsObject {
  /**
   * The CoinMarketCap ID for this exchange.
   * @example 1
   */
  id: number;
  /**
   * The name of this exchange.
   * @example "Binance"
   */
  name: string;
  /**
   * The slug for this exchange.
   * @example "binance"
   */
  slug: string;
  /**
   * The number of market pairs that are open for trading on this exchange.
   * @example 303
   */
  num_market_pairs: number;
  /**
   * Reported 24 hour volume in USD.
   * @example 768478308.529847
   */
  volume_24h: number;
  /** Array of all active market pairs for this exchange. */
  market_pairs: any[];
}

export interface ExchangeMarketPairsLatestResponseModel {
  /** Results of your query returned as an object. */
  data: ExchangeMarketPairsLatestResultsObject;
  /** Standardized status object for API calls. */
  status?: APIStatusObject;
}

/** The market details for the current interval and currency conversion option. The map key being the curency symbol. */
export interface ExchangeHistoricalQuotesCurrencyQuoteObject {
  /**
   * Combined 24 hour volume for all market pairs on this exchange at the current historical interval.
   * @example 1235000
   */
  volume_24hr: number;
  /**
   * Timestamp (ISO 8601) of when the conversion currency's current value was referenced for this conversion.
   * @format date
   * @example "2018-06-02T22:51:28.209Z"
   */
  timestamp: string;
}

/** A map of market details for this quote in different currency conversions. The default map included is USD. */
export interface ExchangeHistoricalQuotesQuoteCurrencyMap {
  /** The market details for the current interval and currency conversion option. The map key being the curency symbol. */
  $key: ExchangeHistoricalQuotesCurrencyQuoteObject;
}

/** An object containing details for the current interval quote. */
export interface ExchangeHistoricalQuotesNtervalQuoteObject {
  /**
   * Timestamp (ISO 8601) of when this historical quote was recorded.
   * @format date
   * @example "2018-06-02T00:00:00.000Z"
   */
  timestamp: string;
  /**
   * Number of market pairs available at the current historical interval.
   * @example 123456789
   */
  num_market_pairs: number;
  /** A map of market details for this quote in different currency conversions. The default map included is USD. */
  quote: ExchangeHistoricalQuotesQuoteCurrencyMap;
}

/** An array of quotes for each interval for this exchange. */
export type ExchangeHistoricalQuotesIntervalQuotesArray = ExchangeHistoricalQuotesNtervalQuoteObject[];

/** An exchange object for each exchange requested. The map key being the id/slug used in the request. */
export interface ExchangeHistoricalQuotesExchangeObject {
  /**
   * The CoinMarketCap exchange ID.
   * @example 1
   */
  id: number;
  /**
   * The exchange name.
   * @example "Binance"
   */
  name: string;
  /**
   * The exchange slug.
   * @example "binance"
   */
  slug: string;
  /** An array of quotes for each interval for this exchange. */
  quotes: any[];
}

/**
 * Results of your query returned as an object map.
 * @example {"id":270,"name":"Binance","slug":"binance","quotes":[{"timestamp":"2018-06-03T00:00:00.000Z","quote":{"USD":{"volume_24h":1632390000,"timestamp":"2018-06-03T00:00:00.000Z"}},"num_market_pairs":338},{"timestamp":"2018-06-10T00:00:00.000Z","quote":{"USD":{"volume_24h":1034720000,"timestamp":"2018-06-10T00:00:00.000Z"}},"num_market_pairs":349},{"timestamp":"2018-06-17T00:00:00.000Z","quote":{"USD":{"volume_24h":883885000,"timestamp":"2018-06-17T00:00:00.000Z"}},"num_market_pairs":357}]}
 */
export interface ExchangeHistoricalQuotesResultsMap {
  /** An exchange object for each exchange requested. The map key being the id/slug used in the request. */
  $key: ExchangeHistoricalQuotesExchangeObject;
}

export interface ExchangeHistoricalQuotesResponseModel {
  /** Results of your query returned as an object map. */
  data: ExchangeHistoricalQuotesResultsMap;
  /** Standardized status object for API calls. */
  status?: APIStatusObject;
}

/** A market quote in the currency conversion option. */
export interface ExchangeQuotesLatestQuoteObject {
  /**
   * Timestamp (ISO 8601) of when the conversion currency's current value was referenced for this conversion.
   * @format date
   * @example "2018-06-02T22:51:28.209Z"
   */
  last_updated: string;
  /**
   * Reported 24 hour volume in the specified currency.
   * @example 768478308.529847
   */
  volume_24h: number;
  /**
   * Adjusted 24 hour volume in the specified currency for spot markets excluding markets with no fees and transaction mining.
   * @example 768478308.529847
   */
  volume_24h_adjusted: number;
  /**
   * 7 day volume in the specified currency.
   * @example 3666423776
   */
  volume_7d: number;
  /**
   * 30 day volume in the specified currency.
   * @example 21338299776
   */
  volume_30d: number;
  /**
   * 24 hour percent change in the specified currency.
   * @example 0.03
   */
  percent_change_volume_24h: number;
  /**
   * 7 day percent change in the specified currency.
   * @example 5.75
   */
  percent_change_volume_7d: number;
  /**
   * 30 day percent change in the specified currency.
   * @example -19.64
   */
  percent_change_volume_30d: number;
  /**
   * 24 hour liquidity in the specified currency.
   * @example -19.64
   */
  effective_liquidity_24h?: number;
  /**
   * Reported 24 hour derivative volume in the specified currency.
   * @example 768478308.529847
   */
  derivative_volume?: number;
  /**
   * Reported 24 hour spot volume in the specified currency.
   * @example 768478308.529847
   */
  spot_volume?: number;
}

/** A map of market quotes in different currency conversions. The default map included is USD. */
export interface ExchangeQuotesLatestQuoteMap {
  /** A market quote in the currency conversion option. */
  $key: ExchangeQuotesLatestQuoteObject;
}

/** An exchange object for each requested. */
export interface ExchangeQuotesLatestExchangeObject {
  /**
   * The CoinMarketCap exchange ID.
   * @example 1
   */
  id: number;
  /**
   * The exchange name.
   * @example "Binance"
   */
  name: string;
  /**
   * The exchange slug.
   * @example "binance"
   */
  slug: string;
  /**
   * The number of active trading pairs available for this exchange.
   * @example 500
   */
  num_market_pairs: number;
  /**
   * The exchange score.
   * @example 9.8
   */
  exchange_score?: number;
  /**
   * The liquidity score.
   * @example 9.8
   */
  liquidity_score?: number;
  /**
   * The exchange rank.
   * @example 5
   */
  rank?: number;
  /**
   * The traffic score.
   * @example 1000
   */
  traffic_score?: number;
  /**
   * Timestamp (ISO 8601) of the last time this exchange's market data was updated.
   * @format date
   * @example "2018-06-02T00:00:00.000Z"
   */
  last_updated: string;
  /** A map of market quotes in different currency conversions. The default map included is USD. */
  quote: ExchangeQuotesLatestQuoteMap;
}

/**
 * A map of exchange objects by ID or slugs (as used in query parameters).
 * @example {"270":{"id":270,"name":"Binance","slug":"binance","num_coins":132,"num_market_pairs":385,"last_updated":"2018-11-08T22:11:00.000Z","traffic_score":1000,"rank":1,"exchange_score":null,"liquidity_score":9.8028,"quote":{"USD":{"volume_24h":768478308.529847,"volume_24h_adjusted":768478308.529847,"volume_7d":3666423776,"volume_30d":21338299776,"percent_change_volume_24h":-11.8232,"percent_change_volume_7d":67.0306,"percent_change_volume_30d":-0.0821558,"effective_liquidity_24h":629.9774}}}}
 */
export interface ExchangeQuotesLatestExchangeResultsMap {
  /** An exchange object for each requested. */
  $key: ExchangeQuotesLatestExchangeObject;
}

export interface ExchangeQuotesLatestResponseModel {
  /** A map of exchange objects by ID or slugs (as used in query parameters). */
  data: ExchangeQuotesLatestExchangeResultsMap;
  /** Standardized status object for API calls. */
  status?: APIStatusObject;
}

/** The market details for the current interval and currency conversion option. The map key being the curency symbol. */
export interface GlobalMetricsQuotesHistoricCurrencyQuoteObject {
  /**
   * The sum of all individual cryptocurrency market capitalizations at the given point in time, historically converted into units of the requested currency.
   * @example 375179000000
   */
  total_market_cap: number;
  /**
   * The sum of rolling 24 hour adjusted volume (as outlined in our methodology) for all cryptocurrencies at the given point in time, historically converted into units of the requested currency.
   * @example 19918400000
   */
  total_volume_24h: number;
  /**
   * The sum of rolling 24 hour reported volume for all cryptocurrencies at the given point in time, historically converted into units of the requested currency. *Note: This field is only available after 2019-05-10 and will return `null` prior to that time.*
   * @example 19918400000
   */
  total_volume_24h_reported: number;
  /**
   * The sum of rolling 24 hour adjusted volume (as outlined in our methodology) for all cryptocurrencies excluding Bitcoin at the given point in time, historically converted into units of the requested currency.
   * @example 187589500000
   */
  altcoin_market_cap: number;
  /**
   * The sum of all individual cryptocurrency market capitalizations excluding Bitcoin at the given point in time, historically converted into units of the requested currency.
   * @example 19918400000
   */
  altcoin_volume_24h: number;
  /**
   * The sum of rolling 24 hour reported volume for all cryptocurrencies excluding Bitcoin at the given point in time, historically converted into units of the requested currency. *Note: This field is only available after 2019-05-10 and will return `null` prior to that time.*
   * @example 19918400000
   */
  altcoin_volume_24h_reported: number;
  /**
   * Timestamp (ISO 8601) of when the conversion currency's current value was referenced for this conversion.
   * @format date
   * @example "2018-06-02T22:51:28.209Z"
   */
  timestamp: string;
}

/** An object containing market data for this interval by currency option. The default currency mapped is USD. */
export interface GlobalMetricsQuotesHistoricQuoteCurrencyMap {
  /** The market details for the current interval and currency conversion option. The map key being the curency symbol. */
  $key: GlobalMetricsQuotesHistoricCurrencyQuoteObject;
}

/** An object containing details for the current interval quote. */
export interface GlobalMetricsQuotesHistoricIntervalQuoteObject {
  /**
   * Timestamp (ISO 8601) of when this historical quote was recorded.
   * @format date
   * @example "2018-06-02T00:00:00.000Z"
   */
  timestamp: string;
  /**
   * The interval timestamp for the search period that this historical quote was located against. *This field is only returned if requested through the `aux` request parameter.*
   * @format date
   * @example "2018-06-02T00:00:00.000Z"
   */
  search_interval?: string;
  /** Percent of BTC market dominance by marketcap at this interval. */
  btc_dominance: number;
  /** Percent of ETH market dominance by marketcap at this interval. */
  eth_dominance: number;
  /**
   * Number of active cryptocurrencies tracked by CoinMarketCap at the given point in time. This includes all cryptocurrencies with a `listing_status` of "active" or "untracked" as returned from our /cryptocurrency/map call. *Note: This field is only available after 2019-05-10 and will return `null` prior to that time.*
   * @example 500
   */
  active_cryptocurrencies: number;
  /**
   * Number of active exchanges tracked by CoinMarketCap at the given point in time. This includes all exchanges with a `listing_status` of "active" or "untracked" as returned by our /exchange/map call. *Note: This field is only available after 2019-06-18 and will return `null` prior to that time.*
   * @example 200
   */
  active_exchanges: number;
  /**
   * Number of active market pairs tracked by CoinMarketCap across all exchanges at the given point in time. *Note: This field is only available after 2019-05-10 and will return `null` prior to that time.*
   * @example 1000
   */
  active_market_pairs: number;
  /** An object containing market data for this interval by currency option. The default currency mapped is USD. */
  quote: GlobalMetricsQuotesHistoricQuoteCurrencyMap;
}

/** An array of aggregate market quotes for each interval. */
export type GlobalMetricsQuotesHistoricIntervalQuotesArray = GlobalMetricsQuotesHistoricIntervalQuoteObject[];

/**
 * Results of your query returned as an object.
 * @example {"quotes":[{"timestamp":"2018-07-31T00:02:00.000Z","btc_dominance":47.9949,"active_cryptocurrencies":2500,"active_exchanges":600,"active_market_pairs":1000,"quote":{"USD":{"total_market_cap":292863223827.394,"total_volume_24h":17692152629.7864,"total_volume_24h_reported":375179000000,"altcoin_market_cap":187589500000,"altcoin_volume_24h":375179000000,"altcoin_volume_24h_reported":375179000000,"timestamp":"2018-07-31T00:02:00.000Z"}}},{"timestamp":"2018-08-01T00:02:00.000Z","btc_dominance":48.0585,"active_cryptocurrencies":2500,"active_exchanges":600,"active_market_pairs":1000,"quote":{"USD":{"total_market_cap":277770824530.303,"total_volume_24h":15398085549.0344,"total_volume_24h_reported":375179000000,"altcoin_market_cap":187589500000,"altcoin_volume_24h":375179000000,"altcoin_volume_24h_reported":375179000000,"timestamp":"2018-07-31T00:02:00.000Z"}}},{"timestamp":"2018-08-02T00:02:00.000Z","btc_dominance":48.041,"active_cryptocurrencies":2500,"active_exchanges":600,"active_market_pairs":1000,"quote":{"USD":{"total_market_cap":273078776005.223,"total_volume_24h":14300071695.0547,"total_volume_24h_reported":375179000000,"altcoin_market_cap":187589500000,"altcoin_volume_24h":375179000000,"altcoin_volume_24h_reported":375179000000,"timestamp":"2018-07-31T00:02:00.000Z"}}}]}
 */
export interface GlobalMetricsQuotesHistoricResultsObject {
  /** An array of aggregate market quotes for each interval. */
  quotes: any[];
}

export interface GlobalMetricsQuotesHistoricResponseModel {
  /** Results of your query returned as an object. */
  data: GlobalMetricsQuotesHistoricResultsObject;
  /** Standardized status object for API calls. */
  status?: APIStatusObject;
}

/** A market quote in the currency conversion option. */
export interface GlobalMetricsQuotesLatestQuoteObject {
  /**
   * The sum of all individual cryptocurrency market capitalizations in the requested currency.
   * @example 250385096532.124
   */
  total_market_cap: number;
  /**
   * The sum of rolling 24 hour adjusted volume (as outlined in our methodology) for all cryptocurrencies in the requested currency.
   * @example 119270642406.968
   */
  total_volume_24h: number;
  /**
   * The sum of rolling 24 hour reported volume for all cryptocurrencies in the requested currency.
   * @example 1514905418.39087
   */
  total_volume_24h_reported: number;
  /**
   * The sum of rolling 24 hour adjusted volume (as outlined in our methodology) for all cryptocurrencies excluding Bitcoin in the requested currency.
   * @example 119270642406.968
   */
  altcoin_volume_24h: number;
  /**
   * The sum of rolling 24 hour reported volume for all cryptocurrencies excluding Bitcoin in the requested currency.
   * @example 1514905418.39087
   */
  altcoin_volume_24h_reported: number;
  /**
   * The sum of all individual cryptocurrency market capitalizations excluding Bitcoin in the requested currency.
   * @example 250385096532.124
   */
  altcoin_market_cap: number;
  /**
   * Timestamp (ISO 8601) of when the conversion currency's current value was referenced.
   * @format date
   * @example "2019-05-16T18:47:00.000Z"
   */
  last_updated: string;
}

/**
 * A map of market quotes in different currency conversions. The default map included is USD.
 * @example {"active_cryptocurrencies":4986,"total_cryptocurrencies":9607,"active_market_pairs":39670,"active_exchanges":372,"total_exchanges":1347,"eth_dominance":16.989007016505,"btc_dominance":45.002265776962,"eth_dominance_yesterday":17.25405255,"btc_dominance_yesterday":45.41455043,"eth_dominance_24h_percentage_change":-0.265045533495,"btc_dominance_24h_percentage_change":-0.412284653038,"defi_volume_24h":20443320643.718483,"defi_volume_24h_reported":20443320643.718483,"defi_market_cap":131290122769.1664,"defi_24h_percentage_change":-17.648761478379,"stablecoin_volume_24h":209258420492.51562,"stablecoin_volume_24h_reported":209258420492.51562,"stablecoin_market_cap":95606043432.70901,"stablecoin_24h_percentage_change":2.518312658305,"derivatives_volume_24h":282420341063.98895,"derivatives_volume_24h_reported":282420341063.98895,"derivatives_24h_percentage_change":-13.893947771549,"quote":{"USD":{"total_market_cap":2374432083905.6846,"total_volume_24h":262906061281.24,"total_volume_24h_reported":262906061281.24,"altcoin_volume_24h":195175095816.0813,"altcoin_volume_24h_reported":195175095816.0813,"altcoin_market_cap":1305883846812.9905,"defi_volume_24h":20443320643.718483,"defi_volume_24h_reported":20443320643.718483,"defi_24h_percentage_change":-17.648761478379,"defi_market_cap":131290122769.1664,"stablecoin_volume_24h":209258420492.51562,"stablecoin_volume_24h_reported":209258420492.51562,"stablecoin_24h_percentage_change":2.518312658305,"stablecoin_market_cap":95606043432.70901,"derivatives_volume_24h":282420341063.98895,"derivatives_volume_24h_reported":282420341063.98895,"derivatives_24h_percentage_change":-13.893947771549,"last_updated":"2021-05-06T01:45:17.999Z","total_market_cap_yesterday":2255175879567.3643,"total_volume_24h_yesterday":254911841723.5,"total_market_cap_yesterday_percentage_change":5.288111025788297,"total_volume_24h_yesterday_percentage_change":3.1360722607823135}},"last_updated":"2021-05-06T01:45:17.999Z"}
 */
export interface GlobalMetricsQuotesLatestQuoteMap {
  /** A market quote in the currency conversion option. */
  $key: GlobalMetricsQuotesLatestQuoteObject;
}

/** Results object for your API call. */
export interface GlobalMetricsQuotesLatestResultsObject {
  /**
   * Bitcoin's market dominance percentage by market cap.
   * @example 67.0057
   */
  btc_dominance?: number;
  /**
   * Ethereum's market dominance percentage by market cap.
   * @example 9.02205
   */
  eth_dominance?: number;
  /**
   * Count of active cryptocurrencies tracked by CoinMarketCap. This includes all cryptocurrencies with a `listing_status` of "active" or "listed" as returned from our /cryptocurrency/map call.
   * @example 2941
   */
  active_cryptocurrencies: number;
  /**
   * Count of all cryptocurrencies tracked by CoinMarketCap. This includes "inactive" `listing_status` cryptocurrencies.
   * @example 4637
   */
  total_cryptocurrencies: number;
  /**
   * Count of active market pairs tracked by CoinMarketCap across all exchanges.
   * @example 21209
   */
  active_market_pairs: number;
  /**
   * Count of active exchanges tracked by CoinMarketCap. This includes all exchanges with a `listing_status` of "active" or "listed" as returned by our /exchange/map call.
   * @example 445
   */
  active_exchanges: number;
  /**
   * Count of all exchanges tracked by CoinMarketCap. This includes "inactive" `listing_status` exchanges.
   * @example 677
   */
  total_exchanges: number;
  /**
   * Timestamp of when this record was last updated.
   * @format date
   * @example "2019-05-16T18:47:00.000Z"
   */
  last_updated: string;
  /** A map of market quotes in different currency conversions. The default map included is USD. */
  quote: GlobalMetricsQuotesLatestQuoteMap;
}

export interface GlobalMetricsQuotesLatestResponseModel {
  /** Results object for your API call. */
  data: GlobalMetricsQuotesLatestResultsObject;
  /** Standardized status object for API calls. */
  status?: APIStatusObject;
}

/** A cryptocurrency object for every cryptocurrency that matched list options. */
export interface FCASListingsLatestCryptocurrencyObject {
  /**
   * The unique CoinMarketCap ID for this cryptocurrency.
   * @example 1
   */
  id: number;
  /**
   * The name of this cryptocurrency.
   * @example "Bitcoin"
   */
  name: string;
  /**
   * The ticker symbol for this cryptocurrency.
   * @example "BTC"
   */
  symbol: string;
  /**
   * The web URL friendly shorthand version of this cryptocurrency name.
   * @example "bitcoin"
   */
  slug: string;
  /**
   * The cryptocurrency's current FCAS score out of 1000
   * @min 0
   * @max 1000
   * @example 1000
   */
  score?: number;
  /**
   * The cryptocurrency's current FCAS letter grade
   * @example "A"
   */
  grade?: string;
  /**
   * 24 hour % FCAS score change
   * @example 0.03
   */
  percent_change_24h?: number;
  /**
   * 24 hour FCAS point change
   * @min -1000
   * @max 1000
   * @example 5
   */
  point_change_24h?: number;
  /**
   * Timestamp (ISO 8601) of the last time this cryptocurrency's FCAS value was updated.
   * @format date
   * @example "2018-06-02T23:59:59.999Z"
   */
  last_updated?: string;
}

/** Array of cryptocurrency objects matching the list options. */
export type FCASListingsLatestResultsArray = FCASListingsLatestCryptocurrencyObject[];

/** @example {"data":[{"id":1027,"name":"Ethereum","symbol":"ETH","slug":"ethereum","score":971,"grade":"S","last_updated":"2021-05-05T00:00:00Z"},{"id":2010,"name":"Cardano","symbol":"ADA","slug":"cardano","score":961,"grade":"S","last_updated":"2021-05-05T00:00:00Z"}],"status":{"timestamp":"2018-06-02T22:51:28.209Z","error_code":0,"error_message":"","elapsed":10,"credit_count":1}} */
export interface FCASListingsLatestResponseModel {
  /** Array of cryptocurrency objects matching the list options. */
  data: any[];
  /** Standardized status object for API calls. */
  status?: APIStatusObject;
}

/** A cryptocurrency object for each requested. */
export interface FCASQuoteLatestCryptocurrencyObject {
  /**
   * The unique CoinMarketCap ID for this cryptocurrency.
   * @example 1
   */
  id: number;
  /**
   * The name of this cryptocurrency.
   * @example "Bitcoin"
   */
  name: string;
  /**
   * The ticker symbol for this cryptocurrency.
   * @example "BTC"
   */
  symbol: string;
  /**
   * The web URL friendly shorthand version of this cryptocurrency name.
   * @example "bitcoin"
   */
  slug: string;
  /**
   * The cryptocurrency's current FCAS score out of 1000
   * @min 0
   * @max 1000
   * @example 1000
   */
  score?: number;
  /**
   * The cryptocurrency's current FCAS letter grade
   * @example "A"
   */
  grade?: string;
  /**
   * 24 hour % FCAS score change
   * @example 0.03
   */
  percent_change_24h?: number;
  /**
   * 24 hour FCAS point change
   * @min -1000
   * @max 1000
   * @example 5
   */
  point_change_24h?: number;
  /**
   * Timestamp (ISO 8601) of the last time this cryptocurrency's FCAS value was updated.
   * @format date
   * @example "2018-06-02T23:59:59.999Z"
   */
  last_updated?: string;
}

/**
 * A map of cryptocurrency objects by ID or symbol (as used in query parameters).
 * @example {"1":{"id":1,"name":"Bitcoin","symbol":"BTC","slug":"bitcoin","score":894,"grade":"A","percent_change_24h":0.56,"point_change_24h":5,"last_updated":"2019-08-08T00:00:00Z"}}
 */
export interface FCASQuoteLatestCryptocurrencyResultsMap {
  /** A cryptocurrency object for each requested. */
  $key: FCASQuoteLatestCryptocurrencyObject;
}

export interface FCASQuoteLatestResponseModel {
  /** A map of cryptocurrency objects by ID or symbol (as used in query parameters). */
  data: FCASQuoteLatestCryptocurrencyResultsMap;
  /** Standardized status object for API calls. */
  status?: APIStatusObject;
}

export type GetV1ContentLatestData = ContentLatestResponseModel;

export type GetV1CryptocurrencyAirdropData = AirdropResponseModel;

export type GetV1CryptocurrencyAirdropsData = AirdropsResponseModel;

export type GetV1CryptocurrencyCategoriesData = CategoriesResponseModel;

export type GetV1CryptocurrencyCategoryData = CategoryResponseModel;

export type GetV1CryptocurrencyInfoData = CryptocurrenciesInfoResponseModel;

export type GetV1CryptocurrencyMapData = CryptocurrencyMapResponseModel;

export type GetV1ExchangeAssetsData = ExchangeAssetsResponseModel;

export type GetV1ExchangeInfoData = ExchangesInfoResponseModel;

export type GetV1ExchangeMapData = ExchangeMapResponseModel;

export type GetV1FiatMapData = FiatMapResponseModel;

export type GetV1KeyInfoData = AccountInfoResponseModel;

export type GetV1ToolsPriceconversionData = ToolsPriceConversionResponseModel;

export type GetV2CryptocurrencyInfoData = CryptocurrenciesInfoResponseModel;

export type GetV2ToolsPriceconversionData = ToolsPriceConversionResponseModel;

export type GetV3FearandgreedHistoricalData = FearAndGreedHistoricalResponseModel;

export type GetV3FearandgreedLatestData = FearAndGreedLatestResponseModel;

export type GetV1BlockchainStatisticsLatestData = BlockchainStatisticsLatestResponseModel;

export type GetV1CommunityTrendingTokenData = CommunityTrendingTokenResponseModel;

export type GetV1CommunityTrendingTopicData = CommunityTrendingTopicResponseModel;

export type GetV1ContentPostsCommentsData = ContentPostCommentsResponseModel;

export type GetV1ContentPostsLatestData = ContentLatestPostsResponseModel;

export type GetV1ContentPostsTopData = ContentTopPostsResponseModel;

export type GetV1CryptocurrencyListingsHistoricalData = CryptocurrencyListingsLatestResponseModel;

export type GetV1CryptocurrencyListingsLatestData = CryptocurrencyListingsLatestResponseModel1;

export type GetV1CryptocurrencyListingsNewData = CryptocurrencyListingsNewResponseModel;

export type GetV1CryptocurrencyMarketpairsLatestData = CryptocurrencyMarketPairsLatestResponseModel;

export type GetV1CryptocurrencyOhlcvHistoricalData = CryptocurrencyOHLCVHistoricalResponseModel;

export type GetV1CryptocurrencyOhlcvLatestData = CryptocurrencyOHLCVLatestResponseModel;

export type GetV1CryptocurrencyPriceperformancestatsLatestData = CryptocurrencyPricePerformanceStatsLatestResponseModel;

export type GetV1CryptocurrencyQuotesHistoricalData = CryptocurrencyQuotesHistoricalResponseModel;

export type GetV1CryptocurrencyQuotesLatestData = CryptocurrencyQuotesLatestResponseModel;

export type GetV1CryptocurrencyTrendingGainerslosersData = CryptocurrencyTrendingGainersLosersResponseModel;

export type GetV1CryptocurrencyTrendingLatestData = CryptocurrencyTrendingLatestResponseModel;

export type GetV1CryptocurrencyTrendingMostvisitedData = CryptocurrencyTrendingMostVisitedResponseModel;

export type GetV1ExchangeListingsLatestData = ExchangeListingsLatestResponseModel;

export type GetV1ExchangeMarketpairsLatestData = ExchangeMarketPairsLatestResponseModel;

export type GetV1ExchangeQuotesHistoricalData = ExchangeHistoricalQuotesResponseModel;

export type GetV1ExchangeQuotesLatestData = ExchangeQuotesLatestResponseModel;

export type GetV1GlobalmetricsQuotesHistoricalData = GlobalMetricsQuotesHistoricResponseModel;

export type GetV1GlobalmetricsQuotesLatestData = GlobalMetricsQuotesLatestResponseModel;

export type GetV2CryptocurrencyMarketpairsLatestData = CryptocurrencyMarketPairsLatestResponseModel;

export type GetV2CryptocurrencyOhlcvHistoricalData = CryptocurrencyOHLCVHistoricalResponseModel;

export type GetV2CryptocurrencyOhlcvLatestData = CryptocurrencyOHLCVLatestResponseModel;

export type GetV2CryptocurrencyPriceperformancestatsLatestData = CryptocurrencyPricePerformanceStatsLatestResponseModel;

export type GetV2CryptocurrencyQuotesHistoricalData = CryptocurrencyQuotesHistoricalResponseModel;

export type GetV2CryptocurrencyQuotesLatestData = CryptocurrencyQuotesLatestResponseModel;

export type GetV3CryptocurrencyQuotesHistoricalData = CryptocurrencyQuotesHistoricalResponseModel;

export type GetV1PartnersFlipsidecryptoFcasListingsLatestData = FCASListingsLatestResponseModel;

export type GetV1PartnersFlipsidecryptoFcasQuotesLatestData = FCASQuoteLatestResponseModel;
