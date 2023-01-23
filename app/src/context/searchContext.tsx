import { createContext, useState, useMemo } from 'react';

import searchWord from '../utils/searchWord';

interface ResultMeanings {
  antonyms: string[],
  synonyms: string[],
  definitions: {
    definition: string,
    example?: string,
  }[],
  partOfSpeech: string,
}

interface ResultPhonetics {
  text: string,
  audio: string,
}

export interface ResultItem {
  word: string,
  phonetic: string,
  meanings: ResultMeanings[],
  phonetics: ResultPhonetics,
  sourceUrls: string[],
}

interface ResultError {
  error: number,
}

const defaultValues = {
  results: [] as ResultItem[] | ResultError,
  loading: false,
  storeResult: (word: string) => {},
};

export const searchContext = createContext(defaultValues);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [results, setResults] = useState(defaultValues.results);
  const [loading, setLoading] = useState(defaultValues.loading);

  // Return array of definitions and examples, removing the synonym and antonym fields
  const parseDefinitions = (definitionList: any[]) => definitionList.map((definitionItem) => (
    {
      definition: definitionItem.definition,
      example: definitionItem.example,
    }
  ));

  // Replace default 'definitions' value with parsed definitions
  const transformedMeanings = (meaningsList: any[]) => meaningsList.map((meaningItem) => (
    {
      ...meaningItem,
      definitions: parseDefinitions(meaningItem.definitions),
    }
  ));

  // Return single object containing an audio source
  // Prioritize US audio over others
  const transformedPhonetics = (phoneticsList: any[]) => {
    const usAudio = phoneticsList.find(
      (phoneticItem) => phoneticItem.audio.endsWith('us.mp3'),
    );

    if (!usAudio) {
      const otherAudio = phoneticsList.find(
        (phoneticItem) => phoneticItem.audio.length > 0,
      );

      if (!otherAudio) {
        return { text: '', audio: '' };
      }

      return otherAudio;
    }

    return usAudio;
  };

  // Create new result from API data to match the structure of the ResultItem type
  const transformResults = (apiData: any) => {
    const newItem: ResultItem = {
      word: apiData.word,
      phonetic: apiData.phonetic,
      meanings: transformedMeanings(apiData.meanings),
      phonetics: transformedPhonetics(apiData.phonetics),
      sourceUrls: apiData.sourceUrls,
    };

    return newItem;
  };

  // Store array of transformed results or error in 'results' state
  const storeResult = async (word: string) => {
    setLoading(true);

    // API call
    const apiResult = await searchWord(word);

    // Reset results to prevent incorrect information from displaying
    setResults([]);

    // Set results as a valid array of results, an empty array, or an error object
    if (Array.isArray(apiResult)) {
      const transformedResults: ResultItem[] = apiResult.map((result) => transformResults(result));
      setResults(transformedResults);
    } else if (apiResult.error) {
      setResults(apiResult);
    }

    setLoading(false);
  };

  const value = useMemo(() => (
    {
      results,
      loading,
      storeResult,
    }
  ), [results, loading]);

  return <searchContext.Provider value={value}>{children}</searchContext.Provider>;
}
