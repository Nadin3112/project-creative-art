import React from 'react';
import { theme } from '../../../styles/Theme';
import { Container } from '../../../components/Container';
import { SectionTitle } from '../../../components/SectionTitle';
import { Link } from '../../../components/Link';
import { Artist } from './artist/Artist';
import { S } from './Artists_Styles';

import artist1 from '../../../assets/images/popularArtists/artist-1@1x.png';
import artist12x from '../../../assets/images/popularArtists/artist-1@2x.png';
import artist1Webp from '../../../assets/images/popularArtists/artist-1@1x.webp';
import artist1Webp2x from '../../../assets/images/popularArtists/artist-1@2x.webp';
import artist1Avif from '../../../assets/images/popularArtists/artist-1@1x.avif';
import artist1Avif2x from '../../../assets/images/popularArtists/artist-1@2x.avif';

import artist2 from '../../../assets/images/popularArtists/artist-2@1x.png';
import artist22x from '../../../assets/images/popularArtists/artist-2@2x.png';
import artist2Webp from '../../../assets/images/popularArtists/artist-2@1x.webp';
import artist2Webp2x from '../../../assets/images/popularArtists/artist-2@2x.webp';
import artist2Avif from '../../../assets/images/popularArtists/artist-2@1x.avif';
import artist2Avif2x from '../../../assets/images/popularArtists/artist-2@2x.avif';

import artist3 from '../../../assets/images/popularArtists/artist-3@1x.png';
import artist32x from '../../../assets/images/popularArtists/artist-3@2x.png';
import artist3Webp from '../../../assets/images/popularArtists/artist-3@1x.webp';
import artist3Webp2x from '../../../assets/images/popularArtists/artist-3@2x.webp';
import artist3Avif from '../../../assets/images/popularArtists/artist-3@1x.avif';
import artist3Avif2x from '../../../assets/images/popularArtists/artist-3@2x.avif';

import artist4 from '../../../assets/images/popularArtists/artist-4@1x.png';
import artist42x from '../../../assets/images/popularArtists/artist-4@2x.png';
import artist4Webp from '../../../assets/images/popularArtists/artist-4@1x.webp';
import artist4Webp2x from '../../../assets/images/popularArtists/artist-4@2x.webp';
import artist4Avif from '../../../assets/images/popularArtists/artist-4@1x.avif';
import artist4Avif2x from '../../../assets/images/popularArtists/artist-4@2x.avif';

import artist5 from '../../../assets/images/popularArtists/artist-5@1x.png';
import artist52x from '../../../assets/images/popularArtists/artist-5@2x.png';
import artist5Webp from '../../../assets/images/popularArtists/artist-5@1x.webp';
import artist5Webp2x from '../../../assets/images/popularArtists/artist-5@2x.webp';
import artist5Avif from '../../../assets/images/popularArtists/artist-5@1x.avif';
import artist5Avif2x from '../../../assets/images/popularArtists/artist-5@2x.avif';

import artist1Mobile from '../../../assets/images/popularArtists/artist-1-mobile@1x.png';
import artist12xMobile from '../../../assets/images/popularArtists/artist-1-mobile@2x.png';
import artist1WebpMobile from '../../../assets/images/popularArtists/artist-1-mobile@1x.webp';
import artist1Webp2xMobile from '../../../assets/images/popularArtists/artist-1-mobile@2x.webp';
import artist1AvifMobile from '../../../assets/images/popularArtists/artist-1-mobile@1x.avif';
import artist1Avif2xMobile from '../../../assets/images/popularArtists/artist-1-mobile@2x.avif';

import artist2Mobile from '../../../assets/images/popularArtists/artist-2-mobile@1x.png';
import artist22xMobile from '../../../assets/images/popularArtists/artist-2-mobile@2x.png';
import artist2WebpMobile from '../../../assets/images/popularArtists/artist-2-mobile@1x.webp';
import artist2Webp2xMobile from '../../../assets/images/popularArtists/artist-2-mobile@2x.webp';
import artist2AvifMobile from '../../../assets/images/popularArtists/artist-2-mobile@1x.avif';
import artist2Avif2xMobile from '../../../assets/images/popularArtists/artist-2-mobile@2x.avif';

import artist3Mobile from '../../../assets/images/popularArtists/artist-3-mobile@1x.png';
import artist32xMobile from '../../../assets/images/popularArtists/artist-3-mobile@2x.png';
import artist3WebpMobile from '../../../assets/images/popularArtists/artist-3-mobile@1x.webp';
import artist3Webp2xMobile from '../../../assets/images/popularArtists/artist-3-mobile@2x.webp';
import artist3AvifMobile from '../../../assets/images/popularArtists/artist-3-mobile@1x.avif';
import artist3Avif2xMobile from '../../../assets/images/popularArtists/artist-3-mobile@2x.avif';

