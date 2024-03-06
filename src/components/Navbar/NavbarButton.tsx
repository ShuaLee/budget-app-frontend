import { Button } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import NavbarText from "./NavbarText";

interface NavbarButtonProps {
  children: ReactNode;
}

const NavbarButton: React.FC<NavbarButtonProps> = ({ children }) => {
  return (
    <Button
      variant="ghost"
      _hover={{ bg: "gray.100" }} // Adjust hover background color as needed
      onClick={() => {}}
    >
      <NavbarText>{children}</NavbarText>
    </Button>
  );
};

export default NavbarButton;
