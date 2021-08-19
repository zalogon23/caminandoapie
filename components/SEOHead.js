import React from 'react'
import Head from "next/head"

function SEOHead({ title, keywords, description, og, image, url }) {
  return (
    <Head>
      <title>{`Caminando a pie | ${title}`}</title>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      {
        og &&
        <>
          <meta property="og:type" content="article" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={image} />
          <meta property="og:url" content={url} />
          <meta property="og:site_name" content="Caminando a pie" />
        </>
      }
    </Head>
  )
}

export default SEOHead
