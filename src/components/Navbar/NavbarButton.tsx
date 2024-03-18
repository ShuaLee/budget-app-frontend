import { Button } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import NavbarText from "./NavbarText";
import { Link } from "react-router-dom";

interface NavbarButtonProps {
  children: ReactNode;
  to: string;
}

const NavbarButton: React.FC<NavbarButtonProps> = ({ children, to }) => {
  return (
    <Button
      variant="ghost"
      _hover={{ bg: "gray.100" }} // Adjust hover background color as needed
      height="100%"
      as={Link}
      to={to}
    >
      <NavbarText>{children}</NavbarText>
    </Button>
  );
};

export default NavbarButton;
