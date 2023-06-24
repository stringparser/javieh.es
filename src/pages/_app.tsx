import Image from 'next/image';
import { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react';

import Layout from '@/components/RootLayout'
import { MDXComponents } from 'mdx/types';

const mdxComponents: MDXComponents = {
  img: props => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return <Image alt="image" {...props} />
  }
}

function renderPage(props: AppProps) {
  const {Component, pageProps} = props;

  if (/MDX/.test(Component.name)) {
    return (
      <MDXProvider components={mdxComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    )
  }

  return <Component {...pageProps} />
}

export default function App(props: AppProps) {
  return (
    <Layout>
      {renderPage(props)}

      <style jsx global>{`
          code {
            counter-reset: line;
          }

          code > [data-line]::before {
            counter-increment: line;
            content: counter(line);

            /* Other styling */
            display: inline-block;
            width: 1rem;
            margin-right: 2rem;
            text-align: right;
            color: gray;
          }

          code[data-line-numbers-max-digits='2'] > [data-line]::before {
            width: 2rem;
          }

          code[data-line-numbers-max-digits='3'] > [data-line]::before {
            width: 3rem;
          }
      `}</style>
    </Layout>
  )
}