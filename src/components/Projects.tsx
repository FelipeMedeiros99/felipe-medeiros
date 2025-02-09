import { Box, Image, HStack, Link, Text, VStack, Heading, Button } from "@chakra-ui/react";
import { MdOutlineLink } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

import { projects } from "../data";

export default function Projects() {

  return (
    <VStack
      id="projects"
      bgColor="#1D1D1F"
      padding={{ base: "0", md: "3rem" }}
      scrollMarginTop="5rem"
    >
      <Heading as="h2" fontSize={{ base: "3rem", md: "4rem" }} textAlign="center">
        Principais projetos
      </Heading>

      <HStack flexWrap="wrap" alignItems="center" justifyContent="center" w="100%">
        {
          projects.map((project) => (
            <VStack
              bgColor="#2b2b2c"
              key={project.name}
              boxShadow="0 0 1rem black"
              w="100%"
              maxW="30rem"
              h={{ base: "auto", md: "40rem" }}
              position="relative"
              margin="1rem"
              padding="1rem"
              borderRadius="1rem"
            >
              <VStack h="14rem" w="100%" padding="3rem" bgColor="#a8a8a8">
                <Image src={project.img} h="100%" borderRadius="1rem" />
              </VStack>

              <Heading as="h3" fontSize="1.5rem" fontWeight="700" padding="1rem" >
                {project.name}
              </Heading>


              <HStack as="ul" height="9rem" flexWrap="wrap" justifyContent="space-between" marginBottom="1rem" overflowY="auto">
                {
                  project.functions.map((funct) => (
                    <Text
                      as="li"
                      fontSize={{ base: "0.75rem", md: "1.125rem" }}
                      textAlign="left"
                      w="13rem"
                      display="flex"
                      color="#d6d6d6"
                    >
                      <Box marginRight="0.25rem"><IoCheckmarkCircleOutline /></Box>
                      {funct}
                    </Text>
                  ))
                }
              </HStack>

              <HStack w="100%" padding={{ base: "0.5rem", md: "0 1rem 0 1rem" }} flexWrap="wrap">
                {project.technologies.map((technology) => (
                  <VStack
                    key={technology}
                    justifyContent="center"
                    backgroundColor="#a8ae98"
                    color="black"
                    borderRadius="10rem"
                    h="2rem"
                    padding="0 1rem 0 1rem"
                  >
                    <Text fontSize={{ base: "0.75rem", md: "1rem" }} color="black">{technology}</Text>
                  </VStack>
                ))}
              </HStack>

              <HStack
                fontSize="1.25rem"
                w="20rem"
                justifyContent="space-around"
                position={{ base: "relative", md: "absolute" }}
                bottom={{ md: "1.5rem" }}
                h="3rem"
                marginBottom={{ base: "1rem", md: "0" }}
                color="#000000"
              >
                {
                  project.url &&
                  <Link
                    alignItems="center"
                    justifyContent="center"
                    href={project.url}
                    target="_blank"
                    w="9rem"
                  >
                    <Button color="black" backgroundColor="white" w="8rem" h="2.5rem" _hover={{ width: "9rem", h: "3rem" }}>
                      <MdOutlineLink /> Ver site
                    </Button>
                  </Link>
                }
                <Link
                  alignItems="center"
                  justifyContent="center"
                  href={project.github}
                  target="_blank"
                  w="9rem"
                >
                  <Button color="black" backgroundColor="white" w="8rem" h="2.5rem" _hover={{ width: "9rem", h: "3rem" }}>
                    <FaGithub /> Ver projeto
                  </Button>
                </Link>
              </HStack>
            </VStack>
          ))
        }
      </HStack>
    </VStack>
  )
}