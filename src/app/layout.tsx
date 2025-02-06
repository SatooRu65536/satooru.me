import type { Metadata } from 'next';
import '@/styles/global.scss';
import { ABOUT } from '@/const/about';
import PageLayout from '@/layouts/Page';
import { ViewTransitions } from 'next-view-transitions';
import { Inter } from 'next/font/google';
import Providers from './providers';
import '@/styles/global.scss';

const inter = Inter({ subsets: ['latin'] });

const HOST_NAME = 'https://satooru.me/';
const SITE_NAME = 'SatooRu\'s Profile';
const KEY_WORDS = ['佐藤さとる', 'プロフィール', 'シス研', '愛知工業大学', '愛工大'];
const DESCRIPTION = ABOUT.join('');

export const metadata: Metadata = {
  metadataBase: new URL(HOST_NAME),
  title: SITE_NAME,
  description: DESCRIPTION,

  applicationName: SITE_NAME,
  category: 'website',
  keywords: KEY_WORDS,
  openGraph: {
    title: SITE_NAME,
    description: DESCRIPTION,
    url: HOST_NAME,
    siteName: SITE_NAME,
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="ja">
        <body className={inter.className}>
          <Providers>
            <PageLayout>{children}</PageLayout>
          </Providers>
        </body>
      </html>
    </ViewTransitions>
  );
}
