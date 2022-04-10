import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../theme";

interface IThemeContext {
  currentTheme: boolean;
  setCurrentTheme?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeContext = createContext<IThemeContext>({ currentTheme: true });

interface IThemeProvider {
  children: JSX.Element;
}

const ThemeStyleProvider = ({ children }: IThemeProvider) => {
  const recordTheme = localStorage.getItem("light") === "false" ? false : true;
  const [currentTheme, setCurrentTheme] = useState(recordTheme);

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <ThemeProvider theme={currentTheme ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeStyleProvider };
export default ThemeContext;
