import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import SearchItems from './SearchItems';
import ChannelCard from './ChannelCard';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import styled from '@emotion/styled/macro';

const Banner = styled.div({
  backgroundColor: 'lightGreen',
  height: '300px',
  zIndex: 10,
});

type Props = {};

const ChannelDetail = (props: Props) => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  console.log(channelDetail, videos);

  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <Banner />
        {channelDetail ? (
          <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
        ) : (
          <div>Skeleton</div>
        )}
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: '100px' } }} />
        <SearchItems videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
