import { Center, Container, Text } from "@chakra-ui/react";
import Nav from "@/components/Nav";
import About from "@/components/About";
import Links from "@/components/Links";
import Intro from "@/components/Intro";
import React from "react";
import { getDatabase } from "@/lib/notion";

export default function Home({ links }) {
  const target = React.createRef();

  return (
    <>
      <Nav target={target} />
      <Container ref={target} centerContent maxW="container.lg">
        {/* <Intro /> */}
        <Links links={links} />
        <About />
        <Center minH="250px" as="footer">
          <Text fontSize="lg" align="center">
            Júlio Werner © {new Date().getFullYear()}
          </Text>
        </Center>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      links: await getDatabase("3a81231b951f46c5a91429602ec1cb65"),
    },
  };
}
