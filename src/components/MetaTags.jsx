import React from "react";
import { MetaData } from "../data/variables";

function MetaTags(props) {
  const { section, description, image, url } = props;
  const { website, domain, fb_app_id } = MetaData;

  const social = {
    author: website,
    description: `${website.toUpperCase()} > ${description}`,
    article: section,
    image: image,
    imageAlt: `${website.toUpperCase()} - ${section}`,
    url: url,
  };

  return (
    <>
      <title>{social.description}</title>
      <meta name="description" content={social.description} />

      <meta property="article:author" content={social.author} />
      <meta property="article:publisher" content={social.author} />
      <meta property="article:section" content={social.article} />

      <meta property="fb:app_id" content={fb_app_id} />
      <meta property="og:title" content={social.description} />
      <meta property="og:description" content={social.description} />
      <meta property="og:type" content="article" />
      <meta property="og:locale" content="en_GB" />

      <meta property="og:url" content={social.url} />
      <meta property="og:site_name" content={social.author} />
      <meta property="og:image" content={social.image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={social.imageAlt} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={social.description} />
      <meta name="twitter:description" content={social.description} />
      <meta name="twitter:image" content={social.image} />
      <meta name="twitter:image:alt" content={social.imageAlt} />
      <meta name="twitter:domain" content={domain} />
    </>
  );
}

export default MetaTags;
