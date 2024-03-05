import {
  Box,
  HStack,
  Hide,
  IconButton,
  Show,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import NavbarText from "./NavbarText";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar: React.FC = () => {
  return (
    <Box height="100%" px={5} bg="gray.50" boxShadow="md">
      <HStack height="100%" width="100%" align="center" spacing={7}>
        <Text fontSize="2xl" fontWeight="bold">
          Budget-App
        </Text>
        {/* Show on larger screens */}
        <Hide below="md">
          <NavbarText>Overview</NavbarText>
          <NavbarText>Income & Expenses</NavbarText>
          <NavbarText>Assets</NavbarText>
          <NavbarText>Subscriptions</NavbarText>
        </Hide>
        {/* Show on smaller screens */}
        <Show below="md">
          <IconButton
            aria-label="Open menu"
            icon={<HamburgerIcon />}
            variant="ghost"
            _hover={{ bg: "transparent" }} // Optional: Ensure background stays transparent on hover
            _active={{ bg: "transparent" }} // Optional: Ensure background stays transparent when clicked
            // onClick={() => {}}
          />
        </Show>
        <Spacer />
        <NavbarText>Profile</NavbarText>
      </HStack>
    </Box>
  );
};

export default Navbar;
