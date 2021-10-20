import Head from 'next/head';

const defaultTitle = {
  title: 'Project title',
  description:
    'Project description',
  url: 'google.com',
  image: '/images/img1.png'
};

export const SEO = ({
  title = defaultTitle.title,
  description = defaultTitle.description,
  url = defaultTitle.url,
  image = defaultTitle.image
}) => (
  <Head>
    {/* <!-- Primary Meta Tags --> */}
    {title && <title key="title">{title}</title>}
    {title && <meta key="meta-title" name="title" content={title} />}
    {description && <meta key="meta-description" name="description" content={description} />}

    {/* <!-- Open Graph / Facebook --> */}
    <meta key="og:type" property="og:type" content="website" />
    {url && <meta key="og:url" property="og:url" content={url} />}
    {title && <meta key="og:title" property="og:title" content={title} />}
    {description && <meta key="og:description" property="og:description" content={description} />}
    {image && <meta key="og:image" property="og:image" content={image} />}

    {/* <!-- Twitter --> */}
    <meta key="twitter:card" property="twitter:card" content="summary_large_image" />
    {url && <meta key="twitter:url" property="twitter:url" content={url} />}
    {title && <meta key="twitter:title" property="twitter:title" content={title} />}
    {description && (
      <meta key="twitter:description" property="twitter:description" content={description} />
    )}
    {image && <meta key="twitter:image" property="twitter:image" content={image} />}
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
  </Head>
);
