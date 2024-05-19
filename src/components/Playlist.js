import React from 'react';
import { Box, Heading, Text, SimpleGrid } from '@chakra-ui/react';

const Playlist = () => {
  const trackURLs = [
    'https://open.spotify.com/embed/track/3ibHHhuRj8od0hgKx0xHRb?utm_source=generator',
    'https://open.spotify.com/embed/track/1CS7Sd1u5tWkstBhpssyjP?utm_source=generator',
    'https://open.spotify.com/embed/track/4pkb8SbRGeHAvdb87v9rpf?utm_source=generator',
    'https://open.spotify.com/embed/track/3VRxFM7wiJYKNHvouPZhaH?utm_source=generator',
    'https://open.spotify.com/embed/track/69KsBGYUsA6bn6BKdS9eTF?utm_source=generator',
    'https://open.spotify.com/embed/track/6qrifdo7QINdPQr80IelGi?utm_source=generator',
    'https://open.spotify.com/embed/track/0mAswKg3RCbmXAV4KYTUxM?utm_source=generator',
    'https://open.spotify.com/embed/track/3aksi3t5XGGiemQLh8I8qY?utm_source=generator',
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
