import React, { ReactNode } from "react";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import QuickTileMoneyText from "./QuickTileMoneyText";

interface QuickTileProps {
  children: ReactNode;
  amount: string;
}

const QuickTile: React.FC<QuickTileProps> = ({ children, amount }) => {
  return (
    <Box
      bg="white"
      boxShadow="lg"
      borderRadius="2xl"
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={7} // Padding inside the box
      my={0} // Margin for spacing above and below the component
      mx="auto"
      position="relative"
      width={["100%", "md", "lg", "700px"]}
      maxW="100%"
    >
      <Flex
        justifyContent="flex-start"
        alignItems="center"
        width="100%"
        paddingX={3}
      >
        <Text>{children}</Text>
        <Spacer />
        <QuickTileMoneyText>{amount}</QuickTileMoneyText>
      </Flex>
    </Box>
  );
};

export default QuickTile;
