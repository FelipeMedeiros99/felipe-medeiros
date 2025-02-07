import { HStack, Link, Box } from "@chakra-ui/react"

export default function NavBar() {
  const hrefs = [
    {
      title: "Sobre",
      id: "#about"
    },
    {
      title: "Projetos",
      id: "#projects"
    },
    {
      title: "Contatos",
      id: "#contacts"
    }
  ]
  return (
    <HStack 
      w="100%"
      h="100px"
      justifyContent="center"
    >

      <HStack
        w="500px"
        justifyContent="space-around"
      >
        {
          hrefs.map((href)=>(
            <Link 
              href={href.id}
              fontWeight="700"
              fontSize="20px"
              textDecor="underline"
              _hover={{cursor: "pointer", fontSize: "24px"}}
            >
              {href.title}
            </Link>
          ))
        }
      </HStack> 
    </HStack>
  )
}