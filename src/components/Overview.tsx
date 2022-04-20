import styled from "styled-components";
import { InfoData, PriceData } from "../pages/Coin";

const Wrapper = styled.ul`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: space-around;
  gap: 0.5rem;
`;

const OverviewItem = styled.li`
  width: 33.3%;
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

  @media screen and (max-width: 599px) {
    width: 96px;
    flex-direction: row;
    overflow: hidden;
    cursor: pointer;

    span:first-child {
      width: 96px;
      padding: 0 0.5rem;
      margin-right: 2rem;
      font-size: 1rem;
      margin-bottom: 0;
    }
    &:hover {
      color: ${(props) => props.theme.accentColor};
      span:first-child {
        display: none;
      }
    }
  }
`;

interface IOverview {
  infoData: InfoData;
  tickersData: PriceData;
}

function Overview({ infoData, tickersData }: IOverview) {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}

export default Overview;
