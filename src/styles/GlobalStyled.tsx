import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";
import BgImage from "../assets/images/Bg.png";

export const GlobalStyled = createGlobalStyle`

@font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    src: url("../fonts/Inter-Regular.woff2") format("woff2");
    src: url("../fonts/Inter-Regular.woff") format("woff");
    font-display: swap;
  }
  
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    src: url("../fonts/Inter-Bold.woff2") format("woff2");
    src: url("../fonts/Inter-Bold.woff") format("woff");
    font-display: swap;
  }

  @font-face {
    font-family: "Canela";
    font-style: normal;
    font-weight: 500;
    src: url("../fonts/Canela-Medium.woff2") format("woff2");
    src: url("../fonts/Canela-Medium.woff") format("woff");
    src: url("../fonts/Canela-Medium.ttf") format("ttf");
    font-display: swap;
  }

  @font-face {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 700;
    src: url("../fonts/SourceSansPro-Bold.woff2") format("woff2");
    src: url("../fonts/SourceSansPro-Bold.woff") format("woff");
    font-display: swap;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-width: 375px;
    color: ${theme.colors.primaryFont};
    font-size: 16px;
    font-weight: 400;
    line-height: 1.2;
    background-image: url(${BgImage});
    background-color: #090F1D;
    background-blend-mode: color-burn;
  }

  section {
    padding: 92px 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  `