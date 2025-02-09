import { HStack, Box, Image } from "@chakra-ui/react";
import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";

import OptionsNavBar from "./components/OptionsNavBar";


export interface NavBarStateInterface {
  optionsVisibility: boolean;
  setOptionsVisibility: (newOptions: boolean) => void;
}

export default function NavBar() {
  const [optionsVisibility, setOptionsVisibility] = useState(false)
  return (
    <>
      <HStack
        w="100%"
        h={{base: "3.5rem", md: "5rem"}}
        justifyContent="space-between"
        position="fixed"
        top="0"
        backgroundColor="#8989898c"
        backdropFilter="blur(10px)"
        padding={{ base: "0", lg: "0 2.5rem 0 2.5rem" }}
        zIndex="4"
      >

        <Box width="5rem" padding="1rem">
          <Image src="./images/profileImages/simbol.png" />
        </Box>

        <Box
          display={{ base: optionsVisibility ? "none" : "block", lg: "none" }}
          padding="1rem"
          fontSize="2rem"
          onClick={() => setOptionsVisibility(true)}
          zIndex={"5"}
        >
          <MdOutlineMenu />
        </Box>

        <OptionsNavBar
          optionsVisibility={optionsVisibility}
          setOptionsVisibility={setOptionsVisibility}
        />

      </HStack>
    </>
  )
}