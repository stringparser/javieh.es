import Index from './index.mdx';

export default function Home() {
  return (
    <div className="prose prose-invert text-zinc-400 px-4 sm:px-6 md:px-8 mx-auto">
      <h1 className="py-1 mx-auto text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
        ¡Hola muy buenas!
      </h1>
      <main>
        <article>
          <Index />
        </article>
      </main>
    </div>
  );
}