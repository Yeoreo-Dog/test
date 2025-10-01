import type { BoxProps } from '@mui/material/Box';
import type { CSSObject } from '@mui/material/styles';

import { forwardRef } from 'react';

import Box from '@mui/material/Box';

import { RouterLink } from 'src/routes/components';

import MainLogo from 'src/ui-component/MainLogo';

import { logoClasses } from './classes';

export type LogoProps = BoxProps & {
  href?: string;
  isSingle?: boolean;
  disableLink?: boolean;
};

export const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ href = '/', isSingle = false, disableLink = false, sx, className, ...other }, ref) => {
    const baseStyles = {
      flexShrink: 0,
      color: 'inherit',
      display: 'inline-flex',

      verticalAlign: 'middle',
      width: isSingle ? 200 : 200,
      height: isSingle ? 64 : 64,
      ...sx,
    } as CSSObject;

    return (
      <Box
        ref={ref}
        component={RouterLink}
        href={href}
        className={logoClasses.root.concat(className ? ` ${className}` : '')}
        aria-label="logo"
        sx={{
          ...baseStyles,
          ...(disableLink && { pointerEvents: 'none' }),
        }}
        {...other}
      >
        <MainLogo />
      </Box>
    );
  }
);
