import React from 'react';
import { Flex, Box, Link, Image, UnorderedList, ListItem, Heading } from '@chakra-ui/react';

import github from './../images/github.png';
import linkedin from './../images/linkedin.png';
import instagram from './../images/instagram.png';
import email from './../images/email.png';
import MyCalendlyComponent from './MyCalendlyComponent';

function Contact() {
  return (
    <Flex
      flexDirection={'column'}
    >
      <Flex align="center"
      justify="center"
      height="100vh"  // Set the height of the container to full viewport height
      mt={-12}>
      <Box p={{ base: 8, md: 8 }}>
      <Heading visibility={{base: 'visible', md: 'hidden'}} align="center" justify="center" mb={100} mt={{base: 50, md: 120}} fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}>
            Contact
          </Heading>
        <UnorderedList listStyleType="none" p={0} display="grid" gridTemplateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
          <ListItem mb={8} display="flex" alignItems="center" flexDirection="column">
            <Link href="mailto:diffsyntax@gmail.com" target="_blank">
              <Image src={email} alt="Email" boxSize={{ base: '80px', md: '100px' }} mb={2} />
            </Link>
          </ListItem>
          
          <ListItem mb={8} display="flex" alignItems="center" flexDirection="column">
            <Link href="https://www.github.com/differentsyntax" target="_blank">
              <Image src={github} alt="GitHub" boxSize={{ base: '70px', md: '90px' }} mb={2} />
            </Link>
          </ListItem>
          
          <ListItem mb={8} display="flex" alignItems="center" flexDirection="column">
            <Link href="https://www.linkedin.com/in/mridulawasthi" target="_blank">
              <Image src={linkedin} alt="LinkedIn" boxSize={{ base: '70px', md: '90px' }} mb={2} />
            </Link>
          </ListItem>
          
          <ListItem mb={8} display="flex" alignItems="center" flexDirection="column">
            <Link href="https://www.instagram.com/thenwhathappened" target="_blank">
              <Image src={instagram} alt="Instagram" boxSize={{ base: '70px', md: '90px' }} mb={2} />
            </Link>
          </ListItem>
        </UnorderedList>
      </Box>
      </Flex>
      <Flex>
        <MyCalendlyComponent/>
      </Flex>
    </Flex>
  );
}

export default Contact;
