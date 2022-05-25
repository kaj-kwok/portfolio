import { Heading, Container, Box, Text } from "@chakra-ui/react"

export default function Home() {
  return (
    <Container >
      <Box borderRadius="lg" bg="lightgrey" p={3} align="center">
        Hello, Full-stack developer from Vancouver, BC
      </Box>
      <Heading as="h3" p={3}>Ryan Kwok</Heading>
      <Text>Sample Text</Text>
    </Container>
  )
}

