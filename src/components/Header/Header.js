import React, { useState } from 'react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Flex, Text, IconButton, Box, List, ListItem, Link, Image } from '@chakra-ui/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import your sun image
import sunImage from './../../images/sunflower.png';
import headerBg from './../../images/planetsheader.png';

const AnimatedBox = motion(Box);

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
      p={6}
      color="white"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1000"
      style={{
        backgroundImage: `url(${headerBg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
      }}
    >
      {/* Circular sun image with animation */}
      <AnimatedBox
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          ease: 'linear',
          repeat: Infinity,
          duration: 10,
        }}
      >
        <Image
          src={sunImage}
          alt="Sun"
          boxSize={{ base: "60px", md: "150px" }}
          borderRadius="full"
        />
      </AnimatedBox>

      <Text fontSize="2xl" fontWeight="bold" marginTop="10px">
        Mridul Awasthi
      </Text>
      <IconButton
        display={{ base: 'block', md: 'none' }}
        icon={showMenu ? <CloseIcon /> : <HamburgerIcon />}
        onClick={toggleMenu}
        fontSize="24px"
        color="white"
        aria-label={showMenu ? 'Close Menu' : 'Open Menu'}
        background="transparent"
        _hover={{ background: 'transparent' }}
      />
      <Box
        display={{ base: showMenu ? 'flex' : 'none', md: 'flex' }}
        position="fixed"
        top={{ base: '100px', md: '140px' }}
        left={{ base: '0', md: '0' }}
        right={{ base: '0', md: '0' }}
        bg="rgba(0, 0, 0, 0.5)" // Adjust the background color or make it transparent
        flexDirection={{ base: 'column', md: 'row' }}
        width="100%"
        zIndex="999"
      >
        <List
          listStyleType="none"
          m={0}
          p={4}
          display="flex"
          flexDirection={{ base: 'column', md: 'row' }}
          width="100%"
        >
          <ListItem mb={{ base: '10px', md: '0' }} mr={{ base: '0', md: '10px' }}>
            <Link
              onClick={() => handleSectionClick('person')}
              color={location.pathname === '/person' ? 'teal.500' : 'white'}
            >
              Person
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
