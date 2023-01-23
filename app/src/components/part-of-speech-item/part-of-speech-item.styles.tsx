import styled from 'styled-components';

import { MEDIA_SIZES } from '../../index.styles';

export const PosItemContainer = styled.div`
`;

export const PosItemHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;

  @media ${MEDIA_SIZES.mobile} {
    margin-bottom: 3.2rem;
  }

  h2 {
    flex-shrink: 0;
    margin-right: 2rem;
    font-style: italic;
  }

  hr {
    width: 100%;
    border-bottom: 1px ${({ theme }) => theme.lineColor};
    opacity: 0.25;
  }
`;

export const MeaningSection = styled.div`
  h3 {
    margin-bottom: 2.5rem;

    @media ${MEDIA_SIZES.mobile} {
      margin-bottom: 1.8rem;
    }
  }
`;

export const DefinitionsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  padding-left: 3.5rem;
  
  @media ${MEDIA_SIZES.mobile} {
    padding-left: 1.8rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  li {
    &::marker {
      font-size: 1.6rem;
      color: hsl(274, 82%, 50%);
    }

    p {
      margin-left: 0.8rem;
      color: ${({ theme }) => theme.textMain};
    }
  }
`;

export const DefinitionExample = styled.p`
  margin-left: 1rem;
  color: ${({ theme }) => theme.textSecondary};
`;

// ------------------SYNONYMS/ANTONYMS SECTION-------------------//
export const NymsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  margin-top: 6.4rem;

  @media ${MEDIA_SIZES.mobile} {
    margin-top: 2.4rem;
  }
`;

export const NymsSectionContainer = styled.div`
  display: flex;
  gap: 2.2rem;

  h3 {
    margin-bottom: 0;
  }
`;

export const NymsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;

  list-style: none;
`;

export const NymItem = styled.span`
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.4rem;
  color: hsl(274, 82%, 60%);

  cursor: pointer;

  @media ${MEDIA_SIZES.mobile} {
    font-size: 1.6rem;
    line-height: 1.9rem;
  }

  &:hover {
    text-decoration: underline;
  }
`;
