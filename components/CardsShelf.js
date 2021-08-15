import { Box, Grid, Heading } from '@chakra-ui/react'
import React from 'react'

function CardsShelf({ children, title }) {
  return (
    <Box as="main">
      <Heading as="h2" color="white" bg="orange.500" textAlign="center" py="12">
        {title}
      </Heading>
      <Grid p="4" gap="4" templateColumns={["repeat(1, 1fr)",, "repeat(2, 1fr)","repeat(3, 1fr)", "repeat(4, 1fr)"]}>
        {children}
      </Grid>
    </Box>
  )
}

export default CardsShelf
