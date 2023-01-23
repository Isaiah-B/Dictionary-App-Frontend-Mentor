import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string,
    backgroundMain: string,
    textMain: string,
    textSecondary: string,
    fontMenuBackground: string,
    fontMenuShadow: string,
    searchbarBackground: string,
    lineColor: string,
  }
}
