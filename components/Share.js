import { Button, ButtonGroup, Divider, Heading, Stack } from '@chakra-ui/react'
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import fontSizes from '../lib/fontSizes'

function Share({ id }) {
  return (
    <Stack as="section" maxW="750px" spacing="0" alignItems="center" mx="auto">
      <Heading textAlign="center" fontSize={fontSizes.heading} py="8">Si te pareció interesante, compártelo</Heading>
      <Divider borderColor="gray.600" />
      <ButtonGroup py="8" isAttached>
        <Link href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcaminandoapie.vercel.app%2Fblog%2F${id}`} passHref><Button p="3" leftIcon={<FontAwesomeIcon icon={faFacebook} />} fontSize={fontSizes.paragraph} aria-label="Compartir este post en facebook" colorScheme="blue">Compartir</Button></Link>
        <Link href={`https://api.whatsapp.com/send/?phone&text=Mira%20esto%20https://caminandoapie.vercel.app/blog/${id}`} passHref><Button p="3" data-action="share/whatsapp/share" leftIcon={<FontAwesomeIcon icon={faWhatsapp} />} fontSize={fontSizes.paragraph} aria-label="Compartir este post en whatsapp" colorScheme="whatsapp">Enviar a ...</Button></Link>
      </ButtonGroup>
    </Stack>
  )
}

export default Share
