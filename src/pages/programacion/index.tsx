import { Divider } from '@/components/Divider';
import Link from 'next/link';

export default function Programación() {
  return (
    <>
      <h1>Programación</h1>
      <Divider />

      <p>
        Mi ocupación profesional es como programador
      </p>
      <p>
        Puedes ver mi{' '}
        <a href="https://stringparser.github.io/cv">CV aquí</a>
      </p>
      <p>
        Y aquí{' '}
        <Link href="/blog">un blog de programación</Link>
      </p>
    </>
  );
}
