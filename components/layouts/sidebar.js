import { Flex, Button, Text, Icon, Link } from '@chakra-ui/react'
import { BsLinkedin, BsGithub } from "react-icons/bs"

const SideBar = () => {
  return (
    <Flex
      pos="fixed"
      w="sm"
      h="95vh"
      direction="column"
      alignItems="end"
      justifyContent="center"
      gap='10px'
    >
      <Button p="5">Resume</Button>
      <Button p="5">Projects</Button>
      <Button p="5">Contact</Button>

      <Text>kaj.kwok@gmail.com</Text>
      <Link
        href="https://www.linkedin.com/in/ryan-kwok604"
      ><Icon as={BsLinkedin} w="6" h="6" /></Link>
      <Link href="https://github.com/kaj-kwok">
        <Icon as={BsGithub} w="6" h="6" />
      </Link>
    </Flex>
  )
}

export default SideBar;