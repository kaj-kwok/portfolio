import {
  Heading,
  Container,
  Box,
  Text,
  useColorModeValue
} from "@chakra-ui/react"

export default function Home() {
  return (

    <Container display="flex" flexDirection="column">
      <Box borderRadius="lg" bg={useColorModeValue("gray.100", "gray.600")} p={3} align="center">
        Hello there, I am a Full-stack developer from Vancouver, BC
      </Box>
      <Heading as="h3" p={3} fontFamily="heading" >Ryan Kwok</Heading>
      <Box>

      </Box>
    </Container >
  )
}

