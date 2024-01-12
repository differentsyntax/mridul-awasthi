// Header.js
import React, { useState } from 'react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Box, List, ListItem, Link, Image } from '@chakra-ui/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import sunImage from './../../images/sunflower.png';
import headerBg from './../../images/header2.png';

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
      p={0}
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
        backgroundPosition: 'center',
      }}
    >
      <AnimatedBox
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          ease: 'linear',
          repeat: Infinity,
          duration: 30,
        }}
        zIndex="1000"
        ml={{ base: '-35px', md: '-110px' }}
      >
        <Image
          src={sunImage}
          alt="Sun"
          boxSize={{ base: '70px', md: '220px' }}
          borderRadius="full"
        />
      </AnimatedBox>
      <IconButton
        display={{ base: 'block', md: 'none' }}
        icon={showMenu ? <CloseIcon /> : <HamburgerIcon />}
        onClick={toggleMenu}
        fontSize="24px"
        color="black"
        aria-label={showMenu ? 'Close Menu' : 'Open Menu'}
        background="rgba(255, 255, 255, 0.5)"
        _hover={{ background: 'transparent' }}
      />
      <Box
        display={{ base: showMenu ? 'flex' : 'none', md: 'flex' }}
        position="fixed"
        top={{ base: '60px', md: '170px' }}
        left={{ base: '0', md: '0' }}
        right={{ base: '0', md: '0' }}
        bg={{base: "rgba(0, 0, 0, 1.0)", md: "rgba(0, 0, 0, 0.7)"}}
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
          alignItems="center"
          justifyContent="center"
        >
          <ListItem mb={{ base: '10px', md: '0' }} mr={{ base: '0', md: '10px' }}>
            <Link
              onClick={() => handleSectionClick('about')}
              color={(location.pathname === '/' || location.pathname === '/about') ? 'teal.500' : 'white'}
            >
              About
            </Link>
          </ListItem>
          <ListItem mb={{ base: '10px', md: '0' }} mr={{ base: '0', md: '10px' }}>
            <Link
              onClick={() => handleSectionClick('timeline')}
              color={(location.pathname === '/timeline') ? 'teal.500' : 'white'}
            >
              Timeline
            </Link>
          </ListItem>
          <ListItem mb={{ base: '10px', md: '0' }} mr={{ base: '0', md: '10px' }}>
            <Link
              onClick={() => handleSectionClick('playlist')}
              color={(location.pathname === '/playlist') ? 'teal.500' : 'white'}
            >
              Playlist
            </Link>
          </ListItem>
          <ListItem mb={{ base: '10px', md: '0' }} mr={{ base: '0', md: '10px' }}>
            <Link
              onClick={() => handleSectionClick('contact')}
              color={(location.pathname === '/contact') ? 'teal.500' : 'white'}
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
