// Person.js
import React from 'react';
import { Box, Heading, Text, Flex } from '@chakra-ui/react';

function Person() {
  return (
    <Flex
      align="center"
      justify="center"
      height="100vh"  // Set the height of the container to full viewport height
    >
      <Box p={{ base: 16, md: 32 }}>
        <Heading as="h2" fontSize="2xl" mb={4}>
          Person
        </Heading>
        <Text fontSize="lg">
          {/* Your content goes here */}
        </Text>
        {/* Add any additional sections, text, or components as needed */}
      </Box>
    </Flex>
  );
}

export default Person;
