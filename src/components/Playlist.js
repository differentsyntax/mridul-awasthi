import React from 'react';
import { Box, Heading, Text, SimpleGrid } from '@chakra-ui/react';

const Playlist = () => {
  const trackURLs = [
    'https://open.spotify.com/embed/track/7K6RLbkpqZI4OaoSnLcBiU?utm_source=generator',
    'https://open.spotify.com/embed/track/3IQF4xCQUPicbA4hWfTxPo?utm_source=generator',
    'https://open.spotify.com/embed/track/6R5fYCySNHrqo4Og6O1ppn?utm_source=generator',
    'https://open.spotify.com/embed/track/2YevgojIN3UouxDM5JjzE0?utm_source=generator',
    'https://open.spotify.com/embed/track/5YqEzk3C5c3UZ1D5fJUlXA?utm_source=generator',
    'https://open.spotify.com/embed/track/68AyTcvyK46hpzwohHUkJI?utm_source=generator',
    // Add more track URLs as needed
  ];

  return (
    <Box p={8} mt={{ md: 50, base: 50 }} width={{ base: "100%", md: "80%" }} ml={{ base: 0, md: 40 }}>
      <Heading
        align="center"
        justify="center"
        mt={{ base: 5, md: 180 }}
        fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
      >
        Currently listening to
      </Heading>
      <Text mb={10} align="center" justify="center">(updates weekly)</Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        {trackURLs.map((url, index) => (
          <iframe
            key={index}
            title={`Spotify Track ${index + 1}`}
            style={{ borderRadius: '12px' }}
            src={url}
            width="100%"
            height="100"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Playlist;
