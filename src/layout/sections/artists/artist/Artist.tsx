import React from 'react';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { S } from '../Artists_Styles';

type ArtistPropsType = {
    title: string
    src: string
    srcSet: string
    srcSetWebp: string
    srcSetAvif: string
    srcAvatar: string
    srcSetAvatar: string
    srcSetAvatarWebp: string
    srcSetAvatarAvif: string
    srcSetMobile: string
    srcSetWebpMobile: string
    srcSetAvifMobile: string
}

export const Artist: React.FC<ArtistPropsType> = (props: ArtistPropsType) => {
    return (
        <S.Artist>
            <picture>
                <source type="image/avif" media="(max-width: 992px)" srcSet = {props.srcSetAvifMobile}/>
                <source type="image/webp" media="(max-width: 992px)" srcSet= {props.srcSetWebpMobile}/>
                <source media="(max-width: 992px)" srcSet={props.srcSetMobile}/>
                <source type="image/avif" srcSet={props.srcSetAvif} />
                <source type="image/webp" srcSet={props.srcSetWebp} />
                <S.Image src={props.src} srcSet={props.srcSet} alt={props.title} />
            </picture>
            <FlexWrapper align={"start"}>
                <picture>
                    <source type="image/avif" srcSet={props.srcSetAvatarAvif} />
                    <source type="image/webp" srcSet={props.srcSetAvatarWebp} />
                    <S.Image src={props.srcAvatar} srcSet={props.srcSetAvatar} alt={props.title} />
                </picture>
                <S.OwnerWrapper>
                    <span>Owner</span>
                    <S.Title>{props.title}</S.Title>
                </S.OwnerWrapper>
            </FlexWrapper>
        </S.Artist>
    );
};



