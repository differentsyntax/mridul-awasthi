import React from 'react';
import { Flex, Box, Heading, Text, Link } from '@chakra-ui/react';

function Contact() {
  return (
    <Flex
      align="center"
      justify="center"
      height="100vh"  // Set the height of the container to full viewport height
    >
      <Box p={{ base: 4, md: 8 }}>
        <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={4}>
          Contact
        </Heading>
        <Text fontSize={{ base: 'md', md: 'lg' }}>
          {/* Your contact information and details go here */}
          You can reach me via email at{' '}
          <Link color="blue.500" href="mailto:your.email@example.com">
            your.email@example.com
          </Link>
        </Text>
        {/* Add any additional sections, text, or components as needed */}
      </Box>
    </Flex>
  );
}

export default Contact;
