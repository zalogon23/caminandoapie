import { Box, Button, Heading, Text } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import fontSizes from '../lib/fontSizes'

function Card({ icon, title, content, link, to, aria }) {
  return (
    <Box as="article" w="90%" maxW="700px" mx="auto" rounded="md" bg="orange.500" p="2">
      <Box px="4" rounded="lg" bg="white" display="flex" flexDir="column" alignItems="center" py="8">
        <Heading as="h3" pt="8" pb="12" fontSize="1.4em">{title}</Heading>
        <FontAwesomeIcon size="5x" icon={icon} />
        <Text w="90%" color="gray.400" py="10" fontSize={fontSizes.paragraph}>{content}</Text>
        {/* There's a problem with the link TABBING for accesibility... we need so source of truth above to share the current slide to avoid displaying not-on-screen links */}
        {link && to && <Link href={link} passHref><Button colorScheme="orange" aria-label={aria}>{to}</Button></Link>}
      </Box>
    </Box>
  )
}

export default Card
