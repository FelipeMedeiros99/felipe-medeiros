import { VStack } from "@chakra-ui/react";

import NavBar from "./components/NavBar";
import ProfileSection from "./components/ProfileSection";
import AboutSection from "./components/AboutSection";
import TechnologyCard from "./components/TechnologyCard";
import Contacts from "./components/Contacts";
import Projects from "./components/Projects";

function App() {

  return (
    <VStack
      w="100%"
    >
      <NavBar />
      <VStack
        w="100%"
        maxW="65rem"
        padding="2rem 3rem 3rem 3rem"
      >
        <ProfileSection />
        <AboutSection />
        <TechnologyCard />
        <Projects />
        <Contacts />
      </VStack>
    </VStack>
  );
}

export default App;
