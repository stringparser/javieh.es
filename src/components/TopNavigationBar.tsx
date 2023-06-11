import Link from 'next/link';

export type TopNavigationBarLinkProps = {
  href: string;
  children: React.ReactNode;
}

const topNavigationBarLinkStyle: React.CSSProperties = {
  color: 'white',
  margin: '0.5rem',
  textDecoration: 'none',
};

export const TopNavigationBarLink: React.FC<TopNavigationBarLinkProps> = ({href, children}) => {
  return <Link href={href} style={topNavigationBarLinkStyle}>
    {children}
  </Link>;
}

export const TOP_NAVIGATION_BAR_HEIGHT = 53;

const topNavigationBarStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  padding: '0.5rem',
  height: `${TOP_NAVIGATION_BAR_HEIGHT}px`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  backgroundColor: 'rgba(255,255,255,0.05)',
};

export const TopNavigationBar: React.FC = () => {
  return (
    <nav style={topNavigationBarStyle}>
      <TopNavigationBarLink href="/">{`☄ inicio`}</TopNavigationBarLink>
      <TopNavigationBarLink href="/musica">{`⚡︎ música`}</TopNavigationBarLink>
      <TopNavigationBarLink href="/escritura">{`⏚ escritura`}</TopNavigationBarLink>
    </nav>
  )
}