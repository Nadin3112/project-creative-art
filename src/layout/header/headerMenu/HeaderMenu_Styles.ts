import styled, {css} from 'styled-components';
import {theme } from "../../../styles/Theme";
import { LinkButton } from '../../../components/LinkButton';
import { FlexWrapper } from '../../../components/FlexWrapper';

//Menu

const MenuItem = styled.li`
  padding: 11px 0;
`

const NavLink = styled.a`
  font-size: 16px;
  line-height: 1.6;
  color: ${theme.colors.placeholderColor};
  letter-spacing: 0.6px;

  &:hover {
    color: ${theme.colors.activeFont};
    border-bottom: 1px solid ${theme.colors.accent};
  }

`

//MobileMenu
const MobileMenu = styled.nav`
  ${FlexWrapper} {
    gap: 40px;
  }

  ${LinkButton} {
    display: block;
  }
`

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: auto;
  z-index: 99999;
  background-color: ${theme.colors.primaryLink};
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);
  transition: 1s ease-in-out;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    transition: 1s ease-in-out;
  }

  ${props => props.isOpen && css <{isOpen: boolean}> `
    transform: translateY(0);

    & ul {
      gap: 40px;
    }
  `}

`

const BurgerButton = styled.button<{isOpen: boolean}>`
  position: absolute;
  width: 48px;
  height: 10px;
  top: 30px;
  right: 10px;
  background-color: ${theme.colors.primaryLink};
  z-index: 9999999;
  border: none;
  cursor: pointer;

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 32px;
      height: 2px;
      background-color: ${theme.colors.activeFont};
      box-shadow: 0 8px 0 0 ${theme.colors.activeFont}, 0 16px 0 0 ${theme.colors.activeFont};
      transition: transform 0.3s ease-in;

      ${props => props.isOpen && css <{isOpen: boolean}> `
        transform: rotate(45deg);
        box-shadow: none;
      `}
    }

      &::after {
        ${props => props.isOpen && css <{isOpen: boolean}> `
          transform: rotate(-45deg);
        `}
      }
    
`

//Desktop
const DesktopMenu = styled.nav`
  display: flex;
  

  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 40px;
  }

`

export const S = {
  DesktopMenu,
  MenuItem,
  NavLink,
  MobileMenu,
  MobileMenuPopup,
  BurgerButton
}
