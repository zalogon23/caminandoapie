import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import EmailRequest from './EmailRequest'

function Hero({ smImage, bigImage, children, position = "center" }) {
  return (
    <Box as="section" pos="relative" overflow="hidden" bg="orange.600">
      <Box pos="relative">
        <Image fallbackSrc="/loading.jpg" w="full" d={{ "lg": "none" }} maxH="90vh" objectPosition={position} fit="cover" src={smImage} />
        <Image fallbackSrc="/loading.jpg" w="full" d={["none", , , "block"]} maxH="90vh" objectPosition={position} fit="cover" src={bigImage} />
        {children}
      </Box>
    </Box>
  )
}

export default Hero
