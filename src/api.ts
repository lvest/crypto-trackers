import axios from "axios";

const BASE_URL = `https://api.coinpaprika.com/v1`;
const BASE_URL_PRICE = `https://ohlcv-api.nomadcoders.workers.dev`

export async function fetchCoins() {
  const res = await axios(`${BASE_URL}/coins`);
  return res.data;
}

export async function fetchCoinInfo(coinId: string) {
  const res = await axios(`${BASE_URL}/coins/${coinId}`);
  return res.data;
}

export async function fetchCoinPrice(coinId: string) {
  const res = await axios(`${BASE_URL}/tickers/${coinId}`);
  return res.data;
}

export async function fetchPriceHistory(coinId: string) {
  const res = await axios(
    `${BASE_URL_PRICE}?coinId=${coinId}`
  );
  return res.data;
}
