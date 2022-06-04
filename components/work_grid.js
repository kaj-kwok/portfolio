import { Container, Heading, SimpleGrid, Text } from "@chakra-ui/layout";
import WorkGridItem from "./workgriditem";
import thumbNameThat from "../public/thumbNamethatToon.png"
import Section from "../components/section"
import thumbScheduler from "../public/thumbSch.png"
import thumbStory from "../public/thumbStory.png"
import thumbJungle from "../public/thumbJungle.png"
import { useInView } from 'react-intersection-observer';

const GridBox = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.4
  });

  return (
    <Container maxW="100%" id="Projects" ref={ref}>
      <Heading as="h2" m="6">
        Projects
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={7} gridAutoRows="1fr">
        <Section forwardedref={inView}>
          <WorkGridItem id="name_that_tune" title="Name that Toon" thumbnail={thumbNameThat} >
            A fun music recognition game!<br />
            Listen to a snippet of a song from your Favourite Artist and Match the name of the Song.
          </WorkGridItem>
        </Section>
        <Section forwardedref={inView}>
          <WorkGridItem id="scheduler" title="Scheduler" thumbnail={thumbScheduler}>
            Student/Teacher Appointment Scheduler<br />
            Manage/Book Appointments throughout the week
          </WorkGridItem>
        </Section>
        <Section forwardedref={inView}>
          <WorkGridItem id="story" title="Story Creator" thumbnail={thumbStory}>
            Choose your own Story!<br />
            Create a new story, users can submit suggestions on the direction of the story and can vote on their preferred.
          </WorkGridItem>
        </Section>
        <Section forwardedref={inView}>
          <WorkGridItem id="jungle" title="Jungle E-Commerce" thumbnail={thumbJungle}>
            E-Commerce Platform for Plants.
            Buy and sell your favourite plants built on Ruby. Submit reviews on products, sample payment system using Stripe.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container >

  )
}

export default GridBox