import {
  Box,
  useColorModeValue,
  BoxProps,
  Flex,
  FlexProps,
  Heading,
  Button,
  Stack,
  HStack,
} from "@chakra-ui/react";
import { PetOwner } from "app/models/petOwner";
import { Link as RouteLink } from "react-router-dom";
import React from "react";
import { useStore } from "app/store/store";

//----------------------------------------------------------------------------------------------

interface Props extends FlexProps {
  label?: string;
  value?: string;
}

const Property = (props: Props) => {
  const { label, value, ...flexProps } = props;
  return (
    <Flex
      as="dl"
      direction={{ base: "column", sm: "row" }}
      px="6"
      py="4"
      _even={{ bg: useColorModeValue("gray.50", "gray.600") }}
      {...flexProps}
    >
      <Box as="dt" minWidth="180px">
        {label}
      </Box>
      <Box as="dd" flex="1" fontWeight="semibold">
        {value}
      </Box>
    </Flex>
  );
};

//----------------------------------------------------------------------------------------------
const Card = (props: BoxProps) => (
  <Box
    bg={useColorModeValue("white", "gray.700")}
    rounded={{ md: "lg" }}
    shadow="base"
    overflow="hidden"
    {...props}
  />
);
//----------------------------------------------------------------------------------------------
interface Props {
  title?: string;
  action?: React.ReactNode;
  petOwnerId?: string;
}

const CardHeader = (props: Props) => {
  const { title, action, petOwnerId } = props;
  const {
    petOwnerStore: { removePetOwner },
  } = useStore();
  return (
    <Flex
      align="center"
      justify="space-between"
      px="6"
      py="4"
      borderBottomWidth="1px"
    >
      <Heading as="h2" fontSize="lg">
        {title}
      </Heading>
      <HStack>
        <RouteLink to={`/edit-pet-owner/${petOwnerId}`}>
          <Button>Edit</Button>
        </RouteLink>
        <Button onClick={() => removePetOwner(petOwnerId!)} colorScheme="red">
          Remove
        </Button>
      </HStack>
      {action}
    </Flex>
  );
};

//----------------------------------------------------------------------------------------------

const CardContent = (props: BoxProps) => <Box {...props} />;

//----------------------------------------------------------------------------------------------

interface Props {
  petOwner: PetOwner;
}

const PetOwnerListItem: React.FC<Props> = ({ petOwner }) => {
  const { id, ownerName, pets, email, phone } = petOwner;

  const petNames = pets.map((pet) => pet.petName).join(", ");

  return (
    <Box
      as="section"
      bg={useColorModeValue("gray.100", "inherit")}
      pb={10}
      px={{ md: "8" }}
    >
      <Card maxW="3xl" mx="auto">
        {/* @ts-ignore */}
        <CardHeader title={ownerName} petOwnerId={id} />
        <CardContent>
          {/* @ts-ignore */}
          <Property label="Pets" value={petNames} />
          {/* @ts-ignore */}
          <Property label="Email" value={email} />
          {/* @ts-ignore */}
          <Property label="Phone Number" value={phone} />
          {/* @ts-ignore */}
          <Property label="Next Appointment" value="07/20/2021" />
          <Button isFullWidth colorScheme="teal">
            View Profile
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};
//----------------------------------------------------------------------------------------------
export default PetOwnerListItem;
