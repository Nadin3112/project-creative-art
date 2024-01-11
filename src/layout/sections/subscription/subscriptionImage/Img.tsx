import React from 'react';
import { S } from '../Subscription_Styles';

type ImgPropsType = {
    src: string
    srcSet: string
    srcSetWebp: string
    srcSetAvif: string
    alt: string
    height: string
    width: string
}

export const Img:React.FC<ImgPropsType> = (props:ImgPropsType) => {
    return (
        <picture>
            <source type="image/avif" srcSet={props.srcSetAvif} />
            <source type="image/webp" srcSet={props.srcSetWebp} />
            <S.Photo src={props.src} srcSet={props.srcSet} alt={props.alt} height={props.height} width={props.width}/>
        </picture>
    );
};

