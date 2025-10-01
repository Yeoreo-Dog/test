import 'src/global.css';

// ----------------------------------------------------------------------

import type { Metadata, Viewport } from 'next';

import Head from 'next/head';

import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';

import { CONFIG } from 'src/config-global';
import { LocalizationProvider } from 'src/locales';
import { schemeConfig } from 'src/theme/scheme-config';
import { ThemeProvider } from 'src/theme/theme-provider';

import { ProgressBar } from 'src/components/progress-bar';
import { MotionLazy } from 'src/components/animate/motion-lazy';
import { SettingsDrawer, defaultSettings, SettingsProvider } from 'src/components/settings';

// ----------------------------------------------------------------------

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
};

export const metadata: Metadata = {
  icons: [
    {
      rel: 'icon',
      url: `${CONFIG.assetsDir}/favicon.ico`,
    },
  ],
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const jsonLd = {
    '@context': 'http://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'ListItem',
        item: {
          '@type': 'Organization',
          name: '라인',
          image: 'https://example.com/photos/listitem-1.jpg',
          url: 'https://example.com/listitem-url-1',
        },
        position: '1',
      },
      {
        '@type': 'ListItem',
        item: {
          '@type': 'Organization',
          name: '네이버 랩스',
          image: 'https://example.com/photos/listitem-2.jpg',
          url: 'https://example.com/listitem-url-2',
        },
        position: '2',
      },
      {
        '@type': 'ListItem',
        item: {
          '@type': 'Organization',
          name: '네이버 클라우드',
          image: 'https://example.com/photos/listitem-3.jpg',
          url: 'https://example.com/listitem-url-3',
        },
        position: '3',
      },
      {
        '@type': 'ListItem',
        item: {
          '@type': 'Organization',
          name: '네이버 웹툰',
          image: 'https://example.com/photos/listitem-4.jpg',
          url: 'https://example.com/listitem-url-4',
        },
        position: '4',
      },
      {
        '@type': 'ListItem',
        item: {
          '@type': 'Organization',
          name: '스노우',
          image: 'https://example.com/photos/listitem-5.jpg',
          url: 'https://example.com/listitem-url-5',
        },
        position: '5',
      },
      {
        '@type': 'ListItem',
        item: {
          '@type': 'Organization',
          name: '네이버 파이낸셜',
          image: 'https://example.com/photos/listitem-6.jpg',
          url: 'https://example.com/listitem-url-6',
        },
        position: '6',
      },
    ],
  };
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <body>
        <InitColorSchemeScript
          defaultMode={schemeConfig.defaultMode}
          modeStorageKey={schemeConfig.modeStorageKey}
        />

        <LocalizationProvider>
          <SettingsProvider settings={defaultSettings}>
            <ThemeProvider>
              <MotionLazy>
                <ProgressBar />
                <SettingsDrawer />
                {children}
              </MotionLazy>
            </ThemeProvider>
          </SettingsProvider>
        </LocalizationProvider>
      </body>
    </html>
  );
}
