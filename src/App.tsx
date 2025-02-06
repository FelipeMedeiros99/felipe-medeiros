import { Box, Image, HStack, Link, Text, VStack, Heading } from "@chakra-ui/react";
import mySelf from "./assets/images/mySelf.png";
// const mySelf = require("./assets/images/mySelf.jpg")

function App() {
  const technologies = [
    "HTML5",
    "CSS3",
    "React.js",
    "Next.js",
    "Styled-components",
    "Chakra-ui",
    "Node.js",
    "Express",
    "TypeScript",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Prisma ORM",
    "Jest",
    "Cypress",
    "GitHub",
    "Git"
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
          
        </HStack>
      </VStack>

    </VStack>
  );
}

export default App;
