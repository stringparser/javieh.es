import { SOCIAL_LINKS } from '@/data/constants';

export default function SocialList() {
  return (
    <div className="flex flex-wrap items-center gap-x-4 sm:items-center">
      <p>Contacto</p>
      <ul className="flex flex-1 items-center gap-x-4 sm:flex-initial">
        <li>
          <a
            className="inline-block p-2 sm:hover:text-link"
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="h-6 w-6"
              aria-hidden="true"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
            </svg>
            <span className="sr-only">Github</span>
          </a>
        </li>
        <li>
          <a
            className="inline-block p-2 sm:hover:text-link"
            href={`mailto:${SOCIAL_LINKS.email}`}
          >
            <svg
              className="h-6 w-6"
              aria-hidden="true"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <rect x="3" y="5" width="18" height="14" rx="2"></rect>
              <polyline points="3 7 12 13 21 7"></polyline>
            </svg>
            <span className="sr-only">Email</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
