import { Box, Button, FormControl, FormHelperText, FormLabel, Heading, IconButton, Input } from '@chakra-ui/react'
import fontSizes from "../lib/fontSizes"
import React, { useState } from 'react'
import { Formik } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useMutation } from '@apollo/client'
import queries from '../lib/queries'

function EmailRequest() {
  const [isOpen, setIsOpen] = useState(true)
  const [addEmailSubscriber, { data, loading, error }] = useMutation(queries.addEmailSubscriber)
  console.log("Data: ", data, ". Loading: ", loading)
  return (
    <>{(isOpen && !data?.createSubscriber) ?
      <Box pos="absolute" as="article" display={isOpen ? "flex" : "none"} flexDir="column" alignItems="center" rounded="md" p="2" textAlign="center" bottom="5%" left="50%" w="90%" maxW="650px" transform="translateX(-50%)" bg="black">
        <IconButton size="sm" rounded="full" alignSelf="flex-end" aria-label="Cerrar formulario de email" onClick={() => setIsOpen(false)}><FontAwesomeIcon icon={faTimes} /></IconButton>
        <Heading pt="3" pb="5" as="h3" fontSize={fontSizes.paragraph} color="white">¡Si querés estar al tanto de los últimos tips y posts!</Heading>
        <Formik
          initialValues={{ name: "", email: "" }}
          validate={values => {
            const errors = {};
            if (!values.name) {
              errors.name = "Debes escribir un nombre"
            }
            if (!values.email) {
              errors.email = "Debes escribir un email"
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = "Email invalido"
            } return errors
          }
          } onSubmit={(values) => {
            addEmailSubscriber({ variables: { name: values.name, email: values.email } })
          }} >{
            ({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => {
              console.log(errors)
              return (
                < Box rounded="md" d="flex" w="100%" flexDir="column" p="2" as="form" bg="white" onSubmit={handleSubmit} >
                  <FormControl id="name" pb="2">
                    <FormLabel fontSize={fontSizes.small}>Tu nombre:</FormLabel>
                    <Input errorBorderColor="red.500" isInvalid={touched.name && errors.name} aria-label="Coloca tu nombre para suscribirte a nuestras publicaciones, es gratis" onChange={handleChange} onBlur={handleBlur} value={values.name} fontSize={fontSizes.small} name="name" type="name" />
                    <FormHelperText textAlign="end" px="2" fontSize={fontSizes.small}>{touched.name && errors.name}</FormHelperText>
                  </FormControl>
                  <FormControl id="email" pb="4">
                    <FormLabel fontSize={fontSizes.small}>Tu email:</FormLabel>
                    <Input errorBorderColor="red.500" isInvalid={touched.email && errors.email} aria-label="Coloca tu email" onChange={handleChange} onBlur={handleBlur} value={values.email} fontSize={fontSizes.small} name="email" type="email" />
                    <FormHelperText textAlign="end" px="2" fontSize={fontSizes.small}>{touched.email && errors.email}</FormHelperText>
                  </FormControl>
                  <Button isLoading={loading} aria-label="Enviar mi email" fontSize={fontSizes.small} w="full" type="submit" colorScheme="orange">Enviar</Button>
                </Box >
              )
            }
          }
        </Formik>
      </Box>
      :
      <IconButton position="absolute" colorScheme="orange" bottom="5%" right="5%" alignSelf="flex-end" aria-label="Abrir formulario de email" onClick={() => setIsOpen(true)}><FontAwesomeIcon icon={faMailBulk} /></IconButton>
    }
    </>
  )
}

export default EmailRequest
