import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Feed from "./components/Feed/Feed";

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#0f0f0f" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