import artist4Mobile from '../../../assets/images/popularArtists/artist-4-mobile@1x.png';
import artist42xMobile from '../../../assets/images/popularArtists/artist-4-mobile@2x.png';
import artist4WebpMobile from '../../../assets/images/popularArtists/artist-4-mobile@1x.webp';
import artist4Webp2xMobile from '../../../assets/images/popularArtists/artist-4-mobile@2x.webp';
import artist4AvifMobile from '../../../assets/images/popularArtists/artist-4-mobile@1x.avif';
import artist4Avif2xMobile from '../../../assets/images/popularArtists/artist-4-mobile@2x.avif';

import artist5Mobile from '../../../assets/images/popularArtists/artist-5-mobile@1x.png';
import artist52xMobile from '../../../assets/images/popularArtists/artist-5-mobile@2x.png';
import artist5WebpMobile from '../../../assets/images/popularArtists/artist-5-mobile@1x.webp';
import artist5Webp2xMobile from '../../../assets/images/popularArtists/artist-5-mobile@2x.webp';
import artist5AvifMobile from '../../../assets/images/popularArtists/artist-5-mobile@1x.avif';
import artist5Avif2xMobile from '../../../assets/images/popularArtists/artist-5-mobile@2x.avif';

import owner1 from '../../../assets/images/owner/owner-1@1x.png';
import owner12x from '../../../assets/images/owner/owner-1@2x.png';
import owner1Webp from '../../../assets/images/owner/owner-1@1x.webp';
import owner1Webp2x from '../../../assets/images/owner/owner-1@2x.webp';
import owner1Avif from '../../../assets/images/owner/owner-1@1x.avif';
import owner1Avif2x from '../../../assets/images/owner/owner-1@2x.avif';

import owner2 from '../../../assets/images/owner/owner-2@1x.png';
import owner22x from '../../../assets/images/owner/owner-2@2x.png';
import owner2Webp from '../../../assets/images/owner/owner-2@1x.webp';
import owner2Webp2x from '../../../assets/images/owner/owner-2@2x.webp';
import owner2Avif from '../../../assets/images/owner/owner-2@1x.avif';
import owner2Avif2x from '../../../assets/images/owner/owner-2@2x.avif';

import owner3 from '../../../assets/images/owner/owner-3@1x.png';
import owner32x from '../../../assets/images/owner/owner-3@2x.png';
import owner3Webp from '../../../assets/images/owner/owner-3@1x.webp';
import owner3Webp2x from '../../../assets/images/owner/owner-3@2x.webp';
import owner3Avif from '../../../assets/images/owner/owner-3@1x.avif';
import owner3Avif2x from '../../../assets/images/owner/owner-3@2x.avif';

import owner4 from '../../../assets/images/owner/owner-4@1x.png';
import owner42x from '../../../assets/images/owner/owner-4@2x.png';
import owner4Webp from '../../../assets/images/owner/owner-4@1x.webp';
import owner4Webp2x from '../../../assets/images/owner/owner-4@2x.webp';
import owner4Avif from '../../../assets/images/owner/owner-4@1x.avif';
import owner4Avif2x from '../../../assets/images/owner/owner-4@2x.avif';

import owner5 from '../../../assets/images/owner/owner-5@1x.png';
import owner52x from '../../../assets/images/owner/owner-5@2x.png';
import owner5Webp from '../../../assets/images/owner/owner-5@1x.webp';
import owner5Webp2x from '../../../assets/images/owner/owner-5@2x.webp';
import owner5Avif from '../../../assets/images/owner/owner-5@1x.avif';
import owner5Avif2x from '../../../assets/images/owner/owner-5@2x.avif';


