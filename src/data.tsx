import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaRegFolder } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";

// export const projects = [
//   {
//     name: "Track-it",
//     img: './images/projectsImages/track-it.svg',
//     url: "https://track-it-seven-amber.vercel.app/",
//     description: `
//     O Sistema de Gerenciamento de Rotina é uma ferramenta desenvolvida para auxiliar no controle e validação de tarefas diárias, garantindo maior organização, produtividade e eficiência.
//     Com essa solução, os usuários podem cadastrar, monitorar e validar suas atividades, garantindo que nenhuma tarefa essencial seja esquecida. O sistema permite a criação de fluxos de trabalho personalizados, estabelecendo regras e verificações para garantir que cada passo da rotina seja cumprido corretamente.
//     `,
//     technologies: ["react", "styled-components"],
//     github: "https://github.com/FelipeMedeiros99/track-it"
//   },
//   {
//     name: "Agenda escolar",
//     img: './images/projectsImages/school-spreadsheet.png',
//     url: "http://school-spreadsheet-front.s3-website-sa-east-1.amazonaws.com/sign-in",
//     description: `
//       O Sistema de Gerenciamento de Alunos é uma aplicação eficiente para armazenar e organizar informações acadêmicas, permitindo um controle preciso dos estudantes.
//       Com uma interface intuitiva, o sistema permite cadastrar, visualizar, editar e excluir alunos, garantindo que os dados estejam sempre atualizados. Todas as informações, como nome completo, idade e turma, são apresentadas de forma clara em uma tabela dinâmica, facilitando a gestão e a consulta de registros.
//     `,
//     technologies: ["TypeScript", "React", "chakra UI", "AWS"],
//     github: "https://github.com/FelipeMedeiros99/school-spreadsheet-front"
//   },
//   {
//     name: "Agenda escolar API",
//     img: "./images/projectsImages/school-spreadsheet.png",
//     url: "",
//     description: `
//     Esta API foi desenvolvida para gerenciar o cadastro de estudantes e usuários, permitindo operações essenciais como criação, edição e exclusão de alunos, garantindo controle total aos usuários autenticados.
//     A segurança é uma prioridade no projeto, com a implementação de criptografia de senhas, autenticação via tokens e validação de dados utilizando Joi, assegurando a proteção e a consistência das informações.
//     Os dados são armazenados e gerenciados de forma eficiente no banco de dados PostgreSQL, garantindo escalabilidade e confiabilidade.
//     `,
//     technologies: ["TypeScript", "Express", "Bcrypt", "Joi", "PostgreSQL", "Prisma"],
//     github: "https://github.com/FelipeMedeiros99/school-spreadsheet-backend/tree/main"
//   },
//   {
//     name: "Gerenciamento de Cursos",
//     img: "./images/projectsImages/inaed_logo.png",
//     url: "https://gerenciamento-de-cursos-frontend-1muo.vercel.app/",
//     description: `
//     Bem-vindo ao E-commerce de Cursos, uma plataforma intuitiva e eficiente desenvolvida para facilitar a compra e gerenciamento de cursos online.
//     Este projeto é uma aplicação web construída com Next.js, oferecendo uma experiência rápida e responsiva para os usuários. A plataforma se integra a uma API de backend para fornecer funcionalidades essenciais, como listagem de cursos, adição ao carrinho e finalização de compras.
//     `,
//     technologies: ["Next", "ChakraUI"],
//     github: "https://github.com/FelipeMedeiros99/Gerenciamento-de-cursos-frontend"
//   },
//   {
//     name: "Gerenciamento de cursos API",
//     img: "./images/projectsImages/inaed_logo.png",
//     url: "",
//     description: `  
//     Bem-vindo à API de gerenciamento de cursos! Esta API foi desenvolvida com NestJS e oferece endpoints para o gerenciamento de cursos, usuario e carrinho de compras
//     `,
//     technologies: ["Nest", "TypeScript", "PostgreSQL"],
//     github: "https://github.com/FelipeMedeiros99/Gerenciamento-de-cursos-backend"
//   },
//   {
//     name: "Cardápio Tambaú",
//     img: "./images/projectsImages/tambau.png",
//     url: "https://cardapio-tambau.vercel.app/",
//     description: `
//       O Cardápio Digital é uma solução moderna e interativa para restaurantes, bares e lanchonetes que desejam oferecer uma experiência mais prática e eficiente aos seus clientes.
//       Desenvolvido como uma aplicação web, o sistema permite que os usuários visualizem o menu completo, incluindo descrição dos pratos, preços e imagens, diretamente de seus dispositivos. Além disso, pode contar com funcionalidades extras, como categorização de itens, personalização de pedidos e integração com sistemas de pagamento.
//     `,
//     technologies: ["React", "Styled-components"],
//     github: "https://github.com/FelipeMedeiros99/cardapio-tambau"
//   },
//   {
//     name: "CineFlex",
//     img: "./images/projectsImages/cinema.png",
//     url: "https://cine-flex-git-main-felipe-medeiros-projects-86f8f20a.vercel.app/",
//     description: `
//     O Sistema de Compra de Ingressos para Cinema é uma plataforma intuitiva e eficiente que permite aos usuários selecionar filmes, escolher assentos e adquirir ingressos online de forma prática e segura.
//     Desenvolvido para oferecer uma experiência fluida e acessível, o sistema permite a navegação por cartaz de filmes, escolha de horários e pagamento integrado, garantindo comodidade tanto para os clientes quanto para a administração do cinema.
//     `,
//     technologies: ["React", "styled-components"],
//     github: "https://github.com/FelipeMedeiros99/Cine-flex/tree/main"
//   },
//   // {
//   //   name: "",
//   //   img: "",
//   //   url: "",
//   //   description: "",
//   //   technologies: [],
//   //   github: ""
//   // },
// ];


