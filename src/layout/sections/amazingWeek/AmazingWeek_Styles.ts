import styled from 'styled-components';
import { font } from '../../../styles/Common';
import { theme } from '../../../styles/Theme';
import { LinkButton } from '../../../components/LinkButton';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';

const AmazingWeek = styled.section`
    position: relative;

    &::before {
        position: absolute;
        right: -55px;
        bottom: -43px;
        width: 434px;
        height: 305px;
        content: "";
        background-color: ${theme.colors.filterBg};
        filter: blur(175px);
        background-size: cover;
        z-index: -1;
    }
`

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 70px;

    ${SectionTitle} {
        display: block;
        max-width: 600px;
        width: auto;

        @media ${theme.media.desktopMax} {
            
        }
    }

    ${LinkButton} {
        justify-self: end;
        align-self: end;

        @media ${theme.media.tablet} {
        grid-row: 3/4;
        justify-self: center;
        align-self: center;
        }
    }

    @media ${theme.media.tablet} {
        grid-template-columns: 1fr;
        gap: 32px;
    }
`

const WeekList = styled.ul`
    grid-column: 1/-1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    flex-wrap: wrap;

    @media ${theme.media.tablet} {
        gap: 16px;
    }
`
const Item = styled.li`
    border-radius: 28px;
    border-top: 1px solid ${theme.colors.accent};
    background: ${theme.colors.colorCard};
    padding: 20px 20px 4px;

    ${FlexWrapper} {
        height: auto;
        margin-bottom: 16px;

        ${FlexWrapper} {
            margin-bottom: 0;
        }
    }

    ${LinkButton} {
        width: 176px;
        align-self: flex-start;
    }

    @media ${theme.media.mobile} {
        padding: 16px 16px 0;
    }
`

const Image = styled.img`
    display: block;
    border-radius: 16px;
    margin-bottom: 24px;
    min-width: 370px;
    width: 100%;
    height: 340px;
    object-fit: cover;

    @media ${theme.media.mobile} {
        min-width: 311px;
    }
`

const Title = styled.h3`
    ${font({ weight: 700, Fmax: 24, Fmin: 20 })};
`

const Bid = styled.p`
    display: flex;
    align-items: center;
    font-weight: 700;
`

const Text = styled.span`
    font-size: 14px;
    line-height: 1.6;
`

const Clock = styled.p`
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: 700;
`

export const S = {
    AmazingWeek,
    GridWrapper,
    WeekList,
    Item,
    Image,
    Title,
    Bid,
    Text,
    Clock

}