import { Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface QuickTileMoneyTextProps {
  children: ReactNode;
}

const QuickTileMoneyText: React.FC<QuickTileMoneyTextProps> = ({
  children,
}) => {
  return (
    <Text fontWeight="bold" color="RGBA(0, 0, 0, 0.8)">
      {children}
    </Text>
  );
};

export default QuickTileMoneyText;
