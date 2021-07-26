import { Box, Heading, Image, Text, Link as ChakraLink } from '@chakra-ui/react'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from "next/link"
import React from 'react'
import fontSizes from '../lib/fontSizes'

function Article({ content }) {

  const styledContent = styleContent(content)

  return (
    <Box as="section" px="2" w="full" maxW="850px" mx="auto" fontSize={fontSizes.paragraph}>
      {
        styledContent.map((el, id) =>
          <React.Fragment key={id} >
            {el.type === "heading" && id === 0 && <Heading as="h2" py="10" textAlign="center" fontSize={fontSizes.heading}>{el.content}</Heading>}
            {el.type === "heading" && id !== 0 && <Heading as="h3" pb="4" fontSize="1.2em">{el.content}</Heading>}
            {el.type === "link" && <Link href={el.link} passHref><ChakraLink d="block" pb="4" fontWeight="bold" color="teal.400" fontSize={fontSizes.paragraph}>{el.content}<FontAwesomeIcon style={{ marginLeft: "0.5rem" }} icon={faLink} /></ChakraLink></Link>}
            {el.type === "text" && <Text pb="4" fontSize={fontSizes.paragraph}>{el.content}</Text>}
            {el.type === "image" && <Image bg="black" objectPosition="center" maxH="70vh" fit="contain" w={["full", , , "50%"]} mb="4" mr={{ "lg": "5" }} float={{ "lg": "left" }} src={el.src} alt={el.alt} />}
          </React.Fragment>)
      }
    </Box >
  )

  function styleContent(content) {
    return content.split("<").map(el => {
      let value;
      console.log(el)
      if (el.indexOf("h") === 0) {
        value = { type: "heading", content: el.slice(el.indexOf(">") + 1) }
      }
      if (el.indexOf("a") === 0) {
        value = { type: "link", link: el.slice(el.indexOf('href="') + 6, el.indexOf('"', el.indexOf('href="') + 6)), content: el.slice(el.indexOf(">") + 1) }
      }
      if (el.indexOf("p") === 0) {
        value = { type: "text", content: el.slice(el.indexOf(">") + 1) }
      }
      if (el.indexOf("img") === 0) {
        value = { type: "image", src: el.slice(el.indexOf('src="') + 5, el.indexOf('"', el.indexOf('src="') + 5)), alt: el.slice(el.indexOf('alt="') + 5, el.indexOf('"', el.indexOf('alt="') + 5)) }
      }
      return value
    }).filter(val => val !== undefined)
  }
}

export default Article
