import { TPost } from '@/content/config';

export function sortMDByDate(posts: TPost[] = []) {
  return posts.sort(
    (a, b) =>
      new Date(b.data.publishDate).valueOf() -
      new Date(a.data.publishDate).valueOf()
  );
}

export function getUniqueTags(posts: TPost[] = []) {
  const uniqueTags = new Set<string>();
  posts.forEach((post) => {
    post.data.tags.map((tag) => uniqueTags.add(tag));
  });
  return Array.from(uniqueTags);
}

export function getUniqueTagsWithCount(posts: TPost[] = []): {
  [key: string]: number;
} {
  return posts.reduce((prev, post) => {
    const runningTags: { [key: string]: number } = { ...prev };
    post.data.tags.forEach((tag) => {
      runningTags[tag] = (runningTags[tag] || 0) + 1;
    });
    return runningTags;
  }, {});
}
