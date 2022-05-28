import { Container, Heading, SimpleGrid } from "@chakra-ui/layout";
import WorkGridItem from "./workgriditem";
import thumbNameThat from "../public/Help_Menu.png"

const GridBox = () => {
  return (
    <Container>
      <Heading as="h2" mb="6">
        Projects
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
        <Section>
          <WorkGridItem id="Name_that_toon" title="Name_that_toon" thumbnail={thumbNameThat} >
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container >

  )
}

export default GridBox