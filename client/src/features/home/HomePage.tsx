import { Container, Flex, Box, Spacer } from '@chakra-ui/react';
import React from 'react';
import HomePageApptList from './HomePageApptList';
import HomePageFilters from './HomePageFilters';

const HomePage = () => {
  return (
    <Container maxW={['container.lg', 'container.lg', 'container.lg']}>
      <Flex direction={['column-reverse', 'column-reverse', 'row']}>
        <Box flex='7'>
          <HomePageApptList />
        </Box>
        <Spacer />
        <Box flex='3'>
          <HomePageFilters />
        </Box>
      </Flex>
    </Container>
  );
};

export default HomePage;
