import { TPost } from '@/content/config';
import { getFormattedDate } from '@/lib/date';

export type PostHeroProps = {
  post: TPost;
};

export default function PostHero(props: PostHeroProps) {
  const { post } = props;

  const dateTime = post.data.publishDate.toISOString();
  const postDate = getFormattedDate(post.data.publishDate, {
    month: 'long',
  });

  return (
    <>
      <h1 className="title mb-3 sm:mb-1">{post.data.title}</h1>
      <time dateTime={dateTime}>{postDate}</time>
      {!!post.data.tags?.length && (
        <div className="mt-1 sm:mt-0 sm:inline sm:before:mx-2 sm:before:content-['|']">
          <svg
            aria-hidden="true"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-1 inline-block h-6 w-6"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7.859 6h-2.834a2.025 2.025 0 0 0 -2.025 2.025v2.834c0 .537 .213 1.052 .593 1.432l6.116 6.116a2.025 2.025 0 0 0 2.864 0l2.834 -2.834a2.025 2.025 0 0 0 0 -2.864l-6.117 -6.116a2.025 2.025 0 0 0 -1.431 -.593z" />
            <path d="M17.573 18.407l2.834 -2.834a2.025 2.025 0 0 0 0 -2.864l-7.117 -7.116" />
            <path d="M6 9h-.01" />
          </svg>
          {post.data.tags.map((tag, i) => (
            <>
              <a
                className="cactus-link inline-block before:content-['#']"
                aria-label={`View more blogs with the tag ${tag}`}
                href={`/tags/${tag}/`}
              >
                {tag}
              </a>
              {i < post.data.tags.length - 1 && ', '}
            </>
          ))}
        </div>
      )}
      <p className="mt-8">{post.data.description}</p>
    </>
  );
}
