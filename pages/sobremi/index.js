import { Heading } from '@chakra-ui/react'
import React from 'react'
import Article from '../../components/Article'
import Hero from '../../components/Hero'
import SEOHead from '../../components/SEOHead'
import fontSizes from '../../lib/fontSizes'

function Sobremi() {
  return (
    <>
      <SEOHead
        title="Sobre mi"
        keywords="turismo nosotros sobre mi gonzalo zarate viajes viajero entretenimiento historia europa asia sudamerica mochilero equipaje caminando a pie"
        description="Un breve resumen sobre quien soy y que pretendo con este sitio. Dedicado principalmente a la historia, filosofia, filologia, entre otras disciplinas afines. Y otras un tanto desafinadas." />
      <Hero bigImage="/nosotros.jpg" smImage="/nosotrossmall.jpg" position="center">
        <Heading as="h2" textAlign="center" fontSize={fontSizes.heading} color={["white", , , "black"]} px="4" py="2" rounded="xl" lineHeight="1.5em" bg={["blackAlpha.700", , , "transparent"]} position="absolute" left="3%" right="3%" top="18%">
          ¡Te doy la bienvenida a CAMINANDO A PIE!</Heading>
      </Hero>
      <Article content="<p>Algo bacano</p>" />
    </>
  )
}

export default Sobremi
