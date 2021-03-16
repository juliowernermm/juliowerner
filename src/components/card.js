import { Box, Heading, Stack, useColorModeValue } from "@chakra-ui/react";
import NextImage from "next/image";
import Image from "@/components/image";

export default function Card(props) {
  return (
    <Stack
      alignItems="center"
      w="320px"
      h="320px"
      bg={useColorModeValue("white", "gray.700")}
      rounded={"md"}
      boxShadow={"xl"}
      spacing={6}
      p={4}
      transition="all 0.25s ease"
      _hover={{
        transform: "translateY(-15px)",
        boxShadow: "2xl",
      }}
    >
      <Box>
        <Image
          src={props.image}
          transform={"scale(" + props.scale + ")"}
          maxH="200px"
          htmlWidth="200px"
          htmlHeight="200px"
          alt={props.alt}
        />
      </Box>
      <Heading fontSize="2xl">{props.title}</Heading>
    </Stack>
  );
}
