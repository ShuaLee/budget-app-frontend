import {
  Box,
  HStack,
  IconButton,
  Show,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Header: React.FC = () => {
  const { onOpen } = useDisclosure();

  return (
    <Box height="100%" p={2}>
      <HStack height="100%" width="100%" align="center">
        <Show below="lg">
          <IconButton
            icon={<HamburgerIcon />}
            bg="transparent"
            aria-label="Open menu"
            onClick={onOpen}
            mr={3}
          />
        </Show>
        <VStack align="start" spacing={0}>
          <Text fontSize="2xl" fontWeight="bold">
            -- Page --
          </Text>
          <HStack>
            <Text>Test</Text>
            <Text> / </Text>
            <Text> Testing </Text>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Header;
