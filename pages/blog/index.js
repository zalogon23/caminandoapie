import { Heading } from "@chakra-ui/react";
import Article from "../../components/Article";
import Card from "../../components/Card";
import Hero from "../../components/Hero";
import SEOHead from "../../components/SEOHead";
import fontSizes from "../../lib/fontSizes";
import queries from "../../lib/queries";
import client from "../../lib/apolloClient"
import CardsShelf from "../../components/CardsShelf";

export default function Blog({ posts }) {
  return (
    <>
      <SEOHead
        title="Blog"
        description="Descubre todo lo que puedas necesitar saber sobre la historia de diversos lugares turísticos, datos curioso sobre viajeros y consejos para nómadas en busca de la tierra prometida."
        keywords="turismo blog posts consejos ayuda viajes viajero entretenimiento historia europa asia sudamerica mochilero equipaje caminando a pie"
      />
      <Hero bigImage="/blog.jpg" bigAlt="Libreria con pilares enroscados, cupulas con obras de arte pintadas, y mesas de caoba con modelos a escala de la tierra" smImage="/blogsmall.jpg" smAlt="Escritorio elegante pero austero, con unos libros rojos encima, y una lampara, acompañado de una silla. En biblioteca llena de libros hasta el suelo">
        <Heading as="h2" textAlign="center" fontSize={fontSizes.heading} color="white" px="4" py="2" rounded="xl" lineHeight="1.5em" bg="blackAlpha.700" position="absolute" left="3%" right="3%" top="18%">Descubre todo lo relacionado con viajes, historia y exploración.</Heading>
      </Hero>
      <CardsShelf wide>
        {
          posts.map(post => (
            <Card cover h={["18rem"]} key={post.id} title={post.seo.title} link={`/blog/${post.id}`} to="Leer mas" aria={`Ir al post sobre ${post.title}`} content={post.shortContent} images={[post.mainImage]} large={false} />
          ))
        }
      </CardsShelf>
    </>
  )
}

export async function getStaticProps() {
  const result = await client.query({ query: queries.blogPosts })
  return ({
    props: {
      posts: result.data.posts
    }
  })
}