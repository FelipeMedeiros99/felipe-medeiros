import { Image, HStack, Link, VStack, Heading } from "@chakra-ui/react";

import { contacts } from "../data";

export default function Contacts() {

  return (
    <VStack
      id="contacts"
      w="100%"  
      paddingTop="2rem"
      scrollMarginTop="5rem"
    >
    <Heading as="h2" fontSize={{ base: "3rem", md: "4rem" }} textAlign="center">
      Contatos
    </Heading>
    <HStack
      w={{base: "90%", sm: "30rem"}}
      h={{base: "7rem", sm: "10rem"}}
      alignItems="center"
      justifyContent="space-between"
    >

    {contacts.map((contact, index)=>(
      <Link 
        href={contact.type==="Email"?`mailto:${contact.url}`:contact.url}
        target="_blank"
        display="flex"
        justifyContent="center"
        alignItems="center"
        w={{base: "3rem", sm: "4rem"}}
        h={{base: "3rem", sm: "4rem"}}
        padding="0.5rem"
        borderRadius="50rem"
        bgColor="white"
        _hover={{
          width: {base:"4rem", sm: "5rem"},
          height: {base:"4rem", sm: "5rem"}
        }}
      >
        <Image 
          maxW="100%"
          src={contact.img}
        />
      </Link>
    ))}
    </HStack>
  </VStack>
  )
}