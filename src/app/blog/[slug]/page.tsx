import { getPostContent, getPosts } from '@/_blog/util';

export async function generateStaticParams() {
  return getPosts();
}

type BlogPostProps = {
  params: {slug: string};
}

export default async function BlogPost(props: BlogPostProps) {
  const {html} = await getPostContent(props.params.slug);
  return (
    <>
      <div dangerouslySetInnerHTML={{__html: html}} />
    </>
  );
}