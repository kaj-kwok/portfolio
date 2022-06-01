import {
  Text,
  Box,
  Heading,
  Link
} from "@chakra-ui/layout"
import Image from "next/image"

const WorkGridItem = ({ id, thumbnail, title, children }) => {
  return (
    <Link href={`/projects/${id}`} >
      <Box
        w='100%'
        h="100%"
        textAlign="center"
        borderStyle="solid"
        borderRadius="12px"
        borderColor="#92a8d1"
        borderWidth="5px"
        boxShadow="dark-lg"
        _hover={{ transform: "scale(1.1)", transition: "all 0.5s ease" }}
      // onClick={() => {

      // }}
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
    </Link >
  )
}

export default WorkGridItem