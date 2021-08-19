import { Divider, Heading } from '@chakra-ui/react'
import React from 'react'
import Article from '../../components/Article'
import Hero from '../../components/Hero'
import SEOHead from '../../components/SEOHead'
import fontSizes from '../../lib/fontSizes'
import client from "../../lib/apolloClient"
import queries from '../../lib/queries'
import CardBanner from '../../components/CardBanner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPizzaSlice, faTint, faWater } from '@fortawesome/free-solid-svg-icons'
import HeroHeading from '../../components/HeroHeading'

function Sobremi({ presentation, projects }) {
  return (
    <>
      <SEOHead
        title="Sobre mi"
        keywords="turismo nosotros sobre mi gonzalo zarate viajes viajero entretenimiento historia europa asia sudamerica mochilero equipaje caminando a pie"
        description="Un breve resumen sobre quien soy y que pretendo con este sitio. Dedicado principalmente a la historia, filosofía, filología, entre otras disciplinas afines. Y otras un tanto desafinadas." />
      <Hero bigImage="/nosotros.jpg" bigAlt="autor del caminado a pie mirando hacia en mar en una tarde nublada" smImage="/nosotrossmall.jpg" smAlt="autor de caminado a pie en una playa rocosa durante la tarde" position="center">
        <HeroHeading>Un poco sobre mí</HeroHeading>
      </Hero>
      <Article content={presentation} />
      <CardBanner color="white" icon={<FontAwesomeIcon icon={faPizzaSlice} />} title="Intentando disciplinarme" bg="orange.400"
        content="Elegí este ícono ironicamente pues... Estoy apengándome estrictamente a una alimentación con aires 'celíacos'. Mas verduras y frutas. Evitar el azúcar. Todo lo que me pueda ayudar a rendir al máximo." />
      <CardBanner color="white" icon={<FontAwesomeIcon icon={faTint} />} title="Y tomándomelo enserio" bg="orange.500"
        content="También, otro 'cambio positivo'... fue decidir que la temperatura del agua no importa. Así que si hacen 14 grados, y el agua está hielo, igual me toca bañarme en frío (Con el tiempo deja de ser tan 'horrible')." />
      <Article content={projects} />
      <Divider style={{ clear: "both" }} />
    </>
  )
}

export default Sobremi

export async function getStaticProps() {
  const result = await client.query({ query: queries.sobremi });
  return ({
    props: {
      presentation: result.data.sobremi.presentation,
      projects: result.data.sobremi.projects
    }
  })
}
