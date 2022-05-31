import { Box, Text } from "@chakra-ui/react"
import Image from "next/image"

const TechStackIcon = ({ image, title }) => {
  return (
    <Box>
      <Image
        alt={title}
        src={image}
        placeholder='blur'
        loading="lazy"
        height="150px"
        width="150px"
      />
      <Text fontWeight="bold" >{title}</Text>
    </Box>
  )
}

export default TechStackIcon;