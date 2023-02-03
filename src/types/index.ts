export interface SearchItem {
  id: { videoId?: string; channelId?: string };
  snippet: {
    title: string;
    channelId: string;
    channelTitle: string;
    thumbnails: { high: { url: string }; default: { url: string } };
  };
  statistics: { subscriberCount: string };
}
