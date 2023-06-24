import { TOP_NAVIGATION_BAR_HEIGHT, TopNavigationBar } from '@/components/TopNavigationBar';

export type RootLayoutProps = {
  children: React.ReactNode;
};

const mainStyles: React.CSSProperties = {
  margin: `0 auto`,
  marginTop: `${2 * TOP_NAVIGATION_BAR_HEIGHT}px`,
  padding: '1rem 2rem',
  display: 'flex',
  flexDirection: 'column',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <style jsx global>{`
          a, a:visited {
            color: rgb(224, 174, 108);
            text-decoration: none;
          }

          body {
            margin: 0 auto;
            font-size: 18px;
            overflow-y: scroll;
            background: rgba(255,255,255,0.8);
            font-family: system-ui,-apple-system,blinkmacsystemfont,"Segoe UI",helvetica,arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
            text-size-adjust: 100%;
            font-smoothing: antialiased;
          }

          @media (max-width: 375px) {
            main {
              width: 90vw;
            }
          }

          @media (min-width: 375px and max-width: 975px) {
            main {
              width: 80vw;
            }
          }

          @media (min-width: 975px) {
            main {
              width: 672px;
            }
          }

          pre {
            padding: 0.8571429rem 1.1428571rem;
            border-radius: 0.375rem;
          }
      `}</style>
      <TopNavigationBar />
      <main style={mainStyles}>{children}</main>
    </>
  );
}
