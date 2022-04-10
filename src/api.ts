import axios from "axios";

const BASE_URL = `https://api.coinpaprika.com/v1`;

export async function fetchCoins() {
  const res = await axios(`${BASE_URL}/coins`);
  return res.data;
}
