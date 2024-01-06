import styled from 'styled-components';
import { Link } from '../../components/Link';
import { theme } from '../../styles/Theme';

const Header = styled.header`
  //position: fixed;
  //top: 0;
  //left: 0;
  //right: 0;
  //z-index: 99999;
  padding: 28px 0;
  min-height: 104px;

  ${Link} {
    @media ${theme.media.medium} {
      display: none;
    }
  }
`

export const S = {
  Header
}
