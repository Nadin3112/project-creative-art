import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { LinkButton } from '../../../components/LinkButton';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { theme } from '../../../styles/Theme';

const Artists = styled.section``  

const ArtistsGridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 64px;

    ${SectionTitle} {
        padding-left: 30px;
        max-width: 400px;
        width: 100%; 

        @media ${theme.media.mobile} {
            max-width: 250px;
            padding-left: 0;
        }
    }

    ${LinkButton} {
        margin-right: 30px;
        justify-self: end;
        align-self: center;

        @media ${theme.media.tablet} {
        grid-row: 3/4;
        justify-self: center;
        align-self: center;
        margin-right: 0;
        }
    }

    @media ${theme.media.tablet} {
        grid-template-columns: 1fr;
        gap: 32px;
    } 
`
const ArtistList = styled.div`
    grid-column: 1/-1;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 30px; 
    
    @media ${theme.media.medium} {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 16px;
    }
`

const Artist = styled.article`
    border-radius: 16px;
    position: relative;

    ${FlexWrapper} {
        gap: 12px;
        height: auto; 
        position: absolute;
        left: 24px;
        bottom: 24px;
    }

    &:first-child {
        grid-column: 1/4;
    }

    &:nth-child(2) {
        grid-column: 4/9;
    }

    &:nth-child(3) {
        grid-column: 9/13;
        grid-row: 1/3;
    }

    &:nth-child(4) {
        grid-column: 1/5;
    }

    &:nth-child(5) {
        grid-column: 5/9;
    }

    @media ${theme.media.medium} {
        width: 343px;
        height: 356px;
    }
`

const Image = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;

`
const OwnerWrapper = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: space-between;
    gap: 4px;

    span {
        font-size: 14px;
        line-height: 1.6;
    }
`

const Title = styled.h3`
    font-weight: 700;
    font-size: 16px;
`

export const S = {
    Artists,
    ArtistsGridWrapper,
    ArtistList,
    Artist,
    Image,
    OwnerWrapper,
    Title
}