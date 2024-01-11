import React from 'react';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { SectionTitle } from '../../../components/SectionTitle';
import { Link } from '../../../components/Link';
import { theme } from '../../../styles/Theme';
import { NFT } from './nft/NFT';
import { Description } from '../../../components/Description';
import nft1 from '../../../assets/images/nft/nft-1@1x.png';
import nft12x from '../../../assets/images/nft/nft-1@2x.png';
import nft1Webp from '../../../assets/images/nft/nft-1@1x.webp';
import nft1Webp2x from '../../../assets/images/nft/nft-1@2x.webp';
import nft1Avif from '../../../assets/images/nft/nft-1@1x.avif';
import nft1Avif2x from '../../../assets/images/nft/nft-1@2x.avif';
import nft2 from '../../../assets/images/nft/nft-2@1x.png';
import nft22x from '../../../assets/images/nft/nft-2@2x.png';
import nft2Webp from '../../../assets/images/nft/nft-2@1x.webp';
import nft2Webp2x from '../../../assets/images/nft/nft-2@2x.webp';
import nft2Avif from '../../../assets/images/nft/nft-2@1x.avif';
import nft2Avif2x from '../../../assets/images/nft/nft-2@2x.avif';
import { S } from './BestNFTs_Styles';

const nftsData = [
    {
        src: nft1,
        srcSet: `${nft12x} 2x`,
        srcSetWebp: `${nft1Webp} 1x, ${nft1Webp2x} 2x`,
        srcSetAvif: `${nft1Avif} 1x, ${nft1Avif2x} 2x`,
        alt: "Best NFT",
        height: "400px"
    },

    {
        src: nft2,
        srcSet: `${nft22x} 2x`,
        srcSetWebp: `${nft2Webp} 1x, ${nft2Webp2x} 2x`,
        srcSetAvif: `${nft2Avif} 1x, ${nft2Avif2x} 2x`,
        alt: "Best NFT",
        height: "475px"
    }
]

export const Best:React.FC = () => {
    return (
        <S.Best>
            <Container>
                <FlexWrapper justify={"space-between"} wrap={"wrap"} align={"center"}>
                    <S.BestTextWrapper>
                        <SectionTitle>Create And Sell Your <span>Best NFTs</span></SectionTitle>
                        <Description>Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!</Description>
                        <FlexWrapper align={"flex-start"}>
                            <Link linkType="primary" color={theme.colors.primaryLink} backgroundColor={theme.colors.accent}>Create Now</Link>
                            <Link linkType="secondary">Learn More</Link>
                        </FlexWrapper>
                    </S.BestTextWrapper>
                    <S.BestPhotoWrapper>
                        {nftsData.map((n, index) => {
                            return <NFT alt={n.alt} srcSetAvif={n.srcSetAvif} src={n.src} srcSet={n.srcSet} srcSetWebp={n.srcSetWebp} height={n.height} key={index} />
                        })}
                    </S.BestPhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Best>
    );
};

