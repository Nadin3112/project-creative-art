import { theme } from "../../../styles/Theme"
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Description } from '../../../components/Description';

const Subscription = styled.section`
    ${FlexWrapper} {
        gap: 36px;
        height: auto;

        @media ${theme.media.desktopMax} {
            justify-content: center;
            flex-direction: column-reverse;
            gap: 48px;
        }
    }
`

const SubscriptionPhotoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 630px;
    width: 100%;
    position: relative;


    @media ${theme.media.tablet} {
        max-width: 375px;

        picture:first-child img {
            width: 225px;
            height: 212px;    
        }

        picture:nth-child(2) img {
            width: 153px;
            height: 190px;
        }
    }

    picture:first-child {
        transition: ${theme.animations.transition};

        &:hover {
            z-index: 999;
        }       
    }

    picture:nth-child(2) {
        position: absolute;
        right: 0;
        bottom: 0;
        z-index: 99;
    }
`

const SubscriptionTextWrapper = styled.div`
    padding: 82px 0;

    @media ${theme.media.desktopMax} {
            padding: 0;
        }


    ${Description} {
        max-width: 516px;
        width: 100%;

        @media ${theme.media.desktopMax} {
            text-align: center;
        }
    }

    ${SectionTitle} {
        max-width: 516px;
        width: 100%;

        @media ${theme.media.desktopMax} {
            text-align: center;
        }

        @media ${theme.media.mobile} {
            max-width: 350px;
        }
    }
`

const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${theme.colors.colorCard};
    border-radius: 8px;

    @media ${theme.media.tablet} {
        flex-direction: column;
        gap: 20px;
        background-color: transparent;
    }
`

const Field = styled.input`
    width: 100%; 
    padding: 16px 24px;
    background: ${theme.colors.colorCard};
    border: none;
    min-height: 60px;
    border-radius: 8px;

    &::placeholder {
        color: ${theme.colors.placeholderColor};
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.6;
    }
`

const Photo = styled.img`
    display: block;
    border-radius: 16px;
    width: 100%;
    object-fit: cover;

`

export const S = {
    Subscription,
    SubscriptionPhotoWrapper,
    SubscriptionTextWrapper,
    Form,
    Field,
    Photo
}