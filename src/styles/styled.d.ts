import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      dark: string;
      light: string;
      grey: string;
      primary: string;
      secondary: string;
      tertiary: string;

      success: string;
      error: string;
      pending: string;
      info: string;
    };
  }
}
