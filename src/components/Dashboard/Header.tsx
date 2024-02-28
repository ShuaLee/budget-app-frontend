import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Header: React.FC = () => {
  return (
    <Box height="100%" p={5}>
      <HStack height="100%" width="100%" justify="space-between" align="center">
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
