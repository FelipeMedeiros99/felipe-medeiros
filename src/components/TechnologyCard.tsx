import { Box, Image, HStack, Link, Text, VStack, Heading, Button } from "@chakra-ui/react";

import css from '../assets/images/technologiesImages/css.png';
import cypress from '../assets/images/technologiesImages/cypress.png';
import express from '../assets/images/technologiesImages/express.png';
import github from '../assets/images/technologiesImages/github.png';
import git from '../assets/images/technologiesImages/git.png';
import html from '../assets/images/technologiesImages/html.png';
import jest from '../assets/images/technologiesImages/jest.png';
import mongodb from '../assets/images/technologiesImages/mongodb.png';
import next from '../assets/images/technologiesImages/next.png';
import node from '../assets/images/technologiesImages/node.png';
import postgres from '../assets/images/technologiesImages/postgres.png';
import prisma from '../assets/images/technologiesImages/prisma.png';
import react from '../assets/images/technologiesImages/react.png';
import typescript from '../assets/images/technologiesImages/typescript.png';
import aws from '../assets/images/technologiesImages/aws.png';


export default function TechnologyCard() {
  const technologies = [
    { name: "HTML5", image: html },
    { name: "CSS3", image: css },
    { name: "React.js", image: react },
    { name: "Next.js", image: next },
    { name: "Node.js", image: node },
    { name: "TypeScript", image: typescript },
    { name: "PostgreSQL", image: postgres },
    { name: "MongoDB", image: mongodb },
    { name: "Prisma ORM", image: prisma },
    { name: "Jest", image: jest },
    { name: "Cypress", image: cypress },
    { name: "GitHub", image: github },
    { name: "Git", image: git },
    { name: "AWS", image: aws }
  ];

  return (
    
    <VStack
      width="100%"
      padding={"3rem 10rem 3rem 10rem"}
      backgroundColor="#414141"
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