import styled from "styled-components";
import TitleChar from "./TitleChar";

function Title() {
  const TITLE = "CRYPTO TRACKER";
  const SVG_WIDTH = window.innerWidth > 1200 ? 600 : window.innerWidth * 0.8;
  const SVG_HEIGHT = "200px";

  return (
    <svg width={SVG_WIDTH} height={SVG_HEIGHT}>
      {TITLE.split("").map((item, idx) => {
        return (
          <TitleChar
            key={idx}
            location={(SVG_WIDTH * idx) / 14}
            char={item}
          ></TitleChar>
        );
      })}
    </svg>
  );
}

export default Title;
