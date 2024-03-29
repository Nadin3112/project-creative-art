import React from 'react';
import { Logo } from '../../components/logo/Logo';
import { DesktopMenu } from './headerMenu/desktopMenu/DesktopMenu';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { MobileMenu } from './headerMenu/mobileMenu/MobileMenu';
import { S } from './Header_Styles';
import { LinkButton } from '../../components/LinkButton';
import { theme } from '../../styles/Theme';


export const Header: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 992;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);


    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return (
    <S.Header>
      <Container>
        <FlexWrapper justify={"space-between"} align={"center"}>
          <Logo />
          {width<breakpoint ? <MobileMenu /> : <DesktopMenu />}
          <LinkButton linkType="primary" color={theme.colors.primaryLink} backgroundColor={theme.colors.accent} tabIndex={0} href={"#"}>Contact</LinkButton>
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};



