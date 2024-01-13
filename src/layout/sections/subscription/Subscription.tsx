import React from 'react';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Description } from '../../../components/Description';
import { LinkButton } from '../../../components/LinkButton';
import { theme } from '../../../styles/Theme';

import subscribe1 from '../../../assets/images/subscribe/subscribe-1@1x.png';
import subscribe12x from '../../../assets/images/subscribe/subscribe-1@2x.png';
import subscribe1Webp from '../../../assets/images/subscribe/subscribe-1@1x.webp';
import subscribe1Webp2x from '../../../assets/images/subscribe/subscribe-1@2x.webp';
import subscribe1Avif from '../../../assets/images/subscribe/subscribe-1@1x.avif';
import subscribe1Avif2x from '../../../assets/images/subscribe/subscribe-1@2x.avif';
import subscribe2 from '../../../assets/images/subscribe/subscribe-2@1x.png';
import subscribe22x from '../../../assets/images/subscribe/subscribe-2@2x.png';
import subscribe2Webp from '../../../assets/images/subscribe/subscribe-2@1x.webp';
import subscribe2Webp2x from '../../../assets/images/subscribe/subscribe-2@2x.webp';
import subscribe2Avif from '../../../assets/images/subscribe/subscribe-2@1x.avif';
import subscribe2Avif2x from '../../../assets/images/subscribe/subscribe-2@2x.avif';
import { Img } from './subscriptionImage/Img';
import { S } from './Subscription_Styles';

const subscriptionsData = [
    {
        src: subscribe1,
        srcSet: `${subscribe12x} 2x`,
        srcSetWebp: `${subscribe1Webp} 1x, ${subscribe1Webp2x} 2x`,
        srcSetAvif: `${subscribe1Avif} 1x, ${subscribe1Avif2x} 2x`,
        alt: "subscribe",
        height: "376px",
        width: "410px"
    },

    {
        src: subscribe2,
        srcSet: `${subscribe22x} 2x`,
        srcSetWebp: `${subscribe2Webp} 1x, ${subscribe2Webp2x} 2x`,
        srcSetAvif: `${subscribe2Avif} 1x, ${subscribe2Avif2x} 2x`,
        alt: "subscribe",
        height: "348px",
        width: "282px"
    }
]

export const Subscription: React.FC = () => {
    return (
        <S.Subscription>
            <Container>
                <FlexWrapper justify={"space-between"} wrap={"wrap"} align={"center"}>
                    <S.SubscriptionPhotoWrapper>
                        {subscriptionsData.map((s, index) => {
                            return <Img alt={s.alt} srcSetAvif={s.srcSetAvif} src={s.src} srcSet={s.srcSet} srcSetWebp={s.srcSetWebp} height={s.height} width={s.width} key={index} />
                        })}
                    </S.SubscriptionPhotoWrapper>
                    <S.SubscriptionTextWrapper>
                        <SectionTitle>Subscribe And <span>get our Updates</span> Every Week</SectionTitle>
                        <Description>We have a blog related to NFT so we can share thoughts and routines on our blog which is updated weekly</Description>
                        <S.Form>
                            <S.Field type={"email"} placeholder={"Enter your e-mail"} />
                            <LinkButton linkType="primary" color={theme.colors.primaryLink} backgroundColor={theme.colors.accent} tabIndex={0} href={"#"}>Subscribe</LinkButton>
                        </S.Form>
                    </S.SubscriptionTextWrapper>
                </FlexWrapper>
            </Container>
        </S.Subscription>
    );
};

