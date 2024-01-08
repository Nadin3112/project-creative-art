import React from 'react';
import { Link } from '../../../../components/Link';
import styled from 'styled-components';
import { theme } from '../../../../styles/Theme';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { font } from '../../../../assets/images/hero/Common';

export const Bid: React.FC = () => {
    return (
        <BidWrapper>
            <FlexWrapper justify={"space-between"}>
                <FlexWrapper direction={"column"}>
                    <TextBid>Ends in</TextBid>
                    <TimeBid>05:45:47</TimeBid>
                </FlexWrapper>
                <FlexWrapper direction={"column"}>
                    <TextBid>Current bid</TextBid>
                    <TimeBid>0.24ETH</TimeBid>
                </FlexWrapper>
            </FlexWrapper>
            <Link linkType="outlined" color={theme.colors.accent}>Place A Bid</Link>
        </BidWrapper>
    );
};

const BidWrapper = styled.div`
    position: absolute;
    right: 0;
    bottom: -24px;
    min-width: 304px;
    padding: 20px;
    border-radius: 16px;
    border-top: 1px solid ${theme.colors.accent};
    background:  ${theme.colors.colorCard};
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

    ${Link} {
        margin-top: 24px;

        @media ${theme.media.tablet} {
            margin-top: 16px;
        }
    }
`
const TextBid = styled.span`
    ${font({lineHeight: 1.6, color: theme.colors.accent, Fmax: 16, Fmin: 14 })} 
`

const TimeBid = styled.span`
    font-weight: 700;
`