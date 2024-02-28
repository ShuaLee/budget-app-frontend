import React from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./Navbar";

const Dashboard: React.FC = () => {
  return (
    <Grid
      templateAreas={{
        base: `"header" 
             "main"`,
        lg: `"nav header" 
           "nav main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
      bg="pink.300"
    >
      <GridItem area="header" bg="red.500">
        header
      </GridItem>
      <Show above="lg">
        <GridItem
          area="nav"
          bg="blue.500"
          borderRadius="3xl"
          h="calc(100vh - 1rem)"
          m="2"
        >
          <Navbar />
        </GridItem>
      </Show>
      <GridItem area="main" bg="green.500">
        main
      </GridItem>
    </Grid>
  );
};

export default Dashboard;
