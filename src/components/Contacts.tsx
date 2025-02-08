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
    <Heading 
      fontSize="4rem"
    >
      Contatos
    </Heading>
    <HStack
      w="30rem"
      h="10rem"
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
        w="4rem"
        h="4rem"
        padding="0.5rem"
        borderRadius="50rem"
        bgColor="white"
        _hover={{
          width: "5rem",
          height: "5rem"
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