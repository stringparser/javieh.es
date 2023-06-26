import { siteConfig } from '@/site.config';
import type { SiteMeta } from '@/data/siteMeta';

export default function BaseHead(props: SiteMeta) {
  const { title, description, ogImage, articleDate } = props;
  const config = {
    url: new URL('/blog', 'https://javieh.es'),
    site: 'https://javieh.es',
  };

  const titleSeparator = '•';
  const siteTitle = `${title} ${titleSeparator} ${siteConfig.title}`;
  const canonicalURL = new URL(config.url.pathname, config.site).toString();
  const socialImageURL = new URL(
    ogImage ? ogImage : '/social-card.png',
    config.url
  ).href;

  return (
    <>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.webmanifest" />
      <link rel="canonical" href={canonicalURL} />

      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={description} />
      <meta name="author" content={siteConfig.author} />

      <meta name="theme-color" content={siteConfig.themeColorLight} />

      <meta property="og:type" content={articleDate ? 'article' : 'website'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalURL} />
      <meta property="og:site_name" content={siteConfig.title} />
      <meta property="og:locale" content={siteConfig.ogLocale} />
      <meta property="og:image" content={socialImageURL} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {articleDate && (
        <>
          <meta property="article:author" content={siteConfig.author} />
          <meta property="article:published_time" content={articleDate} />
        </>
      )}

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalURL} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={socialImageURL} />

      <link
        rel="alternate"
        type="application/rss+xml"
        title={siteConfig.title}
        href="/rss.xml"
      />
    </>
  );
}
