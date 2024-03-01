import { Box } from "@chakra-ui/react";

const QuickTile = () => {
  return (
    <Box
      bg="white"
      boxShadow="lg"
      borderRadius="2xl"
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={4} // Padding inside the box
      my={0} // Margin for spacing above and below the component
      mx="auto"
      width="800px"
    >
      hello
    </Box>
  );
};

export default QuickTile;
