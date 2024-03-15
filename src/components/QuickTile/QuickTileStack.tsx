import { VStack } from "@chakra-ui/react";
import React from "react";
import QuickTile from "./QuickTile";
import QuickTileContainerText from "./QuickTileContainerText";

const QuickTileStack: React.FC = () => {
  return (
    <VStack spacing={50}>
      <QuickTile>
        <QuickTileContainerText>Total Assets</QuickTileContainerText>
      </QuickTile>

      <QuickTile>
        <QuickTileContainerText>Total Income</QuickTileContainerText>
      </QuickTile>

      <QuickTile>
        <QuickTileContainerText>Total Expenses</QuickTileContainerText>
      </QuickTile>

      <QuickTile>
        <QuickTileContainerText>Net Cashflow</QuickTileContainerText>
      </QuickTile>
    </VStack>
  );
};

export default QuickTileStack;
