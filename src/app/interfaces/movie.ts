export interface Thumbnail {
    height: number;
    width: number;
    url: string;
};

export interface Thumbnails {
    default: Thumbnail;
    high: Thumbnail;
    maxres: Thumbnail;
    medium: Thumbnail;
    standard: Thumbnail;
};

export interface Movie {
    description: string;
    publishedAt: string;
    title: string;
    channelId: string;
    channelTitle: string;
    position: number;
    resourceId: {
        kind: string;
        videoId: string;
    };
    thumbnails: Thumbnails;
};
