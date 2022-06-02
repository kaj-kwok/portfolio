import { Project, Title, ProfileImage } from "../../components/layouts/project"
import { Text, Container, Badge, List, ListItem, IconButton } from "@chakra-ui/react"
import { BsGithub } from "react-icons/bs";
import Link from "next/link"
import { BiLinkExternal } from "react-icons/bi"

const Scheduler = () => {
  return (
    <Project title="Scheduler">
      <Container>
        <Title>Scheduler</Title>
        <Text>App for organising appointments during the week. View and book based on availability of tutors.</Text>
        <List spacing={5} my={5}>
          <ListItem>
            <Badge colorScheme='green'>Tech</Badge>: React, Express, PostGresQL, Websockets
          </ListItem>
          <ListItem>
            <Link href="https://github.com/kaj-kwok/scheduler">
              <IconButton icon={<BsGithub />} w={7} h={7} />
            </Link>
            <Link href="https://stellar-ganache-14d867.netlify.app/">
              <IconButton icon={<BiLinkExternal />} w={7} h={7} />
            </Link>
          </ListItem>
          <ListItem>
            <ProfileImage
              src="/scheduler/dayToggle.gif" alt="namethattune"
            />
            <ProfileImage
              src="/scheduler/newappointment.gif" alt="namethattune"
            />
            <ProfileImage
              src="/scheduler/Editappointment.gif" alt="namethattune"
            />
          </ListItem>
        </List>
      </Container>
    </Project>
  )
}

export default Scheduler