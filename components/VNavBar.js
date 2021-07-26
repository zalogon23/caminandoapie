import { faBook, faBookDead, faHome, faPeopleCarry, faPhone, faStore } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Button } from '@chakra-ui/react'
import Link from "next/link"
import React, { useEffect, useState } from 'react'
import fontSizes from '../lib/fontSizes'

function VNavBar({ open: pressedOpen }) {

  const itemHeight = 3
  const itemMargin = 0.2
  const navHeight = (itemHeight + itemMargin) * 5 + itemMargin
  const [open, setOpen] = useState(false)
  const [hadTimeToClose, setHadTimeToClose] = useState(false)

  useEffect(() => {
    if (pressedOpen) {
      setTimeout(() => setOpen(true))
      setHadTimeToClose(false)
    } else {
      setOpen(false)
      setTimeout(() => {
        setHadTimeToClose(true)
      }, 300)
    }
  }, [pressedOpen])

  return (
    <Box bg="teal.500" d={[(pressedOpen && "block") || (hadTimeToClose && "none") || "block", , , "none"]} as="nav" overflow="hidden" transitionDuration="400ms" transitionProperty="all" h={open ? `${navHeight}rem` : "0rem"}>
      <Box as="ul">
        <Link href="/">
          <Button
            fontSize={fontSizes.paragraph}
            mt={`${itemMargin}rem`}
            rightIcon={<FontAwesomeIcon icon={faHome} />}
            colorScheme="teal" h={`${itemHeight}rem`} rounded="0" aria-label="Ir a la pagina de inicio" w="100%"
            color={open ? "white" : "transparent"}
            transitionDuration="150ms"
          >Inicio</Button>
        </Link>
        <Link href="/nosotros">
          <Button
            fontSize={fontSizes.paragraph}
            mt={`${itemMargin}rem`}
            rightIcon={<FontAwesomeIcon icon={faPeopleCarry} />}
            colorScheme="teal" h={`${itemHeight}rem`} rounded="0" aria-label="Ir a la pagina sobre nosotros" w="100%"
            color={open ? "white" : "transparent"}
            transitionDuration="300ms"
          >Nosotros</Button>
        </Link>
        <Link href="/contacto">
          <Button
            fontSize={fontSizes.paragraph}
            mt={`${itemMargin}rem`}
            rightIcon={<FontAwesomeIcon icon={faPhone} />}
            colorScheme="teal" h={`${itemHeight}rem`} rounded="0" aria-label="Ir a la pagina de contacto" w="100%"
            color={open ? "white" : "transparent"}
            transitionDuration="300ms"
          >Contacto</Button>
        </Link>
        <Link href="/bazar">
          <Button
            fontSize={fontSizes.paragraph}
            mt={`${itemMargin}rem`}
            rightIcon={<FontAwesomeIcon icon={faStore} />}
            colorScheme="teal" h={`${itemHeight}rem`} rounded="0" aria-label="Ir a la tienda" w="100%"
            color={open ? "white" : "transparent"}
            transitionDuration="300ms"
          >Bazar</Button>
        </Link>
        <Link href="/blog">
          <Button
            fontSize={fontSizes.paragraph}
            mt={`${itemMargin}rem`}
            rightIcon={<FontAwesomeIcon icon={faBook} />}
            colorScheme="teal" h={`${itemHeight}rem`} rounded="0" aria-label="Ir al blog" w="100%"
            color={open ? "white" : "transparent"}
            transitionDuration="300ms"
          >BLOG</Button>
        </Link>
      </Box>
    </Box>
  )
}

export default VNavBar
