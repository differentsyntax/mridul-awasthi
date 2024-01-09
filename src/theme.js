// theme.js

import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: {
      50: '#E6F7FF',
      100: '#B3E0FF',
      200: '#80C9FF',
      300: '#4DA3FF',
      400: '#2673FA',
      500: '#0055E5',
      600: '#0041B2',
      700: '#002F80',
      800: '#001C4D',
      900: '#000D26',
    },
    secondary: {
      50: '#F4F4F5',
      100: '#D9D9DA',
      200: '#BFBFC1',
      300: '#A6A6AA',
      400: '#8E8E93',
      500: '#75757A',
      600: '#59595E',
      700: '#404044',
      800: '#262629',
      900: '#131316',
    },
  },
  fonts: {
    heading: 'Montserrat, sans-serif',
    body: 'Roboto, sans-serif',
  },
});

export default theme;
