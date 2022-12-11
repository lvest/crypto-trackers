import { useOutletContext } from "react-router-dom";
import PriceItem from "../components/PriceItem";
import { InfoData, PriceData } from "./Coin";

type Labels = {
  [index: string]: string;
};

function Price() {
  const [infoData, tickersData] = useOutletContext<[InfoData, PriceData]>();
  const labels: Labels = {
    price: "현재 가격",
    percent_change_15m: "15분 전 대비",
    percent_change_30m: "30분 전 대비",
    percent_change_1h: "1시간 전 대비",
    percent_change_12h: "12시간 전 대비",
    percent_change_24h: "24시간 전 대비",
    percent_change_7d: "7일 전 대비",
    percent_change_30d: "30일 전 대비",
  };

  const isPriceUp = (price: number) => {
    return price > 0 ? true : false;
  };

  return (
    <>
      {Object.keys(labels).map((label) => {
        const price = tickersData?.quotes.USD[label] as number;
        return (
          <PriceItem
            key={label}
            label={labels[label]}
            price={Number(price.toFixed(2))}
            isPriceUp={isPriceUp(price)}
          ></PriceItem>
        );
      })}
    </>
  );
}

export default Price;
