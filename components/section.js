import { chakra, shouldForwardProp } from "@chakra-ui/system";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

const Section = ({ children, delay = 0, forwardedref }) => {
  const controls = useAnimation()

  useEffect(() => {
    if (forwardedref) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1 }
      })
    }
    if (!forwardedref) {
      controls.start({
        y: 10,
        opacity: 0
      })
    }

  }, [forwardedref])

  return (
    <StyledDiv
      // initial={{ y: 10, opacity: 0 }}
      animate={controls}
      // transition={{ duration: 1, delay }}
      my={6}
      width="100%"
    >
      {children}
    </StyledDiv>
  )
}

export default Section