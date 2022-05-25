import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css';
import Layout from '../components/layouts/main'


const MyWebsite = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyWebsite
