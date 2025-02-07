import { HStack, Image, Box } from "@chakra-ui/react";
import { Link } from "react-scroll";

import { hrefs } from "../data";

export default function NavBar() {
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
              to={href.id}
              smooth={true}
              duration={500}
              offset={-80}
            >
              <HStack
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
              </HStack>
            </Link>
          ))
        }
      </HStack> 
    </HStack>
  )
}