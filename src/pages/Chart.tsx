import React from "react";
import ApexChart from "react-apexcharts";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchPriceHistory } from "../api";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.boxTextColor};
  border-radius: 4px;
`;

interface IChartProps {
  coinId: string;
  coinName: string;
}

interface IChartProps {
  close: number;
  high: number;
  low: number;
  market_cap: number;
  open: number;
  time_close: string;
  time_open: string;
  volume: number;
}

function Chart() {
  const { coinId } = useParams();
  const { isLoading, data } = useQuery<IChartProps[]>(
    ["ohlcvData", coinId],
    () => fetchPriceHistory(coinId!),
    {}
  );

  console.log('chart', data)

  return isLoading ? (
    <span>로딩중입니다</span>
  ) : (
    <Wrapper>
      {data && (
        <ApexChart
          type="candlestick"
          series={[
            {
              data: data?.map((price) => {
                return {
                  x: price.time_close,
                  y: [
                    price.open,
                    price.high,
                    price.low,
                    price.close,
                  ],
                };
              }),
            },
          ]}
          options={{
            chart: {
              toolbar: {
                show: false,
              },
              background: "transparent",
            },

            grid: {
              show: false,
            },

            stroke: {
              curve: "smooth",
              width: 1,
            },

            yaxis: {
              show: false,
            },

            xaxis: {
              axisBorder: {
                show: false,
              },

              axisTicks: {
                show: false,
              },

              labels: {
                show: false,
              },
            },
          }}
        />
      )}
    </Wrapper>
  );
}

export default Chart;
