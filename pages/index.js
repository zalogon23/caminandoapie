import client from "../lib/apolloClient"
import Article from "../components/Article";
import EmailRequest from "../components/EmailRequest";
import Hero from "../components/Hero";
import SEOHead from "../components/SEOHead";
import queries from "../lib/queries";
import CardBanner from "../components/CardBanner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faBreadSlice, faEye, faEyeSlash, faScroll, faTree } from "@fortawesome/free-solid-svg-icons";
import List from "../components/List";
import Card from "../components/Card";
import CardsSlider from "../components/CardsSlider";
import { Divider } from "@chakra-ui/react";

export default function Home({ content }) {
  console.log(content)
  return (
    <>
      <SEOHead title="Inicio" keywords="turismo viajes viajero entretenimiento historia europa asia sudamerica mochilero equipaje caminando a pie"
        description="Ver el mundo que nos rodea, a traves de otros ojos. Que seas capaz de percibir en un paisaje normal, lo que ocurrió en el, hace años, y te sientas inmerso en sus emociones. Eso es lo que queremos que puedas experimentar al ir a cualquier lugar histórico, que observes el mundo a travez de este filtro." />
      <Hero smImage="/herosmall.jpg" bigImage="/hero.jpg">
        <EmailRequest />
      </Hero>
      <Article content={content} />
      <CardBanner side="right" icon={<FontAwesomeIcon icon={faEyeSlash} />} bg="teal.500" title="Solemos no ver" content={"Acostumbrados a solo mirar lo que nos rodea. Olvidamos lo que antes hubo. Y que... así como nosotros \"somos\", las civilizaciones que nos precedieron, también \"eran\"."} />
      <CardBanner icon={<FontAwesomeIcon icon={faEye} />} bg="teal.300" title="Pero, a partir de hoy..." content="Hemos decidido devolverte lo que ya es tuyo. Poder ver lo que te rodea y emocionarte. No por lo que hay ahora. Sino, por lo que hubo. Vivir nuevamente la magia de antaño. Y ver en unas simples ruinas... un, antes, GRANDIOSO IMPERIO." />
      <CardsSlider>
        <Card title="La conchetumare" content="La concha bien salida del ano de tu vie..." icon={faBreadSlice} />
        <Card title="La dfsdfsdfsd" content="La concha bien salida del ano de tu vie..." icon={faBreadSlice} />
        <Card title="La concfsdddddddddddddddddddddhetumare" content="La concha bien salida del ano de tu vie..." icon={faBreadSlice} />
      </CardsSlider>
      <Divider style={{ clear: "both" }} borderColor="gray.300" />
      <List title="Objetivos" items={[
        { text: "Descubrir nuevos lugares, exóticos y paradisíacos", icon: faTree },
        { text: "Aprender que ocurrió en ellos para disfrutar mas del paisaje", icon: faBrain },
        { text: "Planear las mejores rutas de viaje para ahorrar tiempo y dinero", icon: faScroll },
      ]} />
    </>
  )
}

export async function getStaticProps() {
  const result = await client.query({ query: queries.home })
  console.log(result)
  return {
    props: {
      content: result.data.home.intro.content
    }
  }
}

