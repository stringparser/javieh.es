import Link from 'next/link';

export type BackLinkProps = {
  href: string;
}

export default function BackLink({href}: BackLinkProps) {
  return (
    <div className="mb-10">
       <Link href={href} className="inline-flex border-b-0">{'<'} back</Link>
    </div>
  )
}