import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: calc(${window.innerHeight}px);
`;

interface IPage {
  component: JSX.Element;
}

function Page({ component }: IPage) {
  return <Wrapper>{component}</Wrapper>;
}

export default Page;
