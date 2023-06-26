import { z } from 'zod';

function removeDupsAndLowerCase(array: string[]) {
  if (!array.length) return array;
  const lowercaseItems = array.map((str) => str.toLowerCase());
  const distinctItems = new Set(lowercaseItems);
  return Array.from(distinctItems);
}

export const tPostSchema = z.object({
  path: z.string(),
  slug: z.string(),
  html: z.string(),
  content: z.string(),
  data: z.object({
    tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
    title: z.string().max(60),
    ogImage: z.string().optional(),
    description: z.string().min(50).max(160),
    publishDate: z.string().transform((str) => new Date(str)),
  }),
});

export type TPost = z.infer<typeof tPostSchema>;
