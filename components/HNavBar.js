import { Box, Button } from '@chakra-ui/react'
import Link from "next/link"
import fontSizes from "../lib/fontSizes"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faHome, faPeopleCarry, faPhone, faStore } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

function HNavBar() {
  return (
    <Box as="nav" d={["none", , , "block"]}>
      <Box as="ul" d="flex">
        <Link href="/" passHref>
          <Button
            fontSize={fontSizes.paragraph}
            aria-label="Ir a la pagina de inicio"
            leftIcon={<FontAwesomeIcon icon={faHome} />}
            colorScheme="orange" variant="ghost" ml="1">Inicio</Button>
        </Link>
        <Link href="/sobremi" passHref>
          <Button
            fontSize={fontSizes.paragraph}
            aria-label="Ir a la pagina sobre mi"
            leftIcon={<FontAwesomeIcon icon={faPeopleCarry} />}
            colorScheme="orange" variant="ghost" ml="1">Sobre mí</Button>
        </Link>
        <Link href="/contacto" passHref>
          <Button
            fontSize={fontSizes.paragraph}
            aria-label="Ir a la pagina de contacto"
            leftIcon={<FontAwesomeIcon icon={faPhone} />}
            colorScheme="orange" variant="ghost" ml="1">Contacto</Button>
        </Link>
        <Link href="/bazar" passHref>
          <Button
            fontSize={fontSizes.paragraph}
            aria-label="Ir a la tienda"
            leftIcon={<FontAwesomeIcon icon={faStore} />}
            colorScheme="orange" variant="ghost" ml="1">Bazar</Button>
        </Link>
        <Link href="/blog" passHref>
          <Button
            fontSize={fontSizes.paragraph}
            aria-label="Ir al blog"
            leftIcon={<FontAwesomeIcon icon={faBook} />}
            colorScheme="orange" variant="ghost" ml="1">BLOG</Button>
        </Link>
      </Box>
    </Box>
  )
}

export default HNavBar
