import { Project, Title } from "../../components/layouts/project";
import { Container } from "@chakra-ui/react";
import Image from "next/image";
import animatedimg from "../../public/name_that_tune/animated.gif"

const NameThatTune = (id) => {
  return (
    <Project title="Name That Tune">
      <Container maxWidth="container.lg">
        <Image
          src={animatedimg}
        />
        <div> Hello name this tune</div>
      </Container>
    </Project>
  )
}

export default NameThatTune