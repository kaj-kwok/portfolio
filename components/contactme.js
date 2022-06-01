import { Link, Button, Flex, Heading, Text } from "@chakra-ui/react"
import Section from "./section"

const ContactMe = () => {
  return (
    <Section>
      <Flex textAlign="left" id="ContactMe" height="100vh" flexDirection="column" justifyContent="center" width="50%">
        <Heading as="h3" mb={7}>
          Contact Me
        </Heading>
        <Text>Always looking for new opportunities to learn new and explore new things.</Text>
        <Text p={5} fontStyle="italic">How does a web developer like his coffee?</Text>
        <Text textAlign="right"> #000000</Text>
        <Link href="mailto: kaj.kwok@gmail.com">
          <Button mt="6">Get in Touch</Button>
        </Link>
      </Flex>
    </Section>
  )
}

export default ContactMe;