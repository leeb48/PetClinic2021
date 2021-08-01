import { Stack, Heading, Box, Center } from "@chakra-ui/react";
import SearchBar from "app/layout/SearchBar";
import VeterinarianList from "./VeterinarianList";
import React from "react";
import ReactPaginate from "react-paginate";
import "app/styles/Pagination.css";

const VeterinarianDashboard = () => {
  const handleVeterinarianSearch = (searchTerm: string) => {
    console.log(searchTerm);
  };

  return (
    <Stack px={10}>
      <Stack py={5} align="center" spacing={4}>
        <Heading>Veterinarians</Heading>
        <SearchBar
          onSearchClick={handleVeterinarianSearch}
          placeholder="Search Veterinarians"
        />
      </Stack>

      <Box>
        <VeterinarianList />
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

export default VeterinarianDashboard;
