import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import SideBar from './sidebar'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8} display="flex" >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ryan Kwok's Homepage</title>
      </Head>
      <SideBar>

      </SideBar>
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main