import { HStack, Link, Image, Box } from "@chakra-ui/react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaRegFolder } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";


export default function NavBar() {
  const hrefs = [
    {
      title: "Início",
      id: "#profile",
      icon: <FaHome /> 
    },
    {
      title: "Sobre",
      id: "#about",
      icon: <IoIosInformationCircleOutline /> 
    },
    {
      title: "Tecnologias",
      id: "#tech",
      icon: <FaReact /> 
    },
    {
      title: "Projetos",
      id: "#projects",
      icon: <FaRegFolder />
    },
    {
      title: "Contatos",
      id: "#contacts",
      icon: <MdOutlinePhone />
    }
  ]
  return (
    <HStack 
      w="100%"
      h="5rem"
      justifyContent="space-between"
      position="fixed"
      top="0"
      backgroundColor="#8989898c"
      backdropFilter="blur(10px)"
      padding="0 2.5rem 0 2.5rem"
      zIndex="4"
    >

      <Box 
        width="5rem"
        padding="1rem"
      >
      <Image src="./images/profileImages/simbol.png"></Image>
      </Box>

      <HStack
        w="45rem"
        justifyContent="space-around"
        padding="0 1rem 0 1rem"
        
      >
        {
          hrefs.map((href)=>(
            <Link 
              key={href.id}
              href={href.id}
              fontWeight="700"
              fontSize="1.25rem"
              display="flex"
              _hover={{
                cursor: "pointer", 
                fontSize: "1.5rem",
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