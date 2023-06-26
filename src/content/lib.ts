import { join } from 'path';
import remarkGfm from 'remark-gfm';
import { matter } from 'vfile-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import type { VFile } from 'vfile';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkFrontmatter from 'remark-frontmatter';
import { readFile, readdir } from 'fs/promises';

import { sortMDByDate } from '@/lib/post';
import { TPost, tPostSchema } from '@/content/config';

export const BLOG_DIRNAME = join(process.cwd(), 'src', 'content', 'post');
export const BLOG_FILE_FORMAT_RE = /\.mdx?$/;

export async function fetchAllPostsByDate(limit?: number) {
  return readdir(BLOG_DIRNAME)
    .then((files) => files.filter((el) => BLOG_FILE_FORMAT_RE.test(el)))
    .then((files) => Promise.all(files.map((el) => getPostContent(el))))
    .then((posts) => sortMDByDate(posts))
    .then((posts) => (limit ? posts.slice(0, limit) : posts));
}

export async function getPostContent(slug: string): Promise<TPost> {
  const path = join(BLOG_DIRNAME, slug);
  const content = await readFile(path, 'utf8');

  return processMDX({
    slug,
    path,
    content,
  });
}

async function processMDX(post: Omit<TPost, 'data' | 'html'>): Promise<TPost> {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypePrettyCode)
    .use(rehypeStringify)
    .use(remarkFrontmatter)
    .use(extractFrontmatter)
    .process(post.content);

  return tPostSchema.parse({
    ...post,
    data: file.data.matter as TPost['data'],
    html: String(file),
  });
}

export default function extractFrontmatter() {
  return function extractFileFrontmatter(_: any, file: VFile) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    matter(file);
  };
}
