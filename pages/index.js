import {
  Heading,
  Container,
  Box,
  useColorModeValue
} from "@chakra-ui/react"
import TechStack from "../components/techstack"
import GridBox from "../components/work_grid"

export default function Home() {
  return (

    <Container display="flex" flexDirection="column" maxWidth="container.lg">
      <Box borderRadius="lg" bg={useColorModeValue("gray.100", "gray.600")} p={3} align="center">
        Hello there, I am a Full-stack developer from Vancouver, BC
      </Box>
      <Heading as="h3" p={3} fontFamily="heading" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">Ryan Kwok</Heading>
      <Box>
        <GridBox />
      </Box>
      <Box>
        <TechStack />
      </Box>
    </Container >
  )
}

