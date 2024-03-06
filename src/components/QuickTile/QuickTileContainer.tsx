import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface QuickTileContainerProps {
  children: ReactNode;
}

const QuickTileContainer: React.FC<QuickTileContainerProps> = ({
  children,
}) => {
  return (
    <Box position="relative" width={["100%", "md", "lg", "800px"]} maxW="100%">
      {children}
    </Box>
  );
};

export default QuickTileContainer;
