import client from "../lib/apolloClient"
import Article from "../components/Article";
import EmailRequest from "../components/EmailRequest";
import Hero from "../components/Hero";
import SEOHead from "../components/SEOHead";
import queries from "../lib/queries";
import CardBanner from "../components/CardBanner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faBreadSlice, faBurn, faChessKing, faEye, faEyeSlash, faHiking, faScroll, faTree } from "@fortawesome/free-solid-svg-icons";
import List from "../components/List";
import Card from "../components/Card";
import CardsSlider from "../components/CardsSlider";
import { Divider } from "@chakra-ui/react";

export default function Home({ content, personal }) {
  return (
    <>
      <SEOHead
        title="Inicio"
        keywords="turismo viajes viajero entretenimiento historia europa asia sudamerica mochilero equipaje caminando a pie"
        description="Ven a descubrir la increible historia que esconde el lugar que estás planeando visitar. Para que disfrutes de tu viaje mucho mas de lo que habías pensado." />
      <Hero smImage="/herosmall.jpg" bigImage="/hero.jpg">
        <EmailRequest />
      </Hero>
      <Article content={content} />
      <CardBanner color="white" side="right" icon={<FontAwesomeIcon icon={faEyeSlash} />} bg="orange.500" title="Solemos no ver"
        content="Lo que nos rodea es tan fuerte, que no vemos, lo que hubo. Y durante años, yo tampoco lo veía. Pero, tras descubrir la emoción de solo pensar. Que donde estoy parado ocurrió una guerra, una revolución, hubo un imperio, una traición, un amor. Es simplemente indescriptible." />
      <CardBanner icon={<FontAwesomeIcon icon={faEye} />} bg="orange.300" title="Por eso..."
        content="Así como en su momento, el azar se encargó de dejarme conocer a distintos personajes. Que me permitieron oler, lo que no sabía siquiera que existía. Yo estoy dispuesto a devolver ese favor. Y ayudarte a encontrar, el valor de lo 'ya ocurrido'." />
      <CardsSlider title="Contenido">
        <Card aria="Ir al blog a leer sobre costumbres locales" title="Costumbres Únicas" link="/blog" to="¿Cuáles?" content="Nos dedicaremos a descubrir que es lo que hace de las distintas culturas, algo especial. Y tú decidirás cual te despierta esa chispa para visitarla." icon={faBurn} />
        <Card aria="Ir al blog a leer sobre personajes interesantes" title="Personajes" link="/blog" to="¿Quiénes?" content="Momentos interesantes de las vidas de Carlomagno, Robespierre o Napoleón. Sus proezas y los lugares donde las llevaron a cabo." icon={faChessKing} />
        <Card aria="Ir al blog a leer sobre lugares" title="Sitios Paradisíacos" link="/blog" to="Quiero conocerlos" content="Esta bien aprender sobre grandes seres históricos, pero... No nos olvidemos de la belleza. Y en honor a ella investigaremos lugares que merecen ser visitados. Y que te dejarán sin aliento..." icon={faHiking} />
      </CardsSlider>
      <Divider style={{ clear: "both" }} borderColor="gray.300" />
      <Article content={personal} />
      <Divider style={{ clear: "both" }} borderColor="gray.300" />
      <List title="Objetivos" items={[
        { text: "Descubrir nuevos destinos que visitar. Los mas exóticos, inusuales y únicos.", icon: faTree },
        { text: "Aprender sobre su historia. Que secretos guardan sus paredes. Para poder oirlas.", icon: faBrain },
        { text: "Planear las mejores rutas de viaje. Para ahorrarnos tiempo y dinero.", icon: faScroll },
      ]} />
    </>
  )
}

export async function getStaticProps() {
  const result = await client.query({ query: queries.home })
  return {
    props: {
      content: result.data.home.intro,
      personal: result.data.home.personal
    }
  }
}

