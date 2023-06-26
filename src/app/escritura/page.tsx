export const meta = {
  title: 'Escritura',
  description: 'Solo poemas por ahora',
};

export default function Escritura() {
  return (
    <div className="space-y-6">
      <h1 className="title">Escritura</h1>
      <p>
        Ahora mismo, aparte del <a href="/blog">blog</a>, solo hay algo de
        poesía{' '}
        <a className="text-link" href="https://www.instagram.com/seniorgrillo/">
          en instagram
        </a>
        .
      </p>
    </div>
  );
}
