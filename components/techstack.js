import { Container, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from "./section";
import TechStackIcon from "./techstackicon"
import Javascript from "../public/icons/js-icon-24.jpg"
import React from "../public/icons/react_1353128.png"
import Html from "../public/icons/html_css1.png"
import Express from "../public/icons/express-logo.png"
import Postgres from "../public/icons/postgres-icon-27.jpg"
import JQuery from "../public/icons/jquery-icon-png-27.jpg"
import Git from "../public/icons/git-hub-icon-21.jpg"
import Ruby from "../public/icons/ruby-on-rails-icon-29.jpg"
import MongoDB from "../public/icons/mongodb.png"
import NextJS from "../public/icons/nextjs.png"
import { useInView } from 'react-intersection-observer';


const TechStack = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.4
  });
  return (
    <Container ref={ref} maxW="100%">
      <Section forwardedref={inView}>
        <Flex id="TechStack" h="100vh" justifyContent="center" flexDirection="column">
          <Heading as="h3" textAlign="left" maxW="100%" m="6">Tech Stack</Heading>
          <SimpleGrid columns={{ base: 2, md: 3 }} my={9} ml={5} spacingY="20px">
            <TechStackIcon title="Javascript" image={Javascript} />
            <TechStackIcon title="React" image={React} />
            <TechStackIcon title="NextJS" image={NextJS} />
            <TechStackIcon title="HTML/CSS" image={Html} />
            <TechStackIcon title="Express" image={Express} />
            <TechStackIcon title="MongoDB" image={MongoDB} />
            <TechStackIcon title="PostgresQL" image={Postgres} />
            <TechStackIcon title="JQuery" image={JQuery} />
            <TechStackIcon title="git" image={Git} />
            <TechStackIcon title="Ruby on Rails" image={Ruby} />
          </SimpleGrid>
        </Flex>
      </Section>
    </Container>
  )

}

export default TechStack