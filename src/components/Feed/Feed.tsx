import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Sidebar from '../SideBar/Sidebar';

const Feed = () => {
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
    </Stack>
  );
};

export default Feed;
