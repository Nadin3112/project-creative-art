import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { font } from '../../../assets/images/hero/Common';
import { theme } from '../../../styles/Theme';
import { LinkButton } from '../../../components/LinkButton';
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

const Hero = styled.section`
    position: relative;
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
    ${font({ family: "'Spectral', serif", color: theme.colors.primaryFont, weight: 500, Fmax: 64, Fmin: 39 })} 
    
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
    margin-bottom: 26px;

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
    position: relative;

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

const HeroItem = styled.li`
    display: flex;
    flex-direction: column;
    
    &:not(:last-child) {
        padding-right: 26px;
        border-right: 1px solid ${theme.colors.accent};

    }

    p {
        ${font({family: "'Spectral', serif", lineHeight: 0.8, color: theme.colors.accent, weight: 500, Fmax: 48, Fmin: 31 })};
        margin-bottom: 16px;
        display: inline;
    }

    b {
        color: ${theme.colors.primaryFont};
    }

    span {
        line-height: 1.6;
    }
`

const BidWrapper = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    min-width: 304px;
    padding: 20px;
    border-radius: 16px;
    border-top: 1px solid ${theme.colors.accent};
    background-color:  ${theme.colors.colorCard};
    box-shadow: 0px 9px 50px 0px rgba(23, 36, 65, 0.04);

    @media ${theme.media.tablet} {
        min-width: 224px;
        padding: 12px;
        bottom: -76px;
    }

    ${FlexWrapper} {
        ${FlexWrapper} {
            gap: 8px;
        }
    }

    ${LinkButton} {
        margin-top: 24px;

        @media ${theme.media.tablet} {
            margin-top: 16px;
        }
    }

    @media ${theme.media.desktop} {
        left: 211px;
        top: 468px;
        right: auto;
        bottom: auto;
    }
`
const TextBid = styled.span`
    ${font({lineHeight: 1.6, color: theme.colors.accent, Fmax: 16, Fmin: 14 })} 
`

const TimeBid = styled.span`
    font-weight: 700;
`

export const S = {
    Hero,
    GridWrapper,
    HeroWrapperText,
    HeroTitle,
    HeroList,
    PhotoWrapper,
    Photo,
    HeroItem,
    BidWrapper,
    TextBid,
    TimeBid
}