import { Box, Button, ButtonGroup, FormControl, FormHelperText, FormLabel, Heading, Image, Input } from '@chakra-ui/react'
import fontSizes from "../lib/fontSizes"
import React from 'react'

function Hero() {
  return (
    <Box as="section" pos="relative" overflow="hidden" bg="teal.900">
      <Box pos="relative">
        <Image w="full" maxH="85vh" objectPosition="top" fit="contain"
          srcSet="/herosmall.jpg 300w, /hero.jpg 1000w"
          sizes="(max-width: 600px) 300px, 600px"
          fallbackSrc="/loading.jpg" />
        <Box pos="absolute" as="article" rounded="md" p="2" textAlign="center" bottom="5%" left="50%" w="90%" maxW="650px" transform="translateX(-50%)" bg="black">
          <Heading pb="4" as="h3" fontSize={fontSizes.heading} color="white">¡Si querés estar al tanto de los últimos tips y posts!</Heading>
          <Box rounded="md" d="flex" flexDir="column" p="2" as="form" bg="white">
            <FormControl id="email" pb="4">
              <FormLabel fontSize={fontSizes.paragraph}>Tu email:</FormLabel>
              <Input fontSize={fontSizes.paragraph} type="email" />
              <FormHelperText fontSize={fontSizes.paragraph}>Estarás recibiendo semanalmente lo mejor de nuestro contenido</FormHelperText>
            </FormControl>
            <Button w="full" type="submit" colorScheme="teal">Enviar</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Hero
