import {
  Container,
  Box
} from "@chakra-ui/react"
import TechStack from "../components/techstack"
import Projects from "../components/work_grid"
import Education from "../components/education"
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
        <Education />
      </Box>
    </Container >
  )
}

