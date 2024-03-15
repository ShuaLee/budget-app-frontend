import React, { ReactNode } from "react";
import { Box, Text } from "@chakra-ui/react";

interface QuickTileProps {
  children: ReactNode;
}

const QuickTile: React.FC<QuickTileProps> = ({ children }) => {
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
      position="relative"
      width={["100%", "md", "lg", "800px"]}
      maxW="100%"
    >
      <Text>{children}</Text>
    </Box>
  );
};

export default QuickTile;
