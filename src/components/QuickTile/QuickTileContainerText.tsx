import { Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface QuickTileContainerTextProps {
  children: ReactNode;
}

const QuickTileContainerText: React.FC<QuickTileContainerTextProps> = ({
  children,
}) => {
  return (
    <Text
      position="absolute"
      top={-2} // Adjust as necessary to place the text correctly
      transform="translate(0%, -100%)" // Ensures the text is above the tile
      fontWeight="bold" // Optional for styling
      color="RGBA(0, 0, 0, 0.8)"
    >
      {children}
    </Text>
  );
};

export default QuickTileContainerText;
