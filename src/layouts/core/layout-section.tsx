import type { Theme, SxProps, CSSObject } from '@mui/material/styles';

import Box from '@mui/material/Box';
import GlobalStyles from '@mui/material/GlobalStyles';

import { layoutClasses } from 'src/layouts/classes';

export type LayoutSectionProps = {
  sx?: SxProps<Theme>;
  cssVars?: CSSObject;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  footerSection?: React.ReactNode;
  headerSection?: React.ReactNode;
  sidebarSection?: React.ReactNode;
};

export function LayoutSection({
  sx,
  cssVars,
  children,
  footer,
  footerSection,
  headerSection,
  sidebarSection,
}: LayoutSectionProps) {
  const inputGlobalStyles = (
    <GlobalStyles
      styles={{
        body: {
          '--layout-nav-zIndex': 1101,
          '--layout-nav-mobile-width': '320px',
          '--layout-header-zIndex': 1100,
          '--layout-header-mobile-height': '64px',
          '--layout-header-desktop-height': '82px',
          ...cssVars,
        },
      }}
    />
  );

  return (
    <>
      {inputGlobalStyles}

      <Box id="root__layout" className={layoutClasses.root} sx={sx}>
        {headerSection}
        {sidebarSection}
        {children}
        {footer}
        {footerSection}
      </Box>
    </>
  );
}
