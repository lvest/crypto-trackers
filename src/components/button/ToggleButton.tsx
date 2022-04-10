import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 5rem;
  height: 2rem;
  border-radius: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) => props.theme.boxBgColor};
  cursor: pointer;
`;

const Circle = styled.div`
  width: 1.9rem;
  height: 1.9rem;
  margin-left: 1px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.bgColor};
  transition: all 0.2s;

  &.toLeft {
    transform: translateX(0);
  }

  &.toRight {
    transform: translateX(3rem);
  }
`;

interface IToggleButton {
  initialState: boolean;
  onClickFunction: () => boolean;
}

function ToggleButton({ initialState, onClickFunction }: IToggleButton) {
  const [isOn, setIsOn] = useState(initialState);

  const onClickHandler = () => {
    setIsOn(onClickFunction());
  };

  return (
    <Wrapper onClick={onClickHandler}>
      <Circle className={isOn ? "toLeft" : "toRight"}></Circle>
    </Wrapper>
  );
}

export default ToggleButton;
