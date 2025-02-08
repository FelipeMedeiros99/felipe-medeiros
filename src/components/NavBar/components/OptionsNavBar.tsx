import { HStack } from "@chakra-ui/react";
import { Link } from "react-scroll";
import { motion } from "framer-motion"
import { useEffect, useRef } from "react";
import { useBreakpointValue } from "@chakra-ui/react";

import { hrefs } from "../../../data";
import { NavBarStateInterface } from "..";




export default function OptionsNavBar({ optionsVisibility, setOptionsVisibility }: NavBarStateInterface) {

  const optionsBox = useRef<HTMLDivElement>(null)
  const screenSize = useBreakpointValue<string>({
    base: 'base',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
    '2xl': '2xl',
  });
  const isSmallScreen = ["base", "sm", "md"].includes(screenSize!)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const elementClicked = event.target as Node;
      const optionsBoxHTML = optionsBox.current;
      if (optionsBoxHTML && !optionsBoxHTML.contains(elementClicked)) {
        setOptionsVisibility(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [setOptionsVisibility]);

  useEffect(() => {
    if (!isSmallScreen) {
      setOptionsVisibility(true)
      return
    }
    setOptionsVisibility(false)
  }, [screenSize, isSmallScreen, setOptionsVisibility])

  const OptionsBoxNavBar = () => {
    return (
      <HStack
        bgColor={{ base: "#000000d6", lg: "transparent" }}
        position={{ base: "fixed", lg: "relative" }}
        top="0"
        left="0"
        flexDir={{ base: "column", lg: "row" }}
        w={{ base: "100%", lg: "45rem" }}
        justifyContent="space-around"
        padding="0 1rem 0 1rem"
        ref={optionsBox}
      >
        {
          hrefs.map((href) => (
            <HStack key={href.id} height={{ base: "4rem", lg: "auto" }}>
              <Link
                onClick={() => { setOptionsVisibility(false) }}
                to={href.id}
                smooth={true}
                duration={1000}
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
            </HStack>
          ))
        }
      </HStack>
    )
  }

  return (
    <>
      {
        isSmallScreen &&
        <motion.div
          initial={{ y: "-25rem", position: "fixed", left: "0", width: "100%", display: "none" }}
          animate={{ y: optionsVisibility ? "-2.5rem" : "-25rem", display: "block" }}
          transition={{ duration: 0.5 }}
        >
          <OptionsBoxNavBar />
        </motion.div>
      }

      {!isSmallScreen && <OptionsBoxNavBar />}
    </>
  )
}
