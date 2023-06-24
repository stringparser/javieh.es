type BlogLayoutProps = {
  children: React.ReactNode;
}

export default function BlogLayout({children}: BlogLayoutProps) {
  return (
    <>
      {children}
    </>
  );
}