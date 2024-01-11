// Projects.js
import React from 'react';
import { Box, Heading, Text, Link, SimpleGrid, Flex } from '@chakra-ui/react';

function Projects() {
  return (
    <Flex
      align="center"
      justify="center"
      height="100vh"  // Set the height of the container to full viewport height
    >
        <Heading align="center" justify="center" p={6}>Projects</Heading>
        <Box p={{ base: 8, md: 8 }} >
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
    </Flex>
  );
}

export default Projects;
