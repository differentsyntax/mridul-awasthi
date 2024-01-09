// Header.js

import React, { useState } from 'react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Flex, Text, IconButton, Box, List, ListItem, Link } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleSectionClick = (sectionId) => {
    if (showMenu) {
      setShowMenu(false);
    }
    navigate(`/${sectionId}`);
  };

  return (
    <Flex
      align="center"
      justify="space-between"
      bg="#282c34"
      p={4}
      color="white"
      position="relative"
    >
      <Text fontSize="2xl" fontWeight="bold">
        Mridul Awasthi
      </Text>
      <IconButton
        display={{ base: 'block', md: 'none' }}
        icon={showMenu ? <CloseIcon /> : <HamburgerIcon />}
        onClick={toggleMenu}
        fontSize="20px"
        color="white"
        aria-label={showMenu ? 'Close Menu' : 'Open Menu'}
        background="transparent" // Transparent background for the icon button
        _hover={{ background: 'transparent' }} // Transparent background on hover
      />
      <Box
        display={{ base: showMenu ? 'block' : 'none', md: 'flex' }}
        position={{ base: 'fixed', md: 'static' }}
        top="60px"
        right={{ base: '0', md: 'auto' }}
        left={{ base: '0', md: 'auto' }}
        bg="#333"
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <List
          listStyleType="none"
          m={0}
          p={0}
          display="flex"
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <ListItem mb={{ base: '10px', md: '0' }} mr={{ base: '0', md: '10px' }}>
            <Link
              onClick={() => handleSectionClick('aboutMe')}
              color={location.pathname === '/aboutMe' ? 'teal.500' : 'white'}
            >
              About Me
            </Link>
          </ListItem>
          <ListItem mb={{ base: '10px', md: '0' }} mr={{ base: '0', md: '10px' }}>
            <Link
              onClick={() => handleSectionClick('projects')}
              color={location.pathname === '/projects' ? 'teal.500' : 'white'}
            >
              Projects
            </Link>
          </ListItem>
          <ListItem mb={{ base: '10px', md: '0' }} mr={{ base: '0', md: '10px' }}>
            <Link
              onClick={() => handleSectionClick('contact')}
              color={location.pathname === '/contact' ? 'teal.500' : 'white'}
            >
              Contact
            </Link>
          </ListItem>
        </List>
      </Box>
    </Flex>
  );
};

export default Header;
