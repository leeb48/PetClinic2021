import { CheckIcon } from '@chakra-ui/icons';
import { InputGroup, Input, InputRightElement, Button } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';

interface Props {
  placeholder?: string;
  onSearchClick: (searchTerm: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearchClick, placeholder }) => {
  const [val, setVal] = useState('');

  return (
    <InputGroup maxW='400' size='md'>
      <Input
        value={val}
        onChange={(e) => setVal(e.target.value)}
        pr='4.5rem'
        placeholder={placeholder}
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={() => onSearchClick(val)}>
          <CheckIcon />
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchBar;
