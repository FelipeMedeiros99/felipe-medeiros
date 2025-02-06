import { Box, Image, HStack, Link, Text, VStack, Heading, Button } from "@chakra-ui/react";

import curriculo from "./assets/documents/curriculo.pdf";
import mySelf from "./assets/images/profileImages/mySelf.png";
import css from './assets/images/technologiesImages/css.png';
import cypress from './assets/images/technologiesImages/cypress.png';
import express from './assets/images/technologiesImages/express.png';
import github from './assets/images/technologiesImages/github.png';
import git from './assets/images/technologiesImages/git.png';
import html from './assets/images/technologiesImages/html.png';
import jest from './assets/images/technologiesImages/jest.png';
import mongodb from './assets/images/technologiesImages/mongodb.png';
import next from './assets/images/technologiesImages/next.png';
import node from './assets/images/technologiesImages/node.png';
import postgres from './assets/images/technologiesImages/postgres.png';
import prisma from './assets/images/technologiesImages/prisma.png';
import react from './assets/images/technologiesImages/react.png';
import typescript from './assets/images/technologiesImages/typescript.png';
import aws from './assets/images/technologiesImages/aws.png';
import trackIt from './assets/images/projectsImages/track-it.svg';

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
    { name: "AWS", image: aws }
  ];

  const projects = [
    {
      name: "track-it",
      img: trackIt,
      url: "https://track-it-seven-amber.vercel.app/",
      description: "",
      technologies: []
    }
  ]



  return (
    <VStack>

      <HStack>
        <Link href="#about">Sobre</Link>
        <Link href="#projects">Projetos</Link>
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

        <Link
          href={curriculo}
          download
        >
          <Button>
            Baixar CV
          </Button>
        </Link>

      </VStack>

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

      <VStack id="projects">
        <Heading>
          Principais projetos
        </Heading>
        <HStack>
          {
            projects.map((project, index) => (
              <VStack>
                <Box>
                  <Image src={project.img} />
                </Box>
                <Heading as="h2">{project.name}</Heading>
                <Text>{project.description}</Text>
                {project.technologies.map((technology)=>(
                  <Box>
                    {technology}
                  </Box>
                ))}
                <Link href={project.url} target="_blank">Ver projeto</Link>
              </VStack>
            ))
          }
        </HStack>
      </VStack>

    </VStack>
  );
}

export default App;
