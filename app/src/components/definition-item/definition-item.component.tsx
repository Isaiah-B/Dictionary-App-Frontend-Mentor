import PartOfSpeechItem from '../part-of-speech-item/part-of-speech-item.component';

import { ResultItem } from '../../context/searchContext';

import {
  AudioButton,
  DefinitionHeader,
  DefinitionHeaderLeft,
  DefinitionIndex,
  DefinitionItemContainer,
  DefinitionPhonetic,
  PartsOfSpeechList,
  PlayIcon,
} from './definition-item.styles';

function DefinitionItem({ item, index }: { item: ResultItem, index: string | null }) {
  const {
    word,
    phonetic,
    meanings,
    phonetics,
  } = item;

  const playAudio = () => {
    const audio: HTMLAudioElement = document.getElementById('audio') as HTMLAudioElement;
    if (audio) audio.play();
  };

  return (
    <DefinitionItemContainer>
      <DefinitionHeader>
        <DefinitionHeaderLeft>
          <div>
            <h1>{word}</h1>
            <DefinitionIndex>{index}</DefinitionIndex>
          </div>
          <DefinitionPhonetic>{phonetic}</DefinitionPhonetic>
        </DefinitionHeaderLeft>

        <AudioButton aria-label="listen to word" onClick={playAudio}>
          <PlayIcon />
        </AudioButton>
        {
          phonetics.audio
          && (
            // eslint-disable-next-line jsx-a11y/media-has-caption
            <audio id="audio" src={phonetics.audio} />
          )
        }
      </DefinitionHeader>

      <PartsOfSpeechList>
        {
          meanings.map((meaning) => (
            <PartOfSpeechItem
              key={meaning.partOfSpeech}
              partOfSpeech={meaning.partOfSpeech}
              definitions={meaning.definitions}
              synonyms={meaning.synonyms}
              antonyms={meaning.antonyms}
            />
          ))
        }
      </PartsOfSpeechList>
    </DefinitionItemContainer>
  );
}

export default DefinitionItem;
