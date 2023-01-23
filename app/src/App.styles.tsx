import styled from 'styled-components';

import { SearchbarContainer } from './components/searchbar/searchbar.styles';
import { MEDIA_SIZES } from './index.styles';

export const Container = styled.div`
  width: 73.7rem;
  margin: 0 auto 7.4rem;
  height: 100%;
  
  @media ${MEDIA_SIZES.tablet} {
    width: 90%;
  }

  @media ${MEDIA_SIZES.desktop} {
    width: 87rem;
  }

  ${SearchbarContainer} {
    margin-bottom: 4.5rem;

    @media ${MEDIA_SIZES.mobile} {
      margin-bottom: 2.4rem;
    }
  }
`;
