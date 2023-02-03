import { Stack, Box } from '@mui/material';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';
import { SearchItem } from '../types';

interface SearchItemsProps {
  videos: SearchItem[];
}

const SearchItems: React.FC<SearchItemsProps> = ({ videos }) => {
  console.log(videos);
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, index) =>
        item.id.videoId ? (
          <Box key={index}>
            <VideoCard video={item} />
          </Box>
        ) : item.id.channelId ? (
          <Box key={index}>
            <ChannelCard channelDetail={item} />
          </Box>
        ) : null
      )}
    </Stack>
  );
};

export default SearchItems;
