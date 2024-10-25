import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: "Inter", sans-serif;
    }
    button{
      box-shadow: none !important;
    }
    h1, h2, h3, p{
        color: ${(props) => props.theme.colors.dark};
    }

    ::-webkit-scrollbar {
  width: 6px;
}`;
