import { Box } from "@chakra-ui/layout"
import Image from "next/image"

const WorkGridItem = ({ thumbnail, title, children }) => {
  return (
    <Box w='100%' textAlign="center">
      <Image
        src={thumbnail}
        alt={title}
        placeholder='blur'
        loading="lazy"
      />
    </Box>
  )
}

export default WorkGridItem