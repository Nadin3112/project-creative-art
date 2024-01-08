import React from 'react';
import styled from 'styled-components';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Description } from '../../../components/Description';
import { Link } from '../../../components/Link';
import { font } from '../../../assets/images/hero/Common';
import { theme } from '../../../styles/Theme';
import { Item } from './item/HeroItem';
import photo from '../../../assets/images/hero/hero@1x.png';
import photo2x from '../../../assets/images/hero/hero@2x.png';
import photoWebp from '../../../assets/images/hero/hero@1x.webp';
import photoWebp2x from '../../../assets/images/hero/hero@2x.webp';
import photoAvif from '../../../assets/images/hero/hero@1x.avif';
import photoAvif2x from '../../../assets/images/hero/hero@2x.avif';
import { Bid } from './bid/Bid';
import starDesktop from '../../../assets/images/hero/star@1x.png';
import starDesktop2x from '../../../assets/images/hero/star@2x.png';
import starDesktopWebp from '../../../assets/images/hero/star@1x.webp';
import starDesktopWebp2x from '../../../assets/images/hero/star@2x.webp';
import starDesktopAvif from '../../../assets/images/hero/star@1x.avif';
import starDesktopAvif2x from '../../../assets/images/hero/star@2x.avif';
import starMobile from '../../../assets/images/hero/star-mobile@1x.png';
import starMobile2x from '../../../assets/images/hero/star-mobile@2x.png';
import starMobileWebp from '../../../assets/images/hero/star-mobile@1x.webp';
import starMobileWebp2x from '../../../assets/images/hero/star-mobile@2x.webp';
import starMobileAvif from '../../../assets/images/hero/star-mobile@1x.avif';
import starMobileAvif2x from '../../../assets/images/hero/star-mobile@2x.avif';

const itemsData = [
    { quantity: 8.9, text: "K", what: "Art work" },
    { quantity: 65, text: "K", what: "Artist" },
    { quantity: 87, text: "K", what: "Collection" }
]

export const Hero: React.FC = () => {
    return (
        <HeroStyled>
            <Container>
                <GridWrapper>
                    <HeroWrapperText>
                        <HeroTitle>Discover and Collect The Best NFTs <span>Digital Art.</span></HeroTitle>
                        <Description>Get started with the easiest and most secure platform to buy and trade digital ART and NFT’s. Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!</Description>
                        <FlexWrapper align={"flex-start"}>
                            <Link linkType="primary" color={theme.colors.primaryLink} backgroundColor={theme.colors.accent}>Explore Now</Link>
                            <Link linkType="secondary">Learn More</Link>
                        </FlexWrapper>
                    </HeroWrapperText>
                    <PhotoWrapper>
                        <picture>
                            <source type="image/avif" srcSet={`${photoAvif} 1x, ${photoAvif2x} 2x`} />
                            <source type="image/webp" srcSet={`${photoWebp} 1x, ${photoWebp2x} 2x`} />
                            <Photo src={photo} srcSet={`${photo2x} 2x`} alt="Main picture" />
                        </picture>
                        <Bid />
                    </PhotoWrapper>
                    <HeroList>
                        {itemsData.map((i, index) => {
                            return <Item quantity={i.quantity} text={i.text} what={i.what} key={index} />
                        })}
                    </HeroList>
                </GridWrapper>
            </Container>
        </HeroStyled>
    );
};

const HeroStyled = styled.section`

`

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 60px;

    @media ${theme.media.tablet} {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 48px;
    }
`

const HeroWrapperText = styled.div`
    padding-top: 20px;

    @media ${theme.media.tablet} {
        padding-top: 0;
    }

    ${FlexWrapper} {
        gap: 36px;
        height: auto;

        @media ${theme.media.tablet} {
            justify-content: center;
        }
    }

`

const HeroTitle = styled.h1`
    margin: 0;
    max-width: 540px;
    letter-spacing: 1.2px;
    ${font({ family: "'Canela', serif", color: theme.colors.primaryFont, weight: 500, Fmax: 64, Fmin: 39 })} 
    
    span {
        color: ${theme.colors.accent};
    }

    @media ${theme.media.tablet} {
        text-align: center;
    }
`
const HeroList = styled.ul`
    display: flex;
    gap: 94px;
    flex-wrap: wrap;
    margin-top: 20px;

    @media ${theme.media.xl} {
        gap: 28px;
    }

    @media ${theme.media.tablet} {
        margin-top: 60px;
    }

`
const PhotoWrapper = styled.div`
    grid-row: 1/3;
    grid-column: 2/3;
    position: relative; 
    justify-self: end;
    

    &::before {
        position: absolute;
        content: "";
        top: 223px;
        left: -60px;
        width: 172px;
        height: 172px;
        background-image: url(${starDesktop});
        background-repeat: no-repeat;
        background-size: cover;
        background-image: image-set(
            url(${starDesktopAvif}) type("image/avif") 1x,
            url(${starDesktopAvif2x}) type("image/avif") 2x,
            url(${starDesktopWebp}) type("image/webp") 1x,
            url(${starDesktopWebp2x}) type("image/webp") 2x
        );

        @media (min-resolution: 2dppx) {
            &::before {
                background-image: url(${starDesktop2x});
            }
        }   
        @media ${theme.media.tablet} {
            top: 173px;
            left: -29px;
            width: 82px;
            height: 82px;
            background-image: url(${starMobile});
            background-image: image-set(
                url(${starMobileAvif}) type("image/avif") 1x,
                url(${starMobileAvif2x}) type("image/avif") 2x,
                url(${starMobileWebp}) type("image/webp") 1x,
                url(${starMobileWebp2x}) type("image/webp") 2x
            );

            @media (min-resolution: 2dppx) {
                &::before {
                    background-image: url(${starMobile2x});
                }
            }   
        } 
    }
`

const Photo = styled.img`
    display: block;
    width: 464px;
    height: 544px;
    margin-right: 51px;
    border-radius: 24px;
    object-fit: cover;

    @media ${theme.media.tablet} {
        width: 294px;
        height: 344px;
        margin-right: 15px;
    }
`

