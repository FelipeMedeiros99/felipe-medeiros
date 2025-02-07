import { Link, Text, VStack, Heading, Button } from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";

export default function AboutSection() {
  return (
    <VStack
      align="left"
      id="about"
      textAlign="justify"
      padding={"3rem 10rem 3rem 10rem"}
      bgColor="#1d1d1f"
      scrollMarginTop="5rem"
    >
      <Heading as="h2">
        Sobre
      </Heading>

      <Text
        fontSize="1.5rem"
        marginBottom="0.5rem"
      >
        Sou desenvolvedor full stack com paixão por criar soluções tecnológicas inovadoras. Tenho sólidos conhecimentos em CSS, HTML, JavaScript, React, TypeScript, Express, PostgreSQL, MongoDB, Prisma, Jest e cypress, com experiência prática na construção de sistemas eficientes e escaláveis. Ao longo da minha trajetória, tive a oportunidade de trabalhar em projetos que envolveram automação de processos, integração de APIs, criação de sites e otimização de fluxos de trabalho.
      </Text>

      <Text
        fontSize="1.5rem"
        marginBottom="0.5rem"
      >
        Uma das minhas principais características é a capacidade de identificar e criar ferramentas práticas e eficientes para automatizar e facilitar tarefas repetitivas, o que resulta em ganhos de produtividade e redução de erros.
      </Text>
      <Text
        fontSize="1.5rem"
        marginBottom="0.5rem"
      >
        Além das minhas habilidades técnicas, sou uma pessoa proativa e colaborativa, me dou muito bem em trabalhos em equipe e busco sempre entender as necessidades do usuário e entregar soluções que agreguem valor real ao negócio. Tenho forte capacidade de adaptação e estou sempre em busca de novos desafios para aprimorar meu conhecimento.
      </Text>

      <Link
        href="./documents/curriculo.pdf"
        download
        height="4rem"
      >
        <Button 
          bgColor="#e6ff4a"
          width="10rem"
          height="3rem"
          fontSize="1.125rem"
          marginTop="2rem"
          _hover={{
            width: "11rem",
            height: "4rem"
          }}
        >
          Baixar CV
          <FaDownload />
        </Button>
      </Link>

    </VStack>
  )
}