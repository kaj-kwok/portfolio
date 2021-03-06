import { Box, chakra, Flex, Text, Heading, shouldForwardProp } from "@chakra-ui/react"
import Image from "next/image"
import profile from "../public/Profile.png"
import { useInView } from "react-intersection-observer"
import { useAnimation, motion } from "framer-motion"
import { useEffect } from 'react'

const ProfilePic = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop)
  }
})

const AboutMe = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.4
  });
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1 }
      })
    }
    if (!inView) {
      controls.start({
        y: 10,
        opacity: 0
      })
    }
  }, [inView])


  return (
    <>
      <StyledDiv
        height="100vh"
        maxW="100%"
        id="AboutMe"
        ref={ref}
        animate={controls}
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          height="100%"
        >
          <Heading as="h3" mb={7}> About Me</Heading>
          <Flex
            gap={10}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Box
              display="flex"
              flexDirection="column"
              width="75%"
            >
              <Text>Hi, thanks for visiting. Born and raised in Sydney, Australia but now call Vancouver home. I have always had an interest in technology growing up starting with the dial-up modem. Working for a software company peaked my interest in web development, particularly manifesting a solution using code for a real-life problem. </Text>
              <Text mt={4}>Currently excited to jump into the world of web-development</Text>
              <Text mt={4}>While not coding, I enjoy hitting the gym regularly, playing video games and watching/following the NBA.</Text>

            </Box>
            <Box
              overflow-x="hidden"
              display="block"
              width="100%"
            >
              <Box
                id="wrapper"
                position="relative"
                maxW="200px"
              >
                <Box
                  object-fit="none"
                  _after={{
                    content: "''",
                    position: "absolute",
                    left: "0.5rem",
                    top: "-0.5rem",
                    border: "2px solid black",
                    display: "block",
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px"
                  }} />
                <ProfilePic
                  alt="profile_pic"
                  src={profile}
                  borderRadius={10}
                  object-fit="cover"

                />
              </Box>
            </Box>
          </Flex>

        </Flex>
      </StyledDiv>
    </>
  )
}

export default AboutMe