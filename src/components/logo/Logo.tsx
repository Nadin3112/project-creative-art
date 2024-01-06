import React from 'react';
import { Icon } from '../icon/Icon';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';

export const Logo: React.FC = () => {
  return (
    <LogoLink aria-label="logo vebsite" href={"index.html"} >
      <Icon role="img" iconId={"logo"} width={"28"} height={"28"} viewBox={"0 0 28 28"} />
      <p>Creative<span>art</span></p>
    </LogoLink>
  );
};

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  min-width: 196px;
  position: relative;

  p {
    position: absolute;
    top: 10px;
    left: 36px;
    font-family: 'Canela', serif;
    font-size: 32px;
    font-weight: 500;
    color: ${theme.colors.activeFont};
    letter-spacing: 1.2px;
  }

  span {
    color: ${theme.colors.accent};
  }
`