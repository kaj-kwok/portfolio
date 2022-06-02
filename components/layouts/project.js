import { Heading, Box } from "@chakra-ui/react";
import NextLink from "next/link"

export const Project = ({ title, children }) => {
  const heading = `${title} - Ryan Kwok`;

  return (
    <>
      <Heading>{heading}</Heading>
      {children}
    </>
  )
}


export const Title = ({ children }) => {
  return (
    <Box>
      <NextLink>

      </NextLink>
    </Box>
  )
}

