import {
  Avatar,
  Box,
  HStack,
  Hide,
  IconButton,
  Show,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import NavbarButton from "./NavbarButton";

const Navbar: React.FC = () => {
  return (
    <Box
      height="100%"
      px={5}
      bg="gray.50"
      boxShadow="md"
      borderWidth="1px"
      borderColor="gray.300"
    >
      <HStack height="100%" width="100%" align="center" spacing={0}>
        <Text fontSize="2xl" fontWeight="bold" paddingEnd={3}>
          Budget-App
        </Text>
        {/* Show on larger screens */}
        <Hide below="md">
          <NavbarButton>Overview</NavbarButton>
          <NavbarButton>Income & Expenses</NavbarButton>
          <NavbarButton>Assets</NavbarButton>
          <NavbarButton>Subscriptions</NavbarButton>
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
        <HStack>
          <Avatar
            size="md"
            name="Josh Grein"
            src="#"
            bg="rgba(75, 192, 192, 0.8)"
          ></Avatar>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Navbar;
