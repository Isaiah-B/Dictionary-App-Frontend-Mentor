import { useContext, useState } from 'react';

import { ReactComponent as LogoIcon } from '../../assets/images/logo.svg';
import { ReactComponent as ArrowDown } from '../../assets/images/icon-arrow-down.svg';

import { appContext, FONT_TYPES } from '../../context/appContext';
import useClickOutside from '../../hooks/useClickOutside';

import {
  FontMenu,
  FontMenuButton,
  FontMenuContainer,
  FontMenuItem,
  HeaderActions,
  HeaderContainer,
  MoonIcon,
  ThemeContainer,
  ThemeSwitch,
} from './header.styles';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const {
    font,
    theme,
    changeFont,
    changeTheme,
  } = useContext(appContext);

  const formatFontName = (fontName: string) => (
    fontName.split('_').join(' ')
  );

  const toggleTheme = () => (
    theme === 'light-theme'
      ? changeTheme('dark-theme')
      : changeTheme('light-theme')
  );

  const menuRef = useClickOutside(() => setMenuOpen(false));

  return (
    <HeaderContainer>
      <LogoIcon />

      <HeaderActions>
        <FontMenuContainer>
          <FontMenuButton
            aria-label="select font"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <p>{formatFontName(font)}</p>
            <ArrowDown />
          </FontMenuButton>

          {
            menuOpen
            && (
            <FontMenu ref={menuRef}>
              <FontMenuItem
                onClick={() => changeFont('sans_serif')}
                font={FONT_TYPES.sans_serif}
              >
                <p>Sans Serif</p>
              </FontMenuItem>

              <FontMenuItem
                onClick={() => changeFont('serif')}
                font={FONT_TYPES.serif}
              >
                <p>Serif</p>
              </FontMenuItem>

              <FontMenuItem
                onClick={() => changeFont('mono')}
                font={FONT_TYPES.mono}
              >
                <p>Mono</p>
              </FontMenuItem>
            </FontMenu>
            )
          }
        </FontMenuContainer>

        <ThemeContainer className={theme === 'dark-theme' ? 'dark' : ''}>
          <ThemeSwitch
            aria-label="toggle theme"
            onClick={() => toggleTheme()}
          />
          <MoonIcon />
        </ThemeContainer>

      </HeaderActions>
    </HeaderContainer>
  );
}

export default Header;
