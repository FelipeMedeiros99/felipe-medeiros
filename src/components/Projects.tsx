import { Box, Image, HStack, Link, Text, VStack, Heading, Button } from "@chakra-ui/react";
import { MdOutlineLink } from "react-icons/md";
import { FaGithub } from "react-icons/fa";


export default function Projects() {
  const projects = [
    {
      name: "Track-it",
      img: './images/projectsImages/track-it.svg',
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
      img: './images/projectsImages/school-spreadsheet.png',
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
      img: "./images/projectsImages/school-spreadsheet.png",
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
      img: "./images/projectsImages/inaed_logo.png",
      url: "https://gerenciamento-de-cursos-frontend-1muo.vercel.app/",
      description: `
      Bem-vindo ao E-commerce de Cursos, uma plataforma intuitiva e eficiente desenvolvida para facilitar a compra e gerenciamento de cursos online.
      Este projeto é uma aplicação web construída com Next.js, oferecendo uma experiência rápida e responsiva para os usuários. A plataforma se integra a uma API de backend para fornecer funcionalidades essenciais, como listagem de cursos, adição ao carrinho e finalização de compras.
      `,
      technologies: ["Next", "ChakraUI"],
      github: "https://github.com/FelipeMedeiros99/Gerenciamento-de-cursos-frontend"
    },
    {
      name: "Gerenciamento de cursos API",
      img: "./images/projectsImages/inaed_logo.png",
      url: "",
      description: `  
      Bem-vindo à API de gerenciamento de cursos! Esta API foi desenvolvida com NestJS e oferece endpoints para o gerenciamento de cursos, usuario e carrinho de compras
      `,
      technologies: ["Nest", "TypeScript", "PostgreSQL"],
      github: "https://github.com/FelipeMedeiros99/Gerenciamento-de-cursos-backend"
    },
    {
      name: "Cardápio Tambaú",
      img: "./images/projectsImages/tambau.png",
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
      img: "./images/projectsImages/cinema.png",
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