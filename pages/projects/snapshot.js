import { Project, Title, ProfileImage } from "../../components/layouts/project"
import { Text, Container, Badge, List, ListItem, IconButton } from "@chakra-ui/react"
import { BsGithub } from "react-icons/bs";
import Link from "next/link"
import { BiLinkExternal } from "react-icons/bi"

const Snapshot = () => {
  return (
    <Project title="Snapshot">
      <Container>
        <Title>Snapshot</Title>
        <Text>App for sharing photos online </Text>
        <List spacing={5} my={5}>
          <ListItem>
            <Badge colorScheme='green'>Tech</Badge>: React, ReduxToolkit, Express, MongoDB, Mantine
          </ListItem>
          <ListItem>
            <Link href="https://github.com/kaj-kwok/create-new-memories">
              <IconButton icon={<BsGithub />} w={7} h={7} />
            </Link>
            <Link href="https://peaceful-dolphin-a638b6.netlify.app/">
              <IconButton icon={<BiLinkExternal />} w={7} h={7} />
            </Link>
          </ListItem>
          <ListItem>
            <ProfileImage
              src="/snapshot/Screenshot 2022-06-20 180714.png" alt="snapshot"
            />
            <ProfileImage
              src="/snapshot/Screenshot 2022-06-20 180754.png" alt="snapshot"
            />
            <ProfileImage
              src="/snapshot/Screenshot 2022-06-20 180831.png" alt="snapshot"
            />
          </ListItem>
        </List>
      </Container>
    </Project>
  )
}

export default Snapshot