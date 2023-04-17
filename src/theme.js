import { Rubik } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { deepOrange, red, blueGrey } from '@mui/material/colors';

export const rubik = Rubik({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: deepOrange[500],
      dark: deepOrange[700],
      light: deepOrange[50],
    },
    secondary: {
      main: blueGrey[300],
      light: blueGrey[50],
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: rubik.style.fontFamily,
  },
});

export default theme;