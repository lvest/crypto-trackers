import { useParams } from "react-router-dom";

function Coin() {
  const { coinId } = useParams();
  console.log(coinId);
  return <div>Coin</div>;
}

export default Coin;
