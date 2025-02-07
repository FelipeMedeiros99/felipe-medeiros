import { Image, HStack, Link, VStack, Heading } from "@chakra-ui/react";

export default function Contacts() {
  const contacts = [
    {
      type: "Email",
      url: "felipe.m.c.b.fm@gmail.com",
      img: './images/contactsImages/gmail.png'
    },
    {
      type: "Whatsapp",
      url: "https://api.whatsapp.com/send/?phone=5598987835523&text&type=phone_number&app_absent=0",
      img: './images/contactsImages/whatsapp.png'
    },
    {
      type: "LinkedIn",
      url: "https://www.linkedin.com/in/felipe-medeiros-fm/",
      img: './images/contactsImages/linkedin.png'
    },
    {
      type: "GitHub",
      url: "https://github.com/FelipeMedeiros99",
      img: './images/contactsImages/github.png'
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