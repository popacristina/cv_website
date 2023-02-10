import './App.css';
import {ChakraProvider, extendTheme} from '@chakra-ui/react'
import Header from './components/Header';
import LandingSection from './components/LandingSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import ContactSection from './components/ContactSection';
import Alert from './components/Alert';
import { AlertProvider } from './context/alertContext';

const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px'
}

const customTheme = extendTheme({
  components: {
    Drawer: {
      parts: ['dialog', 'header', 'body'],
      variants: {
        primary: {
          dialog: {
            background: 'blackAlpha.900',
            color: "white"
          }
        },
        secondary: {
          dialog: {
            background: "green"
          }
        }
      }
    }
  },
  breakpoints
})

function App() {
  return (

  <ChakraProvider theme={customTheme}>
    <AlertProvider>
    <main>
      <Header />
      <LandingSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <Alert/>
    </main>
    </AlertProvider>
  </ChakraProvider>

  );
}

export default App;
