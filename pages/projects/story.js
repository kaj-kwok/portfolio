import { Project, Title, ProfileImage } from "../../components/layouts/project"
import { Text, Container, Badge, List, ListItem, IconButton } from "@chakra-ui/react"
import { BsGithub } from "react-icons/bs";
import Link from "next/link"

const Story = () => {
  return (
    <Project title="Story Creator">
      <Container>
        <Title>Story Creator</Title>
        <Text>Fun app for creating new stories. Users can contribute suggestions on how the story will proceed and vote on which they like.</Text>
        <List spacing={5} my={5}>
          <ListItem>
            <Badge colorScheme='green'>Tech</Badge>: Javascript, JQuery, Express, EJS, PostgresQL
          </ListItem>
          <ListItem>
            <Link href="https://github.com/kaj-kwok/Midterm_Project_story_creator">
              <IconButton icon={<BsGithub />} w={7} h={7} />
            </Link>
          </ListItem>
          <ListItem>
            <ProfileImage
              src="/story/main.png" alt="Story Creator"
            />
            <ProfileImage
              src="/story/owner.png" alt="Story Creator"
            />
            <ProfileImage
              src="/story/user.png" alt="Story Creator"
            />
          </ListItem>
        </List>
      </Container>
    </Project>
  )
}

export default Story