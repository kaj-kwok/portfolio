import { Box, Text, Heading, chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion } from "framer-motion";

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

const banner = {
  initial: {
    opacity: 1
  },
  animate: {
    opacity: 1,
    transition: {
      delayChildren: 5,
      staggerChildren: 1,
    },
  },
};

const letters = {
  initial: {
    opacity: 0,
    y: 400
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 3,
    }
  }
};

const AnimateLetters = ({ title }) => (
  <motion.div
    variants={banner}
    initial='hidden'
    animate='show'
  >{
      [...title].map((letter, index) => (
        <motion.span
          key={letter + index}
          variants={letters}
          initial='initial'
          animate='animate'
        >{letter}</motion.span>
      ))}
  </motion.div>
)

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
      {/* <div fontSize="20px"> */}
      <AnimateLetters title={"Hello there, my name is"} />
      {/* </div> */}
      <Heading as="h3" fontFamily="heading" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text" fontSize="6xl" pb={2}>Ryan Kwok</Heading>
      <Heading as="h3" fontFamily="heading">I like to build cool things for the Web.</Heading>
      <Text width="50%" my={7} fontSize="20px">I am a full-stack developer located in Vancouver, BC with a passion designing and building user-friendly Web Applications. </Text>
    </StyledDiv>
  )
}

export default Hero;