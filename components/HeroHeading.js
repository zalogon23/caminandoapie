import { Heading } from '@chakra-ui/react'
import React from 'react'
import fontSizes from '../lib/fontSizes'

function HeroHeading({ children }) {
  return (
    <Heading as="h2" textAlign="center" fontSize={fontSizes.heading} color="white" px="4" py="2" rounded="xl" lineHeight="1.5em" bg="blackAlpha.700" position="absolute" left="3%" right="3%" top="19%">{children}</Heading>
  )
}

export default HeroHeading
