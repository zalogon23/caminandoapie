import React from 'react'
import SEOHead from '../../components/SEOHead'
import queries from '../../lib/queries'
import client from "../../lib/apolloClient"
import Article from '../../components/Article'
import Hero from '../../components/Hero'

function BlogPost({ content, smImage, bigImage, seo }) {
  return (
    <>
      <SEOHead {...seo} />
      <Hero
        smImage={smImage.formats.medium.url} bigImage={bigImage.formats.medium.url}
        smAlt={smImage.alternativeText} bigAlt={bigImage.alternativeText}
      />
      <Article main content={content} />
    </>
  )
}

export default BlogPost

export async function getStaticProps({ params: { id } }) {

  const result = await client.query({ query: queries.blogPostByID, variables: { id: Number(id) } });
  console.log(result.data.posts[0])

  return ({
    props: {
      content: result.data.posts[0].content,
      seo: result.data.posts[0].seo,
      smImage: result.data.posts[0].smImage,
      bigImage: result.data.posts[0].bigImage,
    }
  })
}

export async function getStaticPaths() {

  const result = await client.query({ query: queries.blogPostsIDs });
  const paths = result.data.posts.map(post => ({ params: { id: post.id } }))

  return ({
    paths,
    fallback: "blocking"
  })
}
