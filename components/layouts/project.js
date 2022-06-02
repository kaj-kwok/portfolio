import { Heading, Box, Link, Image } from "@chakra-ui/react";
import NextLink from "next/link"
import { ChevronRightIcon } from '@chakra-ui/icons'
import Head from "next/head";
import { chakra, shouldForwardProp } from "@chakra-ui/system";
import { motion } from "framer-motion";

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

export const Project = ({ title, children }) => {
  const heading = `${title} - Ryan Kwok`;

  return (
    <StyledDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Head>{heading}</Head>
      {children}
    </StyledDiv>
  )
}


export const Title = ({ children }) => {
  return (
    <Box>
      <NextLink href="/#Projects" passHref color='teal.500'>
        <Link color='teal.500'>Projects</Link>
      </NextLink>
      <span>
        {' '}
        <ChevronRightIcon />{' '}
      </span>
      <Heading display="inline-block" as="h3" fontSize={20} mb={7}>
        {children}
      </Heading>
    </Box>
  )
}

export const ProfileImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

