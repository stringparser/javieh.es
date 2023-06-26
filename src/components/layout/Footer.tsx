import { MENU_LINKS } from '@/data/constants';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto flex w-full flex-col items-center justify-center gap-y-2 pb-4 pt-20 text-center align-top text-gray-500 sm:flex-row sm:justify-between sm:text-xs">
      <div className="me-0 grid grid-flow-row sm:me-4">
        <div>
          Copyright &copy; {year}
          <span className="ml-2" aria-label="rocket emoji">
            🚀
          </span>{' '}
          Javier Carrillo Milla
        </div>
        <div className="mt-2">
          Sitio web hecho a partir de{' '}
          <a
            href="https://astro.build/themes/details/astro-cactus/"
            className="text-link"
          >
            Astro Cactus
          </a>
        </div>
      </div>
      <nav
        aria-label="More on this site"
        className="flex gap-x-2 sm:gap-x-0 sm:divide-x sm:divide-gray-500"
      >
        {[
          {
            path: '/',
            title: '☄ inicio',
          },
        ]
          .concat(MENU_LINKS)
          .map((link) => (
            <a
              href={link.path}
              className="px-4 py-2 sm:px-2 sm:py-0 sm:hover:text-textColor sm:hover:underline"
            >
              {link.title}
            </a>
          ))}
      </nav>
    </footer>
  );
}
