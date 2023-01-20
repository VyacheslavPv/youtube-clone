import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Sidebar from '../SideBar/Sidebar';
import Videos from '../Videos';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');

  return (
    <Stack sx={{ flexDirection: { sm: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: '92vh',

          borderRight: '1px solid #3d3d3d',
          px: { sm: 0, md: 2 },
        }}>
        <Sidebar />
      </Box>
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: 'white' }}>
          {selectedCategory} <span style={{ color: '#FC1503' }}>videos</span>
        </Typography>

        <Videos videos={[]} />
      </Box>
    </Stack>
  );
};

export default Feed;
