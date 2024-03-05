import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface PeriodTileProps {
  children: ReactNode;
  isSelected?: boolean;
  onClick: () => void;
}

const PeriodTile: React.FC<PeriodTileProps> = ({
  children,
  isSelected,
  onClick,
}) => {
  // Use a darker color for selected state or lighter color otherwise
  const bgColor = useColorModeValue(
    isSelected ? "gray.800" : "gray.200",
    "gray.200"
  );
  const textColor = useColorModeValue("white", "gray.800");

  return (
    <Box
      onClick={onClick}
      p={2} // Padding inside the box, adjust as necessary to maintain round shape
      minWidth="45px" // Minimum width to accommodate longer text
      height="45px" // Fixed height to ensure circle shape
      lineHeight="45px" // Ensuring text is vertically centered
      bg={bgColor} // Background color for the tile
      borderRadius="full" // Makes the box fully round
      cursor="pointer" // Cursor changes to pointer to indicate it's selectable
      _hover={{ bg: isSelected ? "gray.800" : "gray.300" }} // Change background on hover for visual feedback
      display="flex" // Use flex to center the text inside the box
      justifyContent="center" // Center the content horizontally
      alignItems="center" // Center the content vertically
      color={isSelected ? textColor : "current"}
    >
      <Text>{children}</Text>
    </Box>
  );
};

export default PeriodTile;
