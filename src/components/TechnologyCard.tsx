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
    
    <VStack>
    <Heading>
      Tecnologias que conheço
    </Heading>
    <HStack>
      {technologies.map((technology, index) => (
        <VStack
          justifyContent="space-between"
          key={technology.name}
          w="200px"
          h="200px"
          bgColor="#6e6e6e"
        >
          <VStack
            h="100%"
            w="100%"
            justifyContent="center"
          >
            <Image
              src={technology.image}
              width="150px"
              padding="10px"
            />
          </VStack>
          <Text>
            {technology.name}
          </Text>
        </VStack>
      ))}
    </HStack>
  </VStack>
  )
}