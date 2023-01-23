import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
} from 'react';

// Local Storage and the font context state store the FONT_TYPES key rather than
// the value, so the key must be extracted to set these values.

export const FONT_TYPES = {
  sans_serif: '\'Inter\', sans-serif',
  serif: '\'Lora\', serif',
  mono: '\'Inconsolata\', monospace',
};

// Retrieve a key in FONT_TYPES from its corresponding value
const getKey = (value: string) => (
  Object.keys(FONT_TYPES).find(
    (key) => FONT_TYPES[key as keyof typeof FONT_TYPES] === value,
  ) as string
);

const defaultState = {
  theme: 'light-theme',
  font: getKey(FONT_TYPES.sans_serif),
  changeTheme: (newTheme: string) => {},
  changeFont: (newFont: string) => {},
};

export const appContext = createContext(defaultState);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(defaultState.theme);
  const [font, setFont] = useState(defaultState.font);

  // Set passed theme to both dictionary-theme and context state
  const applyTheme = (themeToApply: string) => {
    localStorage.setItem('dictionary-theme', themeToApply);
    setTheme(themeToApply);
  };

  // Get or set the dictionary-theme entry in localstorage and set the app's theme state
  const checkTheme = () => {
    // If dictionary-theme is not in localstorage, set it as the browser's preferred theme
    if (!localStorage.getItem('dictionary-theme')) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) applyTheme('dark-theme');
      else applyTheme('light-theme');

    // If dictionary-theme is already in localstorage, retrieve that value
    } else {
      const newTheme = localStorage.getItem('dictionary-theme') as string;
      setTheme(newTheme);
    }
  };

  // Get or set the dictionary-font entry in localstorage and set the app's font state
  const checkFont = () => {
    if (!localStorage.getItem('dictionary-font')) {
      localStorage.setItem('dictionary-font', getKey(FONT_TYPES.sans_serif));
      setFont(getKey(FONT_TYPES.sans_serif));
    } else {
      setFont(localStorage.getItem('dictionary-font') as string);
    }
  };

  useEffect(() => {
    checkTheme();
    checkFont();
  }, []);

  const changeTheme = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem('dictionary-theme', newTheme);
  };

  const changeFont = (newFont: string) => {
    setFont(getKey(FONT_TYPES[newFont as keyof typeof FONT_TYPES]));
    localStorage.setItem('dictionary-font', newFont);
  };

  const value = useMemo(() => (
    {
      theme,
      font,
      changeTheme,
      changeFont,
    }
  ), [theme, font]);

  return <appContext.Provider value={value}>{children}</appContext.Provider>;
}
