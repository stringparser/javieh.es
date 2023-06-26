import './globals.css';

import { siteConfig } from '@/site.config';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BaseHead from '@/components/BaseHead';
import SkipLink from '@/components/link/SkipLink';

export type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout(props: RootLayoutProps) {
  const { children } = props;

  return (
    <html lang="en" className="dark">
      <BaseHead {...siteConfig} />
      <body>
        <SkipLink />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
