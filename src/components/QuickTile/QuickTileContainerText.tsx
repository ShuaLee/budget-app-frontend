import { Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface QuickTileContainerTextProps {
  children: ReactNode;
}

const QuickTileContainerText: React.FC<QuickTileContainerTextProps> = ({
  children,
}) => {
  return (
    <Text fontWeight="bold" color="RGBA(0, 0, 0, 0.8)">
      {children}
    </Text>
  );
};

export default QuickTileContainerText;
