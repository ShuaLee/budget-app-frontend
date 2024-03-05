import { HStack } from "@chakra-ui/react";
import PeriodTile from "./PeriodTile";
import { useState } from "react";

const periods = ["1W", "1M", "3M", "6M", "1Y", "5Y", "ALL"];

const PeriodSelector = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("1W");

  return (
    <HStack justifyContent="center" width="full">
      {periods.map((period) => (
        <PeriodTile
          key={period}
          isSelected={selectedPeriod === period}
          onClick={() => setSelectedPeriod(period)}
        >
          {period}
        </PeriodTile>
      ))}
    </HStack>
  );
};

export default PeriodSelector;
