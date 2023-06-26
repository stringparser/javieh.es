import { TPost } from '@/content/config';
import PostPreview from '@/components/blog/PostPreview';

export type PostsListProps = {
  title?: string;
  posts: TPost[];
};

export default function PostsList(props: PostsListProps) {
  const { posts, title } = props;

  return (
    <>
      {title && <h2 className="title mb-4 text-xl">{title}</h2>}
      <ul className="space-y-4 sm:space-y-2">
        {posts.map((p) => (
          <li className="flex flex-col gap-x-2 sm:flex-row">
            <PostPreview post={p} />
          </li>
        ))}
      </ul>
    </>
  );
}
