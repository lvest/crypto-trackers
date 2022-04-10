import React, { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "../context/ThemeContext";
import BackButton from "./button/BackButton";
import ToggleButton from "./button/ToggleButton";

const Wrapper = styled.div`
  width: 100%;
  height: 8%;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  background-color: #ffffffa4;
  z-index: 1;
`;

function Header() {
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);

  const toggleClickHandler = () => {
    const changedState = !currentTheme;
    setCurrentTheme && setCurrentTheme(changedState);
    localStorage.setItem("light", String(changedState));
    return changedState;
  };

  return (
    <Wrapper>
      <BackButton></BackButton>
      <ToggleButton
        initialState={currentTheme}
        onClickFunction={toggleClickHandler}
      ></ToggleButton>
    </Wrapper>
  );
}

export default Header;
