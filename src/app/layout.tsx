import './global.css';

import { Coming_Soon as BaseFont } from 'next/font/google';

import backgroundImage from '@/img/background.png';
import { TopNavigationBar } from '@/components/TopNavigationBar';

const rootFont = BaseFont({
  weight: '400',
  subsets: ['latin'],
  fallback: [
    'ui-sans-serif',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    '"Noto Sans"',
    'sans-serif',
  ],
});

export type RootLayoutProps = {
  children: React.ReactNode;
};

const styles: Record<'body' | 'main', React.CSSProperties> = {
  body: {
    color: 'rgba(255, 255, 255, 0.9)',
    ...rootFont.style,
    fontSize: '18px',
    backgroundImage: `url(${backgroundImage.src})`,
    backgroundPosition: 'center',
  },
  main: {
    padding: '1rem 2rem',
    margin: '10vh 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body style={styles.body}>
        <TopNavigationBar />
        <main style={styles.main}>{children}</main>
      </body>
    </html>
  );
}
