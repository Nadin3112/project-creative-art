import styled from "styled-components";
import { theme } from "../styles/Theme";


export const Description = styled.p`
  max-width: 536px;
  width: auto;
  margin: 28px 0 42px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0.52px;

  @media ${theme.media.tablet} {
    text-align: center;
    margin: 20px 0 32px;
  }

`
