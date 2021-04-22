import { overrides } from '../overrides';
// export const mainPrimaryColor = '#d0a85c';
// export const lightPrimaryColor = '#ff58b5';
// export const darkPrimaryColor = '#9c792f';
// // export const primaryContrastText = '#000';
// export const primaryContrastText = '#fff';

// export const mainPrimaryColor = '#003c8f';
// export const lightPrimaryColor = '#4c66c0';
// export const darkPrimaryColor = '#001861';
// // export const primaryContrastText = '#000';
// export const primaryContrastText = '#fff';

// Flutter
// export const mainPrimaryColor = '#0276e8';
// export const lightPrimaryColor = '#64a4ff';
// export const darkPrimaryColor = '#004bb5';
// // export const primaryContrastText = '#000';
// export const primaryContrastText = '#fff';

// nINAS tEAL
export const mainPrimaryColor = '#0d7e8e';
export const lightPrimaryColor = '#52aebe';
export const darkPrimaryColor = '#005161';
// export const primaryContrastText = '#000';
export const primaryContrastText = '#fff';

// Nice bLUE
// export const mainPrimaryColor = '#0276e8';
// export const lightPrimaryColor = '#64a4ff';
// export const darkPrimaryColor = '#1f36bf';
// // export const primaryContrastText = '#000';
// export const primaryContrastText = '#fff';

// CADBURY LOOKING THEME
// export const mainPrimaryColor = '#6561f3';
// export const lightPrimaryColor = '#9d8fff';
// export const darkPrimaryColor = '#004bb5';
// // export const primaryContrastText = '#000';
// export const primaryContrastText = '#fff';

// // secondary color dark blue
// export const mainSecondaryColor = '#002443';
// export const lightSecondaryColor = '#334b6e';
// export const darkSecondaryColor = '#00001d';
// export const secondaryContrastText = '#fff';

// Green. We use secondary for success icons and other things since material doesnt do sucees
// We also only have 1 brand color
export const mainSecondaryColor = '#4caf50';
export const lightSecondaryColor = '#80e27e';
export const darkSecondaryColor = '#087f23';
export const secondaryContrastText = '#000000';

// default font typography
import defaultTypography from '../typographys/default';

export const makefontRgba = (value, hue) => `rgba(${value}, ${hue})`;
const fontRgb = `62, 62, 62`;
const mainPalette = {
  palette: {
    nProgress: {
      main: mainPrimaryColor,
    },
    common: {
      black: '#000',
      white: '#fff',
    },
    type: 'light',
    background: { paper: '#fff', default: '#fafafa' },
    primary: {
      // light: lightPrimaryColor,
      main: mainPrimaryColor,
      dark: darkPrimaryColor,
      contrastText: primaryContrastText,
    },
    secondary: {
      light: lightSecondaryColor,
      main: mainSecondaryColor,
      dark: darkSecondaryColor,
      contrastText: secondaryContrastText,
    },
    text: {
      primary: makefontRgba(fontRgb, 0.87),
      secondary: makefontRgba(fontRgb, 0.54),
      disabled: makefontRgba(fontRgb, 0.38),
      hint: makefontRgba(fontRgb, 0.38),
    },
  },
  // Make sure any changes you add here such as color you add in for other themes i.e darkPallete
  typography: {
    ...defaultTypography,
    h1: {
      ...defaultTypography.h1,
      color: makefontRgba(fontRgb, 0.85),
    },
  },
  overrides: {
    // Style sheet name ⚛️
    ...overrides,
    MuiAlert: {
      ...overrides.MuiAlert,
      root: {
        marginBottom: '16px',
      },
      message: {
        padding: '13px 0',
      },
      icon: {
        fontSize: '32px',
        // color: `${mainPrimaryColor} !important`,
      },
      // standardInfo: {
      //   // backgroundColor: lightSecondaryColor,
      //   backgroundColor: '#002443',
      //   color: '#fff',
      // },
    },
  },
};
export default mainPalette;
