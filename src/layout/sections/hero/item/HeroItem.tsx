import React from 'react';
import styled from 'styled-components';
import { font } from '../../../../styles/Common';
import { theme } from '../../../../styles/Theme';

type ItemPropsType = {
    quantity: number
    text: string
    what: string
}

export const Item: React.FC<ItemPropsType> = (props: ItemPropsType) => {
    return (
        <HeroItem>
            <p>{props.quantity}
                <b>{props.text}</b>
            </p>
            <span>{props.what}</span>
        </HeroItem>
    );
};

const HeroItem = styled.li`
    display: flex;
    flex-direction: column;
    
    &:not(:last-child) {
        padding-right: 28px;
        border-right: 1px solid ${theme.colors.accent};

    }

    p {
        ${font({family: "'Canela', serif", lineHeight: 0.8, color: theme.colors.accent, weight: 500, Fmax: 48, Fmin: 31 })};
        margin-bottom: 22px;
        display: inline;
    }

    b {
        color: ${theme.colors.primaryFont};
    }

    span {
        line-height: 1.6;
    }
`