import { HStack, Link } from "@chakra-ui/react";
import { FcInfo, FcFolder, FcPhone } from "react-icons/fc";

export default function NavBar() {
  const hrefs = [
    {
      title: "Sobre",
      id: "#about",
      icon: <FcInfo /> 
    },
    {
      title: "Projetos",
      id: "#projects",
      icon: <FcFolder />
    },
    {
      title: "Contatos",
      id: "#contacts",
      icon: <FcPhone />
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
              key={href.id}
              href={href.id}
              fontWeight="700"
              fontSize="20px"
              display="flex"
              _hover={{
                cursor: "pointer", 
                fontSize: "24px",
                textDecor: "none"
              }}
            >
              {href.title}
              {href.icon}
            </Link>
          ))
        }
      </HStack> 
    </HStack>
  )
}