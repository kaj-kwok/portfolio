import { Project, Title, ProfileImage } from "../../components/layouts/project"
import { Text, Container, Badge, List, ListItem, IconButton } from "@chakra-ui/react"
import { BsGithub } from "react-icons/bs";
import Link from "next/link"

const Jungle = () => {
  return (
    <Project title="Jungle E-Commerce">
      <Container>
        <Title>Jungle E-Commerce</Title>
        <Text>E-commerce platform using Ruby on Rails. Buy/Rate/Review plant purchases with built-in checkout system</Text>
        <List spacing={5} my={5}>
          <ListItem>
            <Badge colorScheme='green'>Tech</Badge>: Ruby on Rails, Stripe, postgresQL
          </ListItem>
          <ListItem>
            <Link href="https://github.com/kaj-kwok/jungle-rails">
              <IconButton icon={<BsGithub />} w={7} h={7} />
            </Link>
          </ListItem>
          <ListItem>
            <ProfileImage
              src="/jungle/sold-out-badges.png" alt="Jungle E-Commerce"
            />
            <ProfileImage
              src="/jungle/cart.png" alt="Jungle E-Commerce"
            />
            <ProfileImage
              src="/jungle/main-page.png" alt="Jungle E-Commerce"
            />
          </ListItem>
        </List>
      </Container>
    </Project>
  )
}

export default Jungle