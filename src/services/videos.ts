import axios from 'axios';

import { Video } from '@/types';

export const videoService = {
  getVideos(): Promise<Video[]> {
    return axios
      .get('https://www.googleapis.com/youtube/v3/playlistItems', {
        params: {
          part: 'snippet',
          maxResults: 50,
          playlistId: 'PL07MHRVZW5f4sH3NLOurpd5F7uOv73Lev',
          key: 'AIzaSyDE_GdgiIqmYy4oMRO6uLilXaQeDhAezVI',
        },
      })
      .then((res) => res.data.items.map((item: any) => item.snippet))
      .then((videos: Video[]) =>
        videos.filter((video) => video.title !== 'Private video')
      );
  },
};
