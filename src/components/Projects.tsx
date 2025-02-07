import { Box, Image, HStack, Link, Text, VStack, Heading, Button } from "@chakra-ui/react";
import { MdOutlineLink } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

import { projects } from "../data";

export default function Projects() {

  return (
    <VStack
      id="projects"
      bgColor="#1D1D1F"
      padding="3rem 10rem 3rem 10rem"
      scrollMarginTop="5rem"
    >
      <Heading
        marginBottom="3rem"
      >
        Principais projetos
      </Heading>
      <HStack
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
      >
        {
          projects.map((project) => (
            <VStack
              boxShadow="0 0 0.5rem #00000066"
              key={project.name}
              w="40rem"
              h="45rem"
              margin="1.5rem"
              position="relative"
            >
              <VStack
                h="18rem"
                w="100%"
                padding="3rem"
                bgColor="#a8a8a8"
              >
                <Image
                  src={project.img}
                  h="100%"
                  borderRadius="1rem"
                />
              </VStack>

              <Heading as="h3"
                fontSize="2rem"
                fontWeight="700"
                padding="1rem"
              >
                {project.name}
              </Heading>

              <Text
                padding="0 3rem 0 3rem"
                fontSize="1.25rem"
                textAlign="justify"
              >
                {project.description}
              </Text>

              <HStack
                w="100%"
                padding="1rem 3rem 1rem 3rem"
                flexWrap="wrap"
              >
                {project.technologies.map((technology) => (
                  <VStack
                    justifyContent="center"
                    key={technology}
                    backgroundColor="#a8ae98"
                    color="black"
                    borderRadius="10rem"
                    h="2rem"
                    padding="0 1rem 0 1rem"
                  >
                    <Text
                      fontSize="1.25rem"
                    >
                      {technology}
                    </Text>
                  </VStack>
                ))}
              </HStack>


              <HStack
                fontSize="1.25rem"
                w="20rem"
                justifyContent="space-around"
                position="absolute"
                bottom="1.5rem"
              >
                {
                  project.url &&
                  <Link href={project.url} target="_blank">
                    <Button
                      w="8rem"
                    >
                      <MdOutlineLink /> Ver site
                    </Button>
                  </Link>
                }
                <Link href={project.github} target="_blank">
                  <Button
                    w="8rem"
                  >
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