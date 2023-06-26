import PostHero from '@/components/blog/PostHero';
import { TPost } from '@/content/config';

export type PostLayoutProps = {
  post: TPost;
  children: React.ReactNode;
};

export default async function PostLayout(props: PostLayoutProps) {
  const { post, children } = props;

  return (
    <>
      <div className="gap-x-10 lg:flex lg:items-start">
        {/* {!!headings.length && (
          <aside className="sticky top-20 order-2 -me-32 hidden basis-64 lg:block">
            <h2 className="font-semibold">Índice</h2>
            <ul className="mt-4 text-xs">
              {headings.map(({ depth, slug, text }) => (
                <li className="line-clamp-2 hover:text-accent">
                  <a
                    className={`block ${
                      depth <= 2 ? 'mt-3' : 'mt-2 ps-3 text-[0.6875rem]'
                    }`}
                    href={`#${slug}`}
                    aria-label={`Scroll to section: ${text}`}
                  >
                    <span className="mr-1">{'#'.repeat(depth)}</span>
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        )} */}
        <article className="flex-grow break-words">
          <div id="blog-hero">
            <PostHero post={post} />
          </div>
          <div className="prose prose-sm prose-cactus mt-12 prose-headings:font-semibold prose-headings:before:absolute prose-headings:before:-ms-4 prose-headings:before:text-accent prose-headings:before:content-['#'] prose-th:before:content-none">
            {children}
          </div>
        </article>
      </div>
      <button
        id="to-top-btn"
        className="z-90 fixed bottom-8 end-4 flex h-10 w-10 translate-y-28 items-center justify-center rounded-full border-2 border-transparent bg-zinc-200 text-3xl opacity-0 transition-all duration-300 hover:border-zinc-400 data-[show=true]:translate-y-0 data-[show=true]:opacity-100 dark:bg-zinc-700 sm:end-8 sm:h-12 sm:w-12"
        aria-label="Back to Top"
        data-show="false"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          ></path>
        </svg>
      </button>
    </>
  );
}
