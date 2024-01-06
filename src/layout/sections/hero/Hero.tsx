import React from 'react';
import styled from 'styled-components';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Description } from '../../../components/Description';
import { Link } from '../../../components/Link';
import { font } from '../../../styles/Common';
import { theme } from '../../../styles/Theme';
import { Item } from './item/HeroItem';
import photo from '../../../assets/images/hero@1x.png';
import photo2x from '../../../assets/images/hero@2x.png';
import photoWebp from '../../../assets/images/hero@1x.webp';
import photoWebp2x from '../../../assets/images/hero@2x.webp';
import photoAvif from '../../../assets/images/hero@1x.avif';
import photoAvif2x from '../../../assets/images/hero@2x.avif';
import { Bid } from './bid/Bid';

const itemsData = [
    { quantity: 8.9, text: "K", what: "Art work" },
    { quantity: 65, text: "K", what: "Artist" },
    { quantity: 87, text: "K", what: "Collection" }
]

export const Hero: React.FC = () => {
    return (
        <HeroStyled>
            <Container>
                <FlexWrapper justify={"space-between"}>
                    <HeroWrapperText>
                        <LeadText>Discover and Collect The Best NFTs</LeadText>
                        <HeroTitle>Digital Art.</HeroTitle>
                        <Description>Get started with the easiest and most secure platform to buy and trade digital ART and NFT’s. Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!</Description>
                        <FlexWrapper align={"flex-start"}>
                            <Link linkType="primary" color={theme.colors.primaryLink} backgroundColor={theme.colors.accent}>Explore Now</Link>
                            <Link linkType="secondary">Learn More</Link>
                        </FlexWrapper>
                        <HeroList>
                            {itemsData.map((i, index) => {
                                return <Item quantity={i.quantity} text={i.text} what={i.what} key={index} />
                            })}
                        </HeroList>
                    </HeroWrapperText>
                    <PhotoWrapper>
                        <picture>
                            <source type="image/avif" srcSet={`${photoAvif} 1x, ${photoAvif2x} 2x`} />
                            <source type="image/webp" srcSet={`${photoWebp} 1x, ${photoWebp2x} 2x`} />
                            <Photo src={photo} srcSet={`${photo2x} 2x`} alt="Main picture" width={"464"} height={"544"} />
                        </picture>
                        <Bid/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </HeroStyled>
    );
};

const HeroStyled = styled.section`
    
`
const HeroWrapperText = styled.div`
    max-width: 536px;
    padding-top: 20px;
    margin-right: 10px;

    ${FlexWrapper} {
        gap: 36px;
        height: auto;
    }

`
const LeadText = styled.p`
    display: inline;
    letter-spacing: 1.2px;
    ${font({ family: "'Canela', serif", weight: 500, Fmax: 64, Fmin: 39 })} 
`
const HeroTitle = styled.h1`
    margin: 0;
    display: inline-block;
    padding-left: 10px;
    ${font({ family: "'Canela', serif", color: theme.colors.accent, weight: 500, Fmax: 64, Fmin: 39 })} 
`
const HeroList = styled.ul`
    display: flex;
    gap: 94px;
    flex-wrap: wrap;
    margin-top: 78px;
`
const PhotoWrapper = styled.div`
    position: relative; 

`

const Photo = styled.img`
    display: block;
    margin-right: 51px;
    border-radius: 24px;
`

