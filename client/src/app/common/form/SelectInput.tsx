import { Select } from "@chakra-ui/react";
import { useField } from "formik";
import React from "react";

interface Props {
  name: string;
  values: string[];
  placeholder?: string;
}

const SelectInput: React.FC<Props> = (props) => {
  const [field, meta] = useField(props.name);
  return (
    <Select {...field} placeholder={props.placeholder}>
      {props.values.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </Select>
  );
};

export default SelectInput;
