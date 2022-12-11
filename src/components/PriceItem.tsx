import styled from "styled-components";

const Wrapper = styled.div`
  border-radius: 16px;
  background-color: ${(props) => props.theme.lightBgColor};
  display: flex;
  align-items: center;
  padding: 1% 2%;
`;

const PriceLabel = styled.div`
  color: ${(props) => props.theme.boxTextColor};
  width: 25%;
  text-align: center;
  margin: 0 20px;
`;

const CurrentPrice = styled.div<{ isPriceUp: boolean }>`
  color: ${(props) => (props.isPriceUp ? "green" : "red")};
  span {
    font-size: 1.5rem;
  }
`;

interface IPriceItem {
  label: string;
  price: number;
  isPriceUp: boolean;
}

function PriceItem({ label, price, isPriceUp }: IPriceItem) {
  return (
    <Wrapper>
      <PriceLabel>{label}</PriceLabel>
      <CurrentPrice isPriceUp={isPriceUp}>
        <span>{isPriceUp ? "▲ " : "▼ "}</span>
        <span>$ {price}</span>
      </CurrentPrice>
    </Wrapper>
  );
}

export default PriceItem;
