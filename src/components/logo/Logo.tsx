import React from 'react';
import { Icon } from '../icon/Icon';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';

export const Logo: React.FC = () => {
  return (
    <LogoLink aria-label="logo vebsite" href={"index.html"} >
      <Icon role="img" iconId={"logo"} width={"28"} height={"28"} viewBox={"0 0 28 28"} />
      <p aria-hidden={"true"}>Creative<span>art</span></p>
    </LogoLink>
  );
};

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  min-width: 196px;
  position: relative;
  transition: ${theme.animations.transition};
  color: ${theme.colors.accent};

  &:hover {
    color: ${theme.colors.activeFont};
    
    p {
      color: ${theme.colors.accent};
    }

    span {
      color: ${theme.colors.activeFont};
    }
  }

  p {
    position: absolute;
    top: 10px;
    left: 36px;
    font-family: 'Spectral', serif;
    font-size: 32px;
    font-weight: 500;
    color: ${theme.colors.activeFont};
    letter-spacing: 1.2px;
  }

  span {
    color: ${theme.colors.accent};
  }
`