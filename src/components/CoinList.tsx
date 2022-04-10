import styled from "styled-components";
import { ICoin } from "../pages/home/Coins";
import CoinListItem from "./CoinListItem";

const Wrapper = styled.ul`
  display: grid;
  column-gap: 1rem;
  row-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(20%, auto));
  grid-template-rows: repeat(all, minmax(50%, auto));

  @media screen and (max-width: 1199px) {
    grid-template-columns: repeat(auto-fill, minmax(30%, auto));
  }
  @media screen and (max-width: 899px) {
    grid-template-columns: repeat(auto-fill, minmax(45%, auto));
  }
  @media screen and (max-width: 599px) {
    grid-template-columns: repeat(auto-fill, minmax(100%, auto));
  }
`;

interface ICoinList {
  coins: ICoin[];
}

function CoinList({ coins }: ICoinList) {
  return (
    <Wrapper>
      {coins?.slice(0, 20).map((coin) => (
        <CoinListItem key={coin.id} coin={coin}></CoinListItem>
      ))}
    </Wrapper>
  );
}

export default CoinList;
