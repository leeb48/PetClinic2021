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
import { PetOwnerFormValues, Pet, PetOwner } from "app/models/petOwner";
import { useStore } from "app/store/store";
import { RouteComponentProps } from "react-router";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { v4 as uuidv4 } from "uuid";

interface MatchParams {
  id?: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

const PetOwnerForm: React.FC<Props> = ({ match }) => {
  const {
    petOwnerStore: {
      createPetOwner,
      updatePetOwner,
      selectedPetOwner,
      loadPetOwner,
      unloadPetOwner,
    },
  } = useStore();

  const { id } = match.params;

  const [petOwner, setPetOwner] = useState<PetOwnerFormValues>(
    new PetOwnerFormValues()
  );

  useEffect(() => {
    if (id) {
      loadPetOwner(id).then((selectedPetOwner) => {
        setPetOwner(new PetOwnerFormValues(selectedPetOwner));
      });
    }

    return () => {
      unloadPetOwner();
    };
  }, [id, selectedPetOwner, loadPetOwner, setPetOwner]);

  const petInitialValues: Pet = {
    petName: "",
    petType: "",
    petAge: "",
  };

  const handleRemovePet = (removeIndex: number) => {
    setPetOwner({
      ...petOwner,
      pets: petOwner.pets.filter((pet, index) => index !== removeIndex),
    });
  };

  return (
    <>
      <Container py={5} centerContent>
        <Heading>New Pet Owner</Heading>

        {/* Owner Form */}
        <Formik
          initialValues={petOwner}
          enableReinitialize
          validationSchema={Yup.object({
            ownerName: Yup.string().required(),
            email: Yup.string().email().required(),
            phone: Yup.string().required(),
          })}
          onSubmit={(values) => {
            if (id) {
              updatePetOwner(values, id);
            } else {
              createPetOwner(values);
            }
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
            petOwner.pets.push(values);
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
                  {petOwner.pets.length !== 0 &&
                    petOwner.pets.map((pet, index) => (
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

export default observer(PetOwnerForm);
