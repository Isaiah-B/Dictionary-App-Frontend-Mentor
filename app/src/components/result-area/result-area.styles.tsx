import styled from 'styled-components';
import { MEDIA_SIZES } from '../../index.styles';

export const ResultAreaContainer = styled.div`
`;

export const SourceSection = styled.div`
  display: flex;
  align-items: center;

  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.lineColor};

  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.7rem;

  @media ${MEDIA_SIZES.mobile} {
    flex-direction: column;
    align-items: flex-start;
    padding-top: 2.4rem;
  }
  
  span {
    color: ${({ theme }) => theme.textSecondary};
    margin-right: 2rem;
  }

  a {
    text-decoration: underline;
    color: ${({ theme }) => theme.textMain};
    margin-right: 1rem;
  }

  div {
    display: flex;
    align-items: center;
  }
`;

export const NotFoundContainer = styled.div`
  text-align: center;
  margin-top: 13.2rem;
  
  span {
    font-size: 6.4rem;
  }

  h3 {
    font-weight: 700;
    color: ${({ theme }) => theme.textMain};

    margin-top: 4.4rem;
    margin-bottom: 2.4rem;
  }

  p {
    color: ${({ theme }) => theme.textSecondary};
  }
`;

export const LoadingText = styled.h1`
  width: 100%;
  text-align: center;
`;
