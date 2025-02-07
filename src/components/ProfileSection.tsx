import { HStack, Image, VStack, Heading, Box, Text, useBreakpoint } from "@chakra-ui/react"
import { useBreakpointValue } from "@chakra-ui/react"

export default function ProfileSection() {
  const brackPoint = useBreakpointValue({
    base: 'base', // 0px
    sm: 'sm', // ~480px
    md: 'md', // ~768px
    lg: 'lg', // ~992px
    xl: 'xl', // ~1280px
    '2xl': '2xl', // ~1536px
  })
  return (

    <HStack
      flexDir={{
        base: "column",
        md: "row"
      }}
      paddingTop="5rem"
      id="profile"
      w="100%"
      h="100vh"
      justifyContent={{
        base: "center",
        md: "flex-start"
      }}
      bgGradient="to-t"
      gradientFrom="#514e4e"
      gradientTo="black"
    >
      <Box
        height={{ base: "25rem", md: "100%" }}
      >
        <Image
          height="100%"
          src="./images/profileImages/mySelf.png"
        />
      </Box>
      <VStack
        minW="50%"
      >
        <Heading
          fontSize={{
            "2xl": "5.5rem",
            xl: "4.5rem",
            lg: "3rem",
            base: "2rem",
          }}
          textAlign={{
            base: "center",
            md: "left"
          }}
          fontWeight="700"
          as="h1"
        >
          Olá! <br />
          Eu sou <Text as="span" color="#8adcfb">Felipe Medeiros</Text> <br />
          Desenvolvedor web fullstack
        </Heading>
        <Text>
          {brackPoint}
        </Text>
      </VStack>
    </HStack>
  )
}