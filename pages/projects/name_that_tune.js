import { Project, Title } from "../../components/layouts/project";
import { Container, Flex, Text, Badge, List, ListItem, IconButton } from "@chakra-ui/react";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import Link from "next/link"
import game from "../../public/name_that_tune/game.png"
import menu from "../../public/name_that_tune/menu.png"
import stats from "../../public/name_that_tune/stats.png"


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
            <Image
              src={game}
            />
            <Image
              src={menu}
            />
            <Image
              src={stats}
            />
          </Flex>
        </Flex>
      </Container>
    </Project >
  )
}

export default NameThatTune