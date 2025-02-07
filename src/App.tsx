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
import schoolSpreadsheet from './assets/images/projectsImages/school-spreadsheet.png';
import inaed from "./assets/images/projectsImages/inaed_logo.png";
import tambau from "./assets/images/projectsImages/tambau.png";
import cinema from "./assets/images/projectsImages/cinema.png";

import linkedin from "./assets/images/contactsImages/linkedin.png";
import whatsapp from "./assets/images/contactsImages/whatsapp.png";
import gmail from "./assets/images/contactsImages/gmail.png";
import gitHub from "./assets/images/contactsImages/github.png";

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
      description: `
      O Sistema de Gerenciamento de Rotina é uma ferramenta desenvolvida para auxiliar no controle e validação de tarefas diárias, garantindo maior organização, produtividade e eficiência.
      Com essa solução, os usuários podem cadastrar, monitorar e validar suas atividades, garantindo que nenhuma tarefa essencial seja esquecida. O sistema permite a criação de fluxos de trabalho personalizados, estabelecendo regras e verificações para garantir que cada passo da rotina seja cumprido corretamente.
      `,
      technologies: ["react", "styled-components"],
      github: "https://github.com/FelipeMedeiros99/track-it"
    },
    {
      name: "Agenda escolar",
      img: schoolSpreadsheet,
      url: "http://school-spreadsheet-front.s3-website-sa-east-1.amazonaws.com/sign-in",
      description: `
        O Sistema de Gerenciamento de Alunos é uma aplicação eficiente para armazenar e organizar informações acadêmicas, permitindo um controle preciso dos estudantes.
        Com uma interface intuitiva, o sistema permite cadastrar, visualizar, editar e excluir alunos, garantindo que os dados estejam sempre atualizados. Todas as informações, como nome completo, idade e turma, são apresentadas de forma clara em uma tabela dinâmica, facilitando a gestão e a consulta de registros.
      `,
      technologies: ["TypeScript", "React", "chakra UI", "AWS"],
      github: "https://github.com/FelipeMedeiros99/school-spreadsheet-front"
    },
    {
      name: "Agenda escolar API",
      img: schoolSpreadsheet,
      url: "",
      description: `
      Esta API foi desenvolvida para gerenciar o cadastro de estudantes e usuários, permitindo operações essenciais como criação, edição e exclusão de alunos, garantindo controle total aos usuários autenticados.
      A segurança é uma prioridade no projeto, com a implementação de criptografia de senhas, autenticação via tokens e validação de dados utilizando Joi, assegurando a proteção e a consistência das informações.
      Os dados são armazenados e gerenciados de forma eficiente no banco de dados PostgreSQL, garantindo escalabilidade e confiabilidade.
      `,
      technologies: ["TypeScript", "Express", "Bcrypt", "Joi", "PostgreSQL", "Prisma"],
      github: "https://github.com/FelipeMedeiros99/school-spreadsheet-backend/tree/main"
    },
    {
      name: "Gerenciamento de Cursos",
      img: inaed,
      url: "https://gerenciamento-de-cursos-frontend-1muo.vercel.app/",
      description: `
      Bem-vindo ao E-commerce de Cursos, uma plataforma intuitiva e eficiente desenvolvida para facilitar a compra e gerenciamento de cursos online.
      Este projeto é uma aplicação web construída com Next.js, oferecendo uma experiência rápida e responsiva para os usuários. A plataforma se integra a uma API de backend para fornecer funcionalidades essenciais, como listagem de cursos, adição ao carrinho e finalização de compras.
      `,
      technologies: ["Next", "ChakraUI"],
      github: "https://github.com/FelipeMedeiros99/Gerenciamento-de-cursos-frontend"
    },
    {
      name: "Geremciamento de cursos API",
      img: inaed,
      url: "",
      description: `  
      Bem-vindo à API de gerenciamento de cursos! Esta API foi desenvolvida com NestJS e oferece endpoints para o gerenciamento de cursos, usuario e carrinho de compras
      `,
      technologies: ["Nest", "TypeScript", "PostgreSQL"],
      github: "https://github.com/FelipeMedeiros99/Gerenciamento-de-cursos-backend"
    },
    {
      name: "Cardápio Tambaú",
      img: tambau,
      url: "https://cardapio-tambau.vercel.app/",
      description: `
        O Cardápio Digital é uma solução moderna e interativa para restaurantes, bares e lanchonetes que desejam oferecer uma experiência mais prática e eficiente aos seus clientes.
        Desenvolvido como uma aplicação web, o sistema permite que os usuários visualizem o menu completo, incluindo descrição dos pratos, preços e imagens, diretamente de seus dispositivos. Além disso, pode contar com funcionalidades extras, como categorização de itens, personalização de pedidos e integração com sistemas de pagamento.
      `,
      technologies: ["React", "Styled-components"],
      github: "https://github.com/FelipeMedeiros99/cardapio-tambau"
    },
    {
      name: "CineFlex",
      img: cinema,
      url: "https://cine-flex-git-main-felipe-medeiros-projects-86f8f20a.vercel.app/",
      description: `
      O Sistema de Compra de Ingressos para Cinema é uma plataforma intuitiva e eficiente que permite aos usuários selecionar filmes, escolher assentos e adquirir ingressos online de forma prática e segura.
      Desenvolvido para oferecer uma experiência fluida e acessível, o sistema permite a navegação por cartaz de filmes, escolha de horários e pagamento integrado, garantindo comodidade tanto para os clientes quanto para a administração do cinema.
      `,
      technologies: ["React", "styled-components"],
      github: "https://github.com/FelipeMedeiros99/Cine-flex/tree/main"
    },
    // {
    //   name: "",
    //   img: "",
    //   url: "",
    //   description: "",
    //   technologies: [],
    //   github: ""
    // },
  ]

  const contacts = [
    {
      type: "Email",
      url: "felipe.m.c.b.fm@gmail.com",
      img: gmail
    },
    {
      type: "Whatsapp",
      url: "https://api.whatsapp.com/send/?phone=5598987835523&text&type=phone_number&app_absent=0",
      img: whatsapp
    },
    {
      type: "LinkedIn",
      url: "https://www.linkedin.com/in/felipe-medeiros-fm/",
      img: linkedin
    },
    {
      type: "GitHub",
      url: "https://github.com/FelipeMedeiros99",
      img: gitHub
    },
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
                <Heading as="h3">{project.name}</Heading>
                <Text>{project.description}</Text>
                {project.technologies.map((technology) => (
                  <Box>
                    {technology}
                  </Box>
                ))}
                <HStack>
                  {project.url && <Link href={project.url} target="_blank">Ver projeto</Link>}
                  <Link href={project.github}>Ver no github</Link>
                </HStack>
              </VStack>
            ))
          }
        </HStack>
      </VStack>
      
      <VStack id="contacts">
        <Heading as="h2">Contatos</Heading>
        <HStack>

        {contacts.map((contact, index)=>(
          <Link 
            href={contact.type==="Email"?`mailto:${contact.url}`:contact.url}
            target="_blank"
          >
            <Image src={contact.img}/>
          </Link>
        ))}
        </HStack>
      </VStack>

    </VStack>
  );
}

export default App;
