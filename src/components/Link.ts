import styled, {css} from 'styled-components';
import { theme } from '../styles/Theme';

type StyledLinkPropsType = {
    color?: string
    backgroundColor?: string
    linkType: "primary" | "outlined" | "secondary"
}

export const LinkButton = styled.a<StyledLinkPropsType>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 40px;
    font-family: "Inter", "Arial", sans-serif;
    font-size: 16px;
    line-height: 1.2;
    font-weight: 700;
    border: 2px solid ${theme.colors.accent};
    border-radius: 8px;
    cursor: pointer;

    ${props => props.linkType === "primary" && css<StyledLinkPropsType>`
        color: ${props => props.color};
        background-color: ${props => props.backgroundColor};

        &:hover {
            color: ${theme.colors.accent};
            background-color: transparent;
        }
    `}
        
    ${props => props.linkType === "outlined" && css<StyledLinkPropsType>`
        color: ${props => props.color};
        background-color: transparent;

        &:hover {
            color: ${theme.colors.primaryLink};
            background-color: ${theme.colors.accent};
        }
    `}

    ${props => props.linkType === "secondary" && css<StyledLinkPropsType>`
        color: ${props => props.color};
        background-color: transparent;
        border: none;
        border-radius: none;
        padding: 12px 0;

        &:hover {
            color: ${theme.colors.accent};
        }
    `}
`
