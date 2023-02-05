/** @jsxImportSource @emotion/react */
import { CheckCircle } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { Link, useParams } from 'react-router-dom';
import { IVideoDetail } from '../types';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import SearchItems from './SearchItems';

import { css } from '@emotion/react/macro';

function VideoDetail() {
  const [videoDetail, setVideoDetail] = useState<IVideoDetail | null>(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return <div>Loader</div>;

  const {
    snippet: { title, channelTitle, channelId },
    statistics: { viewCount, likeCount },
  } = videoDetail!;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box
            sx={{
              width: '100%',
              top: '86px',
            }}>
            <Box
              sx={{
                position: 'relative',
                paddingTop: '56.25%',
              }}>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                css={css({ position: 'absolute', top: 0, left: 0 })}
                controls
                width="100%"
                height="100%"
              />
            </Box>

            {videoDetail && (
              <>
                <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
                  {title}
                </Typography>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  sx={{ color: '#fff' }}
                  py={1}
                  px={2}>
                  <Link to={`/channel/${channelId}`}>
                    <Typography variant="subtitle1" color="#fff">
                      {channelTitle}
                      <CheckCircle
                        sx={{ fontSize: 12, color: 'gray', ml: '5px' }}
                      />
                    </Typography>
                  </Link>
                  <Stack direction="row" gap="20px" alignItems="center">
                    <Typography variant="body1" sx={{ opacity: 0.7 }}>
                      {parseInt(viewCount).toLocaleString()} views
                    </Typography>
                    <Typography variant="body1" sx={{ opacity: 0.7 }}>
                      {parseInt(likeCount).toLocaleString()} likes
                    </Typography>
                  </Stack>
                </Stack>
              </>
            )}
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center">
          <SearchItems videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
}

export default VideoDetail;
