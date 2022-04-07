import React from "react";
import styled from "styled-components";
import Title from "./Title";

const Wrapper = styled.div`
  padding-top: calc((${window.innerHeight}px - 250px) / 2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 3rem;
  height: 3rem;
`;

function Landing() {
  return (
    <Wrapper>
      <Title />
      <Img src="/img/down-arrow.png" />
    </Wrapper>
  );
}

export default Landing;
