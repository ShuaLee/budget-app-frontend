import { HStack } from "@chakra-ui/react";
import PeriodTile from "./PeriodTile";

const PeriodSelector = () => {
  return (
    <HStack justifyContent="center" width="full">
      <PeriodTile>1W</PeriodTile>
      <PeriodTile>1M</PeriodTile>
      <PeriodTile>3M</PeriodTile>
      <PeriodTile>6M</PeriodTile>
      <PeriodTile>1Y</PeriodTile>
      <PeriodTile>5Y</PeriodTile>
      <PeriodTile>ALL</PeriodTile>
    </HStack>
  );
};

export default PeriodSelector;
