import nextMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['es'],
    defaultLocale: 'es',
  },
  pageExtensions: ['tsx', 'mdx'],
};

/** @type {import('rehype-pretty-code').Options} */
const options = {
  grid: false,
};

const withMDX = nextMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, options]],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

/** @type {import('next').NextConfig} */
export default withMDX(nextConfig);
