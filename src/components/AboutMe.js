// AboutMe.js
import React from 'react';
import { Box, Heading, Text, Divider } from '@chakra-ui/react';

function AboutMe() {
  return (
    <Box p={4}>
      <Heading as="h2" fontSize="2xl" mb={4}>
        About Me
      </Heading>
      <Text fontSize="lg">
        {/* Your content goes here */}
      </Text>
      {/* Add any additional sections, text, or components as needed */}
    </Box>
  );
}

export default AboutMe;
