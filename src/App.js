import './App.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import Header from './components/Header';
import LandingSection from './components/LandingSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import ContactSection from './components/ContactSection';
import Alert from "./components/Alert";
import { AlertProvider } from './context/alertContext';


// <ChakraProvider theme={customTheme}>

function App() {
  return (
  <ChakraProvider>
    <AlertProvider>
    <main>
      <Header />
      <LandingSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <Alert />
    </main>
    </AlertProvider>
  </ChakraProvider>
  );
};

export default App;
