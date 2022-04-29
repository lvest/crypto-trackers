import React from "react";
import { Link, useMatch } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: ${(props) =>
    props.isActive ? props.theme.textColor : "rgba(0, 0, 0, 0.5)"};
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) =>
    props.isActive ? "rgba(0, 0, 0, 0.5)" : props.theme.textColor};
  a {
    display: block;
  }
`;

interface ITabs {
  coinId: string;
}

function Tabs({ coinId }: ITabs) {
  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");
  return (
    <Wrapper>
      <Tab isActive={priceMatch !== null}>
        <Link to={`/${coinId}/price`}>Price</Link>
      </Tab>
      <Tab isActive={chartMatch !== null}>
        <Link to={`/${coinId}/chart`}>Chart</Link>
      </Tab>
    </Wrapper>
  );
}

export default Tabs;
