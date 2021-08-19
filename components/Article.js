import { Box, Heading, Image, Text, Link as ChakraLink } from '@chakra-ui/react'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from "next/link"
import React, { useState } from 'react'
import fontSizes from '../lib/fontSizes'

function Article({ content }) {

  const styledContent = styleContentAdvanced(content)

  return (
    <Box style={{ clear: "both" }} as="section" px="2" w="full" maxW="850px" mx="auto" pb="8" fontSize={fontSizes.paragraph}>
      {
        styledContent.map((tag, id) =>
          <React.Fragment key={id} >
            {tag.tagName.indexOf("h") === 0 &&
              <Heading as={tag.tagName} px="2"
                py={tag.tagName === "h1" | tag.tagName === "h2" ? ["6", "12", "16", "24"] : ["4", "8", , "10"]}
                textAlign={tag.tagName === "h1" | tag.tagName === "h2" ? "center" : ""} lineHeight="1.8em"
                fontSize={tag.tagName === "h1" ? fontSizes.heading : tag.tagName === "h2" ? "1.5em" : "1.3em"}
                color={tag.tagName === "h1" | tag.tagName === "h2" ? "black" : "orange.500"}>{tag.children[0].content}</Heading>}
            {tag.tagName === "p" &&
              <Text lineHeight="2em" color="gray.500" px="2" pb="4" fontSize={fontSizes.paragraph}>{
                tag.children.map((piece, id) => {
                  if (piece.tagName === "strong") return (<Text key={`text${id}`} as="strong">{piece.children[0].content}</Text>)
                  if (piece.tagName === "a") return (<Link key={`text${id}`} href={piece.href} passHref><ChakraLink aria-label={piece.children[0].content} fontWeight="bold" color="orange.400" fontSize={fontSizes.paragraph}>{piece.children[0].content}</ChakraLink></Link>)
                  if (piece.content) return piece.content
                })
              }</Text>}
            {tag.tagName === "img" && <Image objectPosition="center" maxH="70vh" fit="contain" w={["full", , , "50%"]} mb="4" ml={{ "lg": tag.dir === "left" ? "0" : "5" }} mr={{ "lg": tag.dir === "left" ? "5" : "0" }} float={{ "lg": tag.dir }} src={tag.src} alt={tag.alt} />}
          </React.Fragment>)
      }
    </Box >
  )

  function styleContentAdvanced(content) {
    const arrayOfTagsUnformatted = content.split("<").filter(piece => piece.length);
    let arrayOfTagsGuided = [];
    arrayOfTagsUnformatted.map(tag => {
      const tagPieces = getTagContentPieces(tag)
      arrayOfTagsGuided = [...arrayOfTagsGuided, ...tagPieces]
    })
    const arrayOfTagsWithImagesReduced = reduceImagesTags(arrayOfTagsGuided)
    const arrayOfTagsWithImagesTextReduced = reduceTextTags(arrayOfTagsWithImagesReduced)
    return arrayOfTagsWithImagesTextReduced
  }

  function getTagContentPieces(tag) {
    const isClosing = tag.indexOf("/") === 0;
    const tagName = isClosing ?
      tag.slice(1, Math.min(tag.indexOf(">") > -1 ? tag.indexOf(">") : 9999, tag.indexOf(" ") > -1 ? tag.indexOf(" ") : 9999))
      :
      tag.slice(0, Math.min(tag.indexOf(">") > -1 ? tag.indexOf(">") : 9999, tag.indexOf(" ") > -1 ? tag.indexOf(" ") : 9999))
    const extraContent = tag.slice(tag.indexOf(">") + 1)
    const result = [{ tagName, open: tagName === "img" ? false : !isClosing }]
    if (tagName === "img") result[0].src = tag.slice(tag.indexOf('src="') + 5, tag.indexOf('"', tag.indexOf('src="') + 5))
    if (tagName === "a") result[0].href = tag.slice(tag.indexOf('href="') + 6, tag.indexOf('"', tag.indexOf('href="') + 6))
    if (extraContent.length) result.push({ content: extraContent })
    return result
  }

  function reduceImagesTags(tagsGuided) {
    let openImage = false;
    let altOpen = false;
    let countingImages = 0;
    const result = []
    tagsGuided.map(tag => {
      if (tag.tagName === "figure" && tag.open) {
        openImage = true
      } else if (tag.tagName === "figure" && !tag.open) {
        openImage = false
      } else if (tag.tagName === "figcaption" && tag.open) {
        altOpen = true
      } else if (tag.tagName === "figcaption" && !tag.open) {
        altOpen = false
      } else if (openImage && altOpen && tag.content) {
        countingImages++
        const isEven = countingImages % 2 === 0
        result[result.length - 1].alt = tag.content
        result[result.length - 1].dir = isEven ? "left" : "right"
      } else {
        result.push(tag)
      }
    })
    return result
  }

  function reduceTextTags(tagsGuided) {
    let openText = false;
    let openHeading = false;
    let openStrong = false;
    let openAnchor = false;
    const result = []
    tagsGuided.map(tag => {
      if (tag.tagName === "p" && tag.open) {
        openText = true
        result.push({ ...tag, children: [] })
      } else if (tag.tagName === "p" && !tag.open) {
        openText = false
      } else if (tag.tagName?.indexOf("h") === 0 && tag.open) {
        openHeading = true
        if (openText) result[result.length - 1].children.push({ ...tag, children: [] })
        if (!openText) result.push({ ...tag, children: [] })
      } else if (tag.tagName?.indexOf("h") === 0 && !tag.open) {
        openHeading = false
      } else if (openHeading && tag.content) {
        if (openText) result[result.length - 1].children[result[result.length - 1].children.length - 1].children.push(tag)
        if (!openText) result[result.length - 1].children.push({ ...tag, children: [] })
      } else if (tag.tagName === "strong" && tag.open) {
        openStrong = true
        result[result.length - 1].children.push({ ...tag, children: [] })
      } else if (tag.tagName === "strong" && !tag.open) {
        openStrong = false
      } else if (openStrong && tag.content) {
        result[result.length - 1].children[result[result.length - 1].children.length - 1].children.push(tag)
      } else if (tag.tagName === "a" && tag.open) {
        openStrong = true
        result[result.length - 1].children.push({ ...tag, children: [] })
      } else if (tag.tagName === "a" && !tag.open) {
        openStrong = false
      } else if (openAnchor && tag.content) {
        result[result.length - 1].children[result[result.length - 1].children.length - 1].children.push(tag)
      } else if (openText && tag.content) {
        result[result.length - 1].children?.push(tag)
      } else {
        result.push(tag)
      }
    })
    return result
  }
}

export default Article
