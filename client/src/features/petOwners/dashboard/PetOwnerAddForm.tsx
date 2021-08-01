import {
  Button,
  Container,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import SelectInput from "app/common/form/SelectInput";
import TextInput from "app/common/form/TextInput";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { NewPetOwner, Pet, PetOwner } from "app/models/petOwner";

const PetOwnerAddForm = () => {
  const petOwnerInitialValues: PetOwner = {
    ownerName: "",
    email: "",
    phone: "",
    pets: [],
  };
  const petInitialValues: Pet = {
    petName: "",
    petType: "",
    petAge: "",
  };

  const [pets, setPets] = useState<Pet[]>([]);

  const handleAddPet = (values: any) => {
    setPets([
      ...pets,
      {
        petName: values.petName,
        petAge: values.petAge,
        petType: values.petType,
      },
    ]);
  };

  const handleRemovePet = (removeIndex: number) => {
    setPets(pets.filter((pet, index) => index !== removeIndex));
  };

  return (
    <>
      <Container py={5} centerContent>
        <Heading>New Pet Owner</Heading>

        {/* Owner Form */}
        <Formik
          initialValues={petOwnerInitialValues}
          validationSchema={Yup.object({
            ownerName: Yup.string().required(),
            email: Yup.string().email().required(),
            phone: Yup.string().required(),
          })}
          onSubmit={(values) => {
            // TODO: send new owner data to backend
            console.log(new NewPetOwner(values, pets));
          }}
        >
          {({ values }) => (
            <>
              <Form>
                <TextInput name="ownerName" placeholder="Owner Name" />
                <TextInput type="email" name="email" placeholder="Email" />
                <TextInput name="phone" placeholder="Phone" />

                <Button type="submit">Submit</Button>
              </Form>
            </>
          )}
        </Formik>

        {/* Pet Form */}
        <Formik
          initialValues={petInitialValues}
          validationSchema={Yup.object({
            petName: Yup.string().required(),
            petAge: Yup.number().required(),
            petType: Yup.string().required(),
          })}
          onSubmit={(values, { resetForm }) => {
            handleAddPet(values);
            resetForm();
          }}
        >
          {({ values }) => (
            <>
              <Form>
                <TextInput name="petName" placeholder="Pet Name" />
                <TextInput name="petAge" placeholder="Pet Age" />
                <SelectInput
                  name="petType"
                  values={["Dog", "Cat"]}
                  placeholder="Select Pet Type"
                />
                <Button type="submit">Add Pet</Button>
              </Form>

              <Table variant="striped" colorScheme="teal">
                <Thead>
                  <Tr>
                    <Th>Pet Name</Th>
                    <Th>Type</Th>
                    <Th>Age</Th>
                    <Th>Remove</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {pets.length !== 0 &&
                    pets.map((pet, index) => (
                      <Tr key={index}>
                        <Td>{pet.petName}</Td>
                        <Td>{pet.petType}</Td>
                        <Td>{pet.petAge}</Td>
                        <Td>
                          <Button onClick={(e) => handleRemovePet(index)}>
                            X
                          </Button>
                        </Td>
                      </Tr>
                    ))}
                </Tbody>
              </Table>
            </>
          )}
        </Formik>
      </Container>
    </>
  );
};

export default PetOwnerAddForm;
