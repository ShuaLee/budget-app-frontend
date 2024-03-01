import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import Graph from "../Graph/Graph";

const Dashboard: React.FC = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" 
               "main"
               "footer"`,
      }}
      gridTemplateRows={"75px 1fr 30px"}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <GridItem area="main">
        <Graph />
      </GridItem>
      <GridItem area="footer">footer</GridItem>
    </Grid>
  );
};

export default Dashboard;
