import PostLayout from '@/components/blog/PostLayout';
import { getPostContent, fetchAllPostsByDate } from '@/content/lib';

export async function generateStaticParams() {
  return fetchAllPostsByDate();
}

type BlogPostProps = {
  params: { slug: string };
};

export default async function BlogPost(props: BlogPostProps) {
  const post = await getPostContent(props.params.slug);

  return (
    <PostLayout post={post}>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </PostLayout>
  );
}
