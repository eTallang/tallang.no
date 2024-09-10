export interface Thumbnail {
  height: number;
  width: number;
  url: string;
}

export interface Thumbnails {
  default: Thumbnail;
  high: Thumbnail;
  maxres: Thumbnail;
  medium: Thumbnail;
  standard: Thumbnail;
}

export interface Video {
  channelId: string;
  channelTitle: string;
  description: string;
  playlistId: string;
  position: number;
  publishedAt: string;
  resourceId: {
    kind: string;
    videoId: string;
  };
  thumbnails: Thumbnails;
  title: string;
  videoOwnerChannelId: string;
  videoOwnerChannelTitle: string;
}
