import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import fontSizes from '../lib/fontSizes'
import CardsSlider from './CardsSlider'

function Card({ icon, title, content, link, images, to, aria, w = "90%", maxW = "700px" }) {
  return (
    <Box as="article" w={w} maxW={maxW} mx="auto" rounded="md" bg="orange.500" p="2">
      <Box px="2" rounded="lg" bg="white" display="flex" flexDir="column" height="100%" alignItems="center" py="8">
        <Heading h={["", "36"]} as="h3" px="4" textAlign="center" pt="8" pb={["6", "12"]} fontSize="1.4em">{title}</Heading>
        {icon && <FontAwesomeIcon size="5x" icon={icon} />}
        {images &&
          <CardsSlider as="div" pb="0">
            {
              images.map((img, id) => <Image key={`image${id}`} h={["16rem", "25rem"]} w="100%" objectFit="contain" src={img.formats.medium.url} alt={img.alternativeText} fallbackSrc="/loading.jpg" />)
            }
          </CardsSlider>}
        <Text w="90%" color="gray.400" py="10" fontSize={fontSizes.paragraph}>{content}</Text>
        {link && to && <Link href={link} passHref><Button colorScheme="orange" aria-label={aria}>{to}</Button></Link>}
      </Box>
    </Box>
  )
}

export default Card
