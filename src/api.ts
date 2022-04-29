import axios from "axios";

const BASE_URL = `https://api.coinpaprika.com/v1`;

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
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7 * 2;
  const res = await axios(
    `${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`
  );
  return res.data;
}
