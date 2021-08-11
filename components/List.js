import { Box, Heading, Link as ChakraLink } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import fontSizes from '../lib/fontSizes'

function List({ items, title }) {
  return (
    <Box display="flex" justifyContent="center">
      <Box maxW="850px" fontSize={fontSizes.paragraph} pt="8" pb="20" px="4" as="ul" alignItems="flex-start" display="flex" flexDir="column" >
        <Heading alignSelf="center" fontSize="1.8em" py="14" color="teal.500">{title}</Heading>
        {
          items.map(item => (
            <Box color="gray.600" as="li" py="8" display="flex" alignItems="center">
              {item.link && <Link href={item.link} passHref>
                <ChakraLink display="flex" alignItems="center">
                  {item.icon && <FontAwesomeIcon style={{ color: "#38B2AC", width: "2em", marginRight: "1rem" }} size="lg" icon={item.icon} />}
                  {item.text}
                </ChakraLink>
              </Link>}
              {!item.link && item.icon && <FontAwesomeIcon style={{ color: "#38B2AC", width: "2em", marginRight: "1rem" }} size="lg" icon={item.icon} />}
              {!item.link && item.text}
            </Box>
          ))
        }
      </Box>
    </Box>
  )
}

export default List