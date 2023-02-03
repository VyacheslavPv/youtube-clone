import React from 'react';
import { SearchItem } from '../types';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

interface VideoCardProps {
  video: SearchItem;
}

const VideoCard: React.FC<VideoCardProps> = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width: { md: '320px', sm: '356px', xs: '100%' },
        boxShadow: 'none',
        borderRadius: 0,
      }}>
      <Link to={videoId ? `/video/${videoId}` : 'demoVideoUrl'}>
        <CardMedia
          image={snippet?.thumbnails?.default.url}
          sx={{ width: { xs: '100%', sm: '358px' }, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
        <Link to={videoId ? `/video/${videoId}` : 'demoVideoUrl'}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet.channelId
              ? `/channel/${snippet.channelId}`
              : 'demoChannelUrl'
          }>
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet?.channelTitle.slice(0, 60)}
            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
