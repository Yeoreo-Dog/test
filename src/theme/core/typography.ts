import type { TypographyOptions } from '@mui/material/styles/createTypography';

import { setFont, pxToRem } from '../styles/utils';

// ----------------------------------------------------------------------

declare module '@mui/material/styles' {
  interface TypographyVariants {
    fontSecondaryFamily: React.CSSProperties['fontFamily'];
    fontWeightSemiBold: React.CSSProperties['fontWeight'];
  }
  interface TypographyVariantsOptions {
    fontSecondaryFamily?: React.CSSProperties['fontFamily'];
    fontWeightSemiBold?: React.CSSProperties['fontWeight'];
  }
  interface ThemeVars {
    typography: Theme['typography'];
  }
}

// ----------------------------------------------------------------------

export const defaultFont = 'Public Sans Variable';

export const primaryFont = setFont(defaultFont);

export const secondaryFont = setFont('Barlow');

export const NanumSquareNeoRg = setFont('NanumSquareNeoRg');
// ----------------------------------------------------------------------

export const typography: TypographyOptions = {
  fontFamily: NanumSquareNeoRg,
  fontSecondaryFamily: secondaryFont,
  fontWeightLight: '300',
  fontWeightRegular: '400',
  fontWeightMedium: '500',
  fontWeightSemiBold: '600',
  fontWeightBold: '700',
  h1: {
    fontWeight: 700,
    fontSize: '2.125rem',
    fontFamily: NanumSquareNeoRg,
  },
  h2: {
    fontWeight: 700,
    lineHeight: 64 / 48,
    fontSize: '1.5rem',
    fontFamily: NanumSquareNeoRg,
  },
  h3: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: '1.25rem',
    fontFamily: NanumSquareNeoRg,
  },
  h4: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: '1rem',
    fontFamily: NanumSquareNeoRg,
  },
  h5: {
    fontWeight: 500,
    lineHeight: 1.5,
    fontSize: '0.875rem',
    fontFamily: NanumSquareNeoRg,
  },
  h6: {
    fontWeight: 500,
    lineHeight: 28 / 18,
    fontSize: '0.75rem',
    fontFamily: NanumSquareNeoRg,
  },
  subtitle1: {
    fontWeight: 500,
    lineHeight: 1.5,
    fontSize: '0.875rem',
    fontFamily: NanumSquareNeoRg,
  },
  subtitle2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: '0.75rem',
    fontFamily: NanumSquareNeoRg,
  },
  body1: {
    lineHeight: 1.5,
    fontSize: '0.875rem',
    fontWeight: 400,
    fontFamily: NanumSquareNeoRg,
  },
  body2: {
    letterSpacing: '0em',
    fontWeight: 400,
    lineHeight: '1.5em',
    fontFamily: NanumSquareNeoRg,
  },
  caption: {
    lineHeight: 1.5,
    fontSize: '0.75rem',
    fontWeight: 400,
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    textTransform: 'uppercase',
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: 'unset',
  },
};
