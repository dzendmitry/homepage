import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import Home from './components/Home';
import Work from './components/Work';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Home />
      <Work />
      <Projects />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
