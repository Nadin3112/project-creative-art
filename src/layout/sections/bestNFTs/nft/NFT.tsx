import React from 'react';
import { S } from '../BestNFTs_Styles';

type NftPropsType = {
    src: string
    srcSet: string
    srcSetWebp: string
    srcSetAvif: string
    alt: string
    height: string
}

export const NFT:React.FC<NftPropsType> = (props: NftPropsType) => {
    return (
        <picture>
            <source type="image/avif" srcSet={props.srcSetAvif} />
            <source type="image/webp" srcSet={props.srcSetWebp} />
            <S.Photo src={props.src} srcSet={props.srcSet} alt={props.alt} height={props.height}/>
        </picture>
    );
};

