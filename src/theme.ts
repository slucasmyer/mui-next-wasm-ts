import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: ['"Roboto Mono"', 'monospace'].join(',')
  },
  palette: {
    primary: {
      main: `#556cd6`,
    },
    secondary: {
      main: `#19857b`,
    },
    error: {
      main: `#ff1744`,
    },
    background: {
      default: `#ffffff`,
      paper: `#fafafa`
    },
    text: {
      primary: '#000000'
    }
  },
});

export default theme;
