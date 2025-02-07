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
      <ProfileSection />
      <AboutSection />
      <TechnologyCard />
      <Projects />
      <Contacts />
    </VStack>
  );
}

export default App;
