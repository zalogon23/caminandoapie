import { Box, Heading, Text } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import fontSizes from '../lib/fontSizes'

function Card({ icon, title, content }) {
  return (
    <Box as="article" w="90%" maxW="700px" mx="auto" rounded="md" bg="teal.500" p="2">
      <Box px="4" rounded="lg" bg="white" display="flex" flexDir="column" alignItems="center" py="8">
        <Heading as="h3" pt="8" pb="12" fontSize="1.4em">{title}</Heading>
        <FontAwesomeIcon size="5x" icon={icon} />
        <Text w="90%" color="gray.400" py="10" fontSize={fontSizes.paragraph}>{content}</Text>
      </Box>
    </Box>
  )
}

export default Card
