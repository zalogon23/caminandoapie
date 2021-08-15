import { Divider, Heading } from '@chakra-ui/react'
import React from 'react'
import Hero from '../../components/Hero'
import SEOHead from '../../components/SEOHead'
import fontSizes from '../../lib/fontSizes'
import client from "../../lib/apolloClient"
import queries from '../../lib/queries'
import Article from '../../components/Article'
import Card from '../../components/Card'
import CardsSlider from '../../components/CardsSlider'
import { faFacebook, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'

function Contacto({ intro, socialMedia }) {

  const icons = {
    facebook: faFacebook,
    whatsapp: faWhatsapp,
    instagram: faInstagram,
    gmail: faMailBulk,
    linkedin: faLinkedin
  }

  return (
    <>
      <SEOHead
        title="Contacto"
        keywords="turismo contacto gonzalo zarate viajes viajero entretenimiento historia europa asia sudamerica mochilero equipaje caminando a pie"
        description="Si quieres ponerte en contacto conmigo para pedirme algún tópico en especial, o decirme lo que desees. Aquí podrás encontrar mis redes sociales." />
      <Hero smImage="/contactsmall.jpg" smAlt="telefono colgando en un fondo blanco" bigImage="/contact.jpg" bigAlt="buzones coloridos en un paisaje con muchas plantas" >
        <Heading as="h2" textAlign="center" fontSize={fontSizes.heading} color="white" px="4" py="2" rounded="xl" lineHeight="1.5em" bg="blackAlpha.700" position="absolute" left="3%" right="3%" top="18%">Pongámonos en contacto</Heading>
      </Hero>
      <Article content={intro} />
      <Divider style={{ clear: "both" }} borderColor="gray.400" />
      <CardsSlider title="Medios" >
        {
          socialMedia.map((social, id) => (
            <Card
              key={`card${id}`}
              icon={icons[social.icon]}
              title={social.title}
              content={social.content}
              link={social.link}
              to={social.to}
              aria={social.aria}
            />
          ))
        }
      </CardsSlider>
    </>
  )
}

export default Contacto

export async function getStaticProps() {
  const result = await client.query({ query: queries.contacto })

  return ({
    props: {
      intro: result.data.contacto.intro,
      socialMedia: result.data.contacto.socialMedia
    }
  })
}
