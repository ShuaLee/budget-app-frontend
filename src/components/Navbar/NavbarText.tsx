import React from "react";
import { Text, TextProps } from "@chakra-ui/react";

interface NavbarTextProps extends TextProps {}

const NavbarText: React.FC<NavbarTextProps> = ({ children, ...props }) => {
  return (
    <Text fontWeight="bold" fontSize="md" color="gray.600" {...props}>
      {children}
    </Text>
  );
};

export default NavbarText;
