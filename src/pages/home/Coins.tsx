import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchCoins } from "../../api";
import CoinList from "../../components/CoinList";

const Wrapper = styled.div`
  margin: 2% 10%;
`;

export interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);

  return <Wrapper>{data && <CoinList coins={data}></CoinList>}</Wrapper>;
}

export default Coins;
