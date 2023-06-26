import { MENU_LINKS } from '@/data/constants';

export default function Header() {
  return (
    <header
      id="main-header"
      className="group relative mb-28 flex items-center sm:ps-[4.5rem]"
    >
      <div className="flex sm:flex-col">
        <a
          href="/"
          className="inline-flex items-center grayscale hover:filter-none sm:relative sm:inline-block"
        >
          <svg
            className="me-3 h-10 w-6 sm:absolute sm:start-[-4.5rem] sm:me-0 sm:h-20 sm:w-12"
            aria-hidden="true"
            focusable="false"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 272 480"
          >
            <title>Logo</title>
            <path
              d="M181.334 93.333v-40L226.667 80v40l-45.333-26.667ZM136.001 53.333 90.667 26.667v426.666L136.001 480V53.333Z"
              fill="#B04304"
            ></path>
            <path
              d="m136.001 119.944 45.333-26.667 45.333 26.667-45.333 26.667-45.333-26.667ZM90.667 26.667 136.001 0l45.333 26.667-45.333 26.666-45.334-26.666ZM181.334 53.277l45.333-26.666L272 53.277l-45.333 26.667-45.333-26.667ZM0 213.277l45.333-26.667 45.334 26.667-45.334 26.667L0 213.277ZM136 239.944l-45.333-26.667v53.333L136 239.944Z"
              fill="#FF5D01"
            ></path>
            <path
              d="m136 53.333 45.333-26.666v120L226.667 120V80L272 53.333V160l-90.667 53.333v240L136 480V306.667L45.334 360V240l45.333-26.667v53.334L136 240V53.333Z"
              fill="#53C68C"
            ></path>
            <path
              d="M45.334 240 0 213.334v120L45.334 360V240Z"
              fill="#B04304"
            ></path>
          </svg>
          <span className="text-xl font-bold sm:text-2xl">
            Javier Carrillo Milla
          </span>
        </a>
        <nav
          id="navigation-menu"
          className="absolute -inset-x-4 top-14 hidden flex-col items-end gap-y-4 rounded-md bg-[--theme-menu-bg] py-4 shadow backdrop-blur group-[.menu-open]:z-50 group-[.menu-open]:flex sm:static sm:z-auto sm:-ms-4 sm:mt-1 sm:flex sm:flex-row sm:items-center sm:divide-x sm:divide-dashed sm:divide-accent sm:rounded-none sm:bg-transparent sm:py-0 sm:shadow-none sm:backdrop-blur-none"
          aria-label="Main menu"
        >
          {MENU_LINKS.map((link) => (
            <a
              href={link.path}
              className="px-4 py-4 text-link sm:py-0 sm:hover:underline"
              rel="prefetch"
            >
              {link.title}
            </a>
          ))}
        </nav>
      </div>
      <button
        id="toggle-navigation-menu"
        className="group relative ms-8 h-7 w-7 sm:invisible sm:hidden"
        type="button"
        aria-label="Open main menu"
        aria-expanded="false"
        aria-haspopup="menu"
      >
        <svg
          id="line-svg"
          className="absolute start-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 transition-all group-aria-expanded:scale-0 group-aria-expanded:opacity-0"
          aria-hidden="true"
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          ></path>
        </svg>
        <svg
          id="cross-svg"
          className="absolute start-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 scale-0 text-accent opacity-0 transition-all group-aria-expanded:scale-100 group-aria-expanded:opacity-100"
          aria-hidden="true"
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </header>
  );
}
