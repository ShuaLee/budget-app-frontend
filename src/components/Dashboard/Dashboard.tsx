import React from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import Graph from "../Graph/Graph";
import NetWorthTile from "../NetWorthTile/NetWorthTile";

const Dashboard: React.FC = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" 
               "main"
               "footer"`,
      }}
      gridTemplateRows={"75px 1fr 30px"}
      bg="gray.100"
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <GridItem area="main">
        <Box position="relative" height="100%">
          <NetWorthTile />
          <Graph />
        </Box>
      </GridItem>
      <GridItem area="footer">footer</GridItem>
    </Grid>
  );
};

export default Dashboard;
