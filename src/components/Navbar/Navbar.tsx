import { Box, HStack, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import NavbarText from "./NavbarText";

const Navbar: React.FC = () => {
  return (
    <Box height="100%" px={5} bg="gray.50" boxShadow="md">
      <HStack height="100%" width="100%" align="center" spacing={7}>
        <Text fontSize="2xl" fontWeight="bold">
          Budget-App
        </Text>
        <NavbarText>Overview</NavbarText>
        <NavbarText>Income & Expenses</NavbarText>
        <NavbarText>Transactions</NavbarText>
        <NavbarText>Subscriptions</NavbarText>
        <NavbarText>Investments</NavbarText>
        <NavbarText>Assets</NavbarText>
        <Spacer />
        <NavbarText>Profile</NavbarText>
      </HStack>
    </Box>
  );
};

export default Navbar;
