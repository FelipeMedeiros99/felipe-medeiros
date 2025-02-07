import { Image, HStack, Link, VStack, Heading } from "@chakra-ui/react";

import linkedin from "../assets/images/contactsImages/linkedin.png";
import whatsapp from "../assets/images/contactsImages/whatsapp.png";
import gmail from "../assets/images/contactsImages/gmail.png";
import gitHub from "../assets/images/contactsImages/github.png";

export default function Contacts() {
  const contacts = [
    {
      type: "Email",
      url: "felipe.m.c.b.fm@gmail.com",
      img: gmail
    },
    {
      type: "Whatsapp",
      url: "https://api.whatsapp.com/send/?phone=5598987835523&text&type=phone_number&app_absent=0",
      img: whatsapp
    },
    {
      type: "LinkedIn",
      url: "https://www.linkedin.com/in/felipe-medeiros-fm/",
      img: linkedin
    },
    {
      type: "GitHub",
      url: "https://github.com/FelipeMedeiros99",
      img: gitHub
    },
  ]

  return (
    <VStack id="contacts">
    <Heading as="h2">Contatos</Heading>
    <HStack>

    {contacts.map((contact, index)=>(
      <Link 
        href={contact.type==="Email"?`mailto:${contact.url}`:contact.url}
        target="_blank"
      >
        <Image src={contact.img}/>
      </Link>
    ))}
    </HStack>
  </VStack>
  )
}