import Link from 'next/link';

import backgroundImage from '@/img/background.png';

export type TopNavigationBarLinkProps = {
  href: string;
  children: React.ReactNode;
};

const topNavigationBarLinkStyle: React.CSSProperties = {
  width: '8rem',
  margin: '0.5rem',
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
  margin: '0 auto',
  padding: '0.5rem',
  height: `${TOP_NAVIGATION_BAR_HEIGHT}px`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: `url(${backgroundImage.src})`,
  backgroundPosition: 'center',
};

const topNavBarContentStyle: React.CSSProperties = {
  display: 'flex',
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
        <TopNavigationBarLink href="/programacion">{`☕︎ programación`}</TopNavigationBarLink>
      </div>
    </nav>
  );
};
