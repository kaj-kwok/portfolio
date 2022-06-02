import { Box, Text, Heading, chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion } from "framer-motion";

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

const Hero = () => {
  return (
    <StyledDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      height="95vh"
    >
      <Text fontSize="20px">Hello there, my name is</Text>
      <Heading as="h3" fontFamily="heading" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text" fontSize="6xl" pb={2}>Ryan Kwok</Heading>
      <Heading as="h3" fontFamily="heading">I like to build cool things for the Web.</Heading>
      <Text width="50%" my={7} fontSize="20px">I am a full-stack developer located in Vancouver, BC with a passion designing and building user-friendly Web Applications. </Text>
    </StyledDiv>
  )
}

export default Hero;