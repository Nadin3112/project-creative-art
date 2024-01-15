import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";
import bgImage from "../assets/images/Bg.png";
import bg2x from "../assets/images/Bg@2x.png";
import bgWebp from "../assets/images/Bg.webp";
import bgWebp2x from "../assets/images/Bg@2x.webp";
import bgAvif from "../assets/images/Bg.avif";
import bgAvif2x from "../assets/images/Bg@2x.avif";

export const GlobalStyled = createGlobalStyle`

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-width: 375px;
    width: 100%;
    color: ${theme.colors.primaryFont};
    font-size: 16px;
    font-weight: 400;
    line-height: 1.2;
    background-image: url(${bgImage});
    background-color: #090F1D;
    background-blend-mode: color-burn;
    flex-shrink: 0;
    background-image: image-set(
      url(${bgAvif}) type("image/avif") 1x,
      url(${bgAvif2x}) type("image/avif") 2x,
      url(${bgWebp}) type("image/webp") 1x,
      url(${bgWebp2x}) type("image/webp") 2x);

      @media (min-resolution: 2dppx) {
        background-image: url(${bg2x});
      }
      
    &::before {
      position: absolute;
      top: 353px;
      width: 631px;
      height: 458px;
      content: "";
      background-color: ${theme.colors.filterBg};
      background-size: cover;
      align-self: center;
      flex-shrink: 0;
      filter: blur(200px);
      z-index: -1;
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