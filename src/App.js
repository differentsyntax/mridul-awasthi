import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { extendTheme } from '@chakra-ui/react';
import Header from './components/Header/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

import wholeBg from './images/musafir.png';

// Define the theme
const theme = extendTheme({
  fonts: {
    heading: 'Courier, monospace',
    body: 'Courier, monospace',
  },
  styles: {
    global: (props) => ({
      body: {
        color: 'white',
        bg: `url(${wholeBg})`,
        backgroundSize: 'cover', // Cover the entire body
        backgroundPosition: 'center', // Center the background image
      },
    }),
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
