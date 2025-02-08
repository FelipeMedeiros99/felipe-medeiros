import { Box } from "@chakra-ui/react"
import { MdOutlineMenu } from "react-icons/md";
import { NavBarStateInterface } from "..";

export default function NavButton({optionsVisibility, setOptionsVisibility}: NavBarStateInterface) {
  return (
    <Box
      display={{base: optionsVisibility?"none": "block", lg: "none"}}
      padding="1rem"
      fontSize="2rem"
      onClick={() => {
        console.log("clicado")
        setOptionsVisibility(true)}}
      zIndex={"5"}
    >
      <MdOutlineMenu />
    </Box>
  )
}