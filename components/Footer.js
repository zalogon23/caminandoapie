import Link from 'next/link'
import { Link as ChakraLink, Box, Text, Heading, Image, Button } from "@chakra-ui/react"
import React from 'react'
import fontSizes from '../lib/fontSizes'

function Footer() {
  return (
    <Box as="footer" bg="orange.500" color="white" display="flex" justifyContent="center" flexDir="column" alignItems="center">
      <Box py="8" px="2" bg="orange.400" color="black" w="100%" display="flex" justifyContent="center" alignItems="center">
        <Box rounded="2xl" p="4" pb="12" bg="white" maxW="850px" display="flex" flexDir="column" alignItems="center" justifyContent="center">
          <Heading as="h3" lineHeight="1.5em" pt="6" pb="16" display="flex" flexDir="column" alignItems="center" color="orange.600" fontSize={fontSizes.heading}>
          &apos;Mientras aun me quede algo por hacer. No habré hecho nada...&apos;
            <Text color="red.800" as="span" display="block" fontWeight="black">- Julio Cesar</Text>
          </Heading>
          <Image w="10em" h="10em" src="/laurel.png" alt="coronas de laureles dorados" />
          <Text pt="14" pb="10" color="gray.400" lineHeight="2em" fontSize={fontSizes.paragraph} >
            ¿Cuanta razón puede haber en tan pocas palabras? Personajes como este suelen ser una gran inspiración para mi.
            No vivimos en tiempos de generales de guerra. Pero la necesidad de disciplina para mover cualquier proyecto adelante es perenne.
            Y fuera de que este sitio sea para mi una muestra y desafío a la vez. Espero que logren ustedes encontrar esa determinación para avanzar.
            Personalmente, leer y oír de seres tan grandes. Me motiva a dejar de ser tan pequeño.
            <Text as="span" color="gray.500" display="block">¡Así que, desde acá, te aplaudo que sigas empujando! Para adelante</Text>
          </Text>
          <Link href="/blog" passHref><Button colorScheme="orange" aria-label="Ir al blog para buscar temas de interes">Descubrir información valiosa</Button></Link>
        </Box>
      </Box>
      <Link href="/" passHref><ChakraLink p="2" fontSize={fontSizes.paragraph} aria-label="Contactar al desarrollador de este sitio">Desarrollado por <Text as="span" fontWeight="black">Virtualizar</Text></ChakraLink></Link>
    </Box>
  )
}

export default Footer
