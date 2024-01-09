// Projects.js
import React from 'react';
import { Box, Heading, Text, Link, SimpleGrid } from '@chakra-ui/react';

function Projects() {
  return (
    <Box p={4}>
      <Heading as="h2" fontSize="2xl" mb={4}>
        Projects
      </Heading>
      <SimpleGrid columns={{ sm: 1, md: 2 }} gap={6}>
        {/* Project 1 */}
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Box p={6}>
            <Heading fontSize="xl" mb={2}>
              Project 1
            </Heading>
            <Text color="gray.500">
              {/* Project 1 description goes here */}
              A brief description of Project 1.
            </Text>
          </Box>
          <Box p={6} borderTopWidth="1px" borderColor="gray.200">
            <Link color="blue.500" href="#">
              Learn more
            </Link>
          </Box>
        </Box>

        {/* Project 2 */}
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Box p={6}>
            <Heading fontSize="xl" mb={2}>
              Project 2
            </Heading>
            <Text color="gray.500">
              {/* Project 2 description goes here */}
              A brief description of Project 2.
            </Text>
          </Box>
          <Box p={6} borderTopWidth="1px" borderColor="gray.200">
            <Link color="blue.500" href="#">
              Learn more
            </Link>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default Projects;
