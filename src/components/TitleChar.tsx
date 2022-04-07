import styled, { keyframes } from "styled-components";

const stroke = keyframes`
  0% {
    stroke-dashoffset: 326px;
    fill: transparent; 
  }
  100% {
    stroke-dashoffset: 0px; 
  }
`;

const Char = styled.text`
  font-size: 3em;
  font-weight: 700;
  fill: ${(props) => props.theme.accentColor};
  stroke: ${(props) => props.theme.accentColor};
  stroke-width: 2px;
  stroke-dasharray: 350px;
  animation: ${stroke} 5s ease-in-out;

  // stroke-dasharray: 5px 20px; //  외곽선의 길이, 외곽선 사이의 간격
  // stroke-dashoffset: 0px; // 시작 간격
`;

interface ITitleChar {
  location: number;
  char: string;
}

function TitleChar({ location, char }: ITitleChar) {
  return (
    <Char x={location} y="50%">
      {char}
    </Char>
  );
}

export default TitleChar;