export const projects = [
  {
    name: "Track-it",
    img: './images/projectsImages/track-it.svg',
    url: "https://track-it-seven-amber.vercel.app/",
    functions: [
      "Cadastro e login",
      "Adicionar hábitos",
      "Marcar hábitos como feitos",
      "Remover hábitos",
      "Visualizar progresso",
      "Interface intuitiva"
    ],
    technologies: ["react", "styled-components"],
    github: "https://github.com/FelipeMedeiros99/track-it"
  },
  {
    name: "Agenda escolar",
    img: './images/projectsImages/school-spreadsheet.png',
    url: "http://school-spreadsheet-front.s3-website-sa-east-1.amazonaws.com/sign-in",
    functions: [
      "Design responsivo",
      "Validação de dados nos formulários",
      "Uso do react-hook-form para otimização",
      "Tabela de estudantes com ordenação e pesquisa",
      "Paginação para melhor performance",
      "Índice de pesquisa para navegação rápida",
      "Edição e exclusão de registros"
    ],
    technologies: ["TypeScript", "React", "chakra UI", "AWS"],
    github: "https://github.com/FelipeMedeiros99/school-spreadsheet-front"
  },
  {
    name: "Agenda escolar API",
    img: "./images/projectsImages/school-spreadsheet.png",
    url: "",
    functions: [
      "Cadastro de usuário com validação e criptografia de senha",
      "Login de usuário com autenticação JWT e expiração de token",
      "Validação de token para todas as rotas protegidas",
      "Contagem de estudantes armazenados no banco",
      "Busca paginada e filtrada de estudantes",
      "Cadastro de estudante com validação e padronização de dados",
      "Edição de estudante com atualização por ID",
      "Remoção de estudante do banco de dados"
    ],
    technologies: ["TypeScript", "Express", "Bcrypt", "Joi", "PostgreSQL", "Prisma"],
    github: "https://github.com/FelipeMedeiros99/school-spreadsheet-backend/tree/main"
  },
  {
    name: "Gerenciamento de Cursos",
    img: "./images/projectsImages/inaed_logo.png",
    url: "https://gerenciamento-de-cursos-frontend-1muo.vercel.app/",
    functions: [
      "Login de usuário sem senha, apenas com nome salvo no banco",
      "Visualização de cursos disponíveis e detalhes individuais",
      "Cadastro de novos cursos com informações detalhadas",
      "Gerenciamento do carrinho: adicionar, remover e finalizar compra"  
    ],
    technologies: ["Next", "ChakraUI"],
    github: "https://github.com/FelipeMedeiros99/Gerenciamento-de-cursos-frontend"
  },
  {
    name: "Gerenciamento de cursos API",
    img: "./images/projectsImages/inaed_logo.png",
    url: "",
    functions: [
      "Armazenamento de dados de compras",
      "Rotas de edição, exclusão e adição de cursos",
      "Operações de CRUD",
    ],
    technologies: ["Nest", "TypeScript", "PostgreSQL"],
    github: "https://github.com/FelipeMedeiros99/Gerenciamento-de-cursos-backend"
  },
  {
    name: "Cardápio Tambaú",
    img: "./images/projectsImages/tambau.png",
    url: "https://cardapio-tambau.vercel.app/",
    functions: [
      "Exibição de Categorias de Produtos",
      "Detalhamento de Produtos",
      "Informações de Preço e Porção"
    ],
    technologies: ["React", "Styled-components"],
    github: "https://github.com/FelipeMedeiros99/cardapio-tambau"
  },
  {
    name: "CineFlex",
    img: "./images/projectsImages/cinema.png",
    url: "https://cine-flex-git-main-felipe-medeiros-projects-86f8f20a.vercel.app/",
    functions: [
      "Seleção de filmes disponíveis",
      "Escolha de sessão e horário",
      "Seleção de assentos",
      "Confirmação de reserva"
    ],
    technologies: ["React", "styled-components"],
    github: "https://github.com/FelipeMedeiros99/Cine-flex/tree/main"
  },
];



export const contacts = [
  {
    type: "Email",
    url: "felipe.m.c.b.fm@gmail.com",
    img: './images/contactsImages/gmail.png'
  },
  {
    type: "Whatsapp",
    url: "https://api.whatsapp.com/send/?phone=5598987835523&text&type=phone_number&app_absent=0",
    img: './images/contactsImages/whatsapp.png'
  },
  {
    type: "LinkedIn",
    url: "https://www.linkedin.com/in/felipe-medeiros-fm/",
    img: './images/contactsImages/linkedin.png'
  },
  {
    type: "GitHub",
    url: "https://github.com/FelipeMedeiros99",
    img: './images/contactsImages/github.png'
  },
];

export const hrefs = [
  {
    title: "Início",
    id: "profile",
    icon: <FaHome />
  },
  {
    title: "Sobre",
    id: "about",
    icon: <IoIosInformationCircleOutline />
  },
  {
    title: "Tecnologias",
    id: "tech",
    icon: <FaReact />
  },
  {
    title: "Projetos",
    id: "projects",
    icon: <FaRegFolder />
  },
  {
    title: "Contatos",
    id: "contacts",
    icon: <MdOutlinePhone />
  }
]