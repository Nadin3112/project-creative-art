import React from 'react';
import { Link } from '../../../../components/Link';
import { theme } from '../../../../styles/Theme';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { S } from '../Hero_Styles';

export const Bid: React.FC = () => {
    return (
        <S.BidWrapper>
            <FlexWrapper justify={"space-between"}>
                <FlexWrapper direction={"column"}>
                    <S.TextBid>Ends in</S.TextBid>
                    <S.TimeBid>05:45:47</S.TimeBid>
                </FlexWrapper>
                <FlexWrapper direction={"column"}>
                    <S.TextBid>Current bid</S.TextBid>
                    <S.TimeBid>0.24ETH</S.TimeBid>
                </FlexWrapper>
            </FlexWrapper>
            <Link linkType="outlined" color={theme.colors.accent}>Place A Bid</Link>
        </S.BidWrapper>
    );
};

