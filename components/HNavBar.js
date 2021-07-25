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
        <Link href="/" >
          <Button
            fontSize={fontSizes.paragraph}
            aria-label="Ir a la pagina de inicio"
            leftIcon={<FontAwesomeIcon icon={faHome} />}
            colorScheme="teal" variant="ghost" ml="1">Inicio</Button>
        </Link>
        <Link href="/nosotros">
          <Button
            fontSize={fontSizes.paragraph}
            aria-label="Ir a la pagina sobre nosotros"
            leftIcon={<FontAwesomeIcon icon={faPeopleCarry} />}
            colorScheme="teal" variant="ghost" ml="1">Nosotros</Button>
        </Link>
        <Link href="/contacto">
          <Button
            fontSize={fontSizes.paragraph}
            aria-label="Ir a la pagina de contacto"
            leftIcon={<FontAwesomeIcon icon={faPhone} />}
            colorScheme="teal" variant="ghost" ml="1">Contacto</Button>
        </Link>
        <Link href="/bazar">
          <Button
            fontSize={fontSizes.paragraph}
            aria-label="Ir a la tienda"
            leftIcon={<FontAwesomeIcon icon={faStore} />}
            colorScheme="teal" variant="ghost" ml="1">Bazar</Button>
        </Link>
        <Link href="/blog">
          <Button
            fontSize={fontSizes.paragraph}
            aria-label="Ir al blog"
            leftIcon={<FontAwesomeIcon icon={faBook} />}
            colorScheme="teal" variant="ghost" ml="1">BLOG</Button>
        </Link>
      </Box>
    </Box>
  )
}

export default HNavBar
