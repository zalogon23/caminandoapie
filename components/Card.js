import { Box, Button, Heading, Image, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import fontSizes from '../lib/fontSizes'
import CardsSlider from './CardsSlider'
import ImageLoading from './ImageLoading'

function Card({ icon, linkbox, title, cover, h, content, link, images, to, aria, large = true, w = "100%", maxW = "700px", children }) {
  if (linkbox) {
    return (
      <LinkBox as="article" w={w} maxW={maxW} mx="auto" rounded="md" bg="orange.500" p="2">
        <Box rounded="lg" bg="white" display="flex" flexDir="column" height="100%" alignItems="center" pb="8">
          <Heading h={["", "9rem"]} as="h3" px="4" display="flex" justifyContent="center" alignItems="center" py="8" fontSize="1.4em">{title}</Heading>
          {icon && <FontAwesomeIcon size="5x" icon={icon} />}
          {images &&
            <Image h={large ? ["16rem", "25rem"] : h ? h : "auto"} px="2" w="100%" objectFit={cover ? "cover" : "contain"}
              src={images[0].formats.medium.url} alt={images[0].alternativeText} fallback={<ImageLoading />} />
          }

          <Text w="100%" color="gray.400" pb="10" pt="6" px="4" fontSize={fontSizes.paragraph}>{content}</Text>
          <Box display="flex" flexGrow={1}>
            <Box alignSelf="flex-end">{children}</Box>
            {link && to && <Link href={link} passHref><LinkOverlay as="button" _hover={{ bg: "orange.600" }} _focus={{ bg: "orange.600" }} alignSelf="flex-end" bg="orange.500" color="white" py="2" px="4" rounded="lg" aria-label={aria}>{to}</LinkOverlay></Link>}
          </Box>
        </Box>
      </LinkBox>
    )
  }
  return (
    <Box as="article" w={w} maxW={maxW} mx="auto" rounded="md" bg="orange.500" p="2">
      <Box rounded="lg" bg="white" display="flex" flexDir="column" height="100%" alignItems="center" pb="8">
        <Heading h={["", "36"]} as="h3" px="4" display="flex" justifyContent="center" alignItems="center" py="6" fontSize="1.4em">{title}</Heading>
        {icon && <FontAwesomeIcon size="5x" icon={icon} />}
        {images &&
          <CardsSlider border as="div" pb="0">
            {
              images.map((img, id) => <Image key={`image${id}`} h={large ? ["16rem", "25rem"] : h ? h : "auto"} w="100%" objectFit={cover ? "cover" : "contain"} src={img.formats.medium.url} alt={img.alternativeText} fallbackSrc="/loading.jpg" />)
            }
          </CardsSlider>}
        <Text w="90%" color="gray.400" pb="10" pt="6" px="4" fontSize={fontSizes.paragraph}>{content}</Text>
        <Box display="flex" flexGrow={1}>
          <Box alignSelf="flex-end">{children}</Box>
          {link && to && <Link href={link} passHref><Button alignSelf="flex-end" colorScheme="orange" aria-label={aria}>{to}</Button></Link>}
        </Box>
      </Box>
    </Box>
  )
}

export default Card
