import { Box, Heading, Image, Text, Link as ChakraLink } from '@chakra-ui/react'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from "next/link"
import React from 'react'
import fontSizes from '../lib/fontSizes'

function Article({ content, main }) {

  const styledContent = styleContent(content)

  return (
    <Box style={{ clear: "both" }} as="section" px="2" w="full" maxW="850px" mx="auto" pb="8" fontSize={fontSizes.paragraph}>
      {
        styledContent.map((el, id) =>
          <React.Fragment key={id} >
            {el.type === "heading" && id === 0 && <Heading as={main ? "h1" : "h2"} py={["6", "12", "16", "24"]} textAlign="center" fontSize={fontSizes.heading}>{el.content}</Heading>}
            {el.type === "heading" && id !== 0 && <Heading as="h3" px="2" pb="4" color="orange.500" fontSize="1.2em">{el.content}</Heading>}
            {el.type === "link" && <Link href={el.link} passHref><ChakraLink aria-label={el.content} d="block" pb="4" fontWeight="bold" color="orange.400" fontSize={fontSizes.paragraph}>{el.content}<FontAwesomeIcon style={{ marginLeft: "0.5rem" }} icon={faLink} /></ChakraLink></Link>}
            {el.type === "text" && <Text lineHeight="2em" color="gray.500" px="2" pb="4" fontSize={fontSizes.paragraph}>{
              el.content.map((piece, id) => {
                if (piece.type === "strong") return (<Text key={`text${id}`} as="strong">{piece.text}</Text>)
                if (piece.type === "link") return (<Link key={`text${id}`} href={piece.link} passHref><ChakraLink aria-label={piece.text} fontWeight="bold" color="orange.400" fontSize={fontSizes.paragraph}>{piece.text}</ChakraLink></Link>)
                if (piece) return piece
              })
            }</Text>}
            {el.type === "image" && <Image objectPosition="center" maxH="70vh" fit="contain" w={["full", , , "50%"]} mb="4" ml={{ "lg": el.dir === "left" ? "0" : "5" }} mr={{ "lg": el.dir === "left" ? "5" : "0" }} float={{ "lg": el.dir }} src={el.src} alt={el.alt} />}
          </React.Fragment>)
      }
    </Box >
  )

  function styleContent(content) {
    let openParagraph = false
    let openImage = false
    let dir = "left"
    const result = []
    content.split("<").forEach(el => {
      if (el.indexOf("h") === 0) {
        openParagraph = false
        result.push({ type: "heading", content: el.slice(el.indexOf(">") + 1) })
        return
      } else if (el.indexOf("/p") === 0) {
        openParagraph = false
        return
      } else if (el.indexOf("/") === 0 && openParagraph) {
        if (el.slice(el.indexOf(">") + 1)) result[result.length - 1].content.push(el.slice(el.indexOf(">") + 1))
        return
      } else if (el.indexOf("strong>") === 0) {
        if (!openParagraph) return
        result[result.length - 1].content.push({ type: "strong", text: el.slice(el.indexOf(">") + 1) })
        return
      } else if (el.indexOf("a") === 0) {
        if (openParagraph) {
          result[result.length - 1].content.push({ type: "link", link: el.slice(el.indexOf('href="') + 6, el.indexOf('"', el.indexOf('href="') + 6)), text: el.slice(el.indexOf(">") + 1) });
          return
        }
        result.push({ type: "link", link: el.slice(el.indexOf('href="') + 6, el.indexOf('"', el.indexOf('href="') + 6)), content: el.slice(el.indexOf(">") + 1) })
        return
      } else if (el.indexOf("p") === 0) {
        openParagraph = true
        if (el.slice(el.indexOf(">") + 1)) result.push({ type: "text", content: [el.slice(el.indexOf(">") + 1)] })
        return
      } else if (el.indexOf("figcaption") === 0 && openImage) {
        openImage = false
        if (el.slice(el.indexOf(">") + 1)) result[result.length - 1].alt = el.slice(el.indexOf(">") + 1)
        return
      } else if (el.indexOf("img") === 0) {
        openParagraph = false
        openImage = true
        result.push({ type: "image", dir, src: el.slice(el.indexOf('src="') + 5, el.indexOf('"', el.indexOf('src="') + 5)), alt: el.slice(el.indexOf('alt="') + 5, el.indexOf('"', el.indexOf('alt="') + 5)) })
        dir = dir === "left" ? "right" : "left"
        return
      }
    })
    return result
  }
}

export default Article
