import { useRouter } from 'next/router';
import './globals.css';

import { TOP_NAVIGATION_BAR_HEIGHT, TopNavigationBar } from '@/components/TopNavigationBar';
import BackLink from '@/components/BackLink';

export const metadata = {
  title: 'javieh',
  description: 'Javier Carrillo Milla',
}

const mainStyles: React.CSSProperties = {
  margin: `0 auto`,
  marginTop: `${TOP_NAVIGATION_BAR_HEIGHT}px`,
  padding: '1rem 2rem',
  display: 'flex',
  flexDirection: 'column',
};

export type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout(props: RootLayoutProps) {
  console.log('props', props);
  const {children} = props;


  return (
    <html lang="en">
      <body>
      <TopNavigationBar />
      <main style={mainStyles} className="prose prose-invert">
        {children}
      </main>
      </body>
    </html>
  )
}
