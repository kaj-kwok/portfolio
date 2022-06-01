import { Box, Text, Heading } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      height="95vh"
    >
      <Text fontSize="20px">Hello there, my name is</Text>
      <Heading as="h3" fontFamily="heading" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text" fontSize="6xl" pb={2}>Ryan Kwok</Heading>
      <Heading as="h3" fontFamily="heading">I like to build cool things for the Web.</Heading>
      <Text width="50%" my={7} fontSize="20px">I am a full-stack developer located in Vancouver, BC with a passion designing and building user-friendly Web Applications. </Text>
    </Box>
  )
}

export default Hero;