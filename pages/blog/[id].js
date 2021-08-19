import React from 'react'
import SEOHead from '../../components/SEOHead'
import queries from '../../lib/queries'
import client from "../../lib/apolloClient"
import Article from '../../components/Article'
import Hero from '../../components/Hero'
import Share from '../../components/Share'
import { Divider, Heading } from '@chakra-ui/react'
import fontSizes from '../../lib/fontSizes'
import HeroHeading from '../../components/HeroHeading'

function BlogPost({ content, smImage, bigImage, seo, id }) {
  console.log(id)
  return (
    <>
      <SEOHead {...seo} og image={bigImage.formats.medium.url} url={`https://caminandoapie.vercel.app/blog/${id}`} />
      <Hero
        smImage={smImage.formats.medium.url} bigImage={bigImage.formats.medium.url}
        smAlt={smImage.alternativeText} bigAlt={bigImage.alternativeText}
      >
        <HeroHeading>{seo.title}</HeroHeading>
      </Hero>
      <Article main content={content} />
      <Divider style={{ clear: "both" }} borderColor="gray.400" />
      <Share id={String(id)} />
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
      id
    },
    revalidate: 10
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
