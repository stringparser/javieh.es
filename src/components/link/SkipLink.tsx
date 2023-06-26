export default function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:start-1 focus:top-1.5"
    >
      skip to content
    </a>
  );
}
