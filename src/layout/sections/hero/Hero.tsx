import React from 'react';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Description } from '../../../components/Description';
import { Link } from '../../../components/Link';
import { theme } from '../../../styles/Theme';
import { Item } from './item/HeroItem';
import photo from '../../../assets/images/hero/hero@1x.png';
import photo2x from '../../../assets/images/hero/hero@2x.png';
import photoWebp from '../../../assets/images/hero/hero@1x.webp';
import photoWebp2x from '../../../assets/images/hero/hero@2x.webp';
import photoAvif from '../../../assets/images/hero/hero@1x.avif';
import photoAvif2x from '../../../assets/images/hero/hero@2x.avif';
import { Bid } from './bid/Bid';
import { S } from './Hero_Styles';

const itemsData = [
    { quantity: 8.9, text: "K", what: "Art work" },
    { quantity: 65, text: "K", what: "Artist" },
    { quantity: 87, text: "K", what: "Collection" }
]

export const Hero: React.FC = () => {
    return (
        <S.Hero>
            <Container>
                <S.GridWrapper>
                    <S.HeroWrapperText>
                        <S.HeroTitle>Discover and Collect The Best NFTs <span>Digital Art.</span></S.HeroTitle>
                        <Description>Get started with the easiest and most secure platform to buy and trade digital ART and NFT’s. Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!</Description>
                        <FlexWrapper align={"flex-start"}>
                            <Link linkType="primary" color={theme.colors.primaryLink} backgroundColor={theme.colors.accent} tabIndex={0} href={"#"}>Explore Now</Link>
                            <Link linkType="secondary" color={theme.colors.primaryFont} tabIndex={0} href={"#"}>Learn More</Link>
                        </FlexWrapper>
                    </S.HeroWrapperText>
                    <S.PhotoWrapper>
                        <picture>
                            <source type="image/avif" srcSet={`${photoAvif} 1x, ${photoAvif2x} 2x`} />
                            <source type="image/webp" srcSet={`${photoWebp} 1x, ${photoWebp2x} 2x`} />
                            <S.Photo src={photo} srcSet={`${photo2x} 2x`} alt="Main picture" />
                        </picture>
                        <Bid />
                    </S.PhotoWrapper>
                    <S.HeroList>
                        {itemsData.map((i, index) => {
                            return <Item quantity={i.quantity} text={i.text} what={i.what} key={index} />
                        })}
                    </S.HeroList>
                </S.GridWrapper>
            </Container>
        </S.Hero>
    );
};



