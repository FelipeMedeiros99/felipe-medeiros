import { HStack } from "@chakra-ui/react";
import { useState } from "react";

import NavButton from "./components/NavButton";
import IconNavBar from "./components/IconNavBar";
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
        h="5rem"
        justifyContent="space-between"
        position="fixed"
        top="0"
        backgroundColor="#8989898c"
        backdropFilter="blur(10px)"
        padding={{ base: "0", lg: "0 2.5rem 0 2.5rem" }}
        zIndex="4"
      >

        <IconNavBar />

        <NavButton
          optionsVisibility={optionsVisibility}
          setOptionsVisibility={setOptionsVisibility}
        />

        <OptionsNavBar
          optionsVisibility={optionsVisibility}
          setOptionsVisibility={setOptionsVisibility}
        />

      </HStack>
    </>
  )
}