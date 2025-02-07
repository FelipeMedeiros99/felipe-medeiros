import { Box, Image, HStack, Link, Text, VStack, Heading, Button } from "@chakra-ui/react";

const technologies = [
  { name: "HTML5", image: "/images/technologiesImages/html.png" },
  { name: "CSS3", image: "/images/technologiesImages/css.png" },
  { name: "React.js", image: "/images/technologiesImages/react.png" },
  { name: "Next.js", image: "/images/technologiesImages/next.png" },
  { name: "Node.js", image: "/images/technologiesImages/node.png" },
  { name: "TypeScript", image: "/images/technologiesImages/typescript.png" },
  { name: "PostgreSQL", image: "/images/technologiesImages/postgres.png" },
  { name: "MongoDB", image: "/images/technologiesImages/mongodb.png" },
  { name: "Prisma ORM", image: "/images/technologiesImages/prisma.png" },
  { name: "Jest", image: "/images/technologiesImages/jest.png" },
  { name: "Cypress", image: "/images/technologiesImages/cypress.png" },
  { name: "GitHub", image: "/images/technologiesImages/github.png" },
  { name: "Git", image: "/images/technologiesImages/git.png" },
  { name: "AWS", image: "/images/technologiesImages/aws.png" }
];

export default function TechnologyCard() {
  return (
    
    <VStack
      id="tech"
      width="100%"
      padding={"3rem 10rem 3rem 10rem"}
      backgroundColor="#414141"
      scrollMarginTop="5rem"
    >
    <Heading>
      Tecnologias que conheço
    </Heading>
    <HStack 
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center"
    >
      {technologies.map((technology) => (
        <VStack
          key={technology.name}
          justifyContent="flex-start"
          w="20rem"
          h="10rem"
          borderRadius="1rem"
          position="relative"
          margin="1rem"
          boxShadow="0 0 0.5rem #00000066"
          backgroundColor="#535353"
        >
          <VStack
            h="5rem"
            justifyContent="center"
            margin="1.5rem 0 0 0 "
          >
            <Image
              borderRadius="1rem"
              h="100%"
              src={technology.image}
            />
          </VStack>
          <Text
            position="absolute"
            bottom="0.5rem"
            fontSize="1.5rem"
            fontWeight="700"
          >
            {technology.name}
          </Text>
        </VStack>
      ))}
    </HStack>
  </VStack>
  )
}