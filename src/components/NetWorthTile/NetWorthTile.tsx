import { Box, Text } from "@chakra-ui/react";

const NetWorthTile = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      position="absolute"
      top="20"
      left="0"
      right="0"
      p={0}
    >
      <Text fontSize="lg" fontWeight="bold" color="RGBA(0, 0, 0, 0.8)">
        NAME's net worth
      </Text>
      <Text fontSize="5xl" fontWeight="bold" color="RGBA(0, 0, 0, 0.8)">
        $50,000.00
      </Text>
    </Box>
  );
};

export default NetWorthTile;