const artistsData = [
    {
        title: "Osvaldo Percy",
        src: artist1,
        srcSet: `${artist12x} 2x`,
        srcSetWebp: `${artist1Webp} 1x, ${artist1Webp2x} 2x`,
        srcSetAvif: `${artist1Avif} 1x, ${artist1Avif2x} 2x`,
        srcSetMobile: `${artist1Mobile} 1x, ${artist12xMobile} 2x`,
        srcSetWebpMobile: `${artist1WebpMobile} 1x, ${artist1Webp2xMobile} 2x`,
        srcSetAvifMobile: `${artist1AvifMobile} 1x, ${artist1Avif2xMobile} 2x`,
        srcAvatar: owner1,
        srcSetAvatar: `${owner12x} 2x`,
        srcSetAvatarWebp: `${owner1Webp} 1x, ${owner1Webp2x} 2x`,
        srcSetAvatarAvif: `${owner1Avif} 1x, ${owner1Avif2x} 2x`
    },

    {
        title: "Ranson Sqiure",
        src: artist2,
        srcSet: `${artist22x} 2x`,
        srcSetWebp: `${artist2Webp} 1x, ${artist2Webp2x} 2x`,
        srcSetAvif: `${artist2Avif} 1x, ${artist2Avif2x} 2x`,
        srcSetMobile: `${artist2Mobile} 1x, ${artist22xMobile} 2x`,
        srcSetWebpMobile: `${artist2WebpMobile} 1x, ${artist2Webp2xMobile} 2x`,
        srcSetAvifMobile: `${artist2AvifMobile} 1x, ${artist2Avif2xMobile} 2x`,
        srcAvatar: owner2,
        srcSetAvatar: `${owner22x} 2x`,
        srcSetAvatarWebp: `${owner2Webp} 1x, ${owner2Webp2x} 2x`,
        srcSetAvatarAvif: `${owner2Avif} 1x, ${owner2Avif2x} 2x`
    },

    {
        title: "Cristio leo",
        src: artist3,
        srcSet: `${artist32x} 2x`,
        srcSetWebp: `${artist3Webp} 1x, ${artist3Webp2x} 2x`,
        srcSetAvif: `${artist3Avif} 1x, ${artist3Avif2x} 2x`,
        srcSetMobile: `${artist3Mobile} 1x, ${artist32xMobile} 2x`,
        srcSetWebpMobile: `${artist3WebpMobile} 1x, ${artist3Webp2xMobile} 2x`,
        srcSetAvifMobile: `${artist3AvifMobile} 1x, ${artist3Avif2xMobile} 2x`,
        srcAvatar: owner3,
        srcSetAvatar: `${owner32x} 2x`,
        srcSetAvatarWebp: `${owner3Webp} 1x, ${owner3Webp2x} 2x`,
        srcSetAvatarAvif: `${owner3Avif} 1x, ${owner3Avif2x} 2x`
    },

    {
        title: "Sebastian waltan",
        src: artist4,
        srcSet: `${artist42x} 2x`,
        srcSetWebp: `${artist4Webp} 1x, ${artist4Webp2x} 2x`,
        srcSetAvif: `${artist4Avif} 1x, ${artist4Avif2x} 2x`,
        srcSetMobile: `${artist4Mobile} 1x, ${artist42xMobile} 2x`,
        srcSetWebpMobile: `${artist4WebpMobile} 1x, ${artist4Webp2xMobile} 2x`,
        srcSetAvifMobile: `${artist4AvifMobile} 1x, ${artist4Avif2xMobile} 2x`,
        srcAvatar: owner4,
        srcSetAvatar: `${owner42x} 2x`,
        srcSetAvatarWebp: `${owner4Webp} 1x, ${owner4Webp2x} 2x`,
        srcSetAvatarAvif: `${owner4Avif} 1x, ${owner4Avif2x} 2x`
    },

    {
        title: "Abraham Zack",
        src: artist5,
        srcSet: `${artist52x} 2x`,
        srcSetWebp: `${artist5Webp} 1x, ${artist5Webp2x} 2x`,
        srcSetAvif: `${artist5Avif} 1x, ${artist5Avif2x} 2x`,
        srcSetMobile: `${artist5Mobile} 1x, ${artist52xMobile} 2x`,
        srcSetWebpMobile: `${artist5WebpMobile} 1x, ${artist5Webp2xMobile} 2x`,
        srcSetAvifMobile: `${artist5AvifMobile} 1x, ${artist5Avif2xMobile} 2x`,
        srcAvatar: owner5,
        srcSetAvatar: `${owner52x} 2x`,
        srcSetAvatarWebp: `${owner5Webp} 1x, ${owner5Webp2x} 2x`,
        srcSetAvatarAvif: `${owner5Avif} 1x, ${owner5Avif2x} 2x`
    },
]

export const Artists:React.FC = () => {
    return (
        <S.Artists>
        <Container>
                <S.ArtistsGridWrapper>
                    <SectionTitle>Popular <span>Artists</span> On This Week</SectionTitle>
                    <Link linkType="primary" color={theme.colors.primaryLink} backgroundColor={theme.colors.accent} tabIndex={0}>See All</Link>
                    <S.ArtistList>
                    {artistsData.map((a, index) => {
                            return <Artist 
                            title={a.title} 
                            srcSetAvif={a.srcSetAvif} 
                            src={a.src} 
                            srcSet={a.srcSet} 
                            srcSetWebp={a.srcSetWebp} 
                            srcAvatar={a.srcAvatar}
                            srcSetAvatar={a.srcSetAvatar}
                            srcSetAvatarWebp={a.srcSetAvatarWebp}
                            srcSetAvatarAvif={a.srcSetAvatarAvif}
                            srcSetMobile={a.srcSetMobile} 
                            srcSetWebpMobile={a.srcSetWebpMobile} 
                            srcSetAvifMobile={a.srcSetAvifMobile} 
                            key={index} />
                        })}
                    </S.ArtistList>
                </S.ArtistsGridWrapper>
            </Container>
            </S.Artists>
    );
};

