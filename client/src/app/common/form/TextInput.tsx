import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { useField } from 'formik';
import React from 'react';

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
}

const TextInput: React.FC<Props> = (props) => {
  const [field, meta] = useField(props.name);
  return (
    <FormControl isInvalid={meta.touched && !!meta.error}>
      <FormLabel>{props.label}</FormLabel>
      <Input {...field} {...props} />
      {meta.touched && meta.error ? (
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      ) : null}
    </FormControl>
  );
};

export default TextInput;
