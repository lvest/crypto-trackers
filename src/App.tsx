import Router from "./Router";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { ThemeProvider } from "styled-components";
import { ReactQueryDevtools } from "react-query/devtools";
import { darkTheme, lightTheme } from "./theme";

const GlobalStyle = createGlobalStyle`
  
  ${reset}
  
  *{
    box-sizing: border-box;
  }
  body{
    font-family: 'Source Sans Pro', sans-serif;
    background-color: ${(props) => props.theme.bgColor};
    color:${(props) => props.theme.textColor}
  }
  a{
    text-decoration: none;
    color:inherit;
  }
`;

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
