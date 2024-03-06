import { VStack } from "@chakra-ui/react";
import React from "react";
import QuickTile from "./QuickTile";
import QuickTileContainer from "./QuickTileContainer";
import QuickTileContainerText from "./QuickTileContainerText";

const QuickTileStack: React.FC = () => {
  return (
    <VStack spacing={50}>
      <QuickTileContainer>
        <QuickTileContainerText>Total Income</QuickTileContainerText>
        <QuickTile>Total Income</QuickTile>
      </QuickTileContainer>
      <QuickTileContainer>
        <QuickTileContainerText>Total Expenses</QuickTileContainerText>
        <QuickTile>Total Expenses</QuickTile>
      </QuickTileContainer>
      <QuickTileContainer>
        <QuickTileContainerText>Total Assets</QuickTileContainerText>
        <QuickTile>Total Assets</QuickTile>
      </QuickTileContainer>
    </VStack>
  );
};

export default QuickTileStack;
