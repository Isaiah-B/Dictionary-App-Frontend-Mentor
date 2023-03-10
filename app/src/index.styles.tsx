import { createGlobalStyle } from 'styled-components';

export const MEDIA_SIZES = {
  desktop: '(min-width: 90.1em)',
  tablet: '(max-width: 49em)',
  mobile: '(max-width: 27em)',
};

export const GlobalStyle = createGlobalStyle<{ font: string }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    line-height: 1;
    
    height: 100%;

    @media ${MEDIA_SIZES.desktop} {
      font-size: 75%;
    }
  }

  body {
    font-family: ${(props) => props.font};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    position: relative;
    padding-bottom: 1px;
    min-height: 100%;
    background-color: ${({ theme }) => theme.backgroundMain};
  }

  footer {
    position: absolute;
    bottom: 1px;
    width: 100%;
    text-align: center;
    color: ${({ theme }) => theme.textMain};

    @media ${MEDIA_SIZES.desktop} {
      font-size: 1.4rem;
    }
  }

  h1 {
    font-weight: 700;
    font-size: 6.4rem;
    line-height: 7.7rem;
    color: ${({ theme }) => theme.textMain};

    @media ${MEDIA_SIZES.mobile} {
      font-size: 3.2rem;
      line-height: 3.8rem;
    }
  }

  h2 {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 2.9rem;
    color: ${({ theme }) => theme.textMain};

    @media ${MEDIA_SIZES.mobile} {
      font-size: 1.8rem;
      line-height: 2.1rem;
    }
  }

  h3 {
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.textSecondary};

    @media ${MEDIA_SIZES.mobile} {
      font-size: 1.6rem;
      line-height: 2rem;
    }
  }

  p {
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.4rem;

    @media ${MEDIA_SIZES.mobile} {
      font-size: 1.5rem;
    }
  }
`;
