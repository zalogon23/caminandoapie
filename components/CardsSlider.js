import { Box, Button, Heading, IconButton } from '@chakra-ui/react'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import fontSizes from '../lib/fontSizes'

function CardsSlider({ children, as = "section", title, pb = "16" }) {
  const [current, setCurrent] = useState(0)
  return (
    <Box as={as} w="100%" maxW="780px" mx="auto" overflow="hidden" px="4" position="relative" display="flex" flexDir="column">
      {title && <Heading as="h2" color="orange.500" fontSize={fontSizes.heading} mx="auto" py="12">{title}</Heading>}
      {current !== 0 && <IconButton size="lg" aria-label="Ver siguiente slide" rounded="100%" colorScheme="orange" bg="orange.400" zIndex="modal" position="absolute" top="49%" left="1%" onClick={() => move("left")} icon={<FontAwesomeIcon icon={faArrowLeft} />} />}
      {!(current >= children.length - 1) && <IconButton size="lg" aria-label="Ver slide anterior" rounded="100%" colorScheme="orange" bg="orange.400" zIndex="modal" position="absolute" top="49%" right="1%" onClick={() => move("right")} icon={<FontAwesomeIcon icon={faArrowRight} />} />}
      <Box display="flex" pb={pb} transitionDuration="500ms" style={{ transform: `translateX(-${current * 100 / children.length}%)` }} w={`${100 * children.length}%`}>
        {children.map((child, id) => <Box key={`card${id}`} w={`${100 / children.length}%`} visibility={id === current ? "visible" : "hidden"}>{child}</Box>)}
      </Box>
    </Box>
  )

  function move(dir) {
    if (dir == "left") setCurrent(current - 1)
    if (dir == "right") setCurrent(current + 1)
  }
}

export default CardsSlider
