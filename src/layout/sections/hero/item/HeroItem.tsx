import React from 'react';
import { S } from '../Hero_Styles';

type ItemPropsType = {
    quantity: number
    text: string
    what: string
}

export const Item: React.FC<ItemPropsType> = (props: ItemPropsType) => {
    return (
        <S.HeroItem>
            <p>{props.quantity}
                <b>{props.text}</b>
            </p>
            <span>{props.what}</span>
        </S.HeroItem>
    );
};

