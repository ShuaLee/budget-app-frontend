import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

const Dashboard: React.FC = () => {
  return (
    <Grid
      templateAreas={{
        base: `"header" 
             "main"`,
        lg: `"nav header" 
           "nav main"`,
      }}
    >
      <GridItem area="header" bg="red.500">
        header
      </GridItem>
      <GridItem area="nav" bg="blue.500">
        nav
      </GridItem>
      <GridItem area="main" bg="green.500">
        main
      </GridItem>
    </Grid>
  );
};

export default Dashboard;
