import React from 'react'
import Head from "next/head"

function SEOHead({title, keywords, description }) {
  return (
    <Head>
      <title>{`Caminando a pie | ${title}`}</title>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
    </Head>
  )
}

export default SEOHead
