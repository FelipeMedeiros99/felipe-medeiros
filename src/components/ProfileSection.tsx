import { HStack, Image, Box, Text } from "@chakra-ui/react"


import mySelf from "../assets/images/profileImages/mySelf.png";


export default function ProfileSection() {
  return (
    <HStack>
      <Image
        src={mySelf}
        h="300px"
      />
      <Box >
        <Text>
          Olá!
        </Text>
        <Text>
          Eu sou
        </Text>
        <Text>
          Felipe Medeiros Castello Branco
        </Text>
        <Text>
          Desenvolvedor fullstack
        </Text>
      </Box>
    </HStack>
  )
}