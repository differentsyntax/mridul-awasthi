import React from 'react';
import { Box, Text, VStack, Flex, Badge, Divider, Heading } from '@chakra-ui/react';
import { FaCircle, FaRocket } from 'react-icons/fa'; // Import the rocket icon

const TimelineEvent = ({ title, description }) => {
  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold">
        {title}
      </Text>
      <Text>{description}</Text>
    </Box>
  );
};

const TimelineDot = ({ isRocket }) => {
  return (
    <Badge
      borderRadius="full"
      colorScheme={isRocket ? 'yellow' : 'teal'} // Use yellow color for the rocket
      boxSize="20px"
      transform="translateY(-50%)"
      marginLeft={isRocket ? '-10px' : '-5px'} // Adjust position for the rocket
      padding={1}
    >
      {isRocket ? <FaRocket size="25px"/> : <FaCircle size="25px"/> }
    </Badge>
  );
};

const Timeline = () => {
  const events = [
    { title: 'Visa', description: 'Senior Software Engineer | Bellevue, WA, USA | March, 2025' },
    { title: 'Amazon', description: 'Software Development Engineer | Seattle, WA, USA | August, 2021' },
    { title: 'Drexel University', description: 'Graduation | June, 2021' },
    { title: 'HomeSource Systems', description: 'Internship | Software Engineer | Sewell, NJ, USA | June - September, 2020' },
    { title: 'Brandywine Living', description: 'Co-op | Jr. Programmer | Mount Laurel, NJ, USA | April - September, 2019' },
    { title: 'Comcast', description: 'Co-op | Cloud Application Platform Engineer | West Chester, PA, USA | April - September, 2018' },
    { title: 'Nanyang Technological University', description: 'Study Abroad | Singapore | July - December, 2017' },
    { title: 'Drexel University', description: 'Undergrad | Philadelphia, PA, USA | September, 2016' },
    { title: 'City Montessori School, Gomti Nagar - I', description: 'High School | Lucknow, UP, India | October, 2010' },
    { title: 'City Montessori School, RDSO', description: 'Secondary School | Lucknow, UP, India | April, 2008 ' },
    { title: 'Red Rose Senior Secondary School', description: 'Primary School | Lucknow, UP, India | April, 2000' },
    { title: 'Lucknow', description: 'Born | January, 1998' },
  ];

  return (
    <Flex align="center" justify="center" height="100vh" mt={{base: 600, md: 500}}>
      <Box p={8}>
        <Heading visibility={{base: 'visible', md: 'hidden'}} align="center" justify="center" mb={100} mt={{base: 50, md: 220}} fontSize={{ base: 'md', md: 'lg', lg: 'xl' }} >
            Timeline
          </Heading>
        <VStack align="start" spacing={2} position="relative" ml={{base: 5, md: 175}}>
          {events.map((event, index) => (
            <React.Fragment key={index}>
              <TimelineDot isRocket={index === 0} />
              <TimelineEvent title={event.title} description={event.description} />
              {index < events.length - 1 && (
                <Divider orientation="vertical" h="40px" borderColor="teal.500" />
              )}
            </React.Fragment>
          ))}
        </VStack>
      </Box>
    </Flex>
  );
};

export default Timeline;
