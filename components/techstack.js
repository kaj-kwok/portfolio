import { Container, Heading } from "@chakra-ui/react"

const stack = [
  "Javascript",
  "React",
  "HTML/CSS",
  "PostgresQL",
  "Express",
  "JQuery",

]

const TechStack = () => {
  return (
    <Container maxW="100%">
      <Heading as="h3" textAlign="left" maxW="100%" m="6">Tech Stack</Heading>
    </Container>
  )
}

export default TechStack