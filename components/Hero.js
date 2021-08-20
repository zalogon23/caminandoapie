import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import EmailRequest from './EmailRequest'

function Hero({ smImage, bigImage, bigAlt, smAlt, children, position = "center" }) {
  return (
    <Box as="section" pos="relative" overflow="hidden" bg="orange.600">
      <Box pos="relative">
        <Image
          fallbackSrc="/loading.jpg"
          alt={smAlt} w="full" maxH="90vh"
          objectPosition={position} fit="cover" srcSet={`${smImage} 300w, ${bigImage} 1000w`}
          sizes="(max-width: 960px) 300px, 1000px" />
        {children}
      </Box>
    </Box>
  )
}

export default Hero
