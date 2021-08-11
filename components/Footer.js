import Link from 'next/link'
import { Link as ChakraLink, Box, Text, Heading, Image, Button } from "@chakra-ui/react"
import React from 'react'
import fontSizes from '../lib/fontSizes'

function Footer() {
  return (
    <Box as="footer" bg="teal.500" color="white" display="flex" justifyContent="center" flexDir="column" alignItems="center">
      <Box py="8" px="2" bg="teal.400" color="black" w="100%" display="flex" justifyContent="center" alignItems="center">
        <Box rounded="2xl" p="4" pb="12" bg="white" maxW="850px" display="flex" flexDir="column" alignItems="center" justifyContent="center">
          <Heading lineHeight="1.5em" pt="6" pb="16" display="flex" flexDir="column" alignItems="center" color="teal.600" fontSize={fontSizes.heading} as="h3">
            "Mientras aun me quede algo por hacer. No habré hecho nada..."
            <Text color="red.800" as="span" display="block" fontWeight="black">- Julio Cesar</Text>
          </Heading>
          <Image w="10em" h="10em" src="/laurel.png" />
          <Text pt="14" pb="10" color="gray.400" lineHeight="2em" fontSize={fontSizes.paragraph} >
            Este tipo de frases mueven este proyecto adelante. Y desde acá te incentivamos a que dejes tu zona de confort. Viajes, aprendas, experimentes. Nuestro único deseo es que este templo que hemos creado, te permita encontrar esa inspiración. Esa información que estás necesitando. Comparte este sitio con tus amigos si crees que puede servirles también.
            <Text as="span" color="gray.500" display="block">¡Te deseamos un buen viaje, aventurero!</Text>
          </Text>
          <Link href="/blog"><Button colorScheme="teal" aria-label="Ir al blog para buscar temas de interes">Descubrir información valiosa</Button></Link>
        </Box>
      </Box>
      <Link href="/" passHref><ChakraLink p="2" fontSize={fontSizes.paragraph} aria-label="Contactar al desarrollador de este sitio">Desarrollado por <Text as="span" fontWeight="black">Virtualizar</Text></ChakraLink></Link>
    </Box>
  )
}

export default Footer
