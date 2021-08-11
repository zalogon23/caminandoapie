import { Box, Button, Heading, IconButton } from '@chakra-ui/react'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import fontSizes from '../lib/fontSizes'

function CardsSlider({ children }) {
  const [current, setCurrent] = useState(0)
  return (
    <Box as="section" w="100%" maxW="780px" mx="auto" overflow="hidden" position="relative" display="flex" flexDir="column">
      <Heading as="h2" color="teal.500" fontSize={fontSizes.heading} mx="auto" py="12">Algo bueno</Heading>
      {current !== 0 && <IconButton rounded="100%" colorScheme="teal" bg="teal.400" zIndex="modal" position="absolute" top="51%" left="2.5%" onClick={() => move("left")} icon={<FontAwesomeIcon icon={faArrowLeft} />} />}
      {!(current >= children.length - 1) && <IconButton rounded="100%" colorScheme="teal" bg="teal.400" zIndex="modal" position="absolute" top="51%" right="2.5%" onClick={() => move("right")} icon={<FontAwesomeIcon icon={faArrowRight} />} />}
      <Box display="flex" pb="16" transitionDuration="500ms" style={{ transform: `translateX(-${current * 100 / children.length}%)` }} w={`${100 * children.length}%`}>
        {children.map(child => <Box w={`${100 / children.length}%`}>{child}</Box>)}
      </Box>
    </Box>
  )

  function move(dir) {
    if (dir == "left") setCurrent(current - 1)
    if (dir == "right") setCurrent(current + 1)
  }
}

export default CardsSlider
