import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css';
import Layout from '../components/layouts/main'
import theme from './styles/theme';

const MyWebsite = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyWebsite
