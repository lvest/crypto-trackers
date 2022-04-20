import React from "react";
import styled from "styled-components";
import { InfoData, PriceData } from "../pages/Coin";
import Overview from "./Overview";

const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  img {
    width: 7rem;
    height: 7rem;

    @media screen and (max-width: 1199px) {
      width: 7rem;
      height: 7rem;
    }
    @media screen and (max-width: 899px) {
      width: 7rem;
      height: 7rem;
    }
    @media screen and (max-width: 599px) {
      width: 5rem;
      height: 5rem;
    }
  }
`;

const MetaWrapper = styled.div`
  width: 95%;
  display: flex;
  margin-left: 2rem;

  @media screen and (min-width: 1200px) {
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 1199px) {
    flex-direction: column;
    justify-content: center;
  }

  h1 {
    margin: 0 1rem;
    font-size: 3.5rem;

    @media screen and (max-width: 1199px) {
      font-size: 3rem;
    }
    @media screen and (max-width: 899px) {
      font-size: 2.5rem;
    }
    @media screen and (max-width: 599px) {
      font-size: 2rem;
    }
  }
`;

const Description = styled.p`
  margin: 20px 0px;
`;

interface ICoinInfo {
  infoData: InfoData;
  tickersData: PriceData;
}

function CoinInfo({ infoData, tickersData }: ICoinInfo) {
  return (
    <div>
      <InfoWrapper>
        <img
          src={`https://cryptocurrencyliveprices.com/img/${infoData?.id}.png`}
        />
        <MetaWrapper>
          <h1>{`#${infoData?.rank} ${infoData?.name}`}</h1>
          <Overview infoData={infoData} tickersData={tickersData}></Overview>
        </MetaWrapper>
      </InfoWrapper>
      <Description>{infoData?.description}</Description>
    </div>
  );
}

export default CoinInfo;
