import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaRegFolder } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";

export const projects = [

  {
    name: "Automação de Atendimento (WhatsApp Bot)",
    img: "./images/projectsImages/wpp-icon.png",
    url: null,
    functions: [
      "Atendimento 24/7 com respostas automáticas para dúvidas comuns (FAQs).",
      "Integração direta com a API do Google Gemini para interpretação de linguagem natural.",
      "Geração de respostas dinâmicas e humanizadas usando IA para simular uma conversa real.",
      "Persistência do histórico de conversa em banco de dados SQLite para manter o contexto do diálogo com a IA.",
    ],
    technologies: ["Express", "Gemini API"],
    github: "https://github.com/FelipeMedeiros99/whatsapp-automation-backend.git"
  },

  {
    name: "Maranhãe Tour",
    img: "./images/projectsImages/maranhae_tour.png",
    url: "https://maranhaetour.com.br",
    functions: [
      "Listagem e visualização detalhada de passeios turísticos.",
    ],
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "NestJS", "Prisma", "PostgreSQL"],
    github: "https://github.com/FelipeMedeiros99/maranhae-tour.git"
  },
  {
    name: "Cursos online",
    img: "./images/projectsImages/cursos_online.png",
    url: "http://cursos-online.felipemedeiros.dev.br/sign-in",
    functions: [
      "Login de usuário sem senha, apenas com nome salvo no banco",
      "Visualização de cursos disponíveis e detalhes individuais",
      "Cadastro de novos cursos com informações detalhadas",
      "Gerenciamento do carrinho: adicionar, remover e finalizar compra"
    ],
    technologies: ["Next", "ChakraUI", "Docker"],
    github: "https://github.com/FelipeMedeiros99/Gerenciamento-de-cursos-frontend"
  },
  {
    name: "Cursos online API",
    img: "./images/projectsImages/cursos_online.png",
    url: "",
    functions: [
      "Armazenamento de dados de compras",
      "Rotas de edição, exclusão e adição de cursos",
      "Operações de CRUD",
    ],
    technologies: ["Nest", "TypeScript", "PostgreSQL", "Docker"],
    github: "https://github.com/FelipeMedeiros99/Gerenciamento-de-cursos-backend"
  },
  {
    name: "Agenda escolar",
    img: './images/projectsImages/school-spreadsheet.png',
    url: "http://agenda-escolar.felipemedeiros.dev.br/sign-in",
    functions: [
      "Design responsivo",
      "Validação de dados nos formulários",
      "Uso do react-hook-form para otimização",
      "Tabela de estudantes com ordenação e pesquisa",
      "Paginação para melhor performance",
      "Índice de pesquisa para navegação rápida",
      "Edição e exclusão de registros"
    ],
    technologies: ["TypeScript", "React", "chakra UI", "AWS", "Hostinger", "Docker"],
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
    technologies: ["TypeScript", "Express", "Bcrypt", "Joi", "PostgreSQL", "Prisma", "Docker"],
    github: "https://github.com/FelipeMedeiros99/school-spreadsheet-backend/tree/main"
  },
  {
    name: "App Saúde mental",
    img: "./images/projectsImages/saude-mental.png",
    url: "https://app-saude-mental.vercel.app/sign-in",
    functions: [
      "Postar anotações e estado emocional",
      "Vídeos motivacionais",
      "Entrar em contato com atendente",
      "Obs: Protótipo de projeto"
    ],
    technologies: ["Nest", "TypeScript", "PostgreSQL", "Docker"],
    github: "https://github.com/FelipeMedeiros99/Gerenciamento-de-cursos-backend"
  },
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