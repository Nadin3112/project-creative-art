import React from 'react';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { theme } from '../../../../styles/Theme';
import { LinkButton } from '../../../../components/Link';
import { Icon } from '../../../../components/icon/Icon';
import { S } from '../AmazingWeek_Styles';


type WeekItemPropsType = {
    title: string
    src: string
    srcSet: string
    srcSetWebp: string
    srcSetAvif: string
    bid: string
    clock: string
}

export const WeekItem: React.FC<WeekItemPropsType> = (props: WeekItemPropsType) => {
    return (
        <S.Item>
            <picture>
                <source type="image/avif" srcSet={props.srcSetAvif} />
                <source type="image/webp" srcSet={props.srcSetWebp} />
                <S.Image src={props.src} srcSet={props.srcSet} alt={props.title} />
            </picture>
            <FlexWrapper justify={"space-between"} align={"start"}>
                <S.Title>{props.title}</S.Title>
                <S.Bid>
                    <Icon iconId={"ethereum"}  />
                    {props.bid}
                </S.Bid>
            </FlexWrapper>
            <FlexWrapper justify={"space-between"} align={"start"}>
                <FlexWrapper direction={"column"} align={"start"}>
                    <S.Text>Ending In</S.Text>
                    <S.Clock>
                        <Icon iconId={"clock"} />
                        {props.clock}
                    </S.Clock>
                </FlexWrapper>
                <LinkButton linkType="outlined" color={theme.colors.accent} tabIndex={0} href={"#"}>Place A Bid</LinkButton>
            </FlexWrapper>
        </S.Item>
    );
};

