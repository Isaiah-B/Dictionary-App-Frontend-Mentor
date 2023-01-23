import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';

import Header from './components/header/header.component';
import ResultArea from './components/result-area/result-area.component';
import Searchbar from './components/searchbar/searchbar.component';

import { appContext, FONT_TYPES } from './context/appContext';
import { SearchProvider } from './context/searchContext';

import { dark, light } from './themes';
import { GlobalStyle } from './index.styles';
import { Container } from './App.styles';

function App() {
  const { theme, font } = useContext(appContext);

  const appTheme = theme === 'light-theme' ? light : dark;
  const appFont = FONT_TYPES[font as keyof typeof FONT_TYPES];

  return (
    <ThemeProvider theme={appTheme}>
      <SearchProvider>
        <GlobalStyle font={appFont} />
        <Container>
          <Header />
          <Searchbar />
          <ResultArea />
        </Container>
      </SearchProvider>
    </ThemeProvider>
  );
}

export default App;
