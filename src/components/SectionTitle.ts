import styled from "styled-components"
import { theme } from "../styles/Theme"
import { font } from "../styles/Common"

export const SectionTitle = styled.h2`
    ${font({family: "'Spectral', serif", color: theme.colors.primaryFont, weight: 500, Fmax: 48, Fmin: 31 })};
    letter-spacing: 1.2px;

    span {
        color: ${theme.colors.accent};
    }

    @media ${theme.media.tablet} {
        margin: 0 auto;
        width: auto;
        text-align: center;
    }

    @media ${theme.media.mobile} {
        margin: 0 auto;
        max-width: 340px;
    }
`