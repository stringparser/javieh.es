import Link from 'next/link';
import { getPosts } from '@/_blog/util';

export default async function PostsIndex() {
  const postsSlugs = await getPosts();

  return (
    <div className="container grid grid-flow-row gap-2">
      <h1>Blog</h1>
      <p>Aquí encontrás un poco de todo. Debajo una lista de los post más recientes.</p>
      <ul role="list" className="divide-y divide-gray-700">
      {postsSlugs.map(el => {
        const {slug} = el;

        return (
          <li key={slug} className="flex justify-between gap-x-6 py-5">
            <div className="flex-none">
              <Link href={`/blog/${slug}`} style={{borderBottom: '0'}}>{el.data?.title}</Link>
            </div>
          </li>
        );
      })}
      </ul>
    </div>
  )
}
