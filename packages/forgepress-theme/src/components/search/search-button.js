import { Box } from "@chakra-ui/react";
import React from "react";
import { IoIosSearch } from "react-icons/io";

const SearchButton = props => (
  <Box
    aria-label="Search this site"
    as="button"
    display="flex"
    alignItems="center"
    justifyContent="center"
    transition="background-color ease 0.25s"
    _hover={{ color: "white" }}
    flexShrink="0"
    size="46px"
    bg="primary.700"
    ml={{ base: "auto", lg: "1.5rem" }}
    {...props}
  >
    <Box size={27} color="accent.400" _hover={{ color: "white" }} as={IoIosSearch} />
  </Box>
);

export default SearchButton;
