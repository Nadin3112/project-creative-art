import React from 'react';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Logo } from '../../components/logo/Logo';
import { Description } from '../../components/Description';
import { Icon } from '../../components/icon/Icon';
import { NavList } from './navFooter/NavList';
import { S } from './Footer_Styles';

const socialItemsData = [
    { iconId: "facebook", ariaLabel: "facebook", href: "#", width: "25", height: "24", viewBox: "0 0 25 24" },
    { iconId: "telegram", ariaLabel: "telegram", href: "#", width: "25", height: "24", viewBox: "0 0 25 24" },
    { iconId: "twitter", ariaLabel: "twitter", href: "#", width: "25", height: "24", viewBox: "0 0 25 24" },
    { iconId: "instagram", ariaLabel: "instagram", href: "#", width: "25", height: "24", viewBox: "0 0 25 24" }
]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <FlexWrapper justify={"space-between"} wrap={"wrap"}>
                    <S.FooterTextWrapper>
                        <Logo />
                        <Description>Discover NFTs by category, track the latest drop, and and follow the collections you love. Enjoy it!</Description>
                        <S.SocialList>
                            {socialItemsData.map((s, index) => {
                                return <S.SocialItem key={index}>
                                    <S.SocialLink aria-label={s.ariaLabel} href={s.href}>
                                        <Icon iconId={s.iconId} width={s.width} height={s.height} viewBox={s.viewBox} />
                                    </S.SocialLink>
                                </S.SocialItem>
                            })}
                        </S.SocialList>
                    </S.FooterTextWrapper>
                    <NavList />
                </FlexWrapper>
                <S.Copyright>
                    <span>© Copyright 2023 - Creativeart</span>
                    <div>
                        <span>Privacy Policy</span>
                        <span>Terms & Conditions</span>
                    </div>
                </S.Copyright>
            </Container>
        </S.Footer>
    );
};

