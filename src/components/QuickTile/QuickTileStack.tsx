import { VStack } from "@chakra-ui/react";
import React from "react";
import QuickTile from "./QuickTile";
import QuickTileContainerText from "./QuickTileContainerText";

const QuickTileStack: React.FC = () => {
  return (
    <VStack spacing={10}>
      <QuickTile amount="$1,000,000">
        <QuickTileContainerText>Total Assets</QuickTileContainerText>
      </QuickTile>
      <QuickTile amount="$65,000">
        <QuickTileContainerText>Total Income</QuickTileContainerText>
      </QuickTile>
      <QuickTile amount="$2,000">
        <QuickTileContainerText>Total Expenses</QuickTileContainerText>
      </QuickTile>
      <QuickTile amount="$10,000">
        <QuickTileContainerText>Investment Cashflow</QuickTileContainerText>
      </QuickTile>
      <QuickTile amount="$200">
        <QuickTileContainerText>Subscriptions</QuickTileContainerText>
      </QuickTile>
    </VStack>
  );
};

export default QuickTileStack;
