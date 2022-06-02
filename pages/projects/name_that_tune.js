import { Project, Title, ProfileImage } from "../../components/layouts/project";
import { Container, Flex, Text, Badge, List, ListItem, IconButton } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import Link from "next/link"

const NameThatTune = (id) => {
  return (
    <Project title="Name That Tune">
      <Container>
        <Flex direction="column" justifyContent="center">
          <Title>Name That Tune</Title>
          <Text>
            Fun game utilizing the Spotify API. Listen to a snippet of a song and guess the name of the song.
          </Text>
          <List spacing={5} my={5}>
            <ListItem>
              <Badge colorScheme='green'>Tech</Badge>: React, Express, PostgresQL, Material-UI
            </ListItem>
            <ListItem>
              <Flex>
                <Link href="https://github.com/kaj-kwok/Name_that_tune">
                  <IconButton icon={<BsGithub />} w={7} h={7} />
                </Link>
              </Flex>
            </ListItem>
          </List>
          <Flex gap={5} direction="column">
            <ProfileImage
              src="/name_that_tune/menu.png" alt="namethattune"
            />
            <ProfileImage
              src="/name_that_tune/game.png" alt="namethattune"
            />
            <ProfileImage
              src="/name_that_tune/stats.png" alt="namethattune"
            />
          </Flex>
        </Flex>
      </Container>
    </Project >
  )
}

export default NameThatTune