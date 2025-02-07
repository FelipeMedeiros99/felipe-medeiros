import { HStack, Link } from "@chakra-ui/react"

export default function NavBar() {
  return (
    <HStack>
      <Link href="#about">Sobre</Link>
      <Link href="#projects">Projetos</Link>
      <Link href="#contacts">Contatos</Link>
    </HStack>
  )
}