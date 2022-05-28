import { Text, Box, Heading } from "@chakra-ui/layout"
import Image from "next/image"

const WorkGridItem = ({ thumbnail, title, children }) => {
  return (
    <Box
      w='100%'
      textAlign="center"
      borderStyle="solid"
      borderRadius="12px"
      borderColor="#92a8d1"
      borderWidth="5px"
      boxShadow="dark-lg"
    >
      <Image
        src={thumbnail}
        alt={title}
        placeholder='blur'
        loading="lazy"
      />
      <Heading as="h3" textAlign="left" m={3}>{title}</Heading>
      <Text textAlign="left" m={3}>{children}</Text>
    </Box>
  )
}

export default WorkGridItem