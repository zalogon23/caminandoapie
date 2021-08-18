import { Box, Button, Heading } from '@chakra-ui/react'
import React from 'react'
import Card from '../../components/Card'
import CardsShelf from '../../components/CardsShelf'
import Hero from '../../components/Hero'
import SEOHead from '../../components/SEOHead'
import queries from '../../lib/queries'
import client from "../../lib/apolloClient"
import HeroHeading from '../../components/HeroHeading'

function Bazar({ products }) {
  return (
    <>
      <SEOHead
        title="Bazar"
        description="Para recargar provisiones que será necesarias en tu travesía. Aquí podrás adquirir maletines únicos, chaquetas viajeras y muchos adornos que te darán ese misterio del que llega y se va al día siguiente."
        keywords="turismo bazar tienda articulos chucherias mochilas maletines viajes viajero entretenimiento historia europa asia sudamerica mochilero equipaje caminando a pie"
      />
      <Hero smImage="/smallbazar.jpg" smAlt="un pasillo lleno de luces y adornos orientales y con aires arabes, unos vestidos de seda y lamparas de colores." bigImage="/bazar.jpg" bigAlt="tienda llena de articulos de fino cuero marron, incluyendo maletines, zapatos, billeteras, correas, entre otros" >
        <HeroHeading>No olvides llevar provisiones para tu travesía</HeroHeading>
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
            >
              <Button
                colorScheme="orange"
                className="snipcart-add-item"
                data-item-url="/bazar"
                data-item-id={prod.id}
                data-item-name={prod.name}
                data-item-price={prod.price}
                data-item-description={prod.cardDescription}
                data-item-image={prod.images.filter(image => image.formats.medium)[0].formats.medium.url}
              >{`Agregar: $${prod.price}`}</Button>
            </Card>
          ))
        }
      </CardsShelf>
      <Box>
        <div id="snipcart" data-config-modal-style="side" data-api-key={process.env.SNIPCART_API_KEY} hidden></div>
      </Box>
      <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.css" />
      <script async src="https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.js"></script>
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
