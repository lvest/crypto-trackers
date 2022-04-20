import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useMatch,
  useParams,
} from "react-router-dom";
import styled from "styled-components";
import { fetchCoinInfo, fetchCoinPrice } from "../api";
import CoinInfo from "../components/CoinInfo";
import Overview from "../components/Overview";

const Wrapper = styled.div`
  width: 100%;
  padding: 0 20%;
  margin: 8% auto;

  @media screen and (max-width: 1199px) {
    padding: 0 15%;
  }
  @media screen and (max-width: 899px) {
    padding: 0 10%;
  }
  @media screen and (max-width: 599px) {
    padding: 0 5%;
  }
`;

interface RouteState {
  name: string;
}

export interface InfoData {
  id: "string";
  name: "string";
  symbol: "string";
  rank: "number";
  is_new: "boolean";
  is_active: "boolean";
  type: "string";
  description: "string";
  message: "string";
  open_source: "boolean";
  started_at: "string";
  development_status: "string";
  hardware_wallet: "boolean";
  proof_type: "string";
  org_structure: "string";
  hash_algorithm: "string";
  first_data_at: "string";
  last_data_at: "string";
}

export interface PriceData {
  id: "string";
  name: "string";
  symbol: "string";
  rank: "number";
  circulating_supply: "number";
  total_supply: "number";
  max_supply: "number";
  beta_value: "number";
  first_data_at: "string";
  last_updated: "string";
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

function Coin() {
  const { coinId } = useParams();
  const state = useLocation().state as RouteState; // react-router-dom v6 ts제네릭 지원 안 함
  const { isLoading: infoLoading, data: infoData } = useQuery<InfoData>(
    ["info", coinId],
    () => fetchCoinInfo(coinId!)
  );
  const { isLoading: tickersLoading, data: tickersData } = useQuery<PriceData>(
    ["tickers", coinId],
    () => fetchCoinPrice(coinId!),
    { refetchInterval: 1000 }
  );

  return infoLoading || tickersLoading ? (
    <Wrapper>로딩중입니다</Wrapper>
  ) : infoData && tickersData ? (
    <Wrapper>
      <CoinInfo infoData={infoData} tickersData={tickersData}></CoinInfo>
    </Wrapper>
  ) : (
    <Wrapper>관련 정보가 없습니다.</Wrapper>
  );
}

export default Coin;
