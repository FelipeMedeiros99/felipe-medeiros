import { Box, Image, HStack, Link, Text, VStack, Heading } from "@chakra-ui/react";
import mySelf from "./assets/images/mySelf.png";
import css from './assets/images/css.png';
import cypress from './assets/images/cypress.png';
import express from './assets/images/express.png';
import github from './assets/images/github.png';
import git from './assets/images/git.png';
import html from './assets/images/html.png';
import jest from './assets/images/jest.png';
import mongodb from './assets/images/mongodb.png';
import next from './assets/images/next.png';
import node from './assets/images/node.png';
import postgres from './assets/images/postgres.png';
import prisma from './assets/images/prisma.png';
import react from './assets/images/react.png';
import typescript from './assets/images/typescript.png';
import aws from './assets/images/aws.png';

// const mySelf = require("./assets/images/mySelf.jpg")

function App() {
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
    { name: "AWS", image: aws}
  ];
  
  

  return (
    <VStack>

      <HStack>
        <Link href="#about">Sobre</Link>
        <Link>Projetos</Link>
        <Link>Contatos</Link>
      </HStack>

      <HStack>
        <Image
          src={mySelf}
          h="300px"
        />
        <Box >
          <Text>
            Olá!
          </Text>
          <Text>
            Eu sou
          </Text>
          <Text>
            Felipe Medeiros Castello Branco
          </Text>
          <Text>
            Desenvolvedor fullstack
          </Text>
        </Box>
      </HStack>

      <VStack 
      align="left"
      >
        <Heading
          id="about"
        >
          Sobre
        </Heading>

        <Text>
          Sou desenvolvedor full stack com paixão por criar soluções tecnológicas inovadoras. Tenho sólidos conhecimentos em CSS, HTML, JavaScript, React, TypeScript, Express, PostgreSQL, MongoDB, Prisma, Jest e cypress, com experiência prática na construção de sistemas eficientes e escaláveis. Ao longo da minha trajetória, tive a oportunidade de trabalhar em projetos que envolveram automação de processos, integração de APIs, criação de sites e otimização de fluxos de trabalho.
        </Text>

        <Text>
          Uma das minhas principais características é a capacidade de identificar e criar ferramentas práticas e eficientes para automatizar e facilitar tarefas repetitivas, o que resulta em ganhos de produtividade e redução de erros.
        </Text>

        <Text>
          Além das minhas habilidades técnicas, sou uma pessoa proativa e colaborativa, me dou muito bem em trabalhos em equipe e busco sempre entender as necessidades do usuário e entregar soluções que agreguem valor real ao negócio. Tenho forte capacidade de adaptação e estou sempre em busca de novos desafios para aprimorar meu conhecimento.
        </Text>

      </VStack>

      <VStack>
        <Heading>
          Tecnologias que conheço
        </Heading>
        <HStack>
          {technologies.map((technology, index)=>(
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

    </VStack>
  );
}

export default App;
