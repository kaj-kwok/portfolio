import { extendTheme } from '@chakra-ui/react';

const colors = {
  black: '#000',
  white: '#fff',
  gray: {
    "50": "#F2F2F2",
    "100": "#DBDBDB",
    "200": "#C4C4C4",
    "300": "#ADADAD",
    "400": "#969696",
    "500": "#808080",
    "600": "#666666",
    "700": "#4D4D4D",
    "800": "#333333",
    "900": "#1A1A1A"
  }
}

const fonts = {
  body: "Montserrat, sans-serif",
  heading: "Noto Sans, sans-serif"
}

const breakpoints = {
  sm: '30em',
  md: '48em'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({ colors, fonts, breakpoints, config })

export default theme