import { Flex, Button, IconButton, Link } from '@chakra-ui/react'
import { BsLinkedin, BsGithub } from "react-icons/bs"
import { MdEmail } from 'react-icons/md'

const SideBar = () => {
  return (
    <Flex
      display={{ base: 'none', md: 'flex' }}
      w={[0, "md"]}
      h="95vh"
      direction="column"
      alignItems="end"
      justifyContent="center"
      gap='10px'
    >
      <Button p="5">Resume</Button>
      <Button p="5">Projects</Button>
      <Button p="5">Tech Stack</Button>

      <Link href="mailto: kaj.kwok@gmail.com">
        <IconButton icon={<MdEmail />} isRound="true" p="3" />
      </Link>
      <Link href="https://www.linkedin.com/in/ryan-kwok604">
        <IconButton icon={<BsLinkedin />} isRound="true" p="3" />
      </Link>
      <Link href="https://github.com/kaj-kwok">
        <IconButton icon={<BsGithub />} isRound="true" p="3" />
      </Link>
    </Flex>
  )
}

export default SideBar;