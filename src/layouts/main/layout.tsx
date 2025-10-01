'use client';

import type { Breakpoint, SxProps, Theme } from '@mui/material/styles';

import Alert from '@mui/material/Alert';
import { useTheme } from '@mui/material/styles';

import { useBoolean } from 'src/hooks/use-boolean';

import { MenuButton } from 'src/layouts/components/menu-button';
import ScrollToTop from 'src/layouts/components/scrollToTop';
import { navData, navDataMb } from 'src/layouts/config-nav-main';
import { HeaderSection } from 'src/layouts/core/header-section';
import { LayoutSection } from 'src/layouts/core/layout-section';
import { Main } from 'src/layouts/main/main';

import { NavMobile } from 'src/layouts/main/nav/mobile';

import { BackToTop, ScrollProgress, useScrollProgress } from 'src/components/animate';
import { CustomNavPc } from './nav/desktop/customNavPc';
export type MainLayoutProps = {
  sx?: SxProps<Theme>;
  children: React.ReactNode;
  header?: {
    sx?: SxProps<Theme>;
  };
};

export function MainLayout({ sx, children, header }: MainLayoutProps) {
  const theme = useTheme();

  const openMobileNav = useBoolean();

  const layoutQuery: Breakpoint = 'md';

  const pageProgress = useScrollProgress();

  return (
    <LayoutSection
      headerSection={
        <>
          <HeaderSection
            layoutQuery={layoutQuery}
            sx={{}}
            slots={{
              topArea: (
                <Alert severity="info" sx={{ display: 'none', borderRadius: 0 }}>
                  This is an info Alert.
                </Alert>
              ),
              // leftArea: <Logo />,
              centerArea: (
                <CustomNavPc
                  data={navData}
                  sx={{
                    display: 'none',
                    [theme.breakpoints.up(layoutQuery)]: { display: 'flex' },
                  }}
                />
              ),
              rightArea: (
                <>
                  <MenuButton
                    onClick={openMobileNav.onTrue}
                    sx={{
                      mr: 1,
                      ml: -1,
                      [theme.breakpoints.up(layoutQuery)]: { display: 'none' },
                    }}
                  />
                  <NavMobile
                    data={navDataMb}
                    open={openMobileNav.value}
                    onClose={openMobileNav.onFalse}
                  />
                </>
              ),
            }}
          />
          <ScrollProgress
            variant="linear"
            progress={pageProgress.scrollYProgress}
            sx={{ position: 'fixed' }}
          />
          <BackToTop />
        </>
      }
      sx={sx}
    >
      <>
        <ScrollToTop />
        <Main>{children}</Main>
      </>
    </LayoutSection>
  );
}
