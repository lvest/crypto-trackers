import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import ThemeContext from "../context/ThemeContext";
import BackButton from "./button/BackButton";
import ToggleButton from "./button/ToggleButton";

const Wrapper = styled.div<{ headerHeight: number }>`
  width: 100%;
  height: 8%;
  position: fixed;
  top: -${(props) => props.headerHeight}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  background-color: #ffffffa4;
  z-index: 1;
  transition: transform 0.3s ease-in-out;

  &.show {
    transform: translateY(calc((${(props) => props.headerHeight}px)));
  }

  &.hide {
  }
`;

function Header() {
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);
  const [isShow, setIsShow] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const HEADER_HEIGHT = document.querySelector("#header")?.clientHeight;
    HEADER_HEIGHT && setHeaderHeight(HEADER_HEIGHT);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onCheckScroll);
    return () => {
      window.removeEventListener("scroll", onCheckScroll);
    };
  });

  const onCheckScroll = () => {
    const value = window.scrollY;
    if (value && scrollPosition > value) {
      !isShow && setIsShow(true);
    } else {
      isShow && setIsShow(false);
    }
    setScrollPosition(value);
  };

  const toggleClickHandler = () => {
    const changedState = !currentTheme;
    setCurrentTheme && setCurrentTheme(changedState);
    localStorage.setItem("light", String(changedState));
    return changedState;
  };

  return (
    <Wrapper
      id="header"
      className={isShow ? "show" : "hide"}
      headerHeight={headerHeight}
    >
      <BackButton></BackButton>
      <ToggleButton
        initialState={currentTheme}
        onClickFunction={toggleClickHandler}
      ></ToggleButton>
    </Wrapper>
  );
}

export default Header;
