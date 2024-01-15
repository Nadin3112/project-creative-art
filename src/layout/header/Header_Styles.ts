import styled from 'styled-components';
import { LinkButton } from '../../components/LinkButton';
import { theme } from '../../styles/Theme';

const Header = styled.header`
  padding: 28px 0;
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
