import styled from 'styled-components';
import { HeaderContainer } from './components/header/header.styles';
import { SearchbarContainer } from './components/searchbar/searchbar.styles';
import { MEDIA_SIZES } from './index.styles';

export const Container = styled.div`
  width: 73.7rem;
  margin: 5.8rem auto 12.4rem;
  height: 100%;
  
  @media ${MEDIA_SIZES.tablet} {
    width: 90%;
  }

  @media ${MEDIA_SIZES.widescreen} {
    width: 87rem;
  }

  ${HeaderContainer} {
    margin-bottom: 5.2rem;

    @media ${MEDIA_SIZES.mobile} {
      margin-bottom: 2.4rem;
    }
  }

  ${SearchbarContainer} {
    margin-bottom: 4.5rem;

    @media ${MEDIA_SIZES.mobile} {
      margin-bottom: 2.4rem;
    }
  }
`;
