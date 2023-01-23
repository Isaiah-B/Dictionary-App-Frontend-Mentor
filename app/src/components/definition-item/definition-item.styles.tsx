import styled from 'styled-components';

import { ReactComponent as PlaySVG } from '../../assets/images/icon-play.svg';
import { MEDIA_SIZES } from '../../index.styles';

export const DefinitionItemContainer = styled.div`
  margin-bottom: 4rem;
  
  @media ${MEDIA_SIZES.mobile} {
   margin-bottom: 3.2rem;
  }
`;

export const DefinitionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 4rem;

  @media ${MEDIA_SIZES.mobile} {
    margin-bottom: 2.8rem;
  }
`;

export const DefinitionHeaderLeft = styled.div`
  div {
    margin-bottom: 0.8rem;
  }
  
  h1 {
    display: inline;
    margin-right: 1.4rem;

    @media ${MEDIA_SIZES.mobile} {
      margin-right: 1rem;
    }
  }
`;

export const DefinitionIndex = styled.span`
  font-weight: 400;
  font-size: 1.8rem;

  @media ${MEDIA_SIZES.mobile} {
    font-size: 1.2rem;
  }
`;

export const DefinitionPhonetic = styled.span`
  font-weight: 400;
  font-size: 2.4rem;
  line-height: 2.9rem;
  color: hsl(274, 82%, 60%);

  @media ${MEDIA_SIZES.mobile} {
    font-size: 1.8rem;
    line-height: 2.4rem;
  }
`;

export const AudioButton = styled.button`
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 50%;
  background: none;
  border: none;
  cursor: pointer;

  @media ${MEDIA_SIZES.mobile} {
    transform: scale(0.64);
  }

  @media ${MEDIA_SIZES.desktop} {
    transform: scale(1.3);
  }
`;

export const PlayIcon = styled(PlaySVG)`
  &:hover {
    g {
      fill: #FFFFFF;
    }

    circle {
      fill: #A445ED;
      opacity: 1;
    }
  }
`;

export const PartsOfSpeechList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;
