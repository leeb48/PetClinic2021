import {
  Box,
  useColorModeValue,
  BoxProps,
  Flex,
  FlexProps,
  Heading,
  Button,
} from '@chakra-ui/react';
import React from 'react';

//----------------------------------------------------------------------------------------------

interface Props extends FlexProps {
  label: string;
  value: string;
}

const Property = (props: Props) => {
  const { label, value, ...flexProps } = props;
  return (
    <Flex
      as='dl'
      direction={{ base: 'column', sm: 'row' }}
      px='6'
      py='4'
      _even={{ bg: useColorModeValue('gray.50', 'gray.600') }}
      {...flexProps}
    >
      <Box as='dt' minWidth='180px'>
        {label}
      </Box>
      <Box as='dd' flex='1' fontWeight='semibold'>
        {value}
      </Box>
    </Flex>
  );
};

//----------------------------------------------------------------------------------------------
const Card = (props: BoxProps) => (
  <Box
    bg={useColorModeValue('white', 'gray.700')}
    rounded={{ md: 'lg' }}
    shadow='base'
    overflow='hidden'
    {...props}
  />
);
//----------------------------------------------------------------------------------------------
interface Props {
  title: string;
  action?: React.ReactNode;
}

const CardHeader = (props: Props) => {
  const { title, action } = props;
  return (
    <Flex
      align='center'
      justify='space-between'
      px='6'
      py='4'
      borderBottomWidth='1px'
    >
      <Heading as='h2' fontSize='lg'>
        {title}
      </Heading>
      {action}
    </Flex>
  );
};

//----------------------------------------------------------------------------------------------

const CardContent = (props: BoxProps) => <Box {...props} />;

//----------------------------------------------------------------------------------------------
const PetOwnerListItem = () => {
  return (
    <Box
      as='section'
      bg={useColorModeValue('gray.100', 'inherit')}
      pb={10}
      px={{ md: '8' }}
    >
      <Card maxW='3xl' mx='auto'>
        {/* @ts-ignore */}
        <CardHeader title='John Dee' />
        <CardContent>
          {/* @ts-ignore */}
          <Property label='Pets' value='Dog, Cat, Dog, Dog' />
          {/* @ts-ignore */}
          <Property label='Email' value='chakra-ui.sh@gmail.com' />
          {/* @ts-ignore */}
          <Property label='Phone Number' value='101-101-1100' />
          {/* @ts-ignore */}
          <Property label='Next Appointment' value='07/20/2021' />
          <Button isFullWidth colorScheme='teal'>
            View Profile
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};
//----------------------------------------------------------------------------------------------
export default PetOwnerListItem;
