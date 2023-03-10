import { DefaultTheme } from 'styled-components';

export const light: DefaultTheme = {
  name: 'light-theme',
  backgroundMain: 'hsl(0, 0%, 100%)',
  textMain: 'hsl(0, 0%, 18%)',
  textSecondary: 'hsl(0, 0%, 46%)',
  fontMenuBackground: 'hsl(0, 0%, 100%)',
  fontMenuShadow: '0 5px 30px hsla(0, 0%, 0%, 0.1)',
  searchbarBackground: 'hsl(0, 0%, 96%)',
  lineColor: 'hsla(0, 0%, 91%)',
};

export const dark: DefaultTheme = {
  name: 'dark-theme',
  backgroundMain: 'hsl(0, 2%, 0%)',
  textMain: 'hsl(0, 0%, 100%)',
  textSecondary: 'hsl(0, 0%, 46%)',
  fontMenuBackground: 'hsl(0, 0%, 12%)',
  fontMenuShadow: '0 5px 30px hsla(274, 82%, 60%, 1)',
  searchbarBackground: 'hsl(0, 0%, 12%)',
  lineColor: 'hsl(0, 0%, 23%)',
};
