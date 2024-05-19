import React from 'react';
import { Box, Heading, Text, Flex, Avatar } from '@chakra-ui/react';

import myself from './../images/mrids.jpg';

function About() {
  return (
    <Flex
      align="center"
      justify="center"
      height="100vh" // Set the height of the container to full viewport height
    >
      <Box p={{ base: 2, md: 4, lg: 8 }} textAlign="center">
        <Avatar
          size={'2xl'}
          name="Mridul Awasthi"
          src={myself}
          mb={4}
          mx="auto"
          boxShadow="0 0 20px rgba(128, 128, 128, 0.5)" // Adjust the values as needed
        />
        <Heading as="h2" fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }} mb={4}>
          Mridul Awasthi
        </Heading>
        <Text fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}>
          Digital Creator & Software Engineer
        </Text>
        {/* Add any additional sections, text, or components as needed */}
      </Box>
    </Flex>
  );
}

export default About;
