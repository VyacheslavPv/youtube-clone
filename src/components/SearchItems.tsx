import { Stack, Box } from '@mui/material';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';
import { SearchItem } from '../types';

interface SearchItemsProps {
  videos: SearchItem[];
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
}

const SearchItems: React.FC<SearchItemsProps> = ({ videos, direction }) => {
  console.log(videos);
  if (!videos?.length) return <div>Loader</div>;
  return (
    <Stack
      direction={direction || 'row'}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}>
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
