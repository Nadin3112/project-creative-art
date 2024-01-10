import styled from 'styled-components';
import { theme } from '../../../styles/Theme';
import { Description } from '../../../components/Description';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';



const Best = styled.section`

    ${FlexWrapper} {
        gap: 36px;
        height: auto;

        @media ${theme.media.tablet} {
            justify-content: center;
        }
    }
`

const BestTextWrapper = styled.div`
    padding: 140px 0;

    @media ${theme.media.tablet} {
        padding: 0;
    }

    ${Description} {
        max-width: 430px;
        width: 100%;
    }

    ${SectionTitle} {
        max-width: 420px;
        width: 100%; 
    }
`

const BestPhotoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 740px;
    width: 100%;
    height: 560px;
    position: relative;

    @media ${theme.media.tablet} {
        height: 260px;
        max-width: 375px;
    }
    

    picture:nth-child(2) {
        position: absolute;
        right: 0;
        top: 0;
        transition: ${theme.animations.transition};

        &:hover {
            z-index: 999;
        }
    }

    picture:first-child {
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 99;
    }

`

const Photo = styled.img`
    display: block;
    border-radius: 24px;
    max-width: 410px;
    width: 100%;
    object-fit: cover;

    @media ${theme.media.tablet} {
        max-width: 190px;
    }
    
`

export const S = {
    Best,
    BestTextWrapper,
    BestPhotoWrapper,
    Photo
}