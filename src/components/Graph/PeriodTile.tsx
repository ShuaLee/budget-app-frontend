import { Box, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface PeriodTileProps {
  children: ReactNode;
}

const PeriodTile: React.FC<PeriodTileProps> = ({ children }) => {
  return (
    <Box
      p={3} // Padding inside the box, adjust as necessary to maintain round shape
      m={0} // Margin around the box
      bg="gray.200" // Background color for the tile
      borderRadius="full" // Makes the box fully round
      cursor="pointer" // Cursor changes to pointer to indicate it's selectable
      _hover={{ bg: "gray.300" }} // Change background on hover for visual feedback
      display="flex" // Use flex to center the text inside the box
      justifyContent="center" // Center the content horizontally
      alignItems="center" // Center the content vertically
    >
      <Text>{children}</Text>
    </Box>
  );
};

export default PeriodTile;
