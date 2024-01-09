import styled from 'styled-components';
import { font } from '../../../styles/Common';
import { theme } from '../../../styles/Theme';
import { Link } from '../../../components/Link';
import { FlexWrapper } from '../../../components/FlexWrapper';

const AmazingWeek = styled.section`

`

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 64px;

    ${Link} {
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
    padding: 20px;

    ${FlexWrapper} {
        height: auto;
        margin-top: 16px;
    }

    ${Link} {
        width: 172px;
    }

    @media ${theme.media.mobile} {
        padding: 16px;
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