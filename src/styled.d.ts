import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    lightBgColor: string;
    textColor: string;
    boxBgColor: string;
    boxTextColor: string;
    accentColor: string;
  }
}
