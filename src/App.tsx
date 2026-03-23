import { Box, Heading, Text } from '@chakra-ui/react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import HomePage from './pages/HomePage/HomePage'

function App() {
  return (
    <Box minH="100vh">
      <NavBar />

      <Box as="main" className="single-page-layout">
        <Box as="section" id="home" className="page-section">
          <HomePage />
        </Box>

        <Box as="section" id="about" className="page-section">
          <Heading size="lg" color="black">About</Heading>
          <Text color="black">Write your About section content here.</Text>
        </Box>

        <Box as="section" id="contact" className="page-section">
          <Heading size="lg" color="black">Contact</Heading>
          <Text color="black">Write your Contact section content here.</Text>
        </Box>
      </Box>
    </Box>
  );
}

export default App
