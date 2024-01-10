import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { extendTheme } from '@chakra-ui/react';
import Header from './components/Header/Header';
import Person from './components/Person';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

// Define the theme
const theme = extendTheme({
  fonts: {
    heading: 'Courier, monospace',
    body: 'Courier, monospace',
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Person />} />
          <Route path="/person" element={<Person />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
