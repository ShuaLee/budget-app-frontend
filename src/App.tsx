import { Box } from "@chakra-ui/react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Box bg="gray.100" width="100%" minHeight="100vh" overflowX="hidden">
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Box>
  );
}

export default App;
