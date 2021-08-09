import { Box, Heading, IconButton, Link as ChakraLink } from '@chakra-ui/react'
import Link from "next/link"
import fontSizes from "../lib/fontSizes"
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faGlobeAfrica } from '@fortawesome/free-solid-svg-icons'
import VNavBar from './VNavBar'
import HNavBar from './HNavBar'

function Header() {

  const [open, setOpen] = useState(false)
  const switchOpen = () => setOpen(!open)

  return (
    <Box as="header">
      <Box maxH="15vh" d="flex" minH="4rem" alignItems="center" justifyContent="space-between" bg="teal.400" py="3" px="2">
        <Box d="flex" alignItems="center">
          <Link href="/">
            <IconButton colorScheme="teal" aria-label="Ir a la pagina de inicio" rounded="full">
              <FontAwesomeIcon size="2x" icon={faGlobeAfrica} />
            </IconButton>
          </Link>
          <Link href="/" passHref>
            <ChakraLink color="teal.600">
              <Heading as="h1" fontSize={fontSizes.heading} px="2">Caminando a pie</Heading>
            </ChakraLink>
          </Link>
        </Box >
        <IconButton d={{ "lg": "none" }} onClick={switchOpen} colorScheme="teal" aria-label="Abrir el menu de navegacion">
          <FontAwesomeIcon icon={faBars} />
        </IconButton>
        <HNavBar />
      </Box>
      <VNavBar open={open} />
    </Box >
  )
}

export default Header
