import styled from 'styled-components';
import { theme } from '../../styles/Theme';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Description } from '../../components/Description';


const Footer = styled.footer`
    padding: 94px 0;

    @media ${theme.media.tablet} {
        padding: 40px 0;
    }

    ${FlexWrapper} {
        padding: 0 18px 48px;
        gap: 48px;
        position: relative;

        &::before {
            position: absolute;
            bottom: 0;
            right: 15px;
            left: 15px;
            border-bottom: 1px solid #838382;
            content: "";

            @media ${theme.media.tablet} {
                right: 0;
                left: 0;
            }
        }
        
        @media ${theme.media.tablet} {
            flex-direction: column;
            padding: 0 0 48px;
        }
    }
`

const FooterTextWrapper = styled.div`
    max-width: 272px;

    ${Description} {
        margin: 28px 0 24px;
        text-align: left;
    }
`

const SocialList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`

const SocialItem = styled.li`
    width: 25px;
    height: 24px;
`

const SocialLink = styled.a`
    width: 25px;
    height: 24px;
    color: ${theme.colors.activeFont};
    transition: 0.5s;

    &:hover {
        color: ${theme.colors.accent};
    }
`
const Copyright = styled.small`
    padding-top: 48px;
    display: flex;
    justify-content: space-between;
    gap: 16px;

    @media ${theme.media.tablet} {
        flex-direction: column;
        gap: 16px;
    }

    div {
        display: flex;
        gap: 48px;

        @media ${theme.media.tablet} {
        flex-direction: column;
        gap: 16px;
    }
    }

    span {
        font-size: 16px;
        line-height: 1.6;
    }
`

const Lists = styled.nav`
    display: flex;
    justify-content: space-between;
    gap: 102px;
    flex-wrap: wrap;

    @media ${theme.media.tablet} {
    justify-content: center;
    gap: 40px;
    }

    @media ${theme.media.mobile} {
    display: block;
    }
`

const NavTitle = styled.h3`
    font-size: 20px;
    font-weight: 700;
    margin: 0;
    margin-bottom: 24px;
`

const List = styled.div`
    @media ${theme.media.mobile} {
        &:not(:last-child) {
            margin-bottom: 32px;
        }
    }
`
const NavItem = styled.li`

    &:not(:last-child) {
        margin-bottom: 8px;
    }
`

const NavLink = styled.a`
    font-size: 16px;
    line-height: 1.6;
    text-decoration: none;
    color: ${theme.colors.primaryFont};
    transition: 0.5s;

    &:hover {
        color: ${theme.colors.accent};
    }
`

export const S = {
    Footer,
    FooterTextWrapper,
    SocialList,
    SocialItem,
    SocialLink,
    Copyright,
    Lists,
    NavTitle,
    List,
    NavItem,
    NavLink
}