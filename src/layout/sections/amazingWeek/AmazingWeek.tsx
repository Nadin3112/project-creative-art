import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { LinkButton } from '../../../components/Link';
import { theme } from '../../../styles/Theme';
import { Container } from '../../../components/Container';
import { WeekItem } from './card/WeekItem';
import charge from '../../../assets/images/amazingWeek/charge@1x.png';
import charge2x from '../../../assets/images/amazingWeek/charge@2x.png';
import chargeWebp from '../../../assets/images/amazingWeek/charge@1x.webp';
import chargeWebp2x from '../../../assets/images/amazingWeek/charge@2x.webp';
import chargeAvif from '../../../assets/images/amazingWeek/charge@1x.avif';
import chargeAvif2x from '../../../assets/images/amazingWeek/charge@2x.avif';
import cyberpunk from '../../../assets/images/amazingWeek/cyberpunk@1x.png';
import cyberpunk2x from '../../../assets/images/amazingWeek/cyberpunk@2x.png';
import cyberpunkWebp from '../../../assets/images/amazingWeek/cyberpunk@1x.webp';
import cyberpunkWebp2x from '../../../assets/images/amazingWeek/cyberpunk@2x.webp';
import cyberpunkAvif from '../../../assets/images/amazingWeek/cyberpunk@1x.avif';
import cyberpunkAvif2x from '../../../assets/images/amazingWeek/cyberpunk@2x.avif';
import surgeon from '../../../assets/images/amazingWeek/surgeon@1x.png';
import surgeon2x from '../../../assets/images/amazingWeek/surgeon@2x.png';
import surgeonWebp from '../../../assets/images/amazingWeek/surgeon@1x.webp';
import surgeonWebp2x from '../../../assets/images/amazingWeek/surgeon@2x.webp';
import surgeonAvif from '../../../assets/images/amazingWeek/surgeon@1x.avif';
import surgeonAvif2x from '../../../assets/images/amazingWeek/surgeon@2x.avif';
import { S } from './AmazingWeek_Styles';

const cardsData = [
    {
        title: "Cyberpunk Cocomo",
        src: charge,
        srcSet: `${charge2x} 2x`,
        srcSetWebp: `${chargeWebp} 1x, ${chargeWebp2x} 2x`,
        srcSetAvif: `${chargeAvif} 1x, ${chargeAvif2x} 2x`,
        bid: "490ETH",
        clock: "03:24:56"
    },

    {
        title: "Charge, Qi tiao yu",
        src: cyberpunk,
        srcSet: `${cyberpunk2x} 2x`,
        srcSetWebp: `${cyberpunkWebp} 1x, ${cyberpunkWebp2x} 2x`,
        srcSetAvif: `${cyberpunkAvif} 1x, ${cyberpunkAvif2x} 2x`,
        bid: "490ETH",
        clock: "03:24:56"
    },

    {
        title: "Surgeon, Josh Rife",
        src: surgeon,
        srcSet: `${surgeon2x} 2x`,
        srcSetWebp: `${surgeonWebp} 1x, ${surgeonWebp2x} 2x`,
        srcSetAvif: `${surgeonAvif} 1x, ${surgeonAvif2x} 2x`,
        bid: "490ETH",
        clock: "03:24:56"
    },
]

export const AmazingWeek: React.FC = () => {
    return (
        <S.AmazingWeek id={"collections"}>
            <Container>
                <S.GridWrapper>
                    <SectionTitle><span>Amazing</span> and Super Unique Art of This <span>Week</span></SectionTitle>
                    <LinkButton linkType="primary" color={theme.colors.primaryLink} backgroundColor={theme.colors.accent} tabIndex={0} href={"#"}>See All</LinkButton>
                    <S.WeekList>
                        {cardsData.map((c, index) => {
                            return <WeekItem title={c.title} srcSetAvif={c.srcSetAvif} src={c.src} srcSet={c.srcSet} srcSetWebp={c.srcSetWebp} bid={c.bid} clock={c.clock} key={index} />
                        })}
                    </S.WeekList>
                </S.GridWrapper>
            </Container>
        </S.AmazingWeek>
    );
};

