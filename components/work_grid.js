import { Container, Heading, SimpleGrid, Text } from "@chakra-ui/layout";
import WorkGridItem from "./workgriditem";
import thumbNameThat from "../public/thumbNamethatToon.png"
import Section from "../components/section"
import thumbScheduler from "../public/thumbSch.png"

const GridBox = () => {
  return (
    <Container>
      <Heading as="h2" mb="6">
        Projects
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
        <Section>
          <WorkGridItem id="Name_that_toon" title="Name that Toon" thumbnail={thumbNameThat} >
            A fun music recognition game!<br />
            Listen to a snippet of a song from your Favourite Artist and Match the name of the Song.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="scheduler" title="Scheduler" thumbnail={thumbScheduler}>
            Student/Teacher Appointment Scheduler<br />
            Manage/Book Appointments throughout the week
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container >

  )
}

export default GridBox