import { useState, useContext } from 'react';

import { searchContext } from '../../context/searchContext';

import {
  InvalidMessage,
  SearchbarContainer,
  SearchbarInput,
  SearchIcon,
} from './searchbar.styles';

function Searchbar() {
  const [searchValue, setSearchValue] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { storeResult } = useContext(searchContext);

  const handleSubmitSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (searchValue) {
        storeResult(searchValue);
      }
      setIsSubmitted(true);
    }
  };

  const handleOnChange = (value: string) => {
    setSearchValue(value);
    if (isSubmitted) setIsSubmitted(false);
  };

  return (
    <SearchbarContainer className={isSubmitted ? 'submitted' : ''}>
      <SearchbarInput
        type="text"
        value={searchValue}
        placeholder="Search for any word..."
        onChange={({ target }) => handleOnChange(target.value)}
        onKeyDown={(e) => handleSubmitSearch(e)}
        required
      />
      <SearchIcon />
      <InvalidMessage>Whoops, can&apos;t be empty...</InvalidMessage>
    </SearchbarContainer>
  );
}

export default Searchbar;
