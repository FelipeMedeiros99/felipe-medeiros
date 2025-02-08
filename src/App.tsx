import { VStack, Text } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";

import NavBar from "./components/NavBar";
import ProfileSection from "./components/ProfileSection";
import AboutSection from "./components/AboutSection";
import TechnologyCard from "./components/TechnologyCard";
import Contacts from "./components/Contacts";
import Projects from "./components/Projects";

function App() {

  const brackPoint = useBreakpointValue({
    base: 'base', // 0px
    sm: 'sm', // ~480px
    md: 'md', // ~768px
    lg: 'lg', // ~992px
    xl: 'xl', // ~1280px
    '2xl': '2xl', // ~1536px
  })

  return (
    <VStack
      w="100%"
    >
      <NavBar />
      <ProfileSection />
      <AboutSection />
      {/* <TechnologyCard />
      <Projects />
      <Contacts /> */}
      <Text zIndex={"8"}>
        {brackPoint}
      </Text>
    </VStack>
  );
}

export default App;
