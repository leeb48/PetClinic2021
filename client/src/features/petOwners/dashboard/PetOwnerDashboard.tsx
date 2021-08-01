import { Box, Button, Center, Heading, Link, Stack } from "@chakra-ui/react";
import React from "react";
import ReactPaginate from "react-paginate";
import SearchBar from "../../../app/layout/SearchBar";
import PetOwnerList from "./PetOwnerList";
import "app/styles/Pagination.css";
import { useHistory } from "react-router";

const PetOwnerDashboard = () => {
  const history = useHistory();

  const handleSearchPetOwner = (searchTerm: string) => {
    console.log(searchTerm);
  };

  return (
    <Stack px={10}>
      <Stack py={5} align="center" spacing={4}>
        <Heading>Pet Owners</Heading>
        <SearchBar
          onSearchClick={handleSearchPetOwner}
          placeholder="Search Pet Owner"
        />
        <Button onClick={() => history.push("/new-pet-owner")}>
          Add New Pet Owner
        </Button>
      </Stack>

      <Box>
        <PetOwnerList />
      </Box>

      <Center pb={10}>
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={15}
          marginPagesDisplayed={3}
          pageRangeDisplayed={3}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </Center>
    </Stack>
  );
};

export default PetOwnerDashboard;
