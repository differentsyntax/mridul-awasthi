// Contact.js
import React from 'react';
import { Box, Heading, Text, Divider, Link } from '@chakra-ui/react';

function Contact() {
  return (
    <Box p={4}>
      <Heading as="h2" fontSize="2xl" mb={4}>
        Contact
      </Heading>
      <Text fontSize="lg">
        {/* Your contact information and details go here */}
        You can reach me via email at{' '}
        <Link color="blue.500" href="mailto:your.email@example.com">
          your.email@example.com
        </Link>
      </Text>
      {/* Add any additional sections, text, or components as needed */}
    </Box>
  );
}

export default Contact;
