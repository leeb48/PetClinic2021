import {
  Box,
  Grid,
  GridItem,
  Stack,
  useRadio,
  useRadioGroup,
} from '@chakra-ui/react';
import React from 'react';
import Calendar from 'react-calendar';

function RadioCard(props: any) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as='label'>
      <input {...input} />
      <Box
        {...checkbox}
        cursor='pointer'
        borderWidth='1px'
        borderRadius='md'
        boxShadow='md'
        _checked={{
          bg: 'teal.600',
          color: 'white',
          borderColor: 'teal.600',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={5}
        py={3}
        textAlign='center'
      >
        {props.children}
      </Box>
    </Box>
  );
}

const HomePageFilters = () => {
  const options = ['All', 'Dogs', 'Cats'];

  const onRadioChange = (value: string) => {
    console.log(value);
  };

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    defaultValue: 'All',
    onChange: onRadioChange,
  });

  const group = getRootProps();

  return (
    <Stack mt={7}>
      <Box alignSelf='center'>
        <Calendar />
      </Box>

      <Stack mt={2} justify='space-between' {...group}>
        {options.map((value) => {
          // @ts-ignore
          const radio = getRadioProps({ value });
          return (
            <RadioCard key={value} {...radio}>
              {value}
            </RadioCard>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default HomePageFilters;
