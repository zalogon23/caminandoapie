import React from 'react'
import Head from "next/head"

function SEOHead({ title, keywords, description }) {
  return (
    <Head>
      <title>{`Caminando a pie | ${title}`}</title>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <div id="fb-root"></div>
      <script async defer crossorigin="anonymous" src="https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v11.0" nonce="H3wbr24a" />
    </Head>
  )
}

export default SEOHead
