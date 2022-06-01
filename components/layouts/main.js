import Head from 'next/head'
import { Box, Container, MenuButton, Menu, IconButton, MenuItem, MenuList, Link } from '@chakra-ui/react'
import SideBar from './sidebar'
import ThemeSelector from '../darkmode'
import { HamburgerIcon } from '@chakra-ui/icons'



const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8} display="flex" >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ryan Kwok's Homepage</title>
      </Head>
      <Box position="fixed" right="0" top="0" p={2} >
        <ThemeSelector />
        <Box display={{ base: 'inline-block', md: 'none' }}>
          <Menu>
            <MenuButton as={IconButton} aria-label="Open Menu" icon={<HamburgerIcon />} mx={2} />
            <MenuList>
              <Link href="/#AboutMe">
                <MenuItem>
                  About Me
                </MenuItem>
              </Link>
              <Link href="/#Projects">
                <MenuItem>
                  Projects
                </MenuItem>
              </Link>
              <MenuItem>
                Resume
              </MenuItem>
              <MenuItem>
                Tech Stack
              </MenuItem>
              <MenuItem>
                Contact Me
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>
      <SideBar path={router.asPath} />
      <Container maxW="container.lg" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main