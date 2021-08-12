import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import EmailRequest from './EmailRequest'

function Hero({ smImage, bigImage, children }) {
  return (
    <Box as="section" pos="relative" overflow="hidden" bg="teal.600">
      <Box pos="relative">
        <Image w="full" d={{ "lg": "none" }} maxH="90vh" w="100%" objectPosition="center" fit="cover" src={smImage} />
        <Image w="full" d={["none", , , "block"]} maxH="90vh" w="100%" objectPosition="center" fit="cover" src={bigImage} />
        {children}
      </Box>
    </Box>
  )
}

export default Hero
