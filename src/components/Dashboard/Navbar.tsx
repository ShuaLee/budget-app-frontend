import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <Box p={4}>
      <VStack>
        <Text fontSize="2xl" fontWeight="bold" alignSelf="center">
          Budget-App
        </Text>
        <Text>Dashboard</Text>
        <Text>Income / Expenses</Text>
        <Text>Transactions</Text>
        <Text>Investments</Text>
        <Text>Assets</Text>
        <Text>Account Settings</Text>
      </VStack>
    </Box>
  );
};

export default Navbar;
