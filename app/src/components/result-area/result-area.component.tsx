import { useContext, useState, useEffect } from 'react';

import DefinitionItem from '../definition-item/definition-item.component';
import { ReactComponent as NewWindowIcon } from '../../assets/images/icon-new-window.svg';

import { ResultItem, searchContext } from '../../context/searchContext';

import {
  ErrorContainer,
  LoadingText,
  ResultAreaContainer,
  SourceSection,
} from './result-area.styles';

function ValidResult({ results }: { results: ResultItem[] }) {
  return (
    <>
      <ResultAreaContainer>
        {
          results.map((result, index) => (
            <DefinitionItem
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              item={result}
              index={results.length > 1 ? `${index + 1} of ${results.length}` : ''}
            />
          ))
        }
      </ResultAreaContainer>

      {
        results.length > 0
        && (
        <SourceSection>
          <span>Source</span>
          <div>
            <a href={results[0].sourceUrls[0]}>{results[0].sourceUrls[0]}</a>
            <NewWindowIcon />
          </div>
        </SourceSection>
        )
      }
    </>
  );
}

function NotFound() {
  return (
    <ErrorContainer>
      <span>😕</span>
      <h3>No Definitions Found</h3>
      <p>
        Sorry pal, we couldn&apos;t find definitions for the word you were looking for.
        You can try the search again at later time or head to the web instead.
      </p>
    </ErrorContainer>
  );
}

function NoData() {
  return (
    <ErrorContainer>
      <span>😟</span>
      <h3>Data is not availabe</h3>
      <p>
        Uh oh! It looks like the Free Dictionary API is experiencing some issues! Try again later.
      </p>
    </ErrorContainer>
  );
}
function ResultArea() {
  const { results, loading } = useContext(searchContext);
  const [showLoader, setShowLoader] = useState(false);

  // Display loader after 200ms of loading time
  useEffect(() => {
    const loadTimer = setTimeout(() => {
      if (loading) setShowLoader(true);
    }, 200);

    return () => {
      clearTimeout(loadTimer);
      setShowLoader(false);
    };
  }, [loading]);

  if (showLoader) return <LoadingText>Loading...</LoadingText>;

  if (Array.isArray(results)) {
    return (
      <ValidResult results={results} />
    );
  }

  if (results.error === 404) {
    return (
      <NotFound />
    );
  }

  if (results.error === 500) {
    return (
      <NoData />
    );
  }

  return null;
}

export default ResultArea;
