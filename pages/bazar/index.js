import { Heading } from '@chakra-ui/react'
import { faBrain } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Card from '../../components/Card'
import CardsShelf from '../../components/CardsShelf'
import Hero from '../../components/Hero'
import SEOHead from '../../components/SEOHead'
import fontSizes from '../../lib/fontSizes'
import queries from '../../lib/queries'
import client from "../../lib/apolloClient"

function Bazar({ products }) {
  console.log(products)
  return (
    <>
      <SEOHead
        title="Bazar"
        description="Para recargar provisiones que será necesarias en tu travesía. Aquí podrás adquirir maletines únicos, chaquetas viajeras y muchos adornos que te darán ese misterio del que llega y se va al día siguiente."
        keywords="turismo bazar tienda articulos chucherias mochilas maletines viajes viajero entretenimiento historia europa asia sudamerica mochilero equipaje caminando a pie"
      />
      <Hero smImage="" smAlt="Una imagen bien pendeja" bigImage="" bigAlt="Otra mas mamona" >
        <Heading as="h2" textAlign="center" fontSize={fontSizes.heading} color="white" px="4" py="2" rounded="xl" lineHeight="1.5em" bg={["blackAlpha.700", , , "transparent"]} position="absolute" left="3%" right="3%" top="18%">
          No olvides llevar provisiones para tu travesía
        </Heading>
      </Hero>
      <CardsShelf title="Mercaderías exóticas">
        {
          products.map((prod, id) => (
            <Card
              key={`card${id}`}
              w="100%"
              maxW="450px"
              images={prod.images.filter(image => image.formats.medium)}
              title={prod.name}
              content={prod.cardDescription}
            />
          ))
        }
      </CardsShelf>
    </>
  )
}

export default Bazar

export async function getStaticProps() {
  const result = await client.query({ query: queries.productCards });

  return ({
    props: {
      products: result.data.products
    },
    revalidate: 10
  })
}
