import { Box, CircularProgress } from "@chakra-ui/react";


const Loading = () => (
  <Box
    mx="auto"
    p="24px"
    display="flex"
    alignItems="center"
    justifyContent="center"
    minH="inherit"
  >
    <CircularProgress color="#eca419"  isIndeterminate  />
  </Box>
);

export default Loading;
