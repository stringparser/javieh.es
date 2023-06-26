import PostsList from '@/components/blog/PostsList';
import { fetchAllPostsByDate } from '@/content/lib';

export default async function PostsIndex() {
  const posts = await fetchAllPostsByDate();

  return <PostsList title="Todas las Entradas" posts={posts} />;
}
