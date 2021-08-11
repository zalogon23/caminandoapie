import { Box, Heading, Square, Text } from '@chakra-ui/react'
import React from 'react'
import fontSizes from '../lib/fontSizes'

function CardBanner({ icon, title, content, bg, side = "left" }) {
  return (
    <Square style={{ clear: "both" }}  bg={bg}>
      <Box w="100%" maxW="850px" minHeight="50vh" py="8" alignItems="center" d="flex" flexDir={["column", , "row"]} px={{ "md": "4" }} justifyContent={["center", , side === "left" ? "flex-start" : "flex-end"]} color="gray.800">
        <Square display={{"md": side === "left" ? "" : "none"}} pt={["8", , "0"]} pr={{ "md": "6" }} pb={["6", , "0"]} fontSize="8rem">
          {icon}
        </Square>
        <Box px="4" maxW="500px">
          <Heading fontSize={fontSizes.heading} pb="4">{title}</Heading>
          <Text fontSize={fontSizes.paragraph}>
            {content}
          </Text>
        </Box>
        <Square display={["none",,side === "left" ? "" : "flex"]} pt={["8", , "0"]} pl={{ "md": "6" }} pb={["6", , "0"]} fontSize="8rem">
          {icon}
        </Square>
      </Box>
    </Square>
  )
}

export default CardBanner
