import { HStack, Image, VStack, Heading, Box, Text } from "@chakra-ui/react"

export default function ProfileSection() {
  return (
    <HStack 
      id="profile"
      w="100%"
      h="100%"
      justifyContent="flex-start"
      bgGradient="to-t" 
      gradientFrom="#514e4e"
      gradientTo="black"
    >
      <Box
        h="100%"
      >
        <Image
          src="./images/profileImages/mySelf.png"
        />
      </Box>
      <VStack 
        fontSize="5.5rem"
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
          Desenvolvedor web fullstack
        </Heading>
      </VStack>
    </HStack>
  )
}