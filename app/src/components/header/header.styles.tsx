import styled from 'styled-components';

import { ReactComponent as MoonSVG } from '../../assets/images/icon-moon.svg';
import { MEDIA_SIZES } from '../../index.styles';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 5.8rem 0 5.2rem;

  @media ${MEDIA_SIZES.mobile} {
    padding: 2.8rem 2.4rem;
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
`;

export const FontMenuContainer = styled.div`
  position: relative;

  p {
    font-weight: 700;
    text-transform: capitalize;
    color: ${({ theme }) => theme.textMain};

    @media ${MEDIA_SIZES.mobile} {
      font-size: 1.4rem;
      line-height: 2.4rem;
    }
  }
`;

export const FontMenuButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1.8rem;
  
  font-family: inherit;

  border: none;
  border-right: 1px solid hsl(0, 0%, 91%);
  padding-right: 2.6rem;
  background: none;
  cursor: pointer;

  @media ${MEDIA_SIZES.mobile} {
    padding-right: 1.6rem;
  }
`;

export const FontMenu = styled.ul`
  position: absolute;
  top: 4rem;
  right: 2.6rem;
  z-index: 999;

  display: flex;
  flex-direction: column;

  list-style: none;
  width: 18.3rem;
  padding: 1.6rem 0;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.fontMenuBackground};
  box-shadow: ${({ theme }) => theme.fontMenuShadow};
`;

export const FontMenuItem = styled.li<{ font: string }>`
  font-family: ${(props) => props.font};
  
  width: 100%;
  padding: 0.8rem 2.4rem;
  cursor: pointer;

  &:hover {
   color: hsl(274, 82%, 60%);
  }
`;

export const ThemeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  margin-left: 2.4rem;

  @media ${MEDIA_SIZES.mobile} {
    gap: 1.2rem;
    margin-left: 1.6rem;
  }
`;

export const ThemeSwitch = styled.button`
  position: relative;
  width: 4rem;
  height: 2rem;
  border: none;
  border-radius: 100px;
  background-color: hsl(0, 0%, 46%);
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    left: 0.3rem;
    top: 50%;
    transform: translateY(-50%);

    width: 1.4rem;
    height: 1.4rem;
    border-radius: 50%;
    background-color: hsl(0, 0%, 100%);
    transition: all 0.3s ease-out;
  }
  
  .dark &,
  &:hover {
    background-color: hsl(274, 82%, 60%);
  }

  .dark &::before {
    left: 2.3rem;
  }

`;

export const MoonIcon = styled(MoonSVG)`
  stroke: hsl(0, 0%, 46%);

  .dark & {
    stroke: hsl(274, 82%, 60%);
  }
`;
