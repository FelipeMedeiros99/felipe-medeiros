import { HStack, Image, VStack, Heading, Box, Text } from "@chakra-ui/react"


import mySelf from "../assets/images/profileImages/mySelf.png";


export default function ProfileSection() {
  return (
    <HStack 
      id="profile"
      w="100%"
      justifyContent="center"
    >
      <Box
        h="400px"
      >
        <Image
          h="100%"
          src={mySelf}
        />
      </Box>
      <VStack 
        fontSize="2.5rem"
        h="25rem"
        display="flex"
        justifyContent="center"
        fontWeight="700"
      >
        <Heading as="h1">
          Olá!
        </Heading>
        <Heading as="h1">
          Eu sou <Text as="span" color="#8adcfb">Felipe Medeiros</Text> 
        </Heading>
        <Heading as="h1">
          Desenvolvedor fullstack
        </Heading>
      </VStack>
    </HStack>
  )
}