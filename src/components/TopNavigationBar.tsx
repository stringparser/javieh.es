import Link from 'next/link';

import backgroundImage from '@/img/background.png';

export type TopNavigationBarLinkProps = {
  href: string;
  children: React.ReactNode;
};

const topNavigationBarLinkStyle: React.CSSProperties = {
  padding: '2rem 1rem',
  fontSize: '17px',
  textDecoration: 'none',
};

export const TopNavigationBarLink: React.FC<TopNavigationBarLinkProps> = ({
  href,
  children,
}) => {
  return (
    <Link href={href} style={topNavigationBarLinkStyle}>
      {children}
    </Link>
  );
};

export const TOP_NAVIGATION_BAR_HEIGHT = 53;

const topNavigationBarStyle: React.CSSProperties = {
  color: 'snow',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  padding: '0.5rem',
  height: `${TOP_NAVIGATION_BAR_HEIGHT}px`,
  display: 'flex',
  alignItems: 'center',
  backgroundImage: `url(${backgroundImage.src})`,
  backgroundPosition: 'center',
};

const topNavBarContentStyle: React.CSSProperties = {
  width: '80vw',
  display: 'flex',
  margin: '0 20vw',
  alignItems: 'center',
  justifyContent: 'space-between'
}

export const TopNavigationBar: React.FC = () => {
  return (
    <nav style={topNavigationBarStyle}>
      <div style={topNavBarContentStyle}>
        <TopNavigationBarLink href="/">{`☄ inicio`}</TopNavigationBarLink>
        <TopNavigationBarLink href="/musica">{`⚡︎ música`}</TopNavigationBarLink>
        <TopNavigationBarLink href="/escritura">{`⏚ escritura`}</TopNavigationBarLink>
        <TopNavigationBarLink href="/blog">{`☕︎ blog`}</TopNavigationBarLink>
      </div>
    </nav>
  );
};
