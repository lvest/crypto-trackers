import React from "react";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { InfoData, PriceData } from "./Coin";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.lightBgColor};
  display: flex;
  flex-direction: column;
  padding: 1% 2%;
`;

const CurrentPrice = styled.div<{ isPriceUp: boolean }>`
  color: ${(props) => (props.isPriceUp ? "green" : "red")};
  span {
    font-size: 2rem;
  }
`;

function Price() {
  const [infoData, tickersData] = useOutletContext<[InfoData, PriceData]>();
  const isPriceUp = true;
  return (
    <Wrapper>
      <CurrentPrice isPriceUp>
        <span>{isPriceUp ? "▲ " : "▼ "}</span>
        <span>$ {tickersData?.quotes.USD.price.toFixed(2)}</span>
      </CurrentPrice>
    </Wrapper>
  );
}

export default Price;
