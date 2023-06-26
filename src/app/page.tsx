import SocialList from '@/components/social/SocialList';
import { fetchAllPostsByDate } from '@/content/lib';
import PostsList from '@/components/blog/PostsList';

const MAX_POSTS = 10;

export default async function Index() {
  const allPostsByDate = await fetchAllPostsByDate(MAX_POSTS);

  return (
    <>
      <section>
        <h1 className="title mb-6">¡Hola muy buenas!</h1>
        <p className="mb-4">
          Ha llegado uhté a la página web de Javier Carrillo Milla. Si este
          mensage le parece raro... ¡vamos bien!
        </p>
        <p className="mb-4">Curiosea un poco.</p>
        <SocialList />
      </section>
      <section aria-label="Blog post list" className="mt-16">
        <PostsList title="Entradas recientes" posts={allPostsByDate} />
      </section>
      <section className="mt-16">
        <h2 className="title mb-4 text-xl">Trabajo</h2>
        <p className="mb-4">Mi ocupación profesional es como programador.</p>
        <p className="mb-4">
          Puedes ver{' '}
          <a className="text-link" href="https://stringparser.github.io/cv">
            mi cv aquí
          </a>
          .
        </p>
      </section>
    </>
  );
}
