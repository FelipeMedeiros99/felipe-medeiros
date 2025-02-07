import { Link, Text, VStack, Heading, Button } from "@chakra-ui/react";

import curriculo from "../assets/documents/curriculo.pdf";

export default function AboutSection() {
  return (
    <VStack
      align="left"
      id="about"
      textAlign="justify"
    >
      <Heading as="h2">
        Sobre
      </Heading>

      <Text
        fontSize="1.25rem"
        marginBottom="0.5rem"
      >
        Sou desenvolvedor full stack com paixão por criar soluções tecnológicas inovadoras. Tenho sólidos conhecimentos em CSS, HTML, JavaScript, React, TypeScript, Express, PostgreSQL, MongoDB, Prisma, Jest e cypress, com experiência prática na construção de sistemas eficientes e escaláveis. Ao longo da minha trajetória, tive a oportunidade de trabalhar em projetos que envolveram automação de processos, integração de APIs, criação de sites e otimização de fluxos de trabalho.
      </Text>

      <Text
        fontSize="1.25rem"
        marginBottom="0.5rem"
      >
        Uma das minhas principais características é a capacidade de identificar e criar ferramentas práticas e eficientes para automatizar e facilitar tarefas repetitivas, o que resulta em ganhos de produtividade e redução de erros.
      </Text>
      <Text
        fontSize="1.25rem"
        marginBottom="0.5rem"
      >
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
  )
}