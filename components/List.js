import { Box, Heading, Link as ChakraLink } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import fontSizes from '../lib/fontSizes'

function List({ items, title }) {
  return (
    <Box display="flex" justifyContent="center">
      <Box maxW="850px" fontSize={fontSizes.heading} py="8" px="2" as="ul" alignItems="flex-start" display="flex" flexDir="column" >
        <Heading alignSelf="center" fontSize="1.8em" py="12" color="teal.500">{title}</Heading>
        {
          items.map(item => (
            <Box color="gray.600" as="li" py="4" display="flex" alignItems="center">
              {item.link && <Link href={item.link} passHref>
                <ChakraLink display="flex" alignItems="center">
                  {item.icon && <FontAwesomeIcon style={{ width: "2em", marginRight: "1rem" }} size="lg" icon={item.icon} />}
                  {item.text}
                </ChakraLink>
              </Link>}
              {!item.link && item.icon && <FontAwesomeIcon style={{ width: "2em", marginRight: "1rem" }} size="lg" icon={item.icon} />}
              {!item.link && item.text}
            </Box>
          ))
        }
      </Box>
    </Box>
  )
}

export default List
