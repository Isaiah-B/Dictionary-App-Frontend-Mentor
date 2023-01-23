import { useContext } from 'react';

import { searchContext } from '../../context/searchContext';

import {
  DefinitionsList,
  DefinitionExample,
  MeaningSection,
  NymsContainer,
  NymItem,
  NymsList,
  NymsSectionContainer,
  PosItemContainer,
  PosItemHeader,
} from './part-of-speech-item.styles';

function NymsSection({ title, items }: { title: string, items: string[] }) {
  const { storeResult } = useContext(searchContext);

  const changeWord = async (word: string) => {
    storeResult(word);
    window.scrollTo(0, 0);
  };

  if (items.length > 0) {
    return (
      <NymsSectionContainer>
        <h3>{title}</h3>
        <NymsList>
          {
            items.map((item) => (
              <li key={item}>
                <NymItem onClick={() => changeWord(item)}>{item}</NymItem>
              </li>
            ))
          }
        </NymsList>
      </NymsSectionContainer>
    );
  }

  return null;
}

interface PartOfSpeechItemProps {
  partOfSpeech: string,
  definitions: {
    definition: string,
    example?: string,
  }[],
  synonyms: string[],
  antonyms: string[],
}

function PartOfSpeechItem({
  partOfSpeech, definitions, synonyms, antonyms,
}: PartOfSpeechItemProps) {
  return (
    <PosItemContainer>
      <PosItemHeader>
        <h2>{partOfSpeech}</h2>
        <hr />
      </PosItemHeader>

      <MeaningSection>
        <h3>Meaning</h3>
        <DefinitionsList>
          {
            definitions.map((definition) => (
              <div key={definition.definition}>
                <li>
                  <p>{definition.definition}</p>
                </li>
                {
                  definition.example
                  && <DefinitionExample>{`“${definition.example}”`}</DefinitionExample>
                }
              </div>
            ))
          }
        </DefinitionsList>

        {
          (synonyms.length > 0 || antonyms.length > 0)
          && (
            <NymsContainer>
              <NymsSection
                title="Synonyms"
                items={synonyms}
              />

              <NymsSection
                title="Antonyms"
                items={antonyms}
              />
            </NymsContainer>
          )
        }

      </MeaningSection>
    </PosItemContainer>
  );
}

export default PartOfSpeechItem;
