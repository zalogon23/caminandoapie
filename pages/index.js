import client from "../lib/apolloClient"
import Article from "../components/Article";
import EmailRequest from "../components/EmailRequest";
import Hero from "../components/Hero";
import SEOHead from "../components/SEOHead";
import queries from "../lib/queries";

export default function Home({ content }) {
  console.log(content)
  return (
    <>
      <SEOHead title="Inicio" keywords="turismo viajes viajero entretenimiento historia europa asia sudamerica mochilero equipaje caminando a pie"
        description="Ver el mundo que nos rodea, a traves de otros ojos. Que seas capaz de percibir en un paisaje normal, lo que ocurrió en el, hace años, y te sientas inmerso en sus emociones. Eso es lo que queremos que puedas experimentar al ir a cualquier lugar histórico, que observes el mundo a travez de este filtro." />
      <Hero smImage="/herosmall.jpg" bigImage="/hero.jpg">
        <EmailRequest />
      </Hero>
      <Article content={content}
      // {`
      // <h2>Nos vamos a dedicar a la pesca indiscriminada</h2>
      // <p>Nos vamos a dedicar <strong>algo</strong> a la pesca indiscriminada Nos vamos <a href="/nosotros">Esto te lleva a otro lado</a> a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada</p>
      // <img src="herosmall.jpg" alt="la conche la lora"/>
      // <h3>Esto sería un subtítulo...</h3>
      // <p>Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada</p>
      // <p>Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada</p>
      // <p>Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada</p>
      // <p>Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada</p>
      // <p>Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada</p>
      // <img src="herosmall.jpg" alt="la conche la lora"/>
      // <p>Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada</p>
      // <p>Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada</p>
      // <p>Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada Nos vamos a dedicar a la pesca indiscriminada</p>
      // <a href="/nosotros">Esto te lleva a otro lado</a>
      // `}
       />
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