import styled from "styled-components";
import Title from "../../components/Title";

const Wrapper = styled.div`
  height: calc(${window.innerHeight}px);
  padding-top: calc((${window.innerHeight / 2}px)-200px);
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
