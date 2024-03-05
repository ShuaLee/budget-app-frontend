import { Box } from "@chakra-ui/react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <Box bg="gray.100" width="100%" minHeight="100vh" overflowX="hidden">
      <Dashboard />
    </Box>
  );
}

export default App;
