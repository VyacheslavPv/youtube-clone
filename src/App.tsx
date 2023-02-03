import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Feed from './components/Feed';

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#0f0f0f' }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        {/* <Route path="/video/:id" element={<VideoDetail />} /> */}
        {/* <Route path="/channel/:id" element={<ChannelDetail />} /> */}
        {/* <Route path="/search/:searchTerm" element={<SearchFeed />} /> */}
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
