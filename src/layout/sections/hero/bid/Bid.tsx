import React from 'react';
import { LinkButton } from '../../../../components/Link';
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
            <LinkButton linkType="outlined" color={theme.colors.accent} tabIndex={0} href={"#"}>Place A Bid</LinkButton>
        </S.BidWrapper>
    );
};

