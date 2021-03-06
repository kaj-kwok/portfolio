import { Flex, Button, IconButton, Link, useColorModeValue } from '@chakra-ui/react'
import { BsLinkedin, BsGithub } from "react-icons/bs"
import { MdEmail } from 'react-icons/md'
import NextLink from 'next/link'

const LinkItem = ({ href, path, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref >
      <Link
        bg={active ? 'grassTeal' : undefined}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}


const SideBar = ({ path }) => {
  return (
    <Flex
      display={{ base: 'none', md: 'flex' }}
      w={{ base: "0", md: "20%" }}
      h="95vh"
      direction="column"
      alignItems="end"
      justifyContent="center"

    >
      <Flex direction="column" position="fixed" gap='10px'>
        <LinkItem href="/#AboutMe" path={path} scroll="false">
          <Button p="5">About Me</Button>
        </LinkItem>
        <LinkItem href="/#Projects" path={path} scroll="false">
          <Button p="5">Projects</Button>
        </LinkItem>
        <LinkItem href="https://resume.creddle.io/resume/8xbo4kbd6hl" path={path} scroll="false" isExternal>
          <Button p="5">Resume</Button>
        </LinkItem>
        <LinkItem href="/#TechStack" path={path} scroll="false">
          <Button p="5">Tech Stack</Button>
        </LinkItem>
        <LinkItem href="/#ContactMe" path={path} scroll="false">
          <Button p="5">Contact Me</Button>
        </LinkItem>

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
    </Flex>
  )
}

export default SideBar;