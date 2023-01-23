import styled from 'styled-components';

import { ReactComponent as SearchSVG } from '../../assets/images/icon-search.svg';
import { MEDIA_SIZES } from '../../index.styles';

export const SearchbarContainer = styled.div`
  position: relative;
`;

export const SearchbarInput = styled.input`
  font-family: inherit;
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.textMain};
  
  width: 100%;
  border: none;
  border-radius: 16px;
  padding: 2rem 6.2rem 2rem 2.4rem;
  background-color: ${({ theme }) => theme.searchbarBackground};
  cursor: pointer;
  caret-color: hsl(274, 82%, 60%);
  
  @media ${MEDIA_SIZES.mobile} {
    font-size: 1.6rem;
    line-height: 1.9rem;
    padding: 1.4rem 6.4rem 1.4rem 2.4rem;
  }

  &:focus {
    outline: 1px solid hsl(274, 82%, 60%);
  }

  .submitted &:invalid {
    outline: 1px solid hsl(0, 100%, 66%);
  }
`;

export const SearchIcon = styled(SearchSVG)`
  position: absolute;
  right: 3%;
  top: 50%;
  transform: translateY(-50%);

  @media ${MEDIA_SIZES.mobile} {
    right: 6%;
  }

  @media ${MEDIA_SIZES.desktop} {
    transform: translateY(-50%) scale(1.4);
  }
`;

export const InvalidMessage = styled.span`
  display: none;

  position: absolute;
  left: 0;
  bottom: -3.4rem;
  
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.4rem;
  color: hsl(0, 100%, 66%);

  @media ${MEDIA_SIZES.mobile} {
    font-size: 1.6rem;
    line-height: 1.9rem;
    bottom: -2.8rem;
  }

  .submitted :invalid ~ & {
    display: block;
  }
`;
