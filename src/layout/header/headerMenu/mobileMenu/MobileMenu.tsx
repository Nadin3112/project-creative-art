import React, { useState } from 'react';
import { Menu } from '../menu/Menu';
import { S } from '../HeaderMenu_Styles';
import { LinkButton } from '../../../../components/LinkButton'
import { theme } from './../../../../styles/Theme';
import { FlexWrapper } from '../../../../components/FlexWrapper';

export const MobileMenu: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const onBurgerBtnClick = () => { setMenuIsOpen(!menuIsOpen) }
  return (
    <S.MobileMenu>
      <S.BurgerButton aria-label="open menu" isOpen={menuIsOpen} onClick={onBurgerBtnClick} />
      <S.MobileMenuPopup isOpen={menuIsOpen} onClick={() => { setMenuIsOpen(false) }}>
        <FlexWrapper direction={"column"} justify={"center"}>
          <Menu />
          <LinkButton linkType="primary" color={theme.colors.primaryLink} backgroundColor={theme.colors.accent}>Contact</LinkButton>
        </FlexWrapper>
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};


