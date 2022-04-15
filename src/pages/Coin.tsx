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

const Wrapper = styled.div`
  padding: 5% 20% 0 20%;
  margin: 0 auto;
  width: 100%;
`;

const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const Img = styled.img`
  width: 7rem;
  height: 7rem;
`;

const MetaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 2rem;
`;

const Title = styled.div`
  display: flex;
  & > h1 {
    margin: 0 1rem;
    font-size: 3.5rem;
  }
`;

const Overview = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 10px 20px;
`;

const OverviewItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.4rem 0.8rem;
  border-radius: 10px;

  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

const Description = styled.p`
  margin: 20px 0px;
`;

interface RouteState {
  name: string;
}

interface InfoData {
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

interface PriceData {
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

  return (
    <Wrapper>
      <InfoWrapper>
        <Img
          src={`https://cryptocurrencyliveprices.com/img/${infoData?.id}.png`}
        />
        <MetaWrapper>
          <Title>
            <h1>#{infoData?.rank}</h1>
            <h1>{infoData?.name}</h1>
          </Title>
          <Overview>
            <OverviewItem>
              <span>Symbol:</span>
              <span>{infoData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Total Suply:</span>
              <span>{tickersData?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply:</span>
              <span>{tickersData?.max_supply}</span>
            </OverviewItem>
          </Overview>
        </MetaWrapper>
      </InfoWrapper>
      <Description>{infoData?.description}</Description>
    </Wrapper>
  );
}

export default Coin;
