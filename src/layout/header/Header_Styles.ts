import styled from 'styled-components';
import { LinkButton } from '../../components/Link';
import { theme } from '../../styles/Theme';

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  padding: 28px;
  min-height: 104px;

  ${LinkButton} {
    @media ${theme.media.medium} {
      display: none;
    }
  }
`

export const S = {
  Header
}
