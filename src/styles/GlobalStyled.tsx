import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";
import bgImage from "../assets/images/Bg.png";
import bg2x from "../assets/images/Bg@2x.png";
import bgWebp from "../assets/images/Bg.webp";
import bgWebp2x from "../assets/images/Bg@2x.webp";
import bgAvif from "../assets/images/Bg.avif";
import bgAvif2x from "../assets/images/Bg@2x.avif";

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
    position: relative;
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
    background-image: url(${bgImage});
    background-color: #090F1D;
    background-blend-mode: color-burn;
    background-image: image-set(
      url(${bgAvif}) type("image/avif") 1x,
      url(${bgAvif2x}) type("image/avif") 2x,
      url(${bgWebp}) type("image/webp") 1x,
      url(${bgWebp2x}) type("image/webp") 2x);

      @media (min-resolution: 2dppx) {
        background-image: url(${bg2x});
      }   
  }

  section {
    padding: 92px 0;

    @media ${theme.media.tablet} {
      padding: 40px 0;
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  img {
  max-width: 100%;
  height: auto;
  }

`