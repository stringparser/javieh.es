import Link from 'next/link';
import { TPost } from '@/content/config';
import type { IElement } from '@/data/shared';
import { getFormattedDate } from '@/lib/date';

export type PostPreviewProps = IElement & {
  post: TPost;
  withDesc?: boolean;
};

export default function PostPreview(props: PostPreviewProps) {
  const { post, withDesc = false } = props;

  const date = new Date(post.data.publishDate);
  const dateTime = date.toISOString();

  return (
    <>
      <time dateTime={dateTime} className="min-w-[120px] text-gray-500">
        {getFormattedDate(date)}
      </time>
      <div>
        <Link
          href={`/blog/${post.slug}/`}
          className="cactus-link"
          rel="prefetch"
        >
          {post.data.title}
        </Link>
      </div>
      {withDesc && (
        <q className="line-clamp-3 block italic">{post.data.description}</q>
      )}
    </>
  );
}
