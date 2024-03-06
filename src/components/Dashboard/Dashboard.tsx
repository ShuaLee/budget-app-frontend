import React from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import Graph from "../Graph/Graph";
import NetWorthTile from "../NetWorthTile/NetWorthTile";
import QuickTile from "../QuickTile/QuickTile";
import PeriodSelector from "../Graph/PeriodSelector";
import QuickTileStack from "../QuickTile/QuickTileStack";

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
        <Box position="relative" height="100%">
          <NetWorthTile />
          <Graph />
          <PeriodSelector />
          <QuickTileStack />
        </Box>
      </GridItem>
      <GridItem area="footer">footer</GridItem>
    </Grid>
  );
};

export default Dashboard;
