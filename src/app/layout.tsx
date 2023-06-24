import './globals.css';

import { TOP_NAVIGATION_BAR_HEIGHT, TopNavigationBar } from '@/components/TopNavigationBar';

export const metadata = {
  title: 'javieh',
  description: 'Javier Carrillo Milla',
}

const mainStyles: React.CSSProperties = {
  margin: '0 auto',
  padding: '1rem 2rem',
  display: 'flex',
  flexDirection: 'column',
};

export type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout(props: RootLayoutProps) {
  const {children} = props;


  return (
    <html lang="en">
      <body>
      <TopNavigationBar />
      <div style={{height: `${TOP_NAVIGATION_BAR_HEIGHT}px`}} />
      <main style={mainStyles} className="prose prose-invert">
        <div className="mt-8">
          {children}
        </div>
      </main>
      </body>
    </html>
  )
}
