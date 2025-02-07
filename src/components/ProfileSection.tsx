import { HStack, Image, VStack, Heading, Box, Text } from "@chakra-ui/react"


import mySelf from "../assets/images/profileImages/mySelf.png";


export default function ProfileSection() {
  return (
    <HStack 
      id="profile"
      marginTop="80px"
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
        fontSize="40px"
        h="400px"
        display="flex"
        justifyContent="center"
        fontWeight="700"
      >
        <Heading>
          Olá!
        </Heading>
        <Heading>
          Eu sou <Text as="span" color="#8adcfb">Felipe Medeiros</Text> 
        </Heading>
        <Heading>
          Desenvolvedor fullstack
        </Heading>
      </VStack>
    </HStack>
  )
}