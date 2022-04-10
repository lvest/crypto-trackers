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

  &.clicked {
    transform: translateX(3rem);
  }
`;

interface IToggleButton {
  onClickFunction: () => void;
}

function ToggleButton({ onClickFunction }: IToggleButton) {
  const [isClicked, setIsClicked] = useState(false);
  const onClickHandler = () => {
    setIsClicked(!isClicked);
    onClickFunction();
  };

  return (
    <Wrapper onClick={onClickHandler}>
      <Circle className={isClicked ? "clicked" : ""}></Circle>
    </Wrapper>
  );
}

export default ToggleButton;
