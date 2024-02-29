import React from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Header from "./Header";

const Dashboard: React.FC = () => {
  return (
    <Grid
      templateAreas={{
        base: `"header" 
               "main"
               "footer"`,
        lg: `"nav header" 
             "nav main"
             "nav footer"`,
      }}
      gridTemplateRows={"75px 1fr 30px"}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
      bg="pink.300"
    >
      <GridItem area="header">
        <Header />
      </GridItem>
      <Show above="lg">
        <GridItem
          area="nav"
          bg="blue.500"
          borderRadius="3xl"
          h="calc(100vh - 1rem)"
          m={2}
        >
          <Navbar />
        </GridItem>
      </Show>
      <GridItem area="main" bg="green.500" borderRadius="3xl" mr={2}>
        main
      </GridItem>
      <GridItem area="footer" bg="orange.500">
        footer
      </GridItem>
    </Grid>
  );
};

export default Dashboard;
