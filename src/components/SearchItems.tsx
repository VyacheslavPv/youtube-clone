import { Stack, Box } from '@mui/material';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

interface SearchItemsProps {
  videos: { id: { videoId?: string; channelId?: string } }[];
}

const SearchItems: React.FC<SearchItemsProps> = ({ videos }) => {
  console.log(videos);
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}

          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default SearchItems;
