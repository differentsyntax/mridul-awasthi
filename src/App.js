// App.js
import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { extendTheme } from '@chakra-ui/react';
import Header from './components/Header/Header';
import About from './components/About';
import Timeline from './components/Timeline'; // Import the new Timeline component
import Contact from './components/Contact';
import './App.css';

import wholeBg from './images/musafir.png';

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
        backgroundSize: 'cover',
        backgroundPosition: 'center',
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
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
