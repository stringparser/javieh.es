import { join } from 'path';
import {matter} from 'vfile-matter'
import type {VFile} from 'vfile';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkFrontmatter from 'remark-frontmatter';
import { readFile, readdir } from 'fs/promises';

export const BLOG_DIRNAME = join(process.cwd(), 'src', '_blog');

export async function getPosts() {
  return readdir(BLOG_DIRNAME)
    .then(files => files.filter(el => /\.mdx$/.test(el)))
    .then(files => files.map(el => el.replace(/\.mdx$/, '')))
    .then(files => Promise.all(files.map(el => getPostContent(el))));
}

export async function getPostContent(slug: string) {
  const path = join(BLOG_DIRNAME, `${slug}.mdx`);
  const props = await processMDX(await readFile(path, 'utf8'));

  return {
    slug,
    path,
    ...props
  }
}


async function processMDX(content: string) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypePrettyCode)
    .use(rehypeStringify)
    .use(remarkFrontmatter)
    .use(extractFrontmatter)
    .process(content)
  ;

  return {
    data: file.data.matter as Partial<{title: string}>,
    html: String(file),
  };
}

export default function extractFrontmatter() {
  return function extractFileFrontmatter(_: any, file: VFile) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    matter(file)
  }
}