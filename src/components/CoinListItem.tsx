import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoinInfo } from "../api";
import { ICoin } from "../pages/home/Coins";

const Wrapper = styled.li`
  height: calc(${(window.innerHeight * 0.9) / 3}px);
  background-color: ${(props) => props.theme.boxBgColor};
  color: ${(props) => props.theme.textColor};
  border-radius: 15px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 0.2s;

  a {
    transition: color 0.1s ease-in-out;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &:hover {
    box-shadow: 1px 1px 10px lightgray;
    transform: translateY(-10px);
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.div`
  height: calc(${(window.innerHeight * 0.9 * 0.25) / 3}px);
  display: flex;
  align-items: center;

  img {
    width: 2rem;
    height: 2rem;
    margin-right: 10px;
  }
`;

const Content = styled.div`
  width: 100%;
  height: calc(${(window.innerHeight * 0.9 * 0.7) / 3}px);
  border-radius: 0.4rem;
  background-color: ${(props) => props.theme.lightBgColor}; ;
`;

interface ICoinListItem {
  coin: ICoin;
}

function CoinListItem({ coin }: ICoinListItem) {
  return (
    <Wrapper>
      <Link to={`/${coin.id}`} state={{ name: coin.name }}>
        <Title>
          <img
            src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
          />
          <span>{coin.name} &rarr;</span>
        </Title>
        <Content></Content>
      </Link>
    </Wrapper>
  );
}

export default CoinListItem;
