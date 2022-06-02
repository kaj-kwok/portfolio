import { Heading, Box, Link, Image } from "@chakra-ui/react";
import NextLink from "next/link"
import { ChevronRightIcon } from '@chakra-ui/icons'
import Head from "next/head";

export const Project = ({ title, children }) => {
  const heading = `${title} - Ryan Kwok`;

  return (
    <>
      <Head>{heading}</Head>
      {children}
    </>
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

