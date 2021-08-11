import { Box, Heading, Text } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import fontSizes from '../lib/fontSizes'

function Card({ icon, title, content }) {
  return (
    <Box w="90%" maxW="700px" mx="auto" rounded="md" bg="teal.500" p="2">
      <Box px="4" rounded="lg" bg="white" display="flex" flexDir="column" alignItems="center" py="8">
        <Heading py="8" fontSize="1.5em">{title}</Heading>
        <FontAwesomeIcon size="5x" icon={icon} />
        <Text color="gray.400" py="8" fontSize={fontSizes.paragraph}>{content}</Text>
      </Box>
    </Box>
  )
}

export default Card
