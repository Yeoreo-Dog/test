import type { Breakpoint } from '@mui/material/styles';
import type { AppBarProps } from '@mui/material/AppBar';
import type { ToolbarProps } from '@mui/material/Toolbar';
import type { ContainerProps } from '@mui/material/Container';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';

import { useScrollOffSetTop } from 'src/hooks/use-scroll-offset-top';

import { bgBlur, varAlpha } from 'src/theme/styles';
import { layoutClasses } from 'src/layouts/classes';

export type HeaderSectionProps = AppBarProps & {
  layoutQuery: Breakpoint;
  disableOffset?: boolean;
  disableElevation?: boolean;
  slots?: {
    leftArea?: React.ReactNode;
    rightArea?: React.ReactNode;
    topArea?: React.ReactNode;
    centerArea?: React.ReactNode;
    bottomArea?: React.ReactNode;
  };
  slotProps?: {
    toolbar?: ToolbarProps;
    container?: ContainerProps;
  };
};

export function HeaderSection({
  sx,
  slots,
  slotProps,
  disableOffset,
  disableElevation,
  layoutQuery = 'md',
  ...other
}: HeaderSectionProps) {
  const theme = useTheme();

  const { offsetTop } = useScrollOffSetTop();

  const toolbarStyles = {
    default: {
      minHeight: 'auto',
      height: 'var(--layout-header-mobile-height)',
      transition: theme.transitions.create(['height', 'background-color'], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shorter,
      }),
      [theme.breakpoints.up('sm')]: {
        minHeight: 'auto',
      },
      [theme.breakpoints.up(layoutQuery)]: {
        height: 'var(--layout-header-desktop-height)',
      },
    },
    offset: {
      color: theme.vars.palette.text.primary,
      ...bgBlur({ color: varAlpha(theme.vars.palette.background.defaultChannel, 0.8) }),
    },
  };

  return (
    <AppBar
      position="sticky"
      className={layoutClasses.header}
      sx={{
        zIndex: 'var(--layout-header-zIndex)',
        ...sx,
        boxShadow: `rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px`,
        backgroundColor: 'white',
      }}
      {...other}
    >
      {slots?.topArea}

      <Toolbar
        data-offset={offsetTop}
        disableGutters
        {...slotProps?.toolbar}
        sx={{
          ...toolbarStyles.default,
          ...(!disableOffset && offsetTop && toolbarStyles.offset),
          ...slotProps?.toolbar?.sx,
        }}
      >
        <Container
          {...slotProps?.container}
          sx={{
            height: 1,
            display: 'flex',
            alignItems: 'center',
            ...slotProps?.container?.sx,
          }}
        >
          {slots?.leftArea}

          <Box sx={{ height: 1, display: 'flex', flex: '1 1 auto', justifyContent: 'center' }}>
            {slots?.centerArea}
          </Box>

          {slots?.rightArea}
        </Container>
      </Toolbar>

      {slots?.bottomArea}
    </AppBar>
  );
}
