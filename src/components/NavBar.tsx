import { HStack, Link, Image, Box } from "@chakra-ui/react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { FaRegFolder } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";

import simbol from "../assets/images/profileImages/simbol.png"

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
      h="80px"
      justifyContent="space-between"
      position="fixed"
      top="0"
      backgroundColor="#8989898c"
      backdropFilter="blur(10px)"
      padding="0 40px 0 40px"
    >

      <Box 
        width="80px"
        padding="5px"
      >
      <Image src={simbol}></Image>
      </Box>

      <HStack
        w="500px"
        justifyContent="space-around"
        padding="0 10px 0 10px"
        
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