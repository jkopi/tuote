import { extendTheme, ThemeConfig } from '@chakra-ui/react';

export const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}

const mediaQueries = Object.values(breakpoints).map(breakpoint => `(min-width: ${breakpoint})`)

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({ config, breakpoints });

export default theme;