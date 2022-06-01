import {
  Container,
  Box
} from "@chakra-ui/react"
import TechStack from "../components/techstack"
import Projects from "../components/work_grid"
import ContactMe from "../components/contactme"
import Hero from "../components/hero"
import AboutMe from "../components/aboutme"

export default function Home() {
  return (

    <Container display="flex" flexDirection="column" maxWidth="container.lg">
      <Box >
        <Hero />
      </Box>
      <AboutMe />
      <Box>
        <Projects />
      </Box>
      <Box>
        <TechStack />
      </Box>
      <Box>
        <ContactMe />
      </Box>
    </Container >
  )
}

