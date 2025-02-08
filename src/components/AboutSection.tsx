import { Link, Text, VStack, Heading, Button } from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";

const texts = [
  `Sou desenvolvedor full stack com paixão por criar soluções tecnológicas inovadoras. Tenho sólidos conhecimentos em CSS, HTML, JavaScript, React, TypeScript, Express, PostgreSQL, MongoDB, Prisma, Jest e cypress, com experiência prática na construção de sistemas eficientes e escaláveis. Ao longo da minha trajetória, tive a oportunidade de trabalhar em projetos que envolveram automação de processos, integração de APIs, criação de sites e otimização de fluxos de trabalho.`,

  `Uma das minhas principais características é a capacidade de identificar e criar ferramentas práticas e eficientes para automatizar e facilitar tarefas repetitivas, o que resulta em ganhos de produtividade e redução de erros.`,

  `Além das minhas habilidades técnicas, sou uma pessoa proativa e colaborativa, me dou muito bem em trabalhos em equipe e busco sempre entender as necessidades do usuário e entregar soluções que agreguem valor real ao negócio. Tenho forte capacidade de adaptação e estou sempre em busca de novos desafios para aprimorar meu conhecimento.`
]

export default function AboutSection() {
  return (
    <VStack
      align="left"
      id="about"
      textAlign="justify"
      alignItems={{base: "center", md: "flex-start"}}
      padding={{ base: "1rem 1rem 3rem 1rem", md: "3rem 5rem 3rem 5rem", xl: "3rem 10rem 3rem 10rem" }}
      bgColor="#1d1d1f"
      scrollMarginTop="5rem"
    >
      <Heading as="h2" fontSize={{base: "3rem", md:"4rem"}}>
        Sobre
      </Heading>

      {texts.map((text, index)=>(
        <Text key={index} fontSize={{base: "1.25rem", md:"1.5rem"}} marginBottom="0.5rem">
          {text}
        </Text>
      ))}



      <Link href="./documents/curriculo.pdf" height="4rem" download >
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